import React from 'react';
import { useParams } from 'react-router-dom';

interface BlogPostData {
  id: number;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  image: string;
  content: {
    introduction: string;
    sections: Array<{
      heading: string;
      text: string;
      image?: string;
    }>;
  };
}

const blogPostsData: { [key: string]: BlogPostData } = {
  '1': {
    id: 1,
    title: 'Introducing Volatile Spot-1.0',
    description: 'Probabilistic short-term power market forecasting',
    author: 'Fabian Stupperich',
    authorImage: '',
    date: '21 November 2025',
    category: 'Product Launch',
    image: '/public/images/short-term-price-forecast-day-ahead-backcasting-2025-11-19T12-54-20.077Z.jpg',
    content: {
      introduction: 'As the share of renewables continues to rise, modern power markets are increasingly shaped by conditions with high variability: ranging from prolonged periods of low renewable output to sudden generation outages and rapid, weather-driven demand swings. These dynamics amplify market uncertainty and frequently trigger extreme price movements, including spikes of several hundred €/MWh, negative price episodes, and elevated volatility. \n\n In this environment, traders, portfolio managers and market analysts must account for the full spectrum of potential outcomes to size positions effectively, optimize hedging strategies and manage risk. Yet, despite the abundance of forecasting providers, most point and even ensemble-based forecasts still treat extreme events as statistical anomalies rather than quantifiable scenarios. As a result, price uncertainty remains insufficiently captured, leading to missed opportunities, unidentified risks and higher analytical workloads.',
      sections: [
        {
          heading: 'Taking the next step forward',
          text: 'Today, we\‘re taking a major step forward in short-term power market forecasting with the launch of Volatile Spot-1.0: the first model portfolio for European spot market forecasting that truly quantifies uncertainty. \n\nVolatile Spot delivers robust uncertainty bands that integrate weather variability with underlying market dynamics, enabling market professionals to precisely measure the likelihood of price spikes, negative prices, or high-volatility periods. These quantified probabilities can be directly translated into financial impacts in our clients\' portfolios, delivering actionable, data-backed decision support in even the most uncertain market conditions.',
          image: '/images/Volatile_Spot.png',
          imageCaption: 'Customizable dashboards tailored for energy trading workflows'
        },
        {
          text: 'Our Spot models deliver high-precision day-ahead price, load and generation forecasts with a horizon of up to 10 days.\n\n At the core is our fully probabilistic modeling pipeline, which integrates regional weather uncertainty with physics-based renewable generation models. These fundamentals feed straight into our pricing engine, giving you a transparent, data-driven view of market movements and their likelihoods. The result: sharper decisions and stronger portfolio performance in volatile market conditions.',
          image: '/images/spot_fundamentals.jpg',
          imageCaption: 'Customizable dashboards tailored for energy trading workflows',
          heading: ''
        },
        {
          heading: "What makes Volatile's probabilstic forecasting stand out?",
          text: 'tbd',
          image: '/images/benchmarking.png',
          imageCaption: 'Customizable dashboards tailored for energy trading workflows'
        },
        {
          heading: "What's coming next?",
          text: 'Volatile Spot marks our first step toward a fully integrated, end-to-end platform for automated and transparent market analysis, uniting exchange data, multi-horizon price forecasts, weather-driven fundamentals and energy-system insights in one place. The goal: to give market professionals a powerful, streamlined toolkit for making fast, confident and data-backed decisions in increasingly dynamic market environments. \n\n Our platform is currently in beta. If you want early access to explore how our probabilistic forecasts can support your portfolio, reach out and we’ll set up a test environment tailored to your specific needs.',
          image: ''
        }
      ]
    }
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
          <a href="/blog" className="text-green-600 hover:text-green-700">
            Back to blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span className="font-medium">{post.category}</span>
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-headline font-bold text-black dark:text-white mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {post.description}
          </p>
        </div>

        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 whitespace-pre-line">
            {post.content.introduction}
          </p>

          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-headline font-bold text-black dark:text-white mb-4 whitespace-pre-line">
                {section.heading}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                {section.text}
              </p>
              {section.image && (
                <div className="mt-6">
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full rounded-lg shadow-lg"
                  />
                  {section.imageCaption && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-2 text-center">
                      {section.imageCaption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-black rounded-lg p-8 mt-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/images/team/fabian-stupperich.jpg"
              alt="Fabian Stupperich"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-headline font-bold text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-4">
                Do you have questions about our forecasting method or want to check it out yourself? Let's connect.
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
