/*
 * @Author: CGQ 
 * @Date: 2019-11-08 13:46:52 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-11-08 14:11:26
 */
<!--  -->
<template>
    <div ref="wrapper">
        <slot></slot> 
        <!-- solt是数据插槽 -->
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name: "scroll",
    // 父子组件
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        }
    },
    watch: {
        data() {
            // 监听data数组是否有新数据传入
            setTimeout(() => {
                this.refresh();
            }, 20);
        }
    },
    mounted() {
        setTimeout(() => {
            this._initScroll();
        }, 20);
    },
    methods: {
        // 初始化
        _initScroll() {
            if (!this.$refs.wrapper) {
                return;
            }
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click
            });
        },
        enable() {
            this.scroll && this.scroll.enable();
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        }
    }
};
</script>
<style lang='scss' scoped>
</style>