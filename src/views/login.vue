<template>
  <div class="login-layout">
    <div class="login-panel">
      <div class="login-form">
        <div class="switch"> 
          <span class="login" ref="login">登录</span>
          <span>/</span>
          <span class="signup" ref="signup">注册</span>
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person" slot="prepend" size="18"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-lock" slot="prepend" size="18"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
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
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
    let that = this;
    document.onkeydown = function(e){
      let key = window.event.keyCode;
      if(key == 13){
        that.handleSubmit("formInline");
      }
      
    }

  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (!valid) {
          this.$Message.success('用户名或密码不规范！');
        } else {
          /*
            用户名和密码符合规范，判断是否允许登录
            这里先使用假数据吧，neko开头的用户名均为可登录用户，admin密码adminroot
          */
          if(this.formInline.user.substring(0,4) =="neko"){
            this.$router.push('/home');
          }else if(this.formInline.user == "admin" && this.formInline.password == "adminroot"){
            console.log('admin登录成功');
          }else{
            this.$Message.error('用户名或密码不正确！');
          }
        }
      })
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
  background-size: cover; background-repeat: no-repeat; background-position: center -455px;
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
  }
    .login{
      color: #bba8ff;
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