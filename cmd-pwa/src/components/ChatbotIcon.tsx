import img from "../assets/img/chatbot.png"

interface ChatbotIconProps {
    setActive: () => void
}

export const ChatbotIcon = ({ setActive }:ChatbotIconProps) => {
    return (
        <section className="chatbot-icon" onClick={setActive}>
            <div className="chatbot-icon__container">
                <img src={img} alt="chatbot" />
            </div>
        </section>
    );
}