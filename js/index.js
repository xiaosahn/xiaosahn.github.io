/** 欢迎使用guiPlan,以下代码均由guiPlan软件自动生成，如有疑问添加添加作者微信guiplan或加入学习交流qq群711964722  网站htpp://www.guiplan.com **/
// interfaceCode
var App = {
    name: '',
    mounted() {

        // defaultLoad
        // ZhuYeMountedStart
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        })
        wow.init()
        this.wow = wow
        var mySwiper = new Swiper('.dfswiper', {
            autoplay: true,
            navigation: {
                nextEl: '.dfnext',
                prevEl: '.dfprev',
            },
        });

        var teacherSwiper = new Swiper('.swiper_teacher', {

            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next-t',
                prevEl: '.swiper-button-prev-t',
            },
        });
        var mySwiper = new Swiper('.dfswiper', {
            autoplay: true,
            navigation: {
                nextEl: '.dfnext',
                prevEl: '.dfprev',
            },
        });

        var teacherSwiper = new Swiper('.swiper_teacher', {

            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next-t',
                prevEl: '.swiper-button-prev-t',
            },
        });
        // ZhuYeMountedEnd

    },
    components: {},
    data() {
        return {
            // insertData
            // ZhuYeDataStart

            // wow加载插件
            wow: '',
            // 模拟web前端课程数据
            javaContentList: [{
                img: 'http://zly_20201225_03.demo.mxyhn.xyz/33272/uploads/allimg/200211/1-2002111012560-L.jpg', // 图片
                title: 'java基本教程学习', // 标题
                introduction: 'webdidaima是一款可视化低代码开发工具，也是一块免费建站工具，即使不懂代码的小白也能轻松绘制自己的网站。相对于传统低代码工具而言，webdidaima支持自适应定制，支持传统主流框架如bootstrap,uniapp,element-ui。整个搭建过程也是围绕代码的编写格式而定，生成代码与手写代码几乎无差异。可以很完整的做到适应性，灵活开发。 即使不懂代码的小白也能通过插入模板即可快速搭建一个属于自己的企业网站', // 简介
                remarkds: ['新手入门', '基础内容', '实际操作'] // 标签
            }, {
                img: 'http://zly_20201225_03.demo.mxyhn.xyz/33272/uploads/allimg/200211/1-2002111012070-L.jpg',
                title: 'springboot框架学习，基本框架搭建接口调用等',
                introduction: 'webdidaima是一款可视化低代码开发工具，也是一块免费建站工具，即使不懂代码的小白也能轻松绘制自己的网站。相对于传统低代码工具而言，webdidaima支持自适应定制，支持传统主流框架如bootstrap,uniapp,element-ui。整个搭建过程也是围绕代码的编写格式而定，生成代码与手写代码几乎无差异。可以很完整的做到适应性，灵活开发。 即使不懂代码的小白也能通过插入模板即可快速搭建一个属于自己的企业网站',
                remarkds: ['新手入门', '基础内容', '实际操作']
            }, {
                img: 'http://zly_20201225_03.demo.mxyhn.xyz/33272/uploads/allimg/200210/1-2002101456370-L.jpg',
                title: 'mysql数据库学习',
                introduction: 'webdidaima是一款可视化低代码开发工具，也是一块免费建站工具，即使不懂代码的小白也能轻松绘制自己的网站。相对于传统低代码工具而言，webdidaima支持自适应定制，支持传统主流框架如bootstrap,uniapp,element-ui。整个搭建过程也是围绕代码的编写格式而定，生成代码与手写代码几乎无差异。可以很完整的做到适应性，灵活开发。 即使不懂代码的小白也能通过插入模板即可快速搭建一个属于自己的企业网站', // 简介
                remarkds: ['新手入门', '基础内容', '实际操作']
            }]
            // ZhuYeDataEnd

        }
    },
    methods: {
        default () {},
        // insertMethod
        // ZhuYeMethodStart

        // ZhuYeMethodEnd

        // methodsCode

    },
    computed: {}
}
const app = Vue.createApp(App);
app.mount("#defaultId1");