import React, {useState} from 'react'
import '../Parent.css'
import Child from "./Child";
import axios from "axios";

export default function Parent() {

    const [textBoxValue, setTextBoxValue] = useState('')
    const [parentText, setParentText] = useState('Parent')
    const [textBoxHold, setTextBoxHold] = useState('')
    const [childrenDisplay, setChildrenDisplay] = useState('block')
    const [parentDisplay, setParentDisplay] = useState('block')
    const baseURL = 'http://localhost:3002/promise'
    const data = { title: 'Foo', body: 'bar', userID: 1 }

    // async function getRequest() {
    function getRequest() {
        // let response = await axios.get(baseURL)
        axios.get(baseURL)
            .then(res => {
                console.log('Success: ')
                res.data.forEach(element => {
                    console.log(element)
                })
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }

    function postRequest() {
        axios.get(baseURL + '/post', () => {
            axios.post('posts', data)
        })
            .then(res => {
                console.log('Success: ' + JSON.stringify(res.data))
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }

    function putRequest() {
        axios.get(baseURL + '/put', () => {
            axios.put('posts', data)
        })
            .then(res => {
                console.log('Success: ' + JSON.stringify(res.data))
            })
            .catch(err => {
                console.log('Error: ' + err)
            })
    }
    function deleteRequest() {
        axios.get(baseURL + '/delete', () => {
            axios.delete('posts', data)
        })
            .then(res => {
                console.log('Success: ' + JSON.stringify(res.data))
            })
            .catch(err => {
                console.log('Error: ' + err)
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
        <div className={'Parent'}>
            <div style={{display:parentDisplay}}>
                {parentText + ' '}
                <input type={'text'} value={textBoxHold} onChange={(e) => setTextBoxHold(e.target.value)}/>
                <button onClick={() => setTextBoxValue(textBoxHold)}>Change Value</button>
                <button onClick={() => setChildrenDisplay(childrenDisplay === 'block' ? 'none' : 'block')}>Toggle Child</button>
                <br/>
                <button onClick={() => getRequest()}>Get Request</button>
                <button onClick={() => postRequest()}>Post Request</button>
                <button onClick={() => putRequest()}>Put Request</button>
                <button onClick={() => deleteRequest()}>Delete Request</button>
            </div>
            <span>
                <Child toggleParentText={toggleParentText} parentValue={textBoxValue} setParentValue={setTextBoxHold} display={childrenDisplay} toggleParentDisplay={toggleParentDisplay}/>
                <Child toggleParentText={toggleParentText} parentValue={textBoxValue} setParentValue={setTextBoxHold} display={childrenDisplay} toggleParentDisplay={toggleParentDisplay}/>
            </span>
        </div>
    )
}