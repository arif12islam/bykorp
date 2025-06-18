// client/src/components/Chatbot.js - FINAL with scroll-to-top feature
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { HiChatBubbleOvalLeftEllipsis, HiXMark, HiPaperAirplane, HiOutlineTrash, HiOutlineChevronDown } from "react-icons/hi2";


const BotAvatar = () => ( <div className="avatar bot-avatar"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 7.5V16.5M12.5 10.5V16.5M8.5 13.5V16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>);
const commonQuestions = [ "What services does bykorp offer?", "How can AI help my business?", "Show me a project example." ];

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const initialWelcomeMessage = { text: "Hi! I'm byChat, bykorp's AI expert. How can I help you today?", sender: 'bot' };
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [isFabExpanded, setIsFabExpanded] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  
  useEffect(() => {
    if (isOpen && !isMinimized) {
        if(messages.length === 0) {
            setMessages([initialWelcomeMessage]);
        }
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized, messages.length]);

  useEffect(() => {
    const handleScroll = () => {
      // --- THIS IS THE KEY LOGIC CHANGE ---
      // If user has scrolled down, collapse the button.
      // If they are back at the top, expand it.
      if (window.scrollY > 50) {
        setIsFabExpanded(false);
      } else {
        setIsFabExpanded(true);
      }
      // ------------------------------------
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startNewChat = () => {
    setMessages([initialWelcomeMessage]);
    setConversationStarted(false);
  };

  const handleSendMessage = async (promptToSend) => {
    if (!promptToSend.trim() || isLoading) return;
    setConversationStarted(true);
    const userMessage = { text: promptToSend, sender: 'user' };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setIsLoading(true);
    try {
      const history = currentMessages
        .filter(msg => !(msg.sender === 'bot' && msg.text.startsWith("Hi! I'm byChat")))
        .map(msg => ({ role: msg.sender === 'user' ? 'user' : 'model', parts: [{ text: msg.text }] }));
      
      setMessages(prev => [...prev, { text: '', sender: 'bot' }]);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/chat`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ history: history.slice(0, -1), prompt: promptToSend }) });
      if (!response.body) throw new Error("No response body.");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        botResponse += chunk;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          const updatedLastMessage = { ...lastMessage, text: botResponse };
          return [...prev.slice(0, -1), updatedLastMessage];
        });
      }
    } catch (error) {
      console.error("Streaming Error:", error);
      const errorMessage = { text: "My apologies, I'm having trouble connecting. Please try again soon.", sender: 'bot' };
      setMessages(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => { e.preventDefault(); handleSendMessage(userInput); setUserInput(''); };

  return ReactDOM.createPortal(
    <div className="bychat-app-container">
      <div className={`chat-window-final ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
        <div className="chat-header-final">
          <BotAvatar />
          <div className="header-text"><h3>byChat</h3><p>bykorp AI expert</p></div>
          <div className="header-icons">
            <button onClick={() => setIsMinimized(!isMinimized)} aria-label="Minimize Chat"><HiOutlineChevronDown /></button>
            <button onClick={startNewChat} aria-label="New Chat"><HiOutlineTrash /></button>
            <button onClick={() => setIsOpen(false)} aria-label="Close Chat"><HiXMark /></button>
          </div>
        </div>
        <div className="chat-messages-final">
          {messages.map((msg, index) => <div key={index} className={`message-bubble-final ${msg.sender}`}>{msg.text}</div>)}
          {isLoading && <div className="message-bubble-final bot typing-indicator-final"></div>}
          <div ref={messagesEndRef} />
        </div>
        {!conversationStarted && ( <div className="common-questions"> <p>Common questions are:</p> {commonQuestions.map((q, i) => <button key={i} onClick={() => handleSendMessage(q)}>{q}</button>)} </div> )}
        <div className="chat-input-area-final">
          <form onSubmit={handleFormSubmit}><input ref={inputRef} type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Tell us how we can help..." disabled={isLoading} /><button type="submit" disabled={isLoading} aria-label="Send Message"><HiPaperAirplane /></button></form>
          <p className="disclaimer">AI may produce inaccurate information.</p>
        </div>
      </div>
      <button className={`chat-fab-final ${isOpen ? 'hidden' : ''} ${isFabExpanded ? 'expanded' : ''}`} onClick={() => { setIsOpen(true); setIsMinimized(false); }} aria-label="Open Chat">
        <div className="fab-content"><div className="fab-icon-container"><HiChatBubbleOvalLeftEllipsis /></div><span className="fab-text">Chat with byChat!</span></div>
      </button>
    </div>,
    document.getElementById('bychat-portal')
  );
}

export default Chatbot;