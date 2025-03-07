import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const sendMessage = async () => {
        const res = await axios.post("https://contoso-chatbotaiautomation-backend.azurewebsites.net/chat", { message: input });
        setResponse(res.data.response);
    };

    return (
        <div>
            <h1>Contoso AI Chatbot</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
}

export default Chatbot;
