import React, { useState, useEffect } from "react";

const PublicIpAddress = ({ type }) => {
    const [ipAddress, setIpAddress] = useState("");

    // React no longer recommends using classes for components,
    // so we use the useEffect hook to fetch the IP address insted of componentDidMount.
    useEffect(() => {
        const fetchIpAddress = async () => {

            // The API we use returns a different IP address depending on whether we use IPv4 or IPv6.
            const url = type === "v6" 
            ? "https://api64.ipify.org?format=json" 
            : "https://api.ipify.org?format=json";

            // We use the fetch API to make a GET request to the API.
            const response = await fetch(url);

            // We use the json() method to parse the response into JSON.
            const data = await response.json();

            // We use the setIpAddress method to update the state with the IP address.
            setIpAddress(data.ip);
        };

        // We call the fetchIpAddress function as soon as the component is "mounted".
        fetchIpAddress();

    }, [type]); // Pass the type variable as a dependency so that the hook is called as soon as the component is mounted.

    return (
        <div>
            <h2>Public IP Address ({type}):</h2>
            <p>{ipAddress}</p>
        </div>
    );
};

export default PublicIpAddress;