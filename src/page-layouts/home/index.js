import header from '@/pages/home/header'
import cardOne from '@/pages/home/card-one'
import cardTwo from '@/pages/home/card-two'
import cardThree from '@/pages/home/card-three'
import cardFour from '@/pages/home/card-four'
import cardFive from '@/pages/home/card-five'
import cardSix from '@/pages/home/card-six'
import cardMiddle from '@/pages/home/card-middle'

const screenWidth = 1920
const screenHeight = 1080
const cardWidth = 470
const cardHeight = 310
const cardBgColor = 'rgb(29, 47, 86, 0.3)'
const appBgColor = '#161c2c'
const margin = 20

const headerHeight = 80
const cardOneTop = headerHeight + margin
const cardTwoTop = cardOneTop
const cardThreeTop = cardTwoTop + cardHeight + margin
const cardFiveTop = cardThreeTop + cardHeight + margin
const cardSixTop = cardFiveTop
const cardMiddleTop = cardFiveTop
const cardMiddleWidth = screenWidth - cardWidth * 2 - margin * 4

function getHeightPercent (height) {
  return getPercent(height, screenHeight)
}
function getWidthPercent (width) {
  return getPercent(width, screenWidth)
}
function getPercent (a, b) {
  return (a / b * 100) + '%'
}

export default {
  name: 'home', // 组件唯一标识
  widthRange: [1300, 1920], // 宽度范围，从 widthRange[0] ~ 100%
  heightRange: [700, 1080], // 高度范围，从 heightRange[0] ~ 100%
  style: { // 定义样式
    width: '100%',
    height: '100%',
    background: appBgColor
  },
  components: [ // 组件配置
    {
      name: 'homeHeader',
      style: {
        top: 0,
        left: 0,
        right: 0,
        height: getHeightPercent(headerHeight)
      },
      render: header // 渲染模板
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
