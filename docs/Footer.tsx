import React from 'react'
import logo from '../public/logo.svg';
import './Footer.less'

export default () => (
  <footer className='rv-site-footer'>
    <div className='rv-site-footer__wrapper'>
      <img src={logo} />
      <p>参照 Vant 设计规范打造的 React 框架移动端组件库。</p>
      <div className='rv-site-footer__links'>
        <a target="_blank" href="">意见反馈</a>
        <a target="_blank" href="">码云镜像</a>
        <a target="_blank" href="">参与贡献</a>
        <a target="_blank" href="">Roadmap</a>
      </div>
      <div><strong>React Vant</strong> | Open-source MIT Licensed | Powered by <a href="https://github.com/3lang3/rcdoc">rcdoc</a>😘</div>
    </div>
  </footer>
)