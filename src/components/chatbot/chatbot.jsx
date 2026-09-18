import { useState } from "react";
import "./chatbot.css";
function getBotResponse(message) {
  const question = message.toLowerCase();

  if (
    question.includes("skill") ||
    question.includes("technology") ||
    question.includes("technologies")
  ) {
    return "Veerendra has experience with Core Java, Spring Boot, Spring Data JPA, Hibernate, REST APIs, MySQL, SQL, React.js, HTML, CSS and JavaScript.";
  }

  if (
    question.includes("project") ||
    question.includes("projects")
  ) {
    return "Veerendra has worked on a Student Management System, Book Management System and a Secure Electronic Payment System for E-Commerce.";
  }

  if (
    question.includes("education") ||
    question.includes("college") ||
    question.includes("degree")
  ) {
    return "Veerendra is pursuing B.Tech in Computer Science and Engineering at Newton Institute of Science & Technology, Macherla.";
  }

  if (
    question.includes("internship") ||
    question.includes("internships")
  ) {
    return "Veerendra has experience through internships in Java Full Stack Development, Web Development and MERN Stack development.";
  }

  if (
    question.includes("github")
  ) {
    return "You can find Veerendra's projects on GitHub through the GitHub link available on his portfolio.";
  }

  if (
    question.includes("linkedin")
  ) {
    return "You can connect with Veerendra through his LinkedIn profile available on the portfolio.";
  }

  if (
    question.includes("contact") ||
    question.includes("email") ||
    question.includes("phone")
  ) {
    return "You can contact Veerendra through the Contact page of this portfolio.";
  }

  return "I'm currently designed to answer questions about Veerendra's portfolio, skills, projects, education and internships.";
}
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm Veerendra's portfolio assistant. Ask me about his skills, projects, education, internships or experience."
    }
  ]);

  const handleSend = (e) => {
  e.preventDefault();

  if (message.trim() === "") {
    return;
  }

  const userMessage = {
    sender: "user",
    text: message
  };

  const botMessage = {
    sender: "bot",
    text: getBotResponse(message)
  };

  setMessages((previousMessages) => [
    ...previousMessages,
    userMessage,
    botMessage
  ]);

  setMessage("");
};

  return (
    <div className="chatbot">

      {isOpen && (
        <div className="chatbot-window">

          <div className="chatbot-header">

            <div>
              <h3>Veerendra AI</h3>
              <span>Portfolio Assistant</span>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

          </div>


          <div className="chatbot-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }
              >
                {msg.text}
              </div>
            ))}

          </div>


          <form
            className="chatbot-input-area"
            onSubmit={handleSend}
          >

            <input
              type="text"
              placeholder="Ask me something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">
              ➤
            </button>

          </form>

        </div>
      )}


      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        🤖
      </button>

    </div>
  );
}

export default Chatbot;