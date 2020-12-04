/*
 * @description:
 * @author: steve.deng
 * @Date: 2020-12-04 15:41:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2020-12-04 16:03:38
 */
// const hostname = 'http://192.168.197.117:81'
const hostname = 'http://test.smartshop.rfmember.net';
// const hostname = 'http://dev.smartshop.rfmember.net'
// const hostname = 'http://192.168.197.69:10542'
// const hostname = 'http://smartshop.rfchina.com'
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
console.log('当前构建环境参数：', process.env.NODE_ENV);

module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.ts',
            // 模板来源
            template: 'index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html'
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: '数据看板',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },
    // publicPath: './',
    publicPath: process.env.NODE_ENV === 'production' ? '/lesson_vue3/' : './',

    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true // 生产环境是否生成 sourceMap 文件
    // devServer: {
    // 	// 设置主机地址
    // 	host: '0.0.0.0',
    // 	// 设置默认端口
    // 	port: 8009,
    // 	//打开默认浏览器
    // 	open: true,
    // 	// // 设置代理
    // 	// proxy: {
    // 	// 	"/rf_pay": {
    // 	// 		target: hostname,
    // 	// 		changeOrigin: true,
    // 	// 		pathRewrite: {
    // 	// 			"^/rf_pay": "/rf_pay"
    // 	// 		}
    // 	// 	}
    // 	// }
    // },
    // chainWebpack: (config) => {
    // 	config.resolve.alias
    // 		.set("@", resolve("src"))
    // 		.set("assets", resolve("src/assets"))
    // 		.set("components", resolve("src/components"))
    // 		.set("static", resolve("static"))
    // 		.set("public", resolve("public"))
    // 	// .set("vue$", resolve("vue/dist/vue.esm.js"))

    // 	// it can improve the speed of the first screen, it is recommended to turn on preload
    // 	config.plugins.delete('preload')

    // 	// when there are many pages, it will cause too many meaningless requests
    // 	config.plugins.delete('prefetch')

    // },
};
