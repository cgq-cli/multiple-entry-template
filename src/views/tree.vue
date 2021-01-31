/*
 * @Author: CGQ 
 * @Date: 2019-12-12 15:35:30 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-12 17:24:45
 */
<!--  -->
<template>
    <div class='tree-wrapper'>
        <div @click="toggle" class='title'>
            {{treeData.title}}
            <span v-if='isFolder'>{{open?'-':'+'}}</span>
        </div>
        <div v-if='open' class='treeItem'>
            <div v-for='item in treeData.children' :key='item.title'>
                <tree :treeData='item'></tree>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tree",
    components: {},
    props: {
        treeData: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            open: false
        };
    },
    computed: {
        isFolder(){
            return this.treeData.children && this.treeData.children.length
        }
    },
    methods: {
        toggle(){
            if(this.isFolder){
                this.open = !this.open
            }
        }
    }
};
</script>
<style lang='scss'>
.tree-wrapper{
    .title{
        width: 300px;
        
    }
    .treeItem{
        width: 300px;
        margin-left: 40px;
    }
}
</style>