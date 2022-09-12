/*
 * @Author: EdisonGu
 * @Date: 2022-09-12 15:31:25
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 23:52:48
 * @Descripttion: 
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { goRouter } from '@/utils/jumpLink'
import { PAGE_KEY } from '@/constants'
import { fetchMovieInfo, fetchMovieRecommend } from '@/api'
import { Tabs } from 'antd'
import IframePalyer from '@/components/common/IframePlayer'
import Aliplayer from '@/components/common/AliPlayer'
import MovieList from '@/components/common/MovieList'

interface Iprops {
  movieInfo: any,
  activeLine: number,
  activeEpisode: number
}

interface Istate {
  isIframe: boolean,
  line: string,
  recommendList: Array<any>
}

class MovieDetail extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      isIframe: true,
      line: '',
      recommendList: []
    }
  }
  componentDidMount(): void {
    this.handleUrl()
    this.fetchMovieRecommendApi()
  }
  async fetchMovieRecommendApi() {
    const { movieInfo: { id } } = this.props
    const { code, data } = await fetchMovieRecommend({id})
    if (code === 1) {
      this.setState({ recommendList: data })
    }
  }
  handleUrl() {
    const { movieInfo: { lines }, activeLine } = this.props
    const { line } = lines[activeLine].source_list[0]
    const isIframe = line.indexOf('.m3u8') < 0
    this.setState({ isIframe, line })
    console.log('----lines', line, isIframe)
  }
  render(): React.ReactNode {
    const { movieInfo: { id, name, lines, cover, description, score, year }, activeLine, activeEpisode } = this.props
    console.log('---activeLine', activeLine, activeEpisode)
    const { isIframe, line, recommendList } = this.state
    return (
      <div className={Styles['movie-info-container']}>
        <p className={Styles['movie-title']}>{name}</p>
        {/* 视频容器 */}
        <div className={Styles['movie-player-wrap']}>
          {
            isIframe ? <IframePalyer url={line} /> : <Aliplayer url={line} />
          }
        </div>
        {/* 线路容器 */}
        <div className={Styles['movie-lines-wrap']}>
          <Tabs defaultActiveKey={`${activeLine}`}>
            {
              lines.map((item: any, index: number) => (
                <Tabs.TabPane tab={`线路${index + 1}`} key={index}>
                  <div>
                    {
                      item.source_list.map((itm:any, idx:number) => (
                        <a key={idx} href={goRouter({key: PAGE_KEY.MOVIE_DETAIL, id: `${id}_${index}_${idx}`, type: 'url'})}>
                          <div className={ activeLine === index && activeEpisode === idx ? `${Styles['line-btn']} ${Styles['active']}` : Styles['line-btn']}>
                            {itm.name ? itm.name : '1080P'}
                          </div>
                        </a>
                      ))
                    }
                  </div>
                </Tabs.TabPane>
              ))
            }
          </Tabs>
        </div>
        {/* 简介容器 */}
        <div className={Styles['movie-des-wrap']}>
          <img src={cover} alt="" />
          <div className={Styles['des-content']}>
            <div>
              <p>简介</p>
              <p>{description}</p>
            </div>
            <div className={Styles['des-info']}>
              <span className={Styles['score']}>{score.toFixed(1)}</span>
              <span className={Styles['year']}>{year}</span>
            </div>
          </div>
        </div>
        <div className={Styles['movie-recommend-wrap']}>
          <MovieList movieConfig={{list: recommendList, subTitle: '喜欢这部电影的人也喜欢 · · · · · ·' }} />
        </div>
      </div>
    )
 }
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const path = context.params._id_line_episode.replace('.html','')
  const pathList = path.split('_')
  const id = pathList[0]
  const activeLine = +pathList[1] || 0
  const activeEpisode = +pathList[2] || 0
  let movieInfo = {}
  const { code, data } = await fetchMovieInfo({id})
  if (code === 1) {
    movieInfo = data
  }
  return { props: { movieInfo, activeLine, activeEpisode } }
}

export default MovieDetail