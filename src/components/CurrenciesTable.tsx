
import React from 'react'
import { Table } from 'semantic-ui-react'
import { CurrencyPair } from '../types'

interface Props {
    currencies: CurrencyPair[],

}

export default function CurrenciesTable(props: Props) {
    return (
        <Table celled >
            <Table.Header >
                <Table.Row >
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>Symbol</Table.HeaderCell>
                    <Table.HeaderCell>Daily change</Table.HeaderCell>
                    <Table.HeaderCell>Volume</Table.HeaderCell>
                    <Table.HeaderCell>Last price</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.currencies.map((element, index) => {
                        return (
                            <Table.Row key={element.symbol}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{element.symbol}</Table.Cell>
                                <Table.Cell>{element.dailyChange.toFixed(2)}%</Table.Cell>
                                <Table.Cell>{element.volume.toFixed(2)}</Table.Cell>
                                <Table.Cell>{element.lastPrice.toFixed(2)}</Table.Cell>
                            </Table.Row>

                        )
                    })
                }
            </Table.Body>
        </Table>
    )
}
