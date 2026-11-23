import Responsive from '@/components/Responsive';
import Terms from '@/components/dc/Terms';
import MobTerms from '@/components/dc/MobTerms';

export const metadata = { title: "Terms of Service" };

export default function Page() {
  return <Responsive desktop={<Terms />} mobile={<MobTerms />} />;
}
