import React from 'react'
import './PeopleList.css'

const PeopleList = ({ people, onPersonClick }) => {
    return (
        <div id="people-list">
            {people.map(person => (
                <div
                    key={person.email}
                    className="person-entry"
                    onClick={() => onPersonClick(person)}
                >
                    <img
                        src={person.picture}
                        alt={`${person.name.first} ${person.name.last}`}
                        className="person-image"
                    />
                    <div className="person-name">
                        {person.name.first} {person.name.last}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PeopleList