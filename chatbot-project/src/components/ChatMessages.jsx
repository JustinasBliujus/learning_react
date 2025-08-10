import ChatMessage from './ChatMessage.jsx'
import { useRef, useEffect } from 'react'
import './ChatMessages.css'

     function ChatMessages({
        chatMessages}) {
          const chatMessagesRef = useRef(null);
          useEffect(() => {
            const containerElem = chatMessagesRef.current;
            if (containerElem){
              containerElem.scrollTop = containerElem.scrollHeight;
            }
          }, [chatMessages]);
      return (
        <div 
          className="chat-messages-container"
          ref={chatMessagesRef}
        >
          {chatMessages.map((chatMessage) => (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          ))}
          </div>
      );
    }
    export default ChatMessages;