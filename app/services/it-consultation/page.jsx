import Responsive from '@/components/Responsive';
import ServiceIT from '@/components/dc/ServiceIT';
import MobServiceIT from '@/components/dc/MobServiceIT';

export const metadata = { title: "IT Consultation" };

export default function Page() {
  return <Responsive desktop={<ServiceIT />} mobile={<MobServiceIT />} />;
}
