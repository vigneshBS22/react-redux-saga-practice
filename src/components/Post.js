import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
import Card from './PostsCard';
export default function Post() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log(posts);
  return (
    <>
      {posts.loading && <p>Loading...</p>}
      {posts.length === 0 && !loading && <p>No posts available!</p>}
      {error && !loading && <p>{error}</p>}
      {posts.length > 0 &&
        posts.map((post) => <Card key={post.id} post={post} />)}
    </>
  );
}
