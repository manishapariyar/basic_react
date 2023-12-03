import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
const CreatePost =()=>{
  const  {addPost} = useContext(PostList);
   const navigte = useNavigate();
 const userIdElement= useRef();
 const postTitleElement = useRef();
 const postBodyElement = useRef();
 const reactionsElement = useRef();
 const tagsElement = useRef();

 const handleSubmit = () =>{
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postbody = postBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(" ");
   
  userIdElement.current.value= " ";  
  postTitleElement.current.value= " ";  
  postBodyElement.current.value= " ";  
  reactionsElement.current.value= " ";  
 tagsElement.current.value= " ";
 fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title:postTitle,
    body:postbody,
    noReaction: reactions,
    userId:userId,
    tags:tags
  })
})
.then(res => res.json())
.then(post =>addPost(post))
navigte('/'); 
 };

  return <>
  <form className="Createform" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="UserID" className="form-label">Enter your UserId</label>
    <input type="text" ref={userIdElement} className="form-control" id="UserId" placeholder="your user ID"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Tilte</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="make your post"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBodyElement} className="form-control" id="title" placeholder="Tell us more about you" rows="4"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Reaction" className="form-label">No of reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="Reaction" placeholder="how many people reacted"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please Enter tags using space"/>
  </div>
  <button type="submit" className="btn btn-primary">post</button>
</form></>
}
export default CreatePost;