import React, { useState } from 'react';

const StateComponent = props => {
    const [state, setState] = useState({
        clickCount: 0,
        clickinfo: []
        
    })
    const clickHandler = e =>{
        console.log(state.clickinfo)
        const array = state.clickinfo;
        // array.push(state.clickCount);
        setState({
            clickCount: state.clickCount +1,
            clickinfo: array.concat(state.clickCount)
        })
    }
    return(
        <div>
            <button onClick={clickHandler}>You have clicked the button {state.clickCount} times. Info: {state.clickinfo}</button>
        </div>
    )
}

export default StateComponent;