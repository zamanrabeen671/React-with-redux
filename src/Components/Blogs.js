import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";
import "../styling/blogs.css";

const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=8e57211f5c0c5f3f1ca7aa929b4ae0d7`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="" data-testid="id">
      <h1 className="blog__page__header">News</h1>
      {loading ? <h1 className="loading text-center">Loading...</h1> : ""}
      <div className="row mx-auto p-5">
        {blogs?.articles?.map((blog) => (
          <div className="col mb-5">
            <a className="blog" target="_blank" href={blog.url} rel="noreferrer">
            <img src={blog.image} alt="" />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
          </div>
        ))}

        {blogs?.totalArticles === 0 && (
          <h1 className="no__blogs">
            No blogs available. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
