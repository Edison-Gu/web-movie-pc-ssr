/*
 * @Author: EdisonGu
 * @Date: 2022-09-12 15:31:25
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 15:32:45
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
}

interface Istate {
}

class MovieDetail extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    return (
      <>
        我是详情
      </>
    )
 }
}
export default MovieDetail