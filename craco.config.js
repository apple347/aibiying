const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {

  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],

  /* 修改cra的默认webpack配置 */
  webpack: {
    /* 给文件起别名 */
    alias: {
      "@": resolve("src"),
      "components": resolve('components'),
      "utils": resolve('utils'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}