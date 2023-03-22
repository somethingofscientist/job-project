import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const proxy = "http://localhost:4000/api"

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(proxy + "/posts/" + path);
      setPost(res.data)
    }
    getPost()
  }, [path]);


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {
          post.photo && (
            <img
              className="singlePostImg"
              src={post.photo}
              alt=""
            />
          )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link to={`/?user=${post.username}`} className="link">
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
