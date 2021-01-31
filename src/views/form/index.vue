<!--  -->
<template>
    <div>
        <Form class='form-wrapper' :model='model' :rules='rules' ref='form'>
            <FormItem title='用户名' prop='usename'>
                <Input v-model='model.usename' placeholder="输入用户名" autocomplete="off"></Input>
            </FormItem>
            <FormItem title='密码' prop='password'>
                <Input v-model='model.password' placeholder="输入密码" autocomplete="off"></Input>
            </FormItem>
            <button class='btn' @click="submit">提交</button>
        </Form>
    </div>
</template>

<script>
    import Form from './Form'
    import FormItem from './formItem'
    import Input from './input'
    export default {
        name: '',
        components: {
            Form,
            FormItem,
            Input
        },

        data() {
            return {
                model: {
                    usename: '',
                    password: ''
                },
                rules: {
                    username: [{
                        required: true,
                        message: "请输入用户名"
                    }],
                    password: [{
                        required: true,
                        message: "请输入密码"
                    }]
                }
            };
        },
        methods: {
            submit(){
                this.refs['form'].validate((valid)=>{
                    if(valid){
                        console.log('請求注册')
                    }else{
                        console.log('请重新输入')
                    }
                })
            }
        }
    }
</script>
<style lang='scss' scoped>
    .form-wrapper {
        // width: 80%;
        // margin: 0 auto;
    }

    .btn {
        width: 60px;
    }
</style>