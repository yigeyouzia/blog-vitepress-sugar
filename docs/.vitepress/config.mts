import { defineConfig } from "@sugarat/theme/node";
import { blogTheme } from "./blog-theme";

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题配置
  extends: blogTheme,
  lang: "zh-cn",
  title: "cyt的笔记屋",
  description: "粥里有勺糖的博客主题，基于 vitepress 实现",
  vite: {
    optimizeDeps: {
      include: ["element-plus"],
      exclude: ["@sugarat/theme"],
    },
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "上次更新于",
    footer: {
      message: "自定义底部内容",
      copyright:
        'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>',
    },
    logo: "/avatar.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "首页", link: "/" },
      { text: "关于作者", link: "/about" },
      { text: "foo", link: "/foo/index" },
      { text: "bar", link: "/bar/index" },
      { text: "sop", items: [{ text: "sopitem", link: "/sop/index" }] },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/yigeyouzia",
      },
    ],
  },
});
