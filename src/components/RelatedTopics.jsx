import React from "react";
import Topic from "./Topic";
import "./RelatedTopics.css";

const RelatedTopics = ({ relatedTopics }) => {
  return (
    <ul className="related-topics">
      {relatedTopics.map((topic, index) => (
        <li className="related-topics-item" key={index}>
          <Topic canClick topic={topic} />
        </li>
      ))}
    </ul>
  );
};

export default RelatedTopics;
