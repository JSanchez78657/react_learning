import {useEffect, useState} from "react";

export default function Child(props) {
    const [holdVal, setHoldVal] = useState('Parent Text')
    const [testVal, setTestVal] = useState({name: 'Thing', value: 5})
    useEffect(() => { setHoldVal(props.parentValue) }, [props.parentValue])

    function incTest() {
        setTestVal({name: 'Thing', value: 15})
    }

    return (
        <div style={{display:props.display}}>
            Child
            <input name='Input field' type={'text'} onChange={ event => setHoldVal(event.target.value)} value={holdVal}/>
            <button name='Change Value Button' onClick={() => props.setParentValue(holdVal)}>Change Value</button>
            <button name='Toggle Button' onClick={() => props.toggleParentText()}>Toggle Text</button>
            <button onClick={() => props.toggleParentDisplay()}>Toggle Parent</button>
            <button onClick={() => incTest()}>Test Button</button>
            {testVal.name} {testVal.value}
        </div>
    )
}