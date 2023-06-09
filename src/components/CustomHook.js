import useLocalStorage from "./useLocalStorage";

export default function App() {
    const [name, setName] = useLocalStorage('name', 'Jerry')

    return (
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    )
}