import Responsive from '@/components/Responsive';
import ServiceEcommerce from '@/components/dc/ServiceEcommerce';
import MobServiceEcommerce from '@/components/dc/MobServiceEcommerce';

export const metadata = { title: "Ecommerce Development" };

export default function Page() {
  return <Responsive desktop={<ServiceEcommerce />} mobile={<MobServiceEcommerce />} />;
}
