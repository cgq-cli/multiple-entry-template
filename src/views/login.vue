/*
 * @Author: CGQ 
 * @Date: 2019-08-29 13:59:53 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-30 09:42:43
 */
<!--  -->
<template>
    <div class="login-wrapper">
        <div class="login-box">
            <my-form :model='model' :rules='rules' ref='form' class='my-form'>
                <form-item label='用户名:' prop='username'>
                    <my-input v-model='model.username' placeholder='请输入用户名'></my-input>
                </form-item>
                <form-item label='密码:' prop='password'>
                    <my-input v-model='model.password' placeholder='请输入密码'></my-input>
                </form-item>
            </my-form>
            <!-- <my-checkbox v-model='ischecked' placeholder='请输入用户名'></my-checkbox> -->
            <el-button @click="submit" class='submit' type='primary'>提交</el-button>
        </div>
    </div>
</template>

<script>
import MyInput from "./input";
import FormItem from "./formItem";
import MyForm from "./form";
// import MyCheckbox from "./checkbox";
export default {
    name: "Login",
    components: {
        MyInput,
        FormItem,
        MyForm,
        // MyCheckbox
    },

    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            // ischecked: false,
            crumbData: [],
            rules: {
                username: [{ required: true, message: "请输入用户名" }],
                password: [{ required: true, message: "请输入密码" }]
            }
        };
    },

    methods: {
        submit() {
            this.$refs["form"].validate(valid => {
                if (valid) {
                    this.$alert("恭喜，登录成功！", "提示", {
                        confirmButtonText: "确定",
                        center: true,
                        callback: action => {
                            document.cookie="userName=才华有限公司";
                            sessionStorage.setItem('userInfo', JSON.stringify(this.model))
                            sessionStorage.setItem('isLogin', true)
                            this.$store.dispatch("user/queryUserInfo", this.model);
                            this.$router.push("/businessStatistics");
                        }
                    });
                } else {
                    this.$alert("登录失败，请输入正确信息！", "提示", {
                        confirmButtonText: "确定",
                        center: true,
                        callback: action => {

                        }
                    });
                }
            });
        }
    }
};
</script>
<style lang='scss'>
.login-wrapper {
    position: fixed;
    // top: 0;
    // left: 0;
    height: 100%;
    width: 100%;
    background: url("../assets/images/login-bg.jpg") center top no-repeat fixed;
    background-size: cover;
    -webkit-background-size: cover; /* 兼容Webkit内核浏览器如Chrome和Safari */
    -o-background-size: cover; /* 兼容Opera */
    zoom: 1;
    .login-box {
        position: fixed;
        top: 200px;
        right: 420px;
        width: 400px;
        height: 500px;
        background-color: #fff;
        border: 1px solid #3978ff;
    }
    .my-form {
        padding-top: 100px;
        margin-bottom: 20px;
    }
    .input-wrapper .input {
        width: 300px;
    }
}
</style>