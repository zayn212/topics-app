import React from "react";
import { useQuery } from "urql";
import Topic from "./Topic";
import { GET_TOPICS_QUERY } from "../mutation";
import Loading from "../shared/Loading";
import Error from "../shared/Error";
import RelatedTopics from "./RelatedTopics";

const TopicsList = ({ topicName }) => {
  const [result] = useQuery({
    query: GET_TOPICS_QUERY,
    variables: { topicName },
  });

  const { data, fetching, error } = result;

  if (fetching) return <Loading />;
  if (error) return <Error errorMessage={error.message} />;

  return (
    <section>
      {!fetching && data && (
        <div>
          <Topic
            topic={{
              name: data.topic.name,
              stargazerCount: data.topic.stargazerCount,
            }}
          />
          <RelatedTopics relatedTopics={data.topic.relatedTopics} />
        </div>
      )}
    </section>
  );
};

export default TopicsList;
