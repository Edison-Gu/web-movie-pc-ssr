/*
 * @Author: EdisonGu
 * @Date: 2022-08-28 18:09:54
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-13 17:18:44
 * @Descripttion: 
 */
interface MovieInfo {
  id: number,
  name: string,
  cover: string,
  year: string | number,
  videoType: string
}

export {
  MovieInfo
}