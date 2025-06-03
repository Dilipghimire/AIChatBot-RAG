import ChatWindow from "../components/layout/ChatWindow";
import YouTubeIframe from "../components/layout/YouTubeIframe";
import { useNavigate } from "react-router-dom";

import "./chat.scss";

const Chat: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToLanding = () => {
    sessionStorage.removeItem("videoId");
    navigate("/landing");
  };

  return (
    <>
      <div className="btn-container">
        <button className="animated-button" onClick={handleGoToLanding}>
          Load a new video
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}
        >
          logout
        </button>
      </div>
      <div className="home-container">
        <ChatWindow />
        <YouTubeIframe />
      </div>
    </>
  );
};

export default Chat;
