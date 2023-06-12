import React, { useRef, useEffect, useState } from 'react';
import { cities } from "./cities";
import mapboxgl from 'mapbox-gl';

import './MapBox.css';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOXTOKEN

function MapBox({ listings }) {

    console.log(process.env.REACT_APP_MAPBOXTOKEN)

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [lng, lat],
            zoom: zoom
        });
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );

}

export default MapBox;

    // async function getLatLng(){
    //     const selectedCity = "Daly City"
    //     for(let city of cities){
    //         if(selectedCity === city.city){
    //             console.log(city.latitude)
    //             console.log(city.longitude)
    //         }
    //     }
    // }