import React from 'react'
import logo from '../public/logo.svg';
import { useCN } from '../docs/component/home'
import './Footer.less'

export default () => {
  const isCN = useCN();
  return (
    <footer className='rv-site-footer'>
      <div className='rv-site-footer__wrapper'>
        <img src={logo} />
        <p>{ isCN ? '参照 Vant 设计规范打造的 React 框架移动端组件库。' : 'Mobile component library of React framework built with reference to Vant design specification'}</p>
        <div className='rv-site-footer__links'>
          <a target="_blank" href="https://github.com/3lang3/react-vant/issues">{isCN ? '意见反馈' : 'Issues'}</a>
          <a target="_blank" href="https://gitee.com/lang3/react-vant">{isCN ? '码云镜像' : 'Gitee'}</a>
          <a target="_blank" href="https://github.com/3lang3/react-vant/blob/main/CODE_OF_CONDUCT.md">{isCN ? '参与贡献' : 'Contribute'}</a>
          <a target="_blank" href="https://github.com/3lang3/react-vant/projects/4">Roadmap</a>
        </div>
        <div><strong>React Vant</strong> | Open-source MIT Licensed | Powered by <a href="https://github.com/3lang3/rcdoc">rcdoc</a>😘</div>
      </div>
    </footer>
  )
}