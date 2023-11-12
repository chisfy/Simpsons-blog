import BlogPost from "../BlogPost";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import { useState } from "react";
import { blog } from "../../data/blogs";
import comments from "../../data/commentsArray.json"


function App() {
const [commentsArray, setCommentsArray] = useState(comments);

  return (
    <>
    <BlogPost blog={blog}/>
    <CommentList commentsArray={commentsArray}/>
    <CommentForm commentsArray={commentsArray} setCommentsArray={setCommentsArray}/>
    </>
  )
  }

export default App;
