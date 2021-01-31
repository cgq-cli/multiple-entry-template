/*
 * @Author: CGQ 
 * @Date: 2019-12-05 14:52:45 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-05 20:25:32
 */
<!--  -->
<template>
    <div>
        <span>{{msg}}</span>
        <input type="text" v-model='inputValue'>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    props:{
        msg: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputValue: ''
        };
    },

    methods: {
        submit(){
            this.$emit('returnMsg',this.inputValue)
        }
    }
};
</script>
<style lang='scss' scoped>
</style>