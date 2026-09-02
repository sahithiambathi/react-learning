import React, { useState, useEffect } from 'react';

function PostsViewer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      <h1 className="main-heading">Posts Viewer</h1>

      {loading && (
        <p className="status-message">Loading posts...</p>
      )}

      {error && (
        <p className="status-error">Error: {error}</p>
      )}

      {!loading && !error && (
        <table className="posts-table">
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="post-id-cell">{post.id}</td>
                <td className="post-title-cell">{post.title}</td>
                <td className="post-body-cell">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PostsViewer;