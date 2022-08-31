/*
 * @Author: EdisonGu
 * @Date: 2022-08-28 18:05:47
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-31 23:45:44
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import MovieItem from '@/components/common/MovieItem'

interface Iprops {
  movieConfig: any
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
    const { list: movieList } = this.props.movieConfig
    console.log('----movieList', movieList)
    return (
      <div className={Styles['movie-list-container']}>
        {
          movieList.map((item: any, index: number) => (
            <div className={Styles['movie-item-container']} key={index}>
              <MovieItem movieInfo={item}/>
            </div>
          ))
        }
      </div>
    )
 }
}
export default MovieList