import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landing-page.scss";
const LandingPage = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedValue) setError("please select a topic");
    if (selectedValue.trim() && selectedValue) {
      navigate(`/chat/${selectedValue}`);
    }
  };

  return (
    <div className="landing-container">
      <label className="dropdown-label" htmlFor="dropdown">
        Choose a topic below.
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="dropdown-select"
      >
        <option value="">-- Select an option --</option>
        <option value="h2FDq3agImI">About AI/ML</option>
        <option value="SRZ48WTHohw">Stock Markets</option>
        <option value="pjaN2WHAHVo">Galaxy and Space</option>
        <option value="iASc9-mc7kE">Intro About Switzerland</option>
      </select>
      <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
        submit
      </button>
      {error && <p className="error">{error}</p>}

      {/* <h1>Welcome to AI Assistant</h1>
      <p>Enter a YouTube video ID to start exploring with AI.</p>
      <form onSubmit={handleSubmit} className="landing-form">
        <input
          type="text"
          placeholder="Enter video ID"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
        />
        <button type="submit">Start</button>
      </form> */}
    </div>
  );
};

export default LandingPage;
