import Responsive from 'components/Responsive';
import Home from 'components/dc/Home';
import MobHome from 'components/dc/MobHome';

export default function Page() {
  return <Responsive desktop={<Home />} mobile={<MobHome />} />;
}
