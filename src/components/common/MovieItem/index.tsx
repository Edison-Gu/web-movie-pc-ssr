/*
 * @Author: EdisonGu
 * @Date: 2022-08-28 17:12:26
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 19:22:14
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { goRouter } from '@/utils/jumpLink'
import { DEFAULT_IMG, PAGE_KEY } from '@/constants'
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
    const { cover, name, year, id } = this.props.movieInfo
    return (
      <div className={Styles['movie-item-container']}>
        <a href={goRouter({key: PAGE_KEY.MOVIE_DETAIL, id, type: 'url'})}>
          <img className={Styles['item-img']} src={cover} alt="" />
        </a>
        <div className={Styles['item-content-box']}>
          <p className={Styles['item-name']}>{name}</p>
          <span className={Styles['item-year']}>{year}</span>
        </div>
      </div>
    )
 }
}

export default MovieItem