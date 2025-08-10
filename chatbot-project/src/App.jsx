import { useState } from 'react'
import ChatInput from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'

function App() {
        const [chatMessages,setChatMessages] = useState(
          [
            { message: "Hey there! How Can I Help You?", sender: "robot", id: "1" },
          ]
        );

        return (
          <div className="app-container">
            <ChatMessages 
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }
export default App
