function Comment({key, author, content, initials}) {

  return (
    <div className="container">
      <div className="comment-container">
        <div className="circle">{initials}</div>
        <p key={key}>{author}</p>
      </div>
      <div className="comment-box">
      <p>{content}</p>
      </div>
    </div>
  );
}

export default Comment;
