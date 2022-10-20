# yui-layout
yui-layout源码  

使用 yui-layout ，能够使你不再聚焦于css，而向编写js配置项，从而实现任意场景布局，特别是在大屏自适应兼容开发场景中。  

如果你正在开发一个**大屏**项目，而你对页面**自适应布局**又没有什么即时有效的解决方法，或许yui-layout就能完美的帮你解决你当前遇到的困难，并且这个布局过程，或许只需要几分钟时间。 

##### 源码位置
```
cd src/packages/layout
```
##### 打包发布
```
yarn run package

cd yui-layout

npm version patch
or
npm verion minor
or
npm version major

npm publish
```

##### 版本管理
npm的发包需要遵循语义化版本，一个版本号包含三个部分：MAJOR.MINOR.PATCH  
- MAJOR 表示主版本号，当你做了不兼容的API修改
- MINOR 表示次版本号，当你做了向下兼容的功能性新增；
- PATCH 表示修订号,当你做了向下兼容的问题修正;  

我们可以使用npm version 命令来自动修改版本号，比如：
```
// version = v1.0.0

npm version patch // v1.0.1
npm version prepatch // v1.0.2-0
npm version minor // v1.1.0
npm version major // v2.0.0
```
一般来说还有先行版本，测试版本等，他们这样命名
- 3.1.0-alpha.0
- 3.1.0-beta.0  

如果我们发布先行版本，`npm version prepatch` 命令得出的版本号好像就不够规范了，我们只能使用 `npm version 1.0.0-alpha.1` 指定版本号，不过还好，在 npm 6.4.0 之后，我们可以使用 --preid 参数：

```
npm version prerelease --preid=alpha
```