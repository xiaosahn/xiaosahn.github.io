/** 欢迎使用guiPlan,以下代码均由guiPlan软件自动生成，如有疑问添加添加作者微信guiplan或加入学习交流qq群711964722  网站htpp://www.guiplan.com **/
// interfaceCode
var App = {
    name: '',
    mounted() {

        // defaultLoad
        // DingDanMountedStart
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        })
        wow.init()
        this.wow = wow
        // DingDanMountedEnd

    },
    components: {},
    data() {
        return {
            // insertData
            // DingDanDataStart

            // wow加载插件
            wow: ''
            // DingDanDataEnd

        }
    },
    methods: {
        default () {},
        // insertMethod
        // DingDanMethodStart

        // DingDanMethodEnd

        // methodsCode

    },
    computed: {}
}
const app = Vue.createApp(App);
app.mount("#defaultId1");