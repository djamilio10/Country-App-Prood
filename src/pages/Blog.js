import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import Articles from "../components/Articles";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const getData = () => {
    axios
      .get("http://localhost:3002/articles")
      .then((res) => setBlogData(res.data));
  };
  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 140) {
      setError(true);
    } else {
      axios.post("http://localhost:3002/articles", {
        author,
        content,
        date: Date.now(),
      });

      setError(false);
      setAuthor("");
      setContent("");
      getData();
    }
    window.location.reload();
  };
  return (
    <div className="blog-container">
      <Logo />
      <Navigation />
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nom"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          placeholder="Message"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        {error && <p>Veuillez entrez un minimun de 140 caractéres</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((articles) => (
            <li>{<Articles key={articles.id} articles={articles} />}</li>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
