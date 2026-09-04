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
          throw new Error(`HTTP Error: ${response.status}`);
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
      <h1 className="posts-heading">Posts Viewer</h1>

      {loading && (
        <p className="loading-state">Loading posts...</p>
      )}

      {error && (
        <p className="error-state">Error: {error}</p>
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
              <tr key={post.id} className="post-row">
                <td className="post-id">{post.id}</td>
                <td className="post-title">{post.title}</td>
                <td className="post-desc">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PostsViewer;