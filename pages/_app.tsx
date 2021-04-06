import 'tailwindcss/tailwind.css'
import {AppProps} from 'next/app'

export default function Blog({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}
