import React, { useEffect, useState } from "react";
import ShareBnBApi from "./api";
import { useParams } from "react-router-dom";
function ListingDetail() {
    const { id } = useParams();

    const [listing, setListing] = useState(null);

    useEffect(function loadCompaniesFromAPI() {
        async function fetchCompany() {
            const response = await ShareBnBApi.getListing(id);
            console.log("RESPONSE",response)
            setListing(response);
        }
        fetchCompany();
      }, []);

    if (!listing) return <i>Loading...</i>;


    return (
        <div>
            <li>
                {listing.street} {listing.zip} {listing.city} {listing.state} {listing.country}
            </li>
            <li>{listing.details}</li>
            <li>{listing.price_per_night}</li>
            <li>{listing.username}</li>
        </div >
    )
}

export default ListingDetail;
