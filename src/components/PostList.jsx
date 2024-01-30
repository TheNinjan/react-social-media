import React, { useContext, useState } from "react";
import { PostList as postListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMSG from "./WelcomeMSG";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(postListData);
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMSG />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
