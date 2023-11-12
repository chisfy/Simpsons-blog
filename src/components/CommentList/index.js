import Comment from "../Comment";
import { v4 as uuidv4 } from "uuid";

function CommentList() {

  const comments = [
  {
    id: uuidv4(),
    author: "Billy Bootcamper",
    content: "Hello, great post",
  },
  {
    id: "jFyGAKz1VsGputO1gV8xa",
    author: "Chris Meah",
    content: "Many thank yous",
  },
]

function takeInitials(comment) {
    const authorInitials = comment.author.split(" ");
    const firstName = authorInitials[0].charAt(0);
    const lastName = authorInitials[authorInitials.length - 1].charAt(0);
    let newString;
    newString = `${firstName}${lastName}`;

    return newString
  };

  return (
    <div>
    {comments.map((comment) => {
    return (
    <Comment key={comment.id} author={comment.author} content={comment.content} initials={takeInitials(comment)}/>
    );
    })};
    </div>
  )
}

export default CommentList;
