import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postsURL = 'https://dev.to/api/articles?tag=food&per_page=9';
    axios.get(postsURL)
    .then(function (response) {
      setPosts(response.data);
      setLoading(false);
    })
    .catch( function (error) {
      console.log(error);
      setLoading(false)
    })
  }, []);

  if(loading) {
    return <p className="text-center text-emerald-700 font-semibold mt-10">Loading posts...</p>;
  }
  if(!posts) {
    return <p className="text-center text-gray-500 mt-10">No posts found for this category.</p>;
  }
  return (
    <section className="px-6 md:px-[10%] py-16 bg-emerald-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-emerald-700">Food Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img 
              src={post.cover_image || "https://source.unsplash.com/featured/?food"} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-emerald-800 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">By {post.user.name}</p>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 font-semibold hover:underline"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog