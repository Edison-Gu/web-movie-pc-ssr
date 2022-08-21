/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 22:42:00
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-21 22:53:17
 * @Descripttion: common page head
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
}

interface Istate {
}

class PageHead extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    return (
      <div className={Styles['page-container']}>
        我是头部
      </div>
    )
 }
}
export default PageHead