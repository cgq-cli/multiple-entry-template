/*
 * @Author: CGQ 
 * @Date: 2019-08-30 11:55:06 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-17 19:19:04
 */
<!-- header -->
<template>
    <div class="header-wrapper">
        <div class="outer-wrapper">
            <div class="left-box">
                <span class="iconfont icon-icon_xinyong_xianxing_jijin-"></span>
                <span>后台管理系统</span>
            </div>
            <div class="right-box">
                <span class="iconfont icon-yonghu"></span>
                <span>管理员</span>
                <div class="quit-box" @click="quit">
                    <span>退出</span>
                    <span class="iconfont icon-tuichu"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    components: {},

    data() {
        return {};
    },

    methods: {
        // 退出
        quit(){
            this.$store.dispatch('user/quit')
            this.$router.push('/login')
        }
    }
};
</script>
<style lang='scss'>
.header-wrapper {
    .outer-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding: 0 50px;
        color: #fff;
        background-color: #3A5FCD;
        .iconfont {
            font-size: 24px;
        }
        .right-box {
            padding-right: 100px;
            .quit-box {
                padding-left: 20px;
                font-size: 18px;
                display: inline-block;
                cursor: pointer;
                .icon-tuichu {
                   font-size: 18px;
                }
            }
        }
    }
}
</style>