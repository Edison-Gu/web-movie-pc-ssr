/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 23:48:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-21 23:50:22
 * @Descripttion: 
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'

interface Iprops {
  btnList: Array<any>
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
      </>
    )
 }
}
export default index