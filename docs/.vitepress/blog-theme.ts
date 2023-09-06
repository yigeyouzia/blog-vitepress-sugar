// 主题独有配置
import { getThemeConfig } from "@sugarat/theme/node";

// 开启RSS支持
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }
// 详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 文章默认作者
  author: "cyt",
  // 友链
  friend: [
    {
      nickname: "cyt",
      des: "你的指尖用于改变世界的力量",
      avatar: "avatar.png",
      url: "https://sugarat.top",
    },
  ],
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: "pagefind",
  // popover: {
  //   title: "公告",
  //   body: [
  //     {
  //       type: "text",
  //       content: "QQ交流群：681489336 🎉🎉",
  //     },
  //     {
  //       type: "text",
  //       content: "👇公众号👇---👇 微信 👇",
  //     },
  //     {
  //       type: "image",
  //       src: "https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210",
  //     },
  //     {
  //       type: "text",
  //       content: "欢迎大家加群&私信交流",
  //     },
  //     {
  //       type: "button",
  //       content: "博客",
  //       link: "https://sugarat.top",
  //     },
  //   ],
  //   duration: 2,
  // },
});

export { blogTheme };
