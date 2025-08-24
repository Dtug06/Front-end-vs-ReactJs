import React, { Component } from "react";


class DetailPost extends Component {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ marginBottom: "20px" }}>
        <p><strong>Id:</strong> {id}</p>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Content:</strong> {content}</p>
        <p><strong>Author:</strong> {author}</p>
        <hr />
      </div>
    );
  }
}
class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content: "Props giúp truyền dữ liệu từ component cha xuống component con",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default ListPost;
