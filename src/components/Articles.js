import axios from "axios";
import React, { useState } from "react";

const Articles = ({ articles }) => {
  const [editContent, setEditContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };
  const handleEdit = () => {
    const data = {
      author: articles.author,
      content: editContent ? editContent : articles.content,
      date: articles.date,
      updatedDate: Date.now(),
    };
    axios
      .put("http://localhost:3002/articles/" + articles.id, data)
      .then(() => {
        setIsEditing(false);
      });
  };
  const handleDelete = () => {
    axios.delete("http://localhost:3002/articles/" + articles.id);
    window.location.reload();
  };
  return (
    <div
      className="article"
      style={{ background: isEditing ? "#f3feff" : "white" }}
    >
      <div className="card-header">
        <h3>{articles.author}</h3>
        <em>Posté le {dateFormater(articles.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          defaultValue={editContent ? editContent : articles.content}
          autoFocus
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : articles.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edite</button>
        )}
        <button
          onClick={() => {
            if (
              window.confirm("Voulez-vous vraiment supprimer cette article ?")
            ) {
              handleDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Articles;
