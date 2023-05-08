import React, {useEffect, useReducer, useRef, useState} from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { value: (state.value === 9) ? 0 : state.value + 1 }
        case ACTIONS.DECREMENT:
            return { value: (state.value === 0) ? 9 : state.value - 1 }
        case ACTIONS.RESET:
            return { value: 0 }
        default:
            return state
    }
}

function PasswordClicker() {

    const clickCount = useRef(0)

    const [state1, dispatch1] = useReducer(reducer, { value: 0 })
    const [state2, dispatch2] = useReducer(reducer, { value: 0 })
    const [state3, dispatch3] = useReducer(reducer, { value: 0 })
    const [state4, dispatch4] = useReducer(reducer, { value: 0 })

    function incCol1() { dispatch1({ type: ACTIONS.INCREMENT }) }
    function incCol2() { dispatch2({ type: ACTIONS.INCREMENT }) }
    function incCol3() { dispatch3({ type: ACTIONS.INCREMENT }) }
    function incCol4() { dispatch4({ type: ACTIONS.INCREMENT }) }
    function decCol1() { dispatch1({ type: ACTIONS.DECREMENT }) }
    function decCol2() { dispatch2({ type: ACTIONS.DECREMENT }) }
    function decCol3() { dispatch3({ type: ACTIONS.DECREMENT }) }
    function decCol4() { dispatch4({ type: ACTIONS.DECREMENT }) }

    useEffect(() => {
        if (clickCount.current >= 20) {
            console.log("You're just guessing!")
            return
        }
        clickCount.current = clickCount.current + 1
        if (state1.value === 1 && state2.value === 9 && state3.value === 3 && state4.value === 4) {
            console.log("Secret password found!")
            dispatch1({ type: ACTIONS.RESET })
            dispatch2({ type: ACTIONS.RESET })
            dispatch3({ type: ACTIONS.RESET })
            dispatch4({ type: ACTIONS.RESET })
            clickCount.current = 0
        }
    }, [state1.value, state2.value, state3.value, state4.value])


    return (
        <div>
            <span>
                <button onClick={incCol1}>+</button>
                <button onClick={incCol2}>+</button>
                <button onClick={incCol3}>+</button>
                <button onClick={incCol4}>+</button>
            </span>
            <br/>
            <span>
                {state1.value}{state2.value}{state3.value}{state4.value}
            </span>
            <br/>
            <span>
                <button onClick={decCol1}>-</button>
                <button onClick={decCol2}>-</button>
                <button onClick={decCol3}>-</button>
                <button onClick={decCol4}>-</button>
            </span>
        </div>
    )
}

export default PasswordClicker