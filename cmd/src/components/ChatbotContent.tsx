import { useState, useEffect } from "react";

interface ChatbotContentProps {
    setInActive: () => void
}

type chat = {
    text: string,
    isUser: boolean
};

export const ChatbotContent = ({ setInActive }: ChatbotContentProps) => {

    const [chats, setChats] = useState<chat[]>([])
    const [input, setInput] = useState("")

    const chat = {
        text: "",
        isUser: false
    }

    const handleInput = (e: any) => {
        setInput(e.target.value)
    }

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            const newChat = { ...chat, text: input, isUser: true }
            setChats([...chats, newChat])
            setInput("")
        }
    }

    return (
        <section className="chatbot-content">
            <div className="chatbot-header">
                <h1>Chatbot</h1>
                <button className="chatbot-header__close" onClick={setInActive}>X</button>
            </div>

            <div className="chatbot-body">
                <div className="chatbot-body__container">
                    {
                        chats.map((chat, index) => {
                            return (
                                <div key={index} className={chat.isUser ? "chatbot-body__container__user" : "chatbot-body__container__chatbot"}>
                                    <p>{chat.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="chatbot-input">
                <input type="text" placeholder="Type your message..." value={input} onChange={handleInput} onKeyPress={handleKeyPress} />
                <button>Send</button>
            </div>
        </section>
    )
}