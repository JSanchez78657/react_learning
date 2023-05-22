import {useEffect, useState, useReducer} from "react";
import '../Child.css'

function reducer(state) {
    return { ...state, value: state.value + 1}
}

function initializer() {
    return {
        name: 'Thing',
        value: 5
    }
}

export default function Child(props) {
    const [holdVal, setHoldVal] = useState('Parent Text')
    const [testVal, dispatch] = useReducer(reducer, 2, initializer)
    useEffect(() => { setHoldVal(props.parentValue) }, [props.parentValue])

    return (
        <div className={'Child'} style={{display:props.display}}>
            <label>Child </label>
            <input name='Input field' type={'text'} onChange={ event => setHoldVal(event.target.value)} value={holdVal}/>
            <button name='Change Value Button' onClick={() => props.setParentValue(holdVal)}>Change Value</button>
            <br/>
            <br/>
            <button onClick={() => props.toggleParentDisplay()}>Toggle Parent</button>
            <button name='Toggle Button' onClick={() => props.toggleParentText()}>Toggle Text</button>
            <br/>
            <br/>
            <label>
                {testVal.name} {testVal.value}
                <button onClick={() => dispatch()}>Test Button</button>
            </label>
        </div>
    )
}