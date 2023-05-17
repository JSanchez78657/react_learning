import React, {useState} from 'react'
import Child from "./Child";

export default function Parent() {

    const [textBoxValue, setTextBoxValue] = useState('')
    const [parentText, setParentText] = useState('Parent')
    const [textBoxHold, setTextBoxHold] = useState('')
    const [childrenDisplay, setChildrenDisplay] = useState('block')
    const [parentDisplay, setParentDisplay] = useState('block')

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
            <span style={{display:parentDisplay}}>
                {parentText}
                <input type={'text'} value={textBoxHold} onChange={(e) => setTextBoxHold(e.target.value)}/>
                <button onClick={() => setTextBoxValue(textBoxHold)}>Submit</button>
                <button onClick={() => setChildrenDisplay(childrenDisplay === 'block' ? 'none' : 'block')}>Toggle</button>
            </span>
            <span>
                <Child toggleParentText={toggleParentText} parentValue={textBoxValue} setParentValue={setTextBoxHold} display={childrenDisplay} toggleParentDisplay={toggleParentDisplay}/>
            </span>
        </div>
    )
}