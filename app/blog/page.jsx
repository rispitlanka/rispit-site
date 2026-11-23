import Responsive from '@/components/Responsive';
import BlogList from '@/components/dc/BlogList';
import MobBlog from '@/components/dc/MobBlog';

export const metadata = { title: "Blog" };

export default function Page() {
  return <Responsive desktop={<BlogList />} mobile={<MobBlog />} />;
}
