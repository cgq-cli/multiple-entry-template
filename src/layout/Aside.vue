/*
 * @Author: CGQ 
 * @Date: 2019-08-30 11:56:46 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-12 20:07:59
 */
<!-- aside -->
<template>
    <div class="aside-wrapper">
        <div class="menu-box">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
                <div v-for="(item, index) in menuList" :key="index">
                    <el-menu-item :index="item.path" class="menu-item">
                        <span :class="['iconfont', `${item.icon}`]"></span>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </div>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: "Aside",
    components: {},

    data() {
        return {
            menuList: [
                {
                    name: "业务统计",
                    icon: "icon-tongji",
                    path: "/businessStatistics"
                },
                {
                    name: "testScroll",
                    icon: "icon-yonghu",
                    path: "/testScroll"
                },
                {
                    name: "树",
                    icon: "icon-yonghu",
                    path: "/tree"
                }
            ]
        };
    },

    methods: {}
};
</script>
<style lang='scss'>
.aside-wrapper {
    float: left;
    .menu-box {
        width: 200px;
        box-shadow: 0 0 12px #ccc;
        .menu-item {
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            cursor: pointer;
            .iconfont {
                font-size: 20px;
            }
        }
    }
}
</style>