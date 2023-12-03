import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

const CreatePost =()=>{
  return <>
  <Form method="POST" className="Createform">
  <div className="mb-3">
    <label htmlFor="UserID" className="form-label">Enter your UserId</label>
    <input type="text" name='userId'className="form-control" id="UserId" placeholder="your user ID"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Tilte</label>
    <input type="text" name='title' className="form-control" id="title" placeholder="make your post"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" name='body' className="form-control" id="body" placeholder="Tell us more about you" rows="4"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Reaction" className="form-label">No of reactions</label>
    <input type="text" name='noReaction' className="form-control" id="Reaction" placeholder="how many people reacted"/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hashtags</label>
    <input type="text" name='tags' className="form-control" id="tags" placeholder="Please Enter tags using space"/>
  </div>
  <button type="submit" className="btn btn-primary">post</button>
</Form></>
}

export async function createPostAction(data){
   const formData = await data.request.formData();
   const postData = Object.fromEntries(formData);
   postData.tags = postData.tags.split('');
   console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
    })
  .then(res => res.json())
  .then(post =>{
    (post)
  });

  return redirect("/");

   };

export default CreatePost;