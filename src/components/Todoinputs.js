import React, { useState } from 'react'

const Todoinputs = (props) => {
    const [inputText, setInputText] = useState();
    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("")
        }

    }
    return (
        <div>
            <input type='text' value={inputText} onChange={e => {
                setInputText(e.target.value)
            }}
                onKeyDown={handleEnterPress}
            ></input>
            <button className='en' onClick={() => {
                props.addList(inputText)
                setInputText("")
            }}>+</button>

        </div>
    )
}

export default Todoinputs