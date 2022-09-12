/*
 * @Author: EdisonGu
 * @Date: 2022-08-23 00:12:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-09-12 15:50:41
 * @Descripttion: 
 */
import Router from 'next/router'
import { PAGE_KEY } from '@/constants'

interface PageUrl {
  id?: any,
  key?: string,
  query?: any,
  complete?: boolean,
  type?: string
}

const goRouter = ({key = PAGE_KEY.HOME, id = '', query = {}, type = 'route'}:PageUrl) => {
  let routePath = '/'
  switch (key) {
    case PAGE_KEY.HOME:
      routePath ='/'
      break;
    case PAGE_KEY.MOVIE:
      routePath = '/movie/index.html'
      break;
    case PAGE_KEY.MOVIE_DETAIL:
      routePath = `/movie/${id}.html`
      break;
    default:
      Router.push(`/`)
      break;
  }
  if (type === 'route') {
    Router.push(routePath)
  }
  return routePath
}

export {
  goRouter
}
