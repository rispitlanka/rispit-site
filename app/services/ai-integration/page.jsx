import Responsive from '@/components/Responsive';
import ServiceAI from '@/components/dc/ServiceAI';
import MobServiceAI from '@/components/dc/MobServiceAI';

export const metadata = { title: "AI Integration" };

export default function Page() {
  return <Responsive desktop={<ServiceAI />} mobile={<MobServiceAI />} />;
}
