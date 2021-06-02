module.exports = {
  // 根据 目标浏览器集合，自动添加补齐css3特性 浏览器浅醉
  plugins: [require('autoprefixer')({
    // overrideBrowserslist: ['last 1version']
  })]
}