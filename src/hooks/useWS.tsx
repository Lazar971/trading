import { useEffect, useState } from "react";
import { CurrencyPair } from "../types";


export default function useWS(currNames: string[]) {
    const [curr, setCurr] = useState<CurrencyPair[]>([]);

    useEffect(() => {
        const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
        const channelMap = new Map<number, string>();
        ws.onopen = function (event) {
            currNames.forEach(element => {
                this.send(JSON.stringify({
                    event: 'subscribe',
                    channel: 'ticker',
                    symbol: `t${element}`
                }))
            });
        }
        ws.onmessage = msg => {

            const data = JSON.parse(msg.data);
            //    console.log(data);
            if (data.event) {
                if (data.event === 'subscribed') {

                    channelMap.set(data.chanId, data.symbol);
                }
            }
            if (data.length === 2 && data[1].length === 10) {

                const chId = data[0];

                const symbol = channelMap.get(chId)?.substring(1);
                if (!symbol) {
                    return;
                }
                setCurr(prev => {
                    if (!prev.find(element => element.symbol === symbol)) {

                        return [...prev, createCurrencyPair(symbol, data[1])];
                    }

                    return prev.map(element => {
                        if (element.symbol === symbol) {
                            return createCurrencyPair(symbol, data[1])
                        }
                        return element;
                    });
                })
            }
        }

        return () => {
            channelMap.forEach((value, key) => {
                ws.send(JSON.stringify({
                    event: "unsubscribe",
                    chanId: key
                }))
            });
            ws.close();
        }
    }, [currNames]);

    return curr;
}

function createCurrencyPair(symbol: string, args: number[]): CurrencyPair {
    return {
        symbol,
        dailyChange: args[5] * 100,
        lastPrice: args[6],
        volume: args[7]
    }
}