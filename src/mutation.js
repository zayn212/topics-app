export const GET_TOPICS_QUERY = `query($topicName: String!) {
    topic(name: $topicName) {
      name
      stargazerCount
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }`;
