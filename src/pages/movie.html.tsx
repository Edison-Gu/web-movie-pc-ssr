/*
 * @Author: EdisonGu
 * @Date: 2022-08-23 00:27:04
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-23 00:27:51
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
}

interface Istate {
}

class movie extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  render(): React.ReactNode {
    return (
      <>
        WOWHI
      </>
    )
 }
}
export default movie