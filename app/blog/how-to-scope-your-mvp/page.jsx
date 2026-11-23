import Responsive from '@/components/Responsive';
import BlogPost from '@/components/dc/BlogPost';
import MobBlogPost from '@/components/dc/MobBlogPost';

export const metadata = { title: "How to scope your MVP" };

export default function Page() {
  return <Responsive desktop={<BlogPost />} mobile={<MobBlogPost />} />;
}
