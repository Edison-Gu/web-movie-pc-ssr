/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 22:44:25
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 14:46:49
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
      <div className={Styles['footer-container']}>
        <div className={Styles['footer-wrap']}>
          <span>
            © 2022 MovieFly. All Rights Reserved.
          </span>
        </div>
      </div>
    )
 }
}
export default index