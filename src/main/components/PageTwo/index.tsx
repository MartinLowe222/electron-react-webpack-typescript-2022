import axios from "axios"
import React, { useEffect, useState } from "react"

import { Wrapper } from "./style"

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PageTwo = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Wrapper>
      <div className='page'>
        <div className='header'>
          <h4>I'm page two header</h4>
        </div>
        <div className='content'>I'm page two content</div>
        {posts.map((post) => (
          <>
            <p>{post.tile}</p>
            <p>{post.body}</p>
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export default PageTwo;
