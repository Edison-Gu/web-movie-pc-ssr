/*
 * @Author: EdisonGu
 * @Date: 2022-08-22 23:22:54
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-23 00:21:42
 * @Descripttion: constant
 */
import { PagePathname } from '@/types/constants'

// menu list
const MENU_LIST:Array<any> = [
  {
    label: '主页',
    key: 'home',
  },
  {
    label: '电影',
    key: 'movie',
  },
  {
    label: '剧集',
    key: 'episodes',
  },
  {
    label: '动漫',
    key: 'comics',
  }
]

// page path
const PAGE_PATHNAME = ({key = 'HOME'} : PagePathname) => {
  const pathname = {
    HOME: '/'
  }[key]
  return pathname
}

// page key
const PAGE_KEY = {
  HOME: 'home', // 主页
  MOVIE: 'movie', // 表情包主页
  EMOTICON_DETAIL: 'emoticonDetail', // 表情包详情
  EMOJI_DETAIL: 'emojiDetail',  // 表情详情
  SEARCH_KEYWORD: 'searchKeyword',  // 搜索主页
}

export {
  MENU_LIST,
  PAGE_PATHNAME,
  PAGE_KEY
}