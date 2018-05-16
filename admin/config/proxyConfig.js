module.exports = {
  proxy: {
    '/apis': {    //将******印射为/apis
      target: '127.0.0.1:3000',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/apis': ''   //需要rewrite的,
      }
    }
  }
}
