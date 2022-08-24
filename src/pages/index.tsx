import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TagButton from '@/components/common/TagButton'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TagButton />
    </div>
  )
}

export default Home
