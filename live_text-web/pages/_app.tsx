import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
