/**
 * 导航栏
 */
let navbarConfig = {
  navbar: true,
  nav: [
    { text: "Home", link: "/" },
    { text: "Foo", link: "/foo/" },
    { text: "Bar", link: "/bar/" },
    {
      text: "Languages",
      items: [{ text: "中文", link: "/" }, { text: "English", link: "/en-US/" }]
    },
    {
      text: "嵌套的items",
      items: [
        {
          text: "Group1",
          items: [
            { text: "Group1-1", link: "/language/chinese" },
            { text: "Group1-2", link: "/language/japanese" }
          ]
        },
        {
          text: "Group2",
          items: [
            /*  */
          ]
        }
      ]
    }
  ]
};

/**
 * 侧边栏
 * 如果是在“多语言”中，这些配置基本上没有什么用了。
 */
let sidebarConfig = {
  displayAllHeaders: true,
  activeHeaderLinks: false, // 默认值：true
  sidebarDepth: 2,
  sidebar: {
    "/foo/": [
      // 注意，这个和上面的navBar对应，这是一个新的页面中的侧边栏
      "" /* /foo/ */,
      "one" /* /foo/one.html */,
      "two" /* /foo/two.html */
    ],
    "/bar/": [
      "" /* /bar/ */,
      "three" /* /bar/three.html */,
      "four" /* /bar/four.html */
    ],
    // 回退(fallback)侧边栏配置
    "/": ["", "contact", "about"]
    // {
    //   title: "Group 1",
    //   collapsable: false,
    //   children: ["/"]
    // },
    // {
    //   title: "Group 2",
    //   collapsable: false,
    //   children: ["/", ["/about", "关于"], ["/contact", "联系我们"]]
    // }
  }
};

/**
 * 这个只能显示一个 ???
 */
let sidebarAutoConfig = { sidebar: "auto" };

/**
 * 多语言模式
 */
let sidebarLanguagesConfig = { "/": { sidebar: "auto" } };

/**
 * 站点多语言配置
 */
let siteLanguagesConfig = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VuePress 中文",
      description: "Vue 驱动的静态网站生成器"
    },
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/en-US/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "VuePress English",
      description: "Vue-powered Static Site Generator"
    }
  }
};

/**
 * 默认多语言模式设置
 */
let defaultLanguagesConfig = {
  locales: {
    "/": {
      // 语言下拉菜单的展示文本
      selectText: "选择语言",
      // 该语言在下拉菜单中的 label 标签
      label: "简体中文",
      // github 编辑链接的文字
      editLinkText: "在 GitHub 上编辑此页",
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
      },
      algolia: {},
      nav: [{ text: "嵌套", link: "/zh/nested/" }],
      sidebar: "auto",
      lastUpdated: "最近更新时间：" // 这是一个时间戳
      // ...sidebarConfig
    },
    "/en-US/": {
      // text for the language dropdown
      selectText: "Languages",
      // label for this locale in the language dropdown
      label: "English",
      // text for the edit-on-github link
      editLinkText: "Edit this page on GitHub",
      // config for Service Worker
      serviceWorker: {
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      },
      // algolia docsearch options for current locale
      algolia: {},
      nav: [{ text: "Nested", link: "/en-US/nested/" }],
      sidebar: "auto",
      lastUpdated: "Last Updated: " // 这是一个时间戳
      // ...sidebarConfig
    }
  }
};

/**
 * algolia 这个要提交网址的
 */
let searchConfig = {
  search: false,
  searchMaxSuggestions: 10,
  algolia: {
    apiKey: "<API_KEY>",
    indexName: "<INDEX_NAME>"
  }
};

/**
 * 仓库的配置
 * 放在themeConfig中
 */
let repositoryConfig = {
  base: "/apijson-doc/",
  repo: "vincentCheng/apijson-doc",
  repoLabel: "APIJSON 文档",
  // 默认为 false，设置为 true 来启用
  editLinks: true,
  // 自定义编辑链接的文本。默认是 "Edit this page"
  editLinkText: "帮助我们改进页面内容！",
  docsDir: "docs"
};

/**
 * serviceWorker 这个是能够提醒用户，网站更新了。
 */
module.exports = {
  ...siteLanguagesConfig,
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    // ...navbarConfig
    // ...defaultLanguagesConfig,
    // ...sidebarLanguagesConfig
    // ...sidebarAutoConfig
    ...sidebarConfig,
    ...repositoryConfig
  }
};
