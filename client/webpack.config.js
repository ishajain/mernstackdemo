require('@babel/register');
const webpackMerge = require ('webpack-merge');

const commonConfig = require('./config/webpack/webpack.common.js');

module.exports =  ({ env }) => {
  const envConfig = require(`./config/webpack/webpack.${env}.js`);
  return webpackMerge(commonConfig, envConfig);
};