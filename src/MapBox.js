import { useMemo } from 'react';
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useNavigate } from "react-router-dom";

const token = process.env.REACT_APP_MAPBOXTOKEN;
function MapBox({ listings }) {
	const navigate = useNavigate();

	function navigateToListing(listing) {
		navigate(`/listings/${listing.id}`)
	}

	const pins = listings.map((l, i) => (
		<Marker
			key={i}
			longitude={l.longitude}
			latitude={l.latitude}
			anchor="bottom"
			onClick={() => navigateToListing(l)}
		></Marker>))

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
				style={{ width: "100vw", height: "95vh" }}
				mapStyle="mapbox://styles/mapbox/navigation-night-v1"
			>
				{pins}
				<FullscreenControl />
				<GeolocateControl />
				<NavigationControl />
			</Map>
		</div>

	);

}
export default MapBox;