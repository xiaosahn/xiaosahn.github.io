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
            wow: ''
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