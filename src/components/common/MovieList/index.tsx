/*
 * @Author: EdisonGu
 * @Date: 2022-08-28 18:05:47
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-28 18:17:17
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import MovieItem from '@/components/common/MovieItem'

interface Iprops {
  
}

interface Istate {
}

class MovieList extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    return (
      <div className={Styles['movie-list-container']}>
        
      </div>
    )
 }
}
export default MovieList