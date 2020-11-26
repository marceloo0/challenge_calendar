import GlobalStyle from '../styles/GlobalStyle';

import { ReminderProvider } from '../context/ReminderContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ReminderProvider>
        <Component {...pageProps} />
      </ReminderProvider>

      <GlobalStyle />
    </>
  )
}

export default MyApp
