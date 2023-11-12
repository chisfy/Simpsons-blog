function BlogPost({ blog }) {

  return (
    <div className="blog-container container">
      <h1 className="title">{blog.title}</h1>
      <h3 className="author"> By {blog.author}</h3>
      <p className="date">{blog.datePosted}</p>
      <hr />
      <img src={blog.imageSrc} alt="coders"/>
      <figcaption className="figc">{blog.imageAlt}</figcaption>
      <p className="content">{blog.content}</p>
    </div>
  );
}

export default BlogPost;
