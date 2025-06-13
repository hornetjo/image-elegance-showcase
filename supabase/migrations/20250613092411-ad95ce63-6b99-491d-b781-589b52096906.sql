
-- Create a table for blog posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index on slug for faster lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create an index on published and created_at for efficient querying of published posts
CREATE INDEX idx_blog_posts_published_created ON public.blog_posts(published, created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read published blog posts
CREATE POLICY "Anyone can view published blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (published = true);

-- Insert some sample blog posts for demonstration
INSERT INTO public.blog_posts (title, slug, excerpt, content, featured_image, published) VALUES
(
  'The Art of Landscape Photography',
  'art-of-landscape-photography',
  'Discover the techniques and mindset behind capturing breathtaking landscapes that tell a story.',
  'Landscape photography is more than just pointing a camera at a beautiful scene. It requires patience, planning, and a deep understanding of light and composition. In this post, I''ll share some of the techniques I''ve developed over the years to capture landscapes that truly resonate with viewers.

The golden hour, that magical time just after sunrise or before sunset, provides the most dramatic lighting for landscape photography. The warm, soft light creates depth and dimension that can transform an ordinary scene into something extraordinary.

Composition is equally important. The rule of thirds is a good starting point, but don''t be afraid to break the rules when the scene calls for it. Leading lines, foreground elements, and careful framing can create images that draw the viewer into the scene.

Most importantly, be patient. The best landscape photographs often require multiple visits to the same location, waiting for the perfect conditions. Nature operates on its own schedule, and the most rewarding images come to those who are willing to wait.',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
  true
),
(
  'Portrait Photography: Capturing the Soul',
  'portrait-photography-capturing-soul',
  'Learn how to create compelling portraits that reveal the true character of your subjects.',
  'Portrait photography is about much more than technical perfection. It''s about connecting with your subject and capturing something authentic and meaningful. The best portraits reveal something about the person''s character, their story, or their emotions.

Building rapport with your subject is crucial. Take time to talk with them, understand their story, and make them comfortable. A relaxed subject will always produce better results than someone who feels awkward or self-conscious.

Lighting plays a vital role in portrait photography. Natural light from a window can create beautiful, soft illumination, while dramatic artificial lighting can add mood and intensity. Understanding how light falls on the face and how it affects the mood of the image is essential.

Don''t forget about the background. A cluttered or distracting background can ruin an otherwise great portrait. Look for simple, clean backgrounds that complement your subject rather than competing with them for attention.',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  true
),
(
  'Wildlife Photography: Patience and Preparation',
  'wildlife-photography-patience-preparation',
  'The secrets to successful wildlife photography lie in understanding animal behavior and being prepared.',
  'Wildlife photography is perhaps the most challenging and rewarding genre of photography. It requires not just technical skill, but also a deep understanding of animal behavior, infinite patience, and often a good deal of luck.

Preparation is key. Research your subjects thoroughly - understand their habits, their habitats, and their daily routines. The more you know about the animals you want to photograph, the better your chances of being in the right place at the right time.

Equipment matters in wildlife photography more than in many other genres. A long telephoto lens is often essential, not just to get close to distant subjects, but also to maintain a safe distance that doesn''t disturb the animals.

Patience cannot be overstated. You might spend hours or even days waiting for the perfect shot. But when that moment comes - when the light is perfect, the animal''s behavior is interesting, and everything aligns - the wait becomes worthwhile.',
  'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
  true
);
