/*
 * @Author: EdisonGu
 * @Date: 2022-08-24 23:18:49
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-24 23:43:51
 * @Descripttion: 
 */
import AxiosService from '../instance'
import { IRes } from '@/types/api'

const fetchTagList = async (params: any) : Promise<IRes> => {
  const res =  await AxiosService.get('tagList', { params })
  return res
}

const fetchMovieList = async (params: any) : Promise<IRes> => {
  const res =  await AxiosService.get('movieList', { params })
  return res
}

export {
  fetchTagList,
  fetchMovieList
}