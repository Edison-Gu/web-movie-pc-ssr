/*
 * @Author: EdisonGu
 * @Date: 2022-09-12 15:31:25
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-13 17:35:08
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
  movieType: string,
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
  handleLineName(line: any, index: number) {
    const { movieInfo: { videoType } } = this.props
    const { name } = line
    let text = '1080P'
    if (videoType === 'movie') {
      name && (text = name)
    } else {
      text = `第${index + 1}集`
    }
    return text
  }
  render(): React.ReactNode {
    const { movieInfo: { id, name, lines, cover, description, score, year, videoType }, activeLine, activeEpisode } = this.props
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
                  <div className={Styles['line-btn-box']}>
                    {
                      item.source_list.map((itm:any, idx:number) => (
                        <a key={idx} href={goRouter({key: PAGE_KEY.MOVIE_DETAIL, id: `${id}_${videoType}_${index}_${idx}`, type: 'url'})}>
                          <div className={ activeLine === index && activeEpisode === idx ? `${Styles['line-btn']} ${Styles['active']}` : Styles['line-btn']}>
                            {/* {itm.name ? itm.name : '1080P'} */}
                            {this.handleLineName(itm, idx)}
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
  const path = context.params._id_type_line_episode.replace('.html','')
  const pathList = path.split('_')
  console.log('---pathList',path, pathList)
  const id = pathList[0]
  const movieType = pathList[1] || 'movie'
  const activeLine = +pathList[2] || 0
  const activeEpisode = +pathList[3] || 0
  let movieInfo = {}
  const { code, data } = await fetchMovieInfo({id, type: movieType})
  if (code === 1) {
    data.lines = data.lines.reverse() // 倒叙，一般后面的线路比较正常
    // movieType === 'movie' && (data.lines = data.lines.reverse()) 
    movieInfo = data
  }
  return { props: { movieInfo, activeLine, activeEpisode, movieType } }
}

export default MovieDetail