import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from 'redux-persist';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

import Preloader from "../components/preloader";
import '../styles/index.scss';
import { store } from '../redux/store';
import SEO from "../components/seo";

let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SEO font={'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Rubik:wght@400;500&display=swap'} />
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <Component {...pageProps} />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
