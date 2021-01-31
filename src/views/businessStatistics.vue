/*
 * @Author: CGQ 
 * @Date: 2019-09-02 11:50:32 
 * @Last Modified by: CGQ
 * @Last Modified time: 2019-12-19 15:53:48
 */
<!--  -->
<template>
    <div class='businessStatistics-wrapper'>
        <!-- 业务统计  -->
        <span>面包屑:</span>
        <div v-if='crumbData.length' class='crumb'>
            <span v-for="(item, index) in crumbData" :key='index'>{{item}}<span v-if='index!=crumbData.length-1'>/</span></span>
        </div>
        <!-- <div>
            <my-form :model='model' :rules='rules' ref='form'>
                <form-item label='用户名' prop='username'>
                    <my-input v-model='model.username' placeholder='请输入用户名'></my-input>
                </form-item>
                <form-item label='密码' prop='password'>
                    <my-input v-model='model.password' placeholder='请输入密码'></my-input>
                </form-item>
            </my-form>
        </div> -->
        <div>
            <!-- <button @click="submit" class='submit'>提交</button> -->
            <button @click="test">测试router跳转</button>
        </div>
        <!-- <my-checkbox v-model='ischecked' placeholder='请输入用户名'></my-checkbox>
        {{ischecked}} -->
        <!-- {{model}} -->

        {{model}}

        <br>
        <Form></Form>

    </div>
</template>

<script>
import MyInput from "./input";
import FormItem from "./formItem";
import MyForm from "./form";
import Form from "./form/index";
export default {
    name: "BusinessStatistics",
    components: {
        MyInput,
        FormItem,
        MyForm,
        Form
    },

    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            ischecked: false,
            crumbData: []
        };
    },
    watch: {
        $route(newValue) {
            console.log("newValue", newValue);
            this.crumbData = newValue.matched.map(m => m.name);
        }
    },
    computed: {
        // ...mapState({
        //     username: state=> state.user.name
        // }),
        // ...mapGetters({
        //     showMsg: 'user/showMsg'
        // }),
        // userInfo(){
        //     return this.$store.state.user.userInfo
        // },
        // count(){
        //     return this.$store.state.user.count
        // },
        // name(){
        //     return this.$store.state.user.name
        // }
    },
    methods: {
        // ...mapMutations({
        //     add: 'user/setCount'
        // }),
        test() {
            this.$router.push({
                path: "detail/56456",
                query: {
                    name: "啊啊啊"
                }
            });
        },
        add() {
            this.$store.commit("user/setCount");
        }
    },
    created() {
        // console.log('userName:', getCookie('userName'))
        this.crumbData = this.$route.matched.map(m => m.name);

        // function* main() {
        //     var x = yield "hello world";
        //     console.log("111", x);
        //     yield x.toLowerCase();
        // }
        // var it = main();
        // console.log("222", it.next());
        // try {
        //     it.next(42);
        // } catch (err) {
        //     console.log("333", err);
        // }

        function foo(){
            return new Promise((resolve, reject)=>{
                resolve('哈哈')
            })
        }
        function *map(){
            try{
                var text = yield foo()
                console.log('444',text)
            }catch(err){
                console.log('555',err)
            }
        }
        var it = map()
        it.next()
    }
};
</script>
<style lang='scss'>
.businessStatistics-wrapper {
    .crumb {
        display: inline-block;
        color: #3978ff;
    }
    .vuex {
        margin-top: 100px;
    }
}
</style>