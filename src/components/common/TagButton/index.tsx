/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 23:48:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 14:24:38
 * @Descripttion: 
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import Styles from './index.module.scss'
import { fetchTagList } from '@/api'

interface Iprops {
  tagList?: Array<any>
}

interface Istate {
  tempList: any,
  activeIndex: number
}

class TagButton extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  tagClick(activeIndex: number) {
    this.setState({activeIndex})
  }
  render(): React.ReactNode {
    const { activeIndex } = this.state
    const { tagList } = this.props
    return (
      <div className={Styles['tag-btn-container']}>
        {
          tagList?.map((item: any, index: number) => (
            <div
              className={activeIndex === index ? `${Styles.active} ${Styles['btn-item']}` : Styles['btn-item']}
              key={index}
              onClick={() => this.tagClick(index)}>{item.tagName}</div>
          ))
        }
      </div>
    )
 }
}

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   let list = []
//   const { code, data } = await fetchTagList({})
//   console.log('------', code)
//   code === 1 && (list = data)
//   return { props: { tagList: list } }
// }

export async function getStaticProps() {
  let list = []
  const { code, data } = await fetchTagList({})
  console.log('------', code)
  code === 1 && (list = data)
  return { props: { tagList: list } }
}
export default TagButton
