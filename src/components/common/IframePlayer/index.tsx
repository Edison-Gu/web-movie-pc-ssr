/*
 * @Author: EdisonGu
 * @Date: 2022-09-12 22:05:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 22:18:50
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
  url: string
}

interface Istate {
}

class IframePalyer extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    const { url } = this.props
    return (
      <div className={Styles['iframe-player-container']}>
        <iframe src={url} width="100%" height="100%" allowFullScreen={true} />
      </div>
    )
 }
}
export default IframePalyer