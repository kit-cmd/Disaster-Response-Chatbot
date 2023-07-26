import { useState, useEffect, useRef } from "react";

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

    const endpoint = process.env.REACT_APP_CHATBOT_ENDPOINT || "ws://localhost:8000/ws";
    const ws = useRef<WebSocket | null>(null);

    const handleStreamMessage = async (message: string) => {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            setChats((prevChats) => {
              const lastChat = prevChats[prevChats.length - 1];
              if (lastChat && !lastChat.isUser) {
                // If the last chat is from the bot, append the message
                lastChat.text += message;
                return [...prevChats];
              } else {
                // Otherwise, add a new chat for the stream message
                const newChat = { text: message, isUser: false };
                return [...prevChats, newChat];
              }
            });
            resolve();
          }, 1000);
        });
    };
      
    useEffect(() => {
        ws.current = new WebSocket(endpoint);
        ws.current.onopen = () => {
            console.log("ws opened");
        };
        ws.current.onclose = () => {
            console.log("ws closed");
        };
        ws.current.onerror = (err) => {
            console.log("ws error", err);
        };
        ws.current.onmessage = async (msg) => {
            console.log("ws message", msg);
            var data = JSON.parse(msg.data);
            if (data.sender === "bot") {
                if (data.message_type === "start") {
                    const newChat = { text: data.message, isUser: false }
                    setChats((prevChats) => [...prevChats, newChat]);
                }
                if (data.message_type === "stream") {
                    await handleStreamMessage(data.message);
                }
            }
        };
        return () => {
            ws.current?.close();
        };
    }, []);

    const handleInput = (e: any) => {
        setInput(e.target.value)
    }

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            ws.current?.send(input);
            const newChat = { ...chat, text: input, isUser: true }
            setChats((prevChats) => [...prevChats, newChat]);
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