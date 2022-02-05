import { Link } from "react-router-dom";

const Card = ({post}: {post:any}) => {
  return (
    <div className="card">
      <Link to={`/post/${post.id}`} className="link">
        <span className="title">{post.title}</span>
        <img src={post.img} alt={post.id + "hello"} className="img"/>
        <p className="desc">{post.desc}</p>
        <button className="cardBtn">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
