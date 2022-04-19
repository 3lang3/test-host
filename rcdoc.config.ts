import { defineConfig } from '@rcdoc/cli';

export default defineConfig({
  title: 'react vant',
  description: '轻量、可靠的移动端 React 组件库',
  logo: '/logo.svg',
  locales: false,
  // locales: [['zh', '中文'], ['en', 'English']],
  navs: [
    {
      title: '首页',
      path: '/',
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
      title: '了解更多',
      children: [
        {
          title: '在线体验',
          path: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json',
        },
        {
          title: 'Roadmap',
          path: 'https://github.com/ant-design/ant-design-mobile/discussions/3924',
        },
        {
          title: '参与贡献',
          path: 'https://github.com/3lang3/react-vant/blob/main/CONTRIBUTING.md',
        },
      ],
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
  menus: {
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
        include: ['/components'],
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
