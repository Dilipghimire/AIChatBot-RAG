import { useState } from "react";
import "./chat-window.scss";
import { userRetrieveAnswer } from "../../hooks/use-retrieve-answer";

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  // const { videoId } = useParams<{ videoId: string }>();
  const [userQuestion, setUserQuestion] = useState("");
  const [isLoadingState, setIsLoadingState] = useState(false);

  // this is will be used later
  // const { data: videoTranscript } = useTranscript(videoId || "");
  const { mutateAsync } = userRetrieveAnswer();
  

  const handleSend = async () => {
    if (!userQuestion.trim()) return;

    //User Question
    setMessages((prev) => [...prev, { sender: "user", text: userQuestion }]);
    setIsLoadingState(true);
    setUserQuestion("");

    //AI Respond
    let aiReplyText = await mutateAsync({
      askQuestion: userQuestion,
    });
    setMessages((prev) => [...prev, { sender: "bot", text: aiReplyText }]);
    setIsLoadingState(false);
  };

  const getInitial = (sender: string) => (sender === "user" ? "U" : "A");

  return (
    <section className="chatbot-container">
      <div className="chat-header">Chatbot</div>
      <div className="chat-window">
        {!messages.length ? (
          <p className="chat-welcome-text">
            I am your virtual assistance! Ask me anything about this video{" "}
          </p>
        ) : null}
        {messages.map((msg, idx) => (
          <div key={idx} className={`message-row ${msg.sender}`}>
            <div className="avatar">{getInitial(msg.sender)}</div>
            <div className={`message-bubble ${msg.sender}`}>{msg.text}</div>
          </div>
        ))}
        {isLoadingState && (
          <div className="message-row bot">
            <div className="avatar">A</div>
            <div className="message-bubble bot">
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          value={userQuestion}
          placeholder="Type your message..."
          onChange={(e) => setUserQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </section>
  );
};

export default ChatWindow;
