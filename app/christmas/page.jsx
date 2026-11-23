import Responsive from '@/components/Responsive';
import HomeXmas from '@/components/dc/HomeXmas';

export const metadata = { title: "Christmas" };

export default function Page() {
  return <Responsive desktop={<HomeXmas />} />;
}
