import axios from "axios"
import React, { useEffect, useState } from "react"

import { Box, Heading } from "@chakra-ui/react"

import Layout from "../Layout"
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
      <Layout>
        <Heading p={5} m={-1}>
          <h4>I'm page two header</h4>
        </Heading>

        <Box p={2} m={2}>
          {posts.map((post) => (
            <>
              <Box p={2} m={2}>
                <p>{post.tile}</p>
                <p>{post.body}</p>
              </Box>
            </>
          ))}
        </Box>
      </Layout>
    </Wrapper>
  );
};

export default PageTwo;
