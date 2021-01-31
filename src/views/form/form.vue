<!--  -->
<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                default: {}
            },
            rules: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {};
        },
        methods: {
            validate(cb) {
                let tasks = this.$children.filter(item=>item.prop).map(i=>i.validate())
                Promise.all(tasks).then(()=>{
                    cb(true)
                }).catch(()=>{
                    cb(false)
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>