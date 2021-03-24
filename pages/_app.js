import '../styles/globals.css'
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
    <Navigation />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp
