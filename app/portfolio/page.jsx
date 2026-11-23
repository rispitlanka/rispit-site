import Responsive from '@/components/Responsive';
import Portfolio from '@/components/dc/Portfolio';
import MobPortfolio from '@/components/dc/MobPortfolio';

export const metadata = { title: "Portfolio" };

export default function Page() {
  return <Responsive desktop={<Portfolio />} mobile={<MobPortfolio />} />;
}
