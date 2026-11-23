import Responsive from '@/components/Responsive';
import ServiceWeb from '@/components/dc/ServiceWeb';
import MobServiceWeb from '@/components/dc/MobServiceWeb';

export const metadata = { title: "Web App Development" };

export default function Page() {
  return <Responsive desktop={<ServiceWeb />} mobile={<MobServiceWeb />} />;
}
