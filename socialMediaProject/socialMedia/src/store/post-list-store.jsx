import { createContext, useReducer,useEffect, useState } from "react";

 export const PostList = createContext({
  postList: [],
  addPost:()=>{},
  fatching:false,
  deletePost: () =>{},

});
const PostListReducer = (currPostList, action) =>{
  let newPostList = currPostList;
  if(action.type ==='DELETE_POST'){
    newPostList = currPostList.filter((post)=>post.id !== action.payload.postId
    );
  }
  else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts;
  }
  else if(action.type ==='ADD_POST')
  {
    newPostList = [action.payload, ...currPostList]
  }
return newPostList;

}

const PostListProvider = ({children}) =>{
  const [postList, dispatchPostList] = useReducer(
    PostListReducer, []);
  const  addPost=(post)=>{
    dispatchPostList({
      type: 'ADD_POST',
      payload:post

    })
  }
  const  addinitialPosts=(posts)=>{
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: {
        posts,
      },
    });
  };
  const  deletePost=(postId)=>{
   dispatchPostList({
    type: 'DELETE_POST',
    payload:{
      postId,
    },
   })
  }
  const [fatching, setfatching] = useState(false);
   useEffect(()=>{
      setfatching(true)
      const controller = new AbortController();
      const signal = controller.signal;
      fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then((data) => {
         addinitialPosts(data.posts);
         setfatching(false);
      }); 

      return () =>{
         controller.abort();
      }

   },[]);
 
  return <PostList.Provider value={{
    postList,
    addPost,
    fatching,
    deletePost,
  }}>{children}</PostList.Provider>

};
export default PostListProvider;
