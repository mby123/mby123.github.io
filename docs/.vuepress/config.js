/*
 * @Author: mby @Htkj
 * @Date: 2023-04-07 10:52:42
 * @LastEditors: mby @Htkj
 * @LastEditTime: 2023-04-07 10:54:09
 * @Descripttion: 
 * @version: 
 */
module.exports = {
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: '大而全-前端学习', // 网站的标题
    description: '前端学习记录，包括框架、设计模式、构建工具、node等', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
        ['link', { rel: 'icon', href: '/猫4.gif' }] ,// 需要被注入到当前页面的 HTML <head> 中的标签
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
   ],
    theme: 'vdoing',
    markdown: { // markdown 配置
        lineNumbers: true
    },
    lange: 'zh-CN', // 语言
    plugins: ['fulltext-search','one-click-copy','demo-block','@vuepress/active-header-links'],
    postList: 'detailed',
    simplePostListLength: 5,  //简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
    // 自动生成结构化侧边栏, 注意最多支持4级目录,切文件名前需要指定序号
    themeConfig: {
        logo: '/猫4.gif',
        tag:true,
        dateFormat: 'YYYY-MM-DD',
        contentBgStyle: 6,
        blogger:{
            avatar:'./iTab-p9op59.png',
            name:'搬砖的快乐只有我知道',
            slogan:'全栈开发。'
        },
        // bodyBgImg:'./iTab-p9op59.png',
        social:{
            iconClass:'icon-csdn',
            icons:[{
                iconClass:'icon-csdn',
                title:'CSDN',
                link:'https://blog.csdn.net/weixin_44149219?type=blog'
            },{
                iconClass:'icon-github',
                title:'github',
                link:'https://blog.csdn.net/weixin_44149219?type=blog'
            },{
                iconClass:'icon-QQ',
                title:'QQ',
                link:'https://blog.csdn.net/weixin_44149219?type=blog'
            }]
        },
        nav: [
            { text: '首页', link: '/' },
            {
                text: '学习文档',
                items:[
                    { text: 'vue2', link: '/pages/f85eca/' },
                    { text: 'vue3', link: '/pages/4d2645/' },
                    { text: 'React16',link: '/pages/93f091/'},
                    { text: 'React18',link: '/pages/ef9b2d/'},
                    { text: 'codeDemo',link: '/pages/85a33b/'},
                    { text: '面试题',link: '/pages/7495b1/'}

                ]
            },
            { text: '博主CSDN', link: 'https://blog.csdn.net/weixin_44149219?type=blog' },
        ],
        sidebar: 'structuring', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        extendFrontmatter: {
            author: {
                name: 'mby',
                link: 'https://blog.csdn.net/weixin_44149219?type=blog'
            },
        }
    }
}