import React, {useState} from 'react'
import Child from "./Child";
import axios from "axios";

export default function Parent() {

    const [textBoxValue, setTextBoxValue] = useState('')
    const [parentText, setParentText] = useState('Parent')
    const [textBoxHold, setTextBoxHold] = useState('')
    const [childrenDisplay, setChildrenDisplay] = useState('block')
    const [parentDisplay, setParentDisplay] = useState('block')
    const [quote, setQuote] = useState('')

    function getQuote() {
        axios.get('https://api.quotable.io/random')
            .then(res => {
                setQuote(res.data.content)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function toggleParentText() {
        if(parentText === 'Parent')
            setParentText('')
        else
            setParentText('Parent')
    }

    function toggleParentDisplay() {
        if(parentDisplay === 'block')
            setParentDisplay('none')
        else
            setParentDisplay('block')
    }

    return (
        <div>
            <span>
                {quote}
            </span>
            <span style={{display:parentDisplay}}>
                {parentText}
                <input type={'text'} value={textBoxHold} onChange={(e) => setTextBoxHold(e.target.value)}/>
                <button onClick={() => setTextBoxValue(textBoxHold)}>Change Value</button>
                <button onClick={() => setChildrenDisplay(childrenDisplay === 'block' ? 'none' : 'block')}>Toggle Child</button>
                <button onClick={() => getQuote()}>Random Quote</button>
            </span>
            <span>
                <Child toggleParentText={toggleParentText} parentValue={textBoxValue} setParentValue={setTextBoxHold} display={childrenDisplay} toggleParentDisplay={toggleParentDisplay}/>
            </span>
        </div>
    )
}