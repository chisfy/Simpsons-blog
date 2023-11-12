function Comment({ author, content, initials}) {

  return (
    <div className="container">
      <div className="comment-container">
        <div className="circle">{initials}</div>
        <p>{author}</p>
      </div>
      <div className="comment-box">
      <p>{content}</p>
      </div>
    </div>
  )
}

export default Comment;
