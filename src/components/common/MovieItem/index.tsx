/*
 * @Author: EdisonGu
 * @Date: 2022-08-28 17:12:26
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-28 18:11:41
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { DEFAULT_IMG } from '@/constants'
import { MovieInfo } from '@/types/movie'

interface Iprops {
  movieInfo: MovieInfo
}

interface Istate {
}

class MovieItem extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    const { cover, name, year } = this.props.movieInfo
    return (
      <div className={Styles['movie-item-container']}>
        <img className={Styles['item-img']} src={cover} alt="" />
        <div className={Styles['item-content-box']}>
          <p className={Styles['item-name']}>{name}</p>
          <span className={Styles['item-year']}>{year}</span>
        </div>
      </div>
    )
 }
}
export default MovieItem