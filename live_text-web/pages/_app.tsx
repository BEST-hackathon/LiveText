import Gun from 'gun'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const gun = Gun('http://localhost:3400/gun')
        window.gun = gun //To have access to gun object in browser console
    }, [])
    return <Component {...pageProps} />
}

export default MyApp
