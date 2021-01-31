/*
 * @Author: CGQ 
 * @Date: 2019-12-12 17:04:43 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-12 17:11:48
 */
<!--  -->
<template>
    <div class='tree-outside-wrapper'>
        <tree :treeData='treeData'></tree>
    </div>
</template>

<script>
import Tree from "./tree";
export default {
    name: "",
    components: {
        Tree
    },

    data() {
        return {
            treeData: {
                title: "Web全栈架构师",
                children: [
                    {
                        title: "Java架构师"
                    },
                    {
                        title: "JS高级",
                        children: [
                            {
                                title: "ES6"
                            },
                            {
                                title: "动效"
                            }
                        ]
                    },
                    {
                        title: "Web全栈",
                        children: [
                            {
                                title: "Vue训练营",
                                expand: true,
                                children: [
                                    {
                                        title: "组件化"
                                    },
                                    {
                                        title: "源码"
                                    },
                                    {
                                        title: "docker部署"
                                    }
                                ]
                            },
                            {
                                title: "React",
                                children: [
                                    {
                                        title: "JSX"
                                    },
                                    {
                                        title: "虚拟DOM"
                                    }
                                ]
                            },
                            {
                                title: "Node"
                            }
                        ]
                    }
                ]
            }
        };
    },

    methods: {}
};
</script>
<style lang='scss'>
.tree-outside-wrapper{
    
}
</style>