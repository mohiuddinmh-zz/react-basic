import React, {useState, useEffect} from 'react'

const FunctionClick = () => {
    const onButtonClick = () => {
        console.log("Button Clicked");
    }

    const fetchItems = async () => {
        // const data = fetch();
    }

    return (
        <div>
            <button onClick={onButtonClick}>Click Me</button>
        </div>
    );
}

export default FunctionClick;