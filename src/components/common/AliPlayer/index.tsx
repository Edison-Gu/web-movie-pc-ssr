/*
 * @Author: EdisonGu
 * @Date: 2022-09-12 18:40:47
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 22:43:57
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
  url: string
}

interface Istate {
}

class AliPlayer extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(): void {
    this.initAliplayer()
  }
  initAliplayer() {
    const Aliplayer = (window as any).Aliplayer
    const { url } = this.props
    const player = new Aliplayer({
      id: 'J_prismPlayer',
      width: "100%",
      height: "100%",
      autoplay: true,
      source: url,//播放地址，可以是第三方点播地址，或阿里云点播服务中的播放地址。
    },function(){
      console.log('The player is created.')
   })
  }
  render(): React.ReactNode {
    return (
      <div className={Styles['ali-palyer-container']}>
        <div className={Styles['ali-palyer-wrap']} id="J_prismPlayer"></div>
      </div>
    )
 }
}
export default AliPlayer