import { useMemo, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
//add the css sheet for it to work

const token = process.env.REACT_APP_MAPBOXTOKEN;
function MapBox({ listings }) {

	const pin = useMemo(
		() =>
			listings.map((l, i) => (
				<Marker
					key={i}
					longitude={l.longitude}
					latitude={l.latitude}
					anchor="bottom" >
				</Marker>
			)),
		[]
	);

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
				{pin}
			</Map>
		</div>

	);

}
export default MapBox;