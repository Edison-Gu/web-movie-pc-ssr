/*
 * @Author: EdisonGu
 * @Date: 2022-08-20 23:28:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 11:57:34
 * @Descripttion: 
 */
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import HtmlHead from '@/components/HtmlHead'
import PageHead from '@/components/PageHead'
import PageFooter from '@/components/PageFooter'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('----pageProps', pageProps)
  return (
    <>
      <HtmlHead />
      <PageHead />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
      <PageFooter />
    </>
  )
}

export default MyApp
