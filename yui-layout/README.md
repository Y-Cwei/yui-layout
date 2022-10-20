## @ycwei/yui-layout
#### @ycwei/yui-layout是一套基于vue开发的UI库，能直接简化你的布局开发
如果你正在开发一个**大屏**项目，而你对页面**自适应布局**又没有什么即时有效的解决方法，或许yui-layout就能完美的帮你解决你当前遇到的困难，并且这个布局过程，或许只需要几分钟时间。 

当然，普通的流式布局也能使用yui-layout，但似乎又显的没那么必要。

#### 安装步骤
##### 步骤一、安装
```
npm install @ycwei/yui-layout
or
yarn add @ycwei/yui-layout
```
##### 步骤二、样式引用
```
import '@ycwei/yui-layout/yui-layout.css'
```
##### 步骤三、使用
```
import Vue from 'vue'
import YuiLayout from '@ycwei/yui-layout'
import '@ycwei/yui-layout/yui-layout.css'

Vue.use(YuiLayout)
```

#### 应用步骤
##### 步骤一、使用布局组件
```
<yui-layout :layouts="layouts" />
```
##### 步骤二、配置布局选项
```
import HelloWorld from './components/HelloWorld.vue'

const option1 = {
  name: 'home', // 布局名称
  widthRange: [1300, 1920], // 宽度范围，从 widthRange[0] ~ 100%
  heightRange: [700, 1080], // 高度范围，从 heightRange[0] ~ 100%
  style: { // 定义样式
    width: '100%',
    height: '100%',
    background: '#161c2c'
  },
  components: [ // 组件配置
    name: '', // 组件唯一标识
    style: {}, // css样式
    render：HelloWorld // vue组件
  ]
}

export default {
  data () {
    return {
      layouts: [ option1 ] // 支持多布局方式
    }
  }
}
```

#### demo案例
##### 1.初始化vue项目
```
vue create yui-layout-test
cd yui-layout-test
yarn add @ycwei/yui-layout
```
##### 2.main.js引入
```
import Vue from 'vue'
import App from './App.vue'
import YuiLayout from '@ycwei/yui-layout'
import '@ycwei/yui-layout/yui-layout.css'

Vue.use(YuiLayout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

```
##### 3.创建目录结构
1. src下创建pages/home目录，创建card模板，*旨在清楚直观的傻瓜式编写demo，你完全可以跳过此步骤*
    1. 创建header.vue
        ```
        <template>
          <div class="title">主标题</div>
        </template>
        
        <script>
        export default {
          name: 'HomeHeader'
        }
        </script>
        
        <style scoped>
        .title{
          height: 100%;
          font-size: 18px;
          line-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        </style>
        ```
    2. 创建card-one.vue
        ```
        <template>
          <div>CardOne</div>
        </template>
        
        <script>
        export default {
          name: 'CardOne'
        }
        </script>
        ``
    3. 创建card-two.vue
        ```
        <template>
          <div>CardTwo</div>
        </template>
        
        <script>
        export default {
          name: 'CardTwo'
        }
        </script>
        ```
    4. 创建card-three.vue
        ```
        <template>
          <div>CardThree</div>
        </template>
        
        <script>
        export default {
          name: 'CardThree'
        }
        </script>
        ```
    5. 创建card-four.vue
        ```
        <template>
          <div>CardFour</div>
        </template>
        
        <script>
        export default {
          name: 'CardFour'
        }
        </script>
        ```
    6. 创建card-five.vue
        ```
        <template>
          <div>CardFive</div>
        </template>
        
        <script>
        export default {
          name: 'CardFive'
        }
        </script>
        ```
    7. 创建card-six.vue
        ```
        <template>
          <div>CardSix</div>
        </template>
        
        <script>
        export default {
          name: 'CardSix'
        }
        </script>
        ```
    8. 创建card-middle.vue
        ```
        <template>
          <div>CardMiddle</div>
        </template>
        
        <script>
        export default {
          name: 'CardMiddle'
        }
        </script>
        ```
2. src/pages/home下创建index.js，作为所有组件的配置入口，**你需要特别注意当前配置文件，特别是component配置项**，当然，在你项目中使用，可按项目组规范自行规范此文件
    ```
    import header from '@/pages/home/header'
    import cardOne from '@/pages/home/card-one'
    import cardTwo from '@/pages/home/card-two'
    import cardThree from '@/pages/home/card-three'
    import cardFour from '@/pages/home/card-four'
    import cardFive from '@/pages/home/card-five'
    import cardSix from '@/pages/home/card-six'
    import cardMiddle from '@/pages/home/card-middle'
    
    // 设计稿尺寸
    const screenWidth = 1920 // 设计图宽度
    const screenHeight = 1080 // 设计图高度
    const cardWidth = 470 // 卡片宽度
    const cardHeight = 310 // 卡片高度
    const cardBgColor = 'rgb(29, 47, 86, 0.3)'
    const appBgColor = '#161c2c'
    const margin = 20
    
    // 计算各区域尺寸
    const headerHeight = 80
    const cardOneTop = headerHeight + margin
    const cardTwoTop = cardOneTop
    const cardThreeTop = cardTwoTop + cardHeight + margin
    const cardFiveTop = cardThreeTop + cardHeight + margin
    const cardSixTop = cardFiveTop
    const cardMiddleTop = cardFiveTop
    const cardMiddleWidth = screenWidth - cardWidth * 2 - margin * 4
    
    // 高度百分比
    function getHeightPercent (height) {
      return getPercent(height, screenHeight)
    }
    // 宽度百分比
    function getWidthPercent (width) {
      return getPercent(width, screenWidth)
    }
    function getPercent (a, b) {
      return (a / b * 100) + '%'
    }
    
    export default {
      name: 'home', // 布局名称
      widthRange: [1300, 1920], // 宽度范围，从 widthRange[0] ~ 100%
      heightRange: [700, 1080], // 高度范围，从 heightRange[0] ~ 100%
      style: { // 定义样式
        width: '100%',
        height: '100%',
        background: appBgColor
      },
      components: [ // 组件配置
        {
          name: 'homeHeader', // 组件唯一标识
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: getHeightPercent(headerHeight) // 为了自适应，宽高使用百分比
          },
          render: header // vue组件
        },
        {
          name: 'cardOne',
          style: {
            width: getWidthPercent(cardWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardOneTop),
            left: getWidthPercent(margin),
            background: cardBgColor
          },
          render: cardOne
        },
        {
          name: 'cardTwo',
          style: {
            width: getWidthPercent(cardWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardTwoTop),
            right: getWidthPercent(margin),
            background: cardBgColor
          },
          render: cardTwo
        },
        {
          name: 'cardThree',
          style: {
            width: getWidthPercent(cardWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardThreeTop),
            left: getWidthPercent(margin),
            background: cardBgColor
          },
          render: cardThree
        },
        {
          name: 'cardFour',
          style: {
            width: getWidthPercent(cardWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardThreeTop),
            right: getWidthPercent(margin),
            background: cardBgColor
          },
          render: cardFour
        },
        {
          name: 'cardFive',
          style: {
            width: getWidthPercent(cardWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardFiveTop),
            left: getWidthPercent(margin),
            background: cardBgColor
          },
          render: cardFive
        },
        {
          name: 'cardSix',
          style: {
            width: getWidthPercent(cardWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardSixTop),
            right: getWidthPercent(margin),
            background: cardBgColor
          },
          render: cardSix
        },
        {
          name: 'cardMiddle',
          style: {
            width: getWidthPercent(cardMiddleWidth),
            height: getHeightPercent(cardHeight),
            top: getHeightPercent(cardMiddleTop),
            left: getWidthPercent(cardWidth + 2 * margin),
            background: cardBgColor
          },
          render: cardMiddle
        }
      ]
    }
    ```
    **yui-layout通过百分比实现的自适应，你需要特别注意style中的getWidthPercent，getHeightPercent**
3. src/components下创建home目录，创建index.vue，代码如下
    ```
    <template>
      <yui-layout :layouts="layouts" />
    </template>
    
    <script>
    import HomeLayouts from '@/pages/home'
    
    export default {
      name: 'HOME',
      data () {
        return {
          layouts: [HomeLayouts]
        }
      }
    }
    </script>
    ```

##### 3.App.vue引入home组件
```
<template>
  <div id="app">
    <layout-demo />
  </div>
</template>

<script>
import LayoutDemo from '@/components/home'

export default {
  name: 'App',
  components: {
    LayoutDemo
  }
}
</script>

<style>
html,
body,
#app{
  width: 100%;
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
  color: #fff;
}
</style>
```
yui-layout包裹容器宽高默认是100%，注意父容器要有宽高，demo为 #app

##### 4. 启动项目，查看效果
```
yarn serve
```

至此，你应该可以预览demo了，按需去card里编写你自己的业务逻辑吧