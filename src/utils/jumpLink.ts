/*
 * @Author: EdisonGu
 * @Date: 2022-08-23 00:12:18
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-23 00:24:32
 * @Descripttion: 
 */
import Router from 'next/router'
import { PAGE_KEY } from '@/constants'

interface PageUrl {
  id?: any,
  key?: string,
  query?: any,
  complete?: boolean
}

const goRouter = ({key = PAGE_KEY.HOME, id = '', query = {}}:PageUrl) => {
  console.log('-----key', key, PAGE_KEY.HOME)
  switch (key) {
    case PAGE_KEY.HOME:
      Router.push(`/`)
      break;
    case PAGE_KEY.MOVIE:
      Router.push('/movie/index.html')
        break;
    case PAGE_KEY.EMOTICON_DETAIL:
      Router.push(`/emoticon/${id ? id : 'index'}.html`) // 没有传id默认进入表情包页面
      break
    case PAGE_KEY.EMOJI_DETAIL:
      Router.push(id ? `/emoji/${id}.html` : `/emoticon/index.html`) // 没有传id默认进入表情包页面
      break
    case PAGE_KEY.SEARCH_KEYWORD:
      Router.push({
        pathname: `/search/keyword/${query.keyword}.html`,
        query
      })
      break
    default:
      Router.push(`/`)
      break;
  }
}

export {
  goRouter
}
