import Responsive from '@/components/Responsive';
import ServiceMVP from '@/components/dc/ServiceMVP';
import MobServiceMVP from '@/components/dc/MobServiceMVP';

export const metadata = { title: "21-Day MVP Sprint" };

export default function Page() {
  return <Responsive desktop={<ServiceMVP />} mobile={<MobServiceMVP />} />;
}
