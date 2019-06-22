/**
 * Typical Node.js environments often depend on passing environment variables to the application, 
 * for example: API_URL=https://api.zeit.co node index.js and then you can use API_URL anywhere 
 * in your application using process.env.API_URL. With universal rendering process.env is not 
 * available on the client side. So with Next 5.1 we're introducing a new feature: publicRuntimeConfig 
 * and serverRuntimeConfig. These can be set in next.config.js and will then be available using 
 * the next/config module. Example:
 *  // pages/index.js
 *  import getConfig from 'next/config'
 *  const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
 */
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   }
// });
module.exports.serverRuntimeConfig = {
    // Will only be available on the server side
    mySecret: 'secret'
};
module.exports.publicRuntimeConfig = {
    // Will be available on both server and client
    API_URL: process.env.API_URL
};