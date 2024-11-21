import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>React Frontend</h1>
            <p>Backend Message: {message}</p>
        </div>
    );
}

export default App;
