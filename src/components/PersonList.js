import React from 'react'
import Person from './Person';

const PersonList = () => {
    const persons = [
        {
            id: 1, name: 'Mohammed', age: 37
        },
        {
            id: 2, name: 'Asma', age: 37
        },
        {
            id: 3, name: 'Yousuf', age: 9
        },
        {
            id: 4, name: 'Fatima', age: 8
        }
    ];
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>);

    return (
        <div>
            {personList}
        </div>
    );
}

export default PersonList;