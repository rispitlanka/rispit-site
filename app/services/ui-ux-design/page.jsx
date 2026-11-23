import Responsive from '@/components/Responsive';
import ServiceUIUX from '@/components/dc/ServiceUIUX';
import MobServiceUIUX from '@/components/dc/MobServiceUIUX';

export const metadata = { title: "UI/UX Design" };

export default function Page() {
  return <Responsive desktop={<ServiceUIUX />} mobile={<MobServiceUIUX />} />;
}
