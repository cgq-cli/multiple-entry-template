/*
 * @Author: CGQ 
 * @Date: 2019-12-13 16:30:14 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-17 18:21:30
 */
<!--  -->
<template>
    <div>
        <input type='checkbox' :checked='value' @change='oninput' v-bind='$attrs' class='input'>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: "",
    components: {},
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },

    methods: {
        oninput(event) {
            this.$emit("input", event.returnValue);
        }
    }
};
</script>
<style lang='scss' scoped>
.input-wrapper {
    display: inline-block;
    .input {
        margin-top: 10px;
        width: 400px;
        height: 40px;
    }
}
</style>