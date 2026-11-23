import Responsive from '@/components/Responsive';
import ThankYou from '@/components/dc/ThankYou';
import MobThankYou from '@/components/dc/MobThankYou';

export const metadata = { title: "Thank you" };

export default function Page() {
  return <Responsive desktop={<ThankYou />} mobile={<MobThankYou />} />;
}
