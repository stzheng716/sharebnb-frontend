import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//add the css sheet for it to work

const token = process.env.REACT_APP_MAPBOXTOKEN;
function MapBox({ listings }) {

    // function showMarkers() {
    //     listings.map(l => {
    //         <Marker longitude={-122.4} latitude={37.8} anchor="bottom" >
    //             <img src="https://img.freepik.com/premium-vector/pin-point-icon-with-red-map-location-pointer-symbol-isolated-white-background_120819-234.jpg" />
    //         </Marker>

    //     })
    // }

    return (

        <div>
            <Map
                mapboxAccessToken={token}
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 10
                }}
                height="100%"
                style={{ width: "100vw", height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {//need to fix this 
                    listings.map(l => {
                        <Marker longitude={-122.4} latitude={37.8} anchor="bottom" >
                            <img src="https://img.freepik.com/premium-vector/pin-point-icon-with-red-map-location-pointer-symbol-isolated-white-background_120819-234.jpg" />
                        </Marker>

                    })
                }
            </Map>
        </div>

    );

}
export default MapBox;