import React from 'react'
import DataEntry from './DataEntry'

export default function DataBlock({data}) {
    return (
        <div>
            {data.map(entry => {
                return <DataEntry entry={entry}/>
            })}
        </div>
    )
}