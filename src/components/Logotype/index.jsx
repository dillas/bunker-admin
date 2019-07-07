import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Logotype = ({collapsed, theme, color}) => {
  const logoWidth = !collapsed ? "168" : "42"

  const svgViewBox = `0 0 ${logoWidth} 32`

  const logoColor = !color ? theme === 'dark' ? "#1DA57A" : "#E5E5E5" : color

  const star = <g className="star">
    <path d="M21.6275 7.28788V15.6626L23.9683 12.275L21.6275 7.28788Z"/>
    <path d="M23.0119 17.6892L26.8202 18.9902L30.6285 15.087L23.0119 17.6892Z"/>
    <path d="M22.6334 18.9345L26.4228 20.2291L27.3173 25.7132L22.6334 18.9345Z"/>
    <path d="M20.3725 23.9228V19.7157L15.6689 26.5229L20.3725 23.9228Z"/>
    <path d="M18.9881 17.6892L15.1798 18.9902L11.3715 15.087L18.9881 17.6892Z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M21 0L25.9443 10.5337L37 12.2229L29 20.4223L30.8885 32L21 26.5337L11.1115 32L13 20.4223L5 12.2229L16.0557 10.5337L21 0ZM25.1072 11.726L34.3226 13.134L27.6533 19.9695L29.2244 29.6012L21 25.0548L12.7756 29.6012L14.3467 19.9695L7.67741 13.134L16.1776 11.8352L19.8567 15.9936L17.1993 11.0729L21 2.97555L25.1072 11.726Z"/>
  </g>

  const title = <g className="title">
    <path d="M47.6948 11.4832H55.6107V21H45V5H55.6107V7.64516H47.6948V11.4832ZM47.6948 14.1283V18.3548H52.9159V14.1283H47.6948Z"/>
    <path d="M66.3929 14.614H58.6007V5H61.2955V11.9688H66.3929V5H69.0877V21H58.6007V18.3548H66.3929V14.614Z"/>
    <path d="M74.7754 14.2497V21H72.0806V5H74.7754V11.6046H79.9965V5H82.6913V21H79.9965V14.2497H74.7754Z"/>
    <path d="M90.9098 14.2497H88.376V21H85.6812V5H88.376V11.6046H90.9099L94.1505 5H96.9181L92.9921 12.7074L97.1695 21H94.2246L90.9098 14.2497Z"/>
    <path d="M101.928 11.6774H105.837V14.3226H101.928V18.3548H109.597V21H99.2336V5H109.597V7.64516H101.928V11.6774Z"/>
    <path d="M114.925 15.9009V21H112.23V5H122.841V15.9009H114.925ZM120.146 7.64516H114.925V13.2557H120.146V7.64516Z"/>
    <path d="M143.937 15.9009H137.134V5H139.705V13.3771H143.937V5H146.508V21H143.937V15.9009Z"/>
    <path d="M152.111 18.4762H159V21H149.626V18.0447L156.429 10.4688V7.52375H152.197V9.10205H149.626V5H159V10.9395L152.111 18.4762Z"/>
    <path d="M128.811 11.8871L126.081 12.2742L128.053 14.1434L127.587 16.7869L130.035 15.5407L132.473 16.7869L132.007 14.1434L133.989 12.2742L131.259 11.8871L130.035 9.48917L128.811 11.8871Z"/>
  </g>

  const subTitle = <g className="sub-title" fill="#646464">
    <path d="M46.3757 26C47.1613 26 47.7647 26.1813 48.1858 26.5438C48.6069 26.9003 48.8174 27.4411 48.8174 28.1662V30.9486H47.441V30.3414C47.1645 30.7946 46.6491 31.0211 45.8949 31.0211C45.5052 31.0211 45.1659 30.9577 44.8767 30.8308C44.5939 30.7039 44.3771 30.5287 44.2263 30.3051C44.0754 30.0816 44 29.8278 44 29.5438C44 29.0906 44.176 28.7341 44.5279 28.4743C44.8862 28.2145 45.4361 28.0846 46.1777 28.0846H47.3467C47.3467 27.7764 47.2493 27.5408 47.0545 27.3776C46.8596 27.2085 46.5674 27.1239 46.1777 27.1239C45.9075 27.1239 45.6404 27.1662 45.3764 27.2508C45.1187 27.3293 44.8987 27.4381 44.7165 27.577L44.1885 26.5891C44.4651 26.4018 44.795 26.2568 45.1784 26.1541C45.5681 26.0514 45.9672 26 46.3757 26ZM46.2626 30.0695C46.514 30.0695 46.7371 30.0151 46.9319 29.9063C47.1268 29.7915 47.265 29.6254 47.3467 29.4079V28.9094H46.338C45.7346 28.9094 45.433 29.0997 45.433 29.4804C45.433 29.6616 45.5052 29.8066 45.6498 29.9154C45.8006 30.0181 46.0049 30.0695 46.2626 30.0695Z"/>
    <path d="M55.7797 29.7885V32H54.4127V30.9486H50.8491V32H49.4822V29.7885H49.6896C50.0038 29.7825 50.2207 29.6042 50.3401 29.2538C50.4595 28.9033 50.5349 28.4048 50.5663 27.7583L50.6323 26.0725H55.0538V29.7885H55.7797ZM51.8956 27.858C51.8767 28.3535 51.8359 28.7583 51.773 29.0725C51.7165 29.3867 51.6065 29.6254 51.4431 29.7885H53.5831V27.2326H51.9239L51.8956 27.858Z"/>
    <path d="M61.6546 30.9486V28.0302L60.1368 30.4773H59.5145L58.0344 28.0211V30.9486H56.7052V26.0725H58.2418L59.8634 28.8912L61.5886 26.0725H62.965L62.9838 30.9486H61.6546Z"/>
    <path d="M64.3926 26.0725H65.8538V28.9728L68.3238 26.0725H69.6719V30.9486H68.2106V28.0483L65.7501 30.9486H64.3926V26.0725Z"/>
    <path d="M71.0856 26.0725H72.5469V27.9758H74.7529V26.0725H76.2236V30.9486H74.7529V29.1269H72.5469V30.9486H71.0856V26.0725Z"/>
    <path d="M79.8657 29.0997H79.1021V30.9486H77.6314V26.0725H79.1021V27.9668H79.894L81.2704 26.0725H82.8353L81.063 28.4109L82.9579 30.9486H81.2233L79.8657 29.0997Z"/>
    <path d="M85.5583 26C86.3439 26 86.9473 26.1813 87.3684 26.5438C87.7895 26.9003 88 27.4411 88 28.1662V30.9486H86.6236V30.3414C86.3471 30.7946 85.8317 31.0211 85.0775 31.0211C84.6878 31.0211 84.3485 30.9577 84.0593 30.8308C83.7765 30.7039 83.5597 30.5287 83.4089 30.3051C83.258 30.0816 83.1826 29.8278 83.1826 29.5438C83.1826 29.0906 83.3586 28.7341 83.7105 28.4743C84.0688 28.2145 84.6187 28.0846 85.3603 28.0846H86.5293C86.5293 27.7764 86.4319 27.5408 86.2371 27.3776C86.0422 27.2085 85.75 27.1239 85.3603 27.1239C85.0901 27.1239 84.823 27.1662 84.559 27.2508C84.3013 27.3293 84.0813 27.4381 83.8991 27.577L83.3712 26.5891C83.6477 26.4018 83.9776 26.2568 84.361 26.1541C84.7507 26.0514 85.1498 26 85.5583 26ZM85.4452 30.0695C85.6966 30.0695 85.9197 30.0151 86.1145 29.9063C86.3094 29.7915 86.4476 29.6254 86.5293 29.4079V28.9094H85.5206C84.9172 28.9094 84.6156 29.0997 84.6156 29.4804C84.6156 29.6616 84.6878 29.8066 84.8324 29.9154C84.9832 30.0181 85.1875 30.0695 85.4452 30.0695Z"/>
  </g>

  return (
    <svg
      width={logoWidth}
      height="32"
      viewBox={svgViewBox}
      fill={logoColor}
      className='logo'
      xmlns="http://www.w3.org/2000/svg"
    >
      {star}
      {!collapsed && title}
      {!collapsed && subTitle}
    </svg>
  )
}

Logotype.propTypes = {
  sideBarCollapsed: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
  color: PropTypes.string
}

export default Logotype