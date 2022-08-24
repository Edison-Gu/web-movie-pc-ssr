/*
 * @Author: EdisonGu
 * @Date: 2022-08-21 23:48:33
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-24 23:59:02
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
}

class TagButton extends Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    this.state = {
    }
  }
  async componentDidMount() {
    const { code, data } = await fetchTagList({})
    console.log('----data', data)
  }
  render(): React.ReactNode {
    return (
      <>
        tag
      </>
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
