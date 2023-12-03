import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";
  
  const PostList = () =>{
     const {postList, fatching} = useContext(PostListData) 
 return <>
      {fatching && <LoadingSpinner/>}
     { !fatching &&  postList.length === 0 && (
      <WelcomeMsg/>
     )}
    { !fatching && postList.map((post) => 
    (<Post  key={post.id} post ={post}/> 
    ))}
 </>
}

export default PostList;
