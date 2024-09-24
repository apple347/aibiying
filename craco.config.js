const path = require('path');

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {

    /* 修改cra的默认webpack配置 */
    webpack: {
        /* 给文件起别名 */
        alias: {
            "@": resolve("src"),
            "components": resolve('components'),
            "utils": resolve('utils')
        }
    }
}