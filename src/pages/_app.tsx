/*
 * @Author: EdisonGu
 * @Date: 2022-08-20 23:28:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-21 22:49:13
 * @Descripttion: 
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageHead from '@/components/PageHead'
import PageFooter from '@/components/PageFooter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
      <PageFooter />
    </>
  )
}

export default MyApp
