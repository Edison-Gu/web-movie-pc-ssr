/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 23:48:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-25 23:43:48
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
      tempList: [],
      activeIndex: 0
    }
  }
  async componentDidMount() {
    const { code, data } = await fetchTagList({})
    console.log('----data', data)
    this.setState({
      tempList: data
    })
  }
  tagClick(activeIndex: number) {
    this.setState({activeIndex})
  }
  render(): React.ReactNode {
    const { tempList, activeIndex } = this.state
    return (
      <div className={Styles['tag-btn-container']}>
        {
          tempList.map((item: any, index: number) => (
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
