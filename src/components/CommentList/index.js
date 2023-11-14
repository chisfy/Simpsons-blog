import Comment from "../Comment";

function CommentList({ commentsArray }) {
  function takeInitials(comment) {
    const authorInitials = comment.author.split(" ");
    const firstName = authorInitials[0].charAt(0).toUpperCase();
    const lastName = authorInitials[authorInitials.length - 1]
      .charAt(0)
      .toUpperCase();
    let newString;
    newString = `${firstName}${lastName}`;

    return newString;
  }

  return (
    <div>
      {commentsArray.map((comment) => {
        return (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
            initials={takeInitials(comment)}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
