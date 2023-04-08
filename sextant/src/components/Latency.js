import React, { useState, useEffect } from 'react';

const LatencyComponent = () => {

    const [latency, setLatency] = useState(null);

    useEffect(() => {
        // Create a new WebSocket connection to the server.
        const socket = new WebSocket('ws://localhost:55455');

        // When the connection is open, parse the timestamp from the server.
        socket.onmessage = (event) => {

            // Parse the timestamp from the server.
            const packetTimestamp = parseInt(event.data);

            // Get the current timestamp.
            const currentTimestamp = Date.now();

            // Calculate the latency by subtracting the packet timestamp from the current timestamp.
            const currentLatency = currentTimestamp - packetTimestamp;

            // Update the state with the new latency.
            // This will cause the component to re-render.
            setLatency(currentLatency);
        };
    }, []);


    return (
        <div>
            <h3>Packet Latency: {latency} ms</h3>
        </div>
    );
};

export default LatencyComponent;