/*
 * @Author: EdisonGu
 * @Date: 2022-08-28 18:05:47
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 23:53:35
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { goRouter } from '@/utils/jumpLink'
import { PAGE_KEY } from '@/constants'
import MovieItem from '@/components/common/MovieItem'
import TagButton from '@/components/common/TagButton'

interface Iprops {
  movieConfig: any
}

interface Istate {
  moveCount: number
}

class MovieList extends Component<Iprops, Istate> {
  private movieBoxRef: React.RefObject<HTMLDivElement>;
  private movieContentRef: React.RefObject<HTMLDivElement>;
  constructor(props: Iprops) {
    super(props)
    this.movieBoxRef = React.createRef()
    this.movieContentRef = React.createRef()
    this.state = {
      moveCount: 0
    }
  }
  transMovie(type: string) {
    const { list: movieList } = this.props.movieConfig
    const dom:any = this.movieContentRef.current
    const boxWidth:any = this.movieBoxRef.current?.clientWidth
    const movieItemWidth = 208
    // const moveNum = Math.floor(boxWidth / movieItemWidth)
    const moveNum = 6
    const maxCount = Math.floor(movieList.length / moveNum) - 1
    let { moveCount } = this.state
    if (type === 'prev') {
      moveCount -= 1
      moveCount = moveCount < 0 ? 0 : moveCount
    }
    if (type === 'next') {
      moveCount += 1
      moveCount = moveCount > maxCount ? maxCount : moveCount
    }
    this.setState({ moveCount })
  }
  showMore() {
    const { homeType } = this.props.movieConfig
    return homeType === 'newest'
  }
  render(): React.ReactNode {
    const { list: movieList, tags: tagList, homeName, subTitle } = this.props.movieConfig
    const { moveCount } = this.state
    return (
      <div className={Styles['movie-container']}>
        <div className={Styles['list-title-wrap']}>
          <div className={Styles['left']}>
            <p className={subTitle && Styles['sub-title']}>{homeName ? homeName : subTitle}</p>
            {
              this.showMore() && <span>
                <a href={goRouter({key: PAGE_KEY.MOVIE, type: 'url'})}>探索更多&gt;</a>
              </span>
            }
          </div>
          <div>
            <span className={moveCount > 0 ? Styles['svg-span'] : `${Styles['svg-span']} ${Styles['disabled']}`} onClick={() => {this.transMovie('prev')}}>
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm2.439 4.95a1.429 1.429 0 0 0-2.02 0L5.367 10l5.05 5.05.125.112c.56.444 1.378.407 1.896-.111l.11-.125a1.429 1.429 0 0 0-.11-1.896L9.409 10l3.03-3.03.11-.125a1.429 1.429 0 0 0-.11-1.896z"></path>
              </svg>
            </span>
            <span className={Styles['svg-span']} onClick={() => {this.transMovie('next')}}>
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM7.561 4.95a1.429 1.429 0 0 1 2.02 0L14.633 10l-5.05 5.05-.125.112a1.429 1.429 0 0 1-1.896-.111l-.11-.125a1.429 1.429 0 0 1 .11-1.896l3.03-3.03-3.03-3.03-.11-.125a1.429 1.429 0 0 1 .11-1.896z"></path>
              </svg>
            </span>
          </div>
        </div>
        {
          tagList?.length > 0 && (
            <div className={Styles['list-tags-wrap']}>
              <TagButton tagList={tagList} />
            </div>
          )
        }
        <div ref={this.movieBoxRef} className={Styles['list-content-wrap']}>
          <div ref={this.movieContentRef} style={{marginLeft: `-${moveCount * 1248}px`}} >
            {
              movieList.map((item: any, index: number) => (
                <div className={Styles['movie-item']} key={index}>
                  {
                    item ? <MovieItem movieInfo={item}/> : ''
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
 }
}
export default MovieList