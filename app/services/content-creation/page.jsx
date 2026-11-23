import Responsive from '@/components/Responsive';
import ServiceContent from '@/components/dc/ServiceContent';
import MobServiceContent from '@/components/dc/MobServiceContent';

export const metadata = { title: "Content Creation" };

export default function Page() {
  return <Responsive desktop={<ServiceContent />} mobile={<MobServiceContent />} />;
}
