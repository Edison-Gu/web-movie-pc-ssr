/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 22:44:25
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-21 22:53:28
 * @Descripttion: common page footer
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
}

interface Istate {
}

class index extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    return (
      <>
        我是尾部
      </>
    )
 }
}
export default index