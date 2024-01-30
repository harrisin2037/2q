import React, { useState, useEffect } from 'react'
import PeopleList from './components/PeopleList/PeopleList'
import MapView from './components/MapView/MapView'
import { fetchPeople } from './services/api'
import './App.css'

const App = () => {
    const [people, setPeople] = useState([])
    const [selectedPerson, setSelectedPerson] = useState(null)

    useEffect(() => {
        const getPeople = async () => {
            const peopleData = await fetchPeople()
            setPeople(peopleData)
        }

        getPeople()
    }, [])

    return (
        <div className="App">
            <PeopleList people={people} onPersonClick={setSelectedPerson} />
            <MapView person={selectedPerson} />
        </div>
    )
}

export default App
