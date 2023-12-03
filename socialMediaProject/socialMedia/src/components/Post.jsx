import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const Post =({post})=>{
 const {deletePost} = useContext(PostList)
  return <>
  <div className="card postCard" >
  <div className="card-body">
    <h5 className="card-title">{post. title}
    <span className="position-absolute top-0 start-100 translate-middle"
     >
    <button type="button" className="btn-close" aria-label="Close" onClick={()=>deletePost(post.id)}></button>
    </span></h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(<span key={tag}className="badge text-bg-primary hashtag">{tag}</span>))}
    <div className="alert alert-info Reaction" role="alert">
     Number of People who like your post {post.reactions}
</div>
  </div>
</div></>
}
export default Post;