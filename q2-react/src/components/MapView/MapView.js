import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapView.css'

const checkCoordinates = (person) => {
    return !(person.location.latitude === null || person.location.longitude === null)
}

const MapView = ({ person }) => {
    useEffect(() => {
        if (person) {

            const coordinatesValid = checkCoordinates(person)

            if (coordinatesValid) {


                const { latitude, longitude } = person.location

                const lat = Number(latitude)
                const lng = Number(longitude)

                const map = L.map('map').setView([lat, lng], 13)

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: 'contributor',
                }).addTo(map)

                L.marker([lat, lng]).addTo(map)

                return () => {
                    map.remove()
                }
            }
        }
    }, [person])

    return <div id="map" style={{ height: '400px', width: '100%' }} />
}

export default MapView