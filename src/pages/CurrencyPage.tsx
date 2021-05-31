import React from 'react'
import CurrenciesTable from '../components/CurrenciesTable'
import currecnyNames from '../currencyPairs.json'
import useWS from '../hooks/useWS';




export default function CurrencyPage() {

    const currencies = useWS(currecnyNames)

    return (
        <CurrenciesTable currencies={currencies} />
    )
}
