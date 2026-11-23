import Responsive from '@/components/Responsive';
import CaseStudy from '@/components/dc/CaseStudy';
import MobCaseStudy from '@/components/dc/MobCaseStudy';

export const metadata = { title: "Kestrel Health — Case Study" };

export default function Page() {
  return <Responsive desktop={<CaseStudy />} mobile={<MobCaseStudy />} />;
}
