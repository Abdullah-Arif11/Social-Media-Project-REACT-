import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { PostListContext } from "../Store/Post-List-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext)
  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="User-Id" className="form-label">
          User-Id:
        </label>
        <input
          type="text"
          className="form-control"
          name= "userId"
          id="User-Id"
          placeholder="Enter User-Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Post-Title" className="form-label">
          Post Title:
        </label>
        <input
          type="text"
          name= "title"
          className="form-control"
          id="Post-Title"
          placeholder="Enter your feeling here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-body" className="form-label">
          Post Content:
        </label>
        <textarea
          rows="4"
          type="text"
          name= "body"
          className="form-control"
          id="post-body"
          placeholder="Enter more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions:
        </label>
        <input
          type="text"
          name= "reactions"
          className="form-control"
          id="reactions"
          placeholder="Enter post reactions here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags:
        </label>
        <input
          type="text"
          name= "tags"
          className="form-control"
          id="Tags"
          placeholder="Enter tags here with spacing"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export async function CreatePostAction(data) {
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)
  console.log(postData)
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then((post)=> {
    console.log(post)
  });
  return redirect("/")
}
export default CreatePost;
