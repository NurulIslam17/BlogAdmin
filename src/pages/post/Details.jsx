import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import appApi from "../../utils/dataAxios";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await appApi.get(`post/${id}`);
        setPost(response?.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Post not found</h2>
          <p className="mt-2 text-gray-600">
            The post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="max-h-[850px] overflow-y-scroll py-8 px-4">
        <article className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          {post.filePath && (
            <div className="w-full h-96 overflow-hidden bg-red-200">
              <img
                src="https://placehold.co/600x400"
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            {/* Category & Status */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                {post.categoryName}
              </span>
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  post.status === "published"
                    ? "text-green-700 bg-green-100"
                    : "text-yellow-700 bg-yellow-100"
                }`}
              >
                {post.status}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Author & Meta Info */}
            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200 relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.description}
              </p>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Share this post
              </h3>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Back Button */}
        <div className=" mx-auto mt-6 absolute left-0 top-0">
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
          >
            <span>←</span> Back to posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
