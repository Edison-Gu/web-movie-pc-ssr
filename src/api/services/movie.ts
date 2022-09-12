/*
 * @Author: EdisonGu
 * @Date: 2022-08-24 23:18:49
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 23:43:23
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

const fetchMovieInfo = async (params: any) : Promise<IRes> => {
  const res =  await AxiosService.get('movieInfo', { params })
  return res
}

const fetchMovieRecommend = async (params: any) : Promise<IRes> => {
  const res =  await AxiosService.get('movieRecommend', { params })
  return res
}

/**
 * 获取首页推荐
 * @param params 
 * @returns 
 */
const fetchHomeRecommend = async (params: any) : Promise<IRes> => {
  const res =  await AxiosService.get('homeRecommend', { params })
  return res
}

export {
  fetchTagList,
  fetchMovieList,
  fetchMovieInfo,
  fetchMovieRecommend,
  fetchHomeRecommend
}