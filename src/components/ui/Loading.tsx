import React from "react";
import "./loading.scss"; // Import your SASS file

const Loading: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner" />
    </div>
  );
};

export default Loading;
