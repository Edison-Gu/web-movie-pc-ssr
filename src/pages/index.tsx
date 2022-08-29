/*
 * @Author: EdisonGu
 * @Date: 2022-08-20 23:28:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-28 18:15:47
 * @Descripttion: 
 */
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TagButton from '@/components/common/TagButton'
import MovieList from '@/components/common/MovieList'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MovieList />
      {/* <TagButton /> */}
      {/* <MovieItem /> */}
    </div>
  )
}

export default Home
