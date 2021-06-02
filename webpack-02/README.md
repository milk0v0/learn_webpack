## Browerslist
+ 作用：声明一段浏览器集合
+ 工具可以根据这段集合描述，输出兼容性的代码



## Browerslist 配置

+ package.json [***browserslist***]
+ .browserslistrc
  + `last 2 versions`
  + `last 1 version`
  + `> 1%`
  + `cover 99%` 
  + `chrome > 80`
  + `ie 6-8`
  + `not ie < 11`



## 版本依据

+ can i use

+ http://browserl.ist/ (已停止维护)

+ ```shell
  npx browserslist@4.16.6 "last 2 versions, > 1%"
  ```