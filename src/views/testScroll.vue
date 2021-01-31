/*
 * @Author: CGQ 
 * @Date: 2019-11-08 13:51:26 
 * @Last Modified by: CGQ
 * @Last Modified time: 2020-01-15 16:18:42
 */
<!-- 测试scroll-better -->
<template>
    <div class="recommend">
        <div style='background-color: orange;'>hhhh</div>
        <div class='box'>
            <div class='left'> </div>
            <div class='right'>
                <div class='little'></div>
                <div class='little'></div>
                <div class='little'></div>
            </div>
        </div>
        <scroll ref="scroll" class="recommend-content" :data="discList">
            <div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li v-for="(item,index) in discList" class="item" :key="index">
                            <div class="icon">
                                <img :src="item.imgurl" width="80" height="80">
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.creator.name"></h2>
                                <p class="desc" v-html="item.dissname"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </scroll>
        <button @click="k">按钮</button>
        <child :msg='msg' ref='child' @returnMsg='returnMsg'></child>
    </div>
</template>

<script>
import Scroll from "../layout/Scroll";
import Child from "@/components/child";

export default {
    name: "recommend",
    components: {
        Scroll,
        Child
    },
    data() {
        return {
            discList: [
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                },
                {
                    imgurl:
                        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1118760046,961270476&fm=85&s=D8203F77EED14FE31089BCC30300E0A1",
                    creator: {
                        name: "ColdPlay"
                    },
                    dissname: "许巍"
                }
            ],
            msg: "加急件案件安监局啊"
        };
    },
    created() {},
    methods: {
        k() {
            this.$refs.child.submit();
        },
        returnMsg(inputValue) {
            console.log("inputValue", inputValue);
        }
    }
};
</script>
<style lang='scss' scoped>
.item {
    width: 40%;
    margin: 0 auto;
    border: 1px solid #3978ff;
    display: flex;
    justify-content: space-around;
}
.left {
    background: #73de80; /* 绿色 */
    // opacity: 0.5;
    border: 3px solid #f31264;
    width: 200px;
    height: 200px;
    float: left;
}
.right {
    /* 粉色 */
    background: #ef5be2;
    // opacity: 0.5;
    border: 3px solid #f31264;
    width: 400px;
    min-height: 100px;
}
.box {
    background: #888;
    height: 100%;
    margin-left: 50px;
    overflow: hidden;
}
.little {
    background: #fff;
    width: 50px;
    height: 50px;
    margin: 10px;
    float: left;
}
</style>