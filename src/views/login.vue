<template>
  <div class="login-layout">
    <div class="login-panel">
      <div class="login-form">
        <div class="switch" @click="switchPanel"> 
          <span class="active" ref="login">登录</span>
          <span>/</span>
          <span ref="signup">注册</span>
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="用户名">
                  <Icon type="ios-person" slot="prepend" size="18"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="pw">
              <Input type="password" v-model="formInline.pw" placeholder="密码">
                  <Icon type="ios-lock" slot="prepend" size="18"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="pwconfirm" v-show="isSignup">
              <Input type="password" v-model="formInline.pwconfirm" placeholder="请再次输入密码">
                  <Icon type="ios-lock" slot="prepend" size="18"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="email" v-show="isSignup">
              <Input type="text" v-model="formInline.email" placeholder="邮箱（选填）">
                  <Icon type="ios-mail" slot="prepend" size="18"></Icon>
              </Input>
          </FormItem>

          <FormItem v-if="!isSignup">
              <Button type="primary" @click="handleLogin('formInline')">登录</Button>
          </FormItem>
          <FormItem v-if="isSignup">
              <Button type="primary" @click="handleSignup('formInline')">注册</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Login',
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (this.isSignup && value === '') {
        callback(new Error('重复密码不能为空'));
      } else if (this.isSignup && value !== this.formInline.pw) {
        callback(new Error('两次输入的密码不一致！'));
      } else {
        callback();
      }
    };
    return {
      isSignup: false,
      formInline: {
        email: '',
        user: '',
        pw: '',
        pwconfirm: '',
      },
      ruleInline: {
        email: [
          { required: false, trigger: 'blur' }
        ],
        user: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        pw: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ],
        pwconfirm: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    let that = this;
    document.onkeydown = function(e){
      let key = window.event.keyCode;
      if(key == 13){
        if(!that.isSignup){
          that.handleLogin("formInline");
        }else{
          that.handleSignup("formInline");
        }
      }  
    }
  },
  methods: {
    handleLogin(name) {
      this.$refs[name].validate((valid)=>{
        if(!valid){
          this.$Message.warn('用户名或密码不规范！');
        }else{
          /*
            用户名和密码符合规范，判断是否允许登录
            这里先使用假数据吧，neko开头的用户名均为可登录用户，admin密码adminroot
          */
          if(this.formInline.user.substring(0,4) =="neko"){
            window.sessionStorage.setItem('token',this.formInline.user);
            this.$router.push('/home');
          }else if(this.formInline.user == "admin" && this.formInline.pw == "adminroot"){
            console.log('admin登录成功');
          }else{
            this.$Message.error('用户名或密码不正确！');
          }
        }
      })
    },
    handleSignup(name) {
      this.$refs[name].validate((valid)=>{
        if(!valid){
          this.$Message.warn('输入内容不规范！');
        }else{
          this.$Message.success('注册成功！赶快去登录吧~')
        }
      })
    },
    switchPanel() {
      //在登录和注册panel之间切换
      let loginPanel = this.$refs.login,
          signupPanel = this.$refs.signup;
      loginPanel.classList.toggle('active');
      signupPanel.classList.toggle('active');
      this.isSignup = !this.isSignup;
      //重置表单
      this.$refs.formInline.resetFields();
    }
  }
}
</script>

<style scoped>
.login-layout{
  height: 936px;
  /* background-color: #bea6ffcb;  */
  background-image: linear-gradient(
    -45deg,
    transparent,
    transparent 50%,
    rgba(119, 144, 228, 0.699) 50%
  );
}
.login-panel{
  border-radius: 6px;
  width: 80%; height: 696px;
  position: relative; left: 10%; top:120px;
  background: url(https://c-ssl.duitang.com/uploads/item/201502/22/20150222230053_nBMTn.png); 
  background-size: cover; background-repeat: no-repeat; background-position: center 48%;
  box-shadow: 0 0 6px lightslategray;
}
.login-form{
  width:20%; height: 100%;
  float: right;
  background-color: rgba(255, 255, 255, 0.82);
}
  .ivu-form,.switch{
    width: 15%;
    position: absolute; right: 2.5%;
  }
  .ivu-form{ top: 260px;}
  .switch{
    top: 180px;
    font-size: 20px; color: lightgray;
    cursor: pointer;
  }
    .active{
      color: #a58cff;
    }
    
    .ivu-form>>> .ivu-input{
      background: none;
    }
    .ivu-form>>> .ivu-form-item-error-tip{
      font-size:6px; text-indent: 1em;
    }
    .ivu-form>>> .ivu-btn-primary{
      border: 0; border-radius: 50px;
      width: 100%;
      position: relative; top: 50px;
      background: linear-gradient(90deg,#80d9ff,#ff8de1)
    }
    .ivu-form>>> .ivu-btn-primary:hover{
      filter: brightness(90%);
    }
</style>