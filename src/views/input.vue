/*
 * @Author: CGQ 
 * @Date: 2019-12-11 13:29:20 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-17 17:35:19
 */
<!--  -->
<template>
    <div class='input-wrapper'>
        <input :value='value' @input='oninput' v-bind='$attrs' class='input'>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: "Input",
    components: {},
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {};
    },

    methods: {
        oninput(event) {
            this.$emit("input", event.target.value);
            this.$parent.$emit('validate')
        }
    }
};
</script>
<style lang='scss'>
.input-wrapper {
    display: inline-block;
    .input {
        margin-top: 10px;
        width: 400px;
        height: 40px;
    }
}
</style>