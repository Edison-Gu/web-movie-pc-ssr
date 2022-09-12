/*
 * @Author: EdisonGu
 * @Date: 2022-08-20 23:28:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 23:36:53
 * @Descripttion: 
 */
import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'
import { fetchHomeRecommend } from '@/api'
import MovieList from '@/components/common/MovieList'

interface Iprops {
  recommendList: any
}

const Home: NextPage<Iprops> = (props) => {
  const { recommendList } = props
  return (
    <div className={styles.container}>
      {
        recommendList.map((item: any, index: number) => (
          <MovieList movieConfig={item} key={index} />
        ))
      }
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let recommendList = []
  const { code, data } = await fetchHomeRecommend({})
  console.log('---code', code)
  if (code === 1) {
    recommendList = data
  }
  return { props: { recommendList } }
}
export default Home
