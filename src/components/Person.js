import React from 'react'

const Person = ({person}) => {
    return (
        <h1>I am {person.name} and I am {person.age} years old</h1>
    );
}

export default Person;