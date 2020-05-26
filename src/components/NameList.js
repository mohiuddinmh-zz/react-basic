import React from 'react'

const NameList = () => {
    const names = ['Asma', 'Mohammed', 'Yousuf', 'Fatima'];
    return (
        <div>
            {names.map(name => <h1>{name}</h1>)}
        </div>
    );

}

export default NameList;