import React from 'react'

const ChildComponent = (props) => {
return (
    <div>
        <button onClick={() => props.greetHandler('ChildComponent')}>Click Me</button>
    </div>
);
}

export default ChildComponent;