import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../Store/Post-List-store";
const Post = ({ post }) => {
  const {delPost} = useContext(PostListContext)
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> {delPost(post.id)}}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>
        ))}
        <div className="alert alert-primary reaction" role="alert">
          Your post has been liked by {post.reactions.likes} people and disliked by {post.reactions.dislikes}.
        </div>
      </div>
    </div>
  );
};
export default Post;
