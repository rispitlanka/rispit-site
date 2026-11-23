import Responsive from '@/components/Responsive';
import Contact from '@/components/dc/Contact';
import MobContact from '@/components/dc/MobContact';

export const metadata = { title: "Contact" };

export default function Page() {
  return <Responsive desktop={<Contact />} mobile={<MobContact />} />;
}
