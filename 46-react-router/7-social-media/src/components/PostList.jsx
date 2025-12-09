import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WellComeMessage from "./WellComeMessage";
import LoadingSpinner from "./loadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WellComeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const normalizedPosts = data.map((post) => ({
        ...post,
        reactions: Math.floor(Math.random() * 100),
        tags: [],
      }));
      return normalizedPosts;
    });
};
export default PostList;
