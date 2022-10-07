import Header from '../components/Layout/Header'
import '../styles/globals.css'
import { useAtom } from 'jotai';
import authAtom from '../stores/authAtom';
import HeaderAfter from '../components/Layout/HeaderAfter'

const MyApp = ({ Component, pageProps }) => {
  const [auth, setAuth] = useAtom(authAtom)

  return (
    <div>
      {auth.token == null ? <Header /> : <HeaderAfter />}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
