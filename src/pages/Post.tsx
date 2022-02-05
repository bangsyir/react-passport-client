import posts from "../data";
import { useParams } from "react-router-dom";
type TypePost = {
  id?: number;
  title?: string;
  img?: string;
  desc?: string;
  longDesc?: string;
}
const Post = () => {
  const {id} = useParams<{id?: string}>()
  const post = posts.find(p => p.id.toString() === id) as TypePost
  return (
    <div className="post">
      <img src={post.img} alt="post" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
