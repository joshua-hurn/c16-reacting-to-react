import React, { useState, useEffect } from 'react';
import Greeter from "./components/Greeter";

const App = () => {
    const [username, setUsername] = useState(""); // ["", function() {}]
    const [loaded, setLoaded] = useState(false);
    console.log(username) // "";

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    }, []); // runs on component mount and only once

    const handleUsernameChange = e => setUsername(e.target.value);

    if (loaded) {
        return (
            <>
                <h1>stuff</h1>
                <h2>fsdfsdf</h2>
                <Greeter name="Josh" phrase="Hello there," />
                <Greeter name={username} phrase="You're lagging, " />

                <input type="text" value={username} onChange={handleUsernameChange} />

                <p>You're logging in as {username}</p>
            </>
        )
    } else {
        return (
            <>
                <h1>Website loading...</h1>
                <button onClick={() => setLoaded(true)}>Load Website!</button>
            </>
        )
    }
}

export default App