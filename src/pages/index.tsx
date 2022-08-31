/*
 * @Author: EdisonGu
 * @Date: 2022-08-20 23:28:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-31 23:39:38
 * @Descripttion: 
 */
import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'
import { fetchHomeRecommend } from '@/api'
import TagButton from '@/components/common/TagButton'
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
      {/* <MovieList /> */}
      {/* <TagButton /> */}
      {/* <MovieItem /> */}
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let recommendList = []
  const { code, data } = await fetchHomeRecommend({})
  if (code === 1) {
    recommendList = data
  }
  return { props: { recommendList } }
}
export default Home
