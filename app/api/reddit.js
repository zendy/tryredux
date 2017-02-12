import fetch from 'isomorphic-fetch';

const fetchData = () => {
  return fetch('https://www.reddit.com/r/boardgames.json')
    .then(response => response.json())
    .then(json => json.data.children.map(post => ({
      id: post.data.id,
      text: post.data.title,
      completed: false,
    })));
};

export default fetchData;
