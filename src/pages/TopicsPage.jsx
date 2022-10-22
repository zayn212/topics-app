import React from "react";
import { useParams } from "react-router-dom";
import TopicsList from "../components/TopicsList";

const TopicsPage = () => {
  const { topicName } = useParams();
  return <TopicsList topicName={topicName || "react"} />;
};

export default TopicsPage;
