/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 22:42:00
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 14:31:19
 * @Descripttion: common page head
 */
import React, { Component } from 'react'
import Styles from './index.module.scss'
import { goRouter } from '@/utils/jumpLink'
import { MENU_LIST } from '@/constants'

interface Iprops {
}

interface Istate {
  // menuList: Array<any>,
  activeIndex: number
}

class PageHead extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  menuClick(index : number) {
    goRouter({key: MENU_LIST[index].key})
    this.setState({
      activeIndex: index
    })
  }
  render(): React.ReactNode {
    const { activeIndex } = this.state
    return (
      <div className={Styles['page-container']}>
        <div className={Styles['page-wrap']}>
          <p className={Styles['logo']}>MovieFly</p>
          <ul className={Styles['menu-ul']}>
            {
              MENU_LIST.map((item, index) => (
                <li
                  key={item.key}
                  className={Styles[activeIndex === index ? 'active' : '']}
                  onClick={() => this.menuClick(index)}>{item.label}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
 }
}
export default PageHead