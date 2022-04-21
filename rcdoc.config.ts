import { defineConfig } from '@rcdoc/cli';

export default defineConfig({
  title: 'react vant',
  description: '轻量、可靠的移动端 React 组件库',
  logo: '/logo.svg',
  locales: [['zh', '🇨🇳 中文'], ['en', '🇺🇸 English']],
  navs: {
    'zh': [
      {
        title: '首页',
        path: '/',
        index: true
      },
      {
        title: '文档',
        path: '/guide',
      },
      {
        title: '组件',
        path: '/components',
      },
      {
        title: 'Hooks',
        path: '/hooks',
      },
      {
        title: 'Vant',
        path: 'https://github.com/ant-design/ant-design',
      },
      {
        title: 'Taroify',
        path: 'https://github.com/mallfoundry/taroify',
      },
    ],
    'en': [
      {
        title: 'Home',
        path: '/en',
        index: true,
      },
      {
        title: 'Guide',
        path: '/en/guide',
      },
      {
        title: 'Components',
        path: '/en/components',
      },
      {
        title: 'Hooks',
        path: '/en/hooks',
      },
      {
        title: 'Vant',
        path: 'https://github.com/ant-design/ant-design',
      },
      {
        title: 'Taroify',
        path: 'https://github.com/mallfoundry/taroify',
      },
    ],
  },
  menus: {
    '/components': [
      {
        title: '布局组建',
        children: [
          '/components/flex',
          '/components/space',
        ],
      },
      {
        title: '基础组建',
        children: [
          '/components/button',
          '/components/cell',
          '/components/config-provider',
          '/components/typography',
          '/components/icon',
          '/components/image',
          '/components/popup',
          '/components/styles',
          '/components/toast',
        ],
      },
      {
        title: '表单组建',
        children: [
          '/components/calendar',
          '/components/cascader',
          '/components/checkbox',
          '/components/datetime-picker',
          '/components/field',
          '/components/form',
          '/components/number-keyboard',
          '/components/password-input',
          '/components/picker',
          '/components/radio',
          '/components/rate',
          '/components/search',
          '/components/slider',
          '/components/stepper',
          '/components/switch',
          '/components/uploader',
        ],
      },
      {
        title: '反馈组件',
        children: [
          '/components/action-sheet',
          '/components/dialog',
          '/components/dropdown-menu',
          '/components/loading',
          '/components/notify',
          '/components/overlay',
          '/components/pull-refresh',
          '/components/share-sheet',
          '/components/swipe-cell',
        ],
      },
      {
        title: '展示组件',
        children: [
          '/components/badge',
          '/components/card',
          '/components/circle',
          '/components/collapse',
          '/components/count-down',
          '/components/divider',
          '/components/empty',
          '/components/image-preview',
          '/components/lazyload',
          '/components/list',
          '/components/skeleton',
          '/components/steps',
          '/components/notice-bar',
          '/components/popover',
          '/components/progress',
          '/components/sticky',
          '/components/swiper',
          '/components/tag',
        ],
      },
      {
        title: '导航组件',
        children: [
          '/components/action-bar',
          '/components/grid',
          '/components/index-bar',
          '/components/nav-bar',
          '/components/pagination',
          '/components/sidebar',
          '/components/tabs',
          '/components/tabbar',
        ],
      },
      {
        title: '业务组件',
        children: [
          '/components/area',
          '/components/product-card',
          '/components/coupon-list',
          '/components/submit-bar',
          '/components/sku'
        ],
      },
    ],
    '/hooks': [
      {
        children: ['/hooks/intro'],
      }
    ],
  },
  resolve: {
    includes: ['docs', 'src'],
  },
  build: {
    dynamicImport: true,
  },
  site: {
    // slug: 'menu',
    favicon: '/favicon.png',
    github: 'https://github.com/3lang3/rcdoc',
    metas: [
      {
        name: 'keywords',
        content: 'dumi, base on umi',
      },
      {
        name: 'description',
        content: '📖 为组件开发场景而生的文档工具',
      },
      {
        name: 'docsearch:version',
        content: 'v3',
      },
    ],
    versions: [
      { title: 'v2', path: 'https://v2' },
      { title: 'v3', path: 'https://v3' },
    ],
    themeConfig: {
      simulator: {
        include: ['/components', '/en/components'],
        compact: true
      },
    },
    algolia: {
      appId: 'E3Q32VXBYB',
      apiKey: 'c286dbe93a56bf25885c5e47cbe8bd4a',
      indexName: 'react-vant',
      sitemap: {
        hostname: 'https://3lang3.github.io/react-vant',
      }
    }
  },
  vite: {
    optimizeDeps: {
      include: ['@react-vant/icons'],
    },
  },
});
