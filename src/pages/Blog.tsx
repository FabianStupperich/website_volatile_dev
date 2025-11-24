import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Introducing Volatile Spot 1.0',
    description: 'Probabilistic short-term power market forecasting',
    author: 'Fabian Stupperich',
    authorImage: './public/images/team/fabian-stupperich.jpg',
    date: '24 November 2025',
    category: 'Product Launch',
    image: './public/images/short-term-price-forecast-day-ahead-backcasting-2025-11-19T12-54-20.077Z.jpg'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-black dark:text-white mb-12 text-center">
          Latest blog posts
        </h1>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block"
            >
              <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
                        <span className="font-medium">{post.category}</span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        <span>{post.date}</span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-headline font-bold text-black dark:text-white mb-4">
                        {post.title}
                      </h2>

                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-4 mb-8">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {post.author}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="inline-flex items-center text-black dark:text-black font-semibold text-lg hover:text-gray-500 dark:hover:text-gray-500 transition-colors group">
                        Read more
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  <div className="h-64 lg:h-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
