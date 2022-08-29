/*
 * @Author: EdisonGu
 * @Date: 2022-08-20 23:28:14
 * @LastEditors: EdisonGu
 * @LastEditTime: 2022-08-28 17:43:31
 * @Descripttion: next config
 */
/** @type {import('next').NextConfig} */
const path = require('path')
const env = process.env.NEXT_PUBLIC_ENV || 'dev'
const config = {
  dev: {
    baseDomain: 'http://127.0.0.1:7001',
    hostDomain: 'http://localhost:3000'
  },
  test: {
    baseDomain: 'http://www.emojiduck.com/api',
    hostDomain: 'http://www.emojiduck.com'
  },
  production: {
    baseDomain: 'https://www.emojiduck.com/api',
    hostDomain: 'https://www.emojiduck.com'
  }
}[env]
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import '@/styles/variables.module.scss';` // 引入全局scss变量
  },
  env: {
    BASE_DOMAIN: config.baseDomain,
    HOST_DOMAIN: config.hostDomain
  }
}

module.exports = nextConfig
