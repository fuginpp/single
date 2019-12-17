const path = require("path")
 
exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
    // 获取dir的绝对路径
}
