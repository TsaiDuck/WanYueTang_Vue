const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  publicPath: './',
  devServer: {
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', //请求的服务器地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' } //可以让发过去的请求不带/api打头
      }
    }
  }
})
