import Responsive from '@/components/Responsive';
import ServiceMobile from '@/components/dc/ServiceMobile';
import MobServiceMobile from '@/components/dc/MobServiceMobile';

export const metadata = { title: "Mobile App Development" };

export default function Page() {
  return <Responsive desktop={<ServiceMobile />} mobile={<MobServiceMobile />} />;
}
