export default function DataEntry({entry}) {
    return (
        <tr key={entry.key}>
            <td>{entry.name}</td>
            <td>{entry.secret_identity}</td>
            <td>{entry.power}</td>
            <td>{entry.weakness}</td>
        </tr>
    )
}