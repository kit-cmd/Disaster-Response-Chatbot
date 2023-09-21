import img from "../assets/img/chatbot.png"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import {
    Fab
}
from "@mui/material";

interface ChatbotIconProps {
    setActive: () => void
}

export const ChatbotIcon = ({ setActive }:ChatbotIconProps) => {
    return (
        <Fab  onClick={setActive}>
            <ChatBubbleOutlineIcon />
        </Fab>
    );
}