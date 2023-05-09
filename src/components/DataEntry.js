export default function DataEntry({entry}) {
    return (
        <div>
            <span>{entry.name}, aka {entry.secret_identity}. They have the power of {entry.power}. They can only be stopped by {entry.weakness}</span>
        </div>
    )
}