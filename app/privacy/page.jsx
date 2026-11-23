import Responsive from '@/components/Responsive';
import Privacy from '@/components/dc/Privacy';
import MobPrivacy from '@/components/dc/MobPrivacy';

export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return <Responsive desktop={<Privacy />} mobile={<MobPrivacy />} />;
}
