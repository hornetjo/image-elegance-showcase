
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';

// Removed interface BlogPostData - not needed in JS

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();
      
      if (error) throw error;
      return data; // no type assertion in JS
    },
    enabled: !!slug
  });

  // Remove type annotation
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (error) {
    console.error('Error fetching blog post:', error);
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="animate-pulse">
              <div className="bg-gray-800 h-8 rounded mb-4 w-1/4"></div>
              <div className="bg-gray-800 h-12 rounded mb-6"></div>
              <div className="bg-gray-800 aspect-video rounded mb-8"></div>
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-gray-800 h-4 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-light text-white mb-6">Post Not Found</h1>
            <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-accent hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Blog Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-accent hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 text-lg">
              {formatDate(post.created_at)}
              {post.updated_at !== post.created_at && (
                <span className="ml-4">
                  Updated {formatDate(post.updated_at)}
                </span>
              )}
            </p>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-12">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-accent hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
