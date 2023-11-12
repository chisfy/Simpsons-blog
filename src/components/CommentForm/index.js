import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function CommentForm({ commentsArray, setCommentsArray }) {

  const [addAuthor, setAddAuthor] = useState("");
  const [addComment, setAddComment] = useState("");

  function addCommentForm(newComment) {
    setCommentsArray([...commentsArray, newComment]);
  }

  function handleCommentForm(event) {
    event.preventDefault();
    const newComment = {
      id: uuidv4(),
      author: addAuthor,
      content: addComment,
    };

    addCommentForm(newComment);

    setAddAuthor("");
    setAddComment("");
  }

  return (
    <form className="blog-form">
    <span>
    <label>Author:</label>
    <input id="name-form" type="text" placeholder="Full Name" value={addAuthor} onChange={(e) => setAddAuthor(e.target.value)}/>
    </span>
    <span>
    <label>Comment:</label>
    <textarea id="commentbox" name="comment" rows="4" cols="25" placeholder="write your comment here...." value={addComment} onChange={(e) => setAddComment(e.target.value)}></textarea>
    <button className="submitbtn" type="submit" value="Submit" style={{ cursor: "pointer" }} onClick={handleCommentForm}>Submit</button>
    </span>
    </form>
  )
}

export default CommentForm;
