import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic, canClick }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (canClick) {
      navigate(`/topics/${topic.name}`);
    }
  };

  return (
    <div className="topic" onClick={handleClick}>
      <div className="topic-name">{topic.name}</div>
      <div className="topic-count">{topic.stargazerCount}</div>
    </div>
  );
};

Topic.defaultProps = {
  canClick: false,
};

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
  canClick: PropTypes.bool,
};

export default Topic;
