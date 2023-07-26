import { useState } from "react"

import { ChatbotIcon } from "./ChatbotIcon"
import { ChatbotContent } from "./ChatbotContent"

import "../styles/chatbot.css"

export const Chatbot = () => {
    const [chatbot, setChatbot] = useState(false)

    const setChatbotActive = () => {
        setChatbot(true)
    }
    const setChatbotInactive = () => {
        setChatbot(false);
    }

    return (
        <section className={"chatbot " + (chatbot ? "chatbot-active" : "")} >
            {
                chatbot
                    ? <ChatbotContent setInActive={setChatbotInactive} />
                    : <ChatbotIcon setActive={setChatbotActive} />
            }
        </section>
    )
}
