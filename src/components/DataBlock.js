import React from 'react'
import DataEntry from './DataEntry'

export default function DataBlock({data}) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Super Name</th>
                        <th>Secret Identity</th>
                        <th>Super Power</th>
                        <th>Super Weakness</th>
                    </tr>
                    {data.map(entry => {
                        return <DataEntry entry={entry}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}