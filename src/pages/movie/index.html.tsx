/*
 * @Author: EdisonGu
 * @Date: 2022-08-23 00:24:03
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-24 23:49:01
 * @Descripttion: 
 */
import React, { Component } from 'react'
import type { GetServerSideProps } from 'next'
import { fetchMovieList } from '@/api'
interface Iprops {
  list: Array<any>
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
        movie
      </>
    )
 }
}
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let list = []
  const { code, data } = await fetchMovieList({})
  if (code === 1) {
    list = data
  }
  return { props: { list } }
}
export default index