import React, {useEffect, useState} from 'react'
import './Database.css';
import DataBlock from "./components/DataBlock";

export default function DataBase() {
    const [list, setList] = useState([])

    const [current, setCurrent] = useState({
        key: 0,
        name: '',
        secret_identity: '',
        power: '',
        weakness: ''
    })

    const changeHandler = e => setCurrent(prevState => ({
        ...prevState, [e.target.name]: e.target.value
    }))

    function saveHero() {
        console.log(current)
        const prevList = list
        prevList.push(current)
        setList(prevList)
        setCurrent({
            key: list.length,
            name: '',
            secret_identity: '',
            power: '',
            weakness: ''
        })
    }

    const [tableState, setTableState] = useState(false)

    useEffect(() => {
        console.log(list.length)
        setTableState(list.length > 0)
    }, [list])

    const [buttonState, setButtonState] = useState(false)

    useEffect(() => {
        setButtonState(
            current.name.length > 0 &&
            current.secret_identity.length > 0 &&
            current.power.length > 0 &&
            current.weakness.length > 0)
    }, [current])

    console.log(tableState)

    return (
        <div className={'App'}>
            <header className={'App-header-dark'}>
                <label htmlFor={'name'}>
                    Superhero Title:&nbsp;
                    <input id={'name'} name={'name'} type={'text'} onChange={changeHandler}/>
                </label>
                <label htmlFor={'secret_identity'}>
                    Secret Identity:&nbsp;
                    <input id={'secret_identity'} name={'secret_identity'} type={'password'} onChange={changeHandler}/>
                </label>
                {/*<label>*/}
                {/*    Secret Identity Type:&nbsp;*/}
                {/*    <label htmlFor={'private_identity'}>*/}
                {/*        Private*/}
                {/*        <input id={'private_identity'} name={'identity_radio_buttons'} type={'radio'} onChange={changeHandler}/>*/}
                {/*        &nbsp;*/}
                {/*    </label>*/}
                {/*    <label htmlFor={'public_identity'}>*/}
                {/*        Public*/}
                {/*        <input id={'public_identity'} name={'identity_radio_buttons'} type={'radio'} onChange={changeHandler}/>*/}
                {/*    </label>*/}
                {/*</label>*/}
                <label htmlFor={'power'}>
                    Superhero Power:&nbsp;
                    <input id={'power'} name={'power'} type={'text'} onChange={changeHandler}/>
                </label>
                <label htmlFor={'weakness'}>
                    Superhero Weakness:&nbsp;
                    <input id={'weakness'} name={'weakness'} type={'text'} onChange={changeHandler}/>
                </label>
                <button disabled={!buttonState} onClick={saveHero}>Submit</button>
                <DataBlock data={list} tableState={tableState}/>
            </header>
        </div>
    )
}