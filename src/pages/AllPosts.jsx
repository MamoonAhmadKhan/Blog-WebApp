import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/conf';
import { Container, PostCard } from '../components';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
        setPosts(posts.documents);
    }
  });

  return (
    <div className='w-fullpy-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts