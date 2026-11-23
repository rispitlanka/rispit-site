import Responsive from 'components/Responsive';
import NotFound from 'components/dc/NotFound';
import MobNotFound from 'components/dc/MobNotFound';

export const metadata = { title: "Page not found" };

export default function Page() {
  return <Responsive desktop={<NotFound />} mobile={<MobNotFound />} />;
}
