<template>
  <div class="login-container">
    <h2>修改密码</h2>
    <input v-model="oldpwd" type="password" placeholder="请输入旧密码">
    <input v-model="newpwd" type="password" placeholder="请输入新密码">
    <input v-model="comfirmpwd" type="password" placeholder="请确定新密码"><br>
    <button class=" btn btn-success submit-btn" @click="submit">提交</button>
    <button @click="quit" class=" btn btn-danger submit-btn">取消</button>
  </div>
</template>

<script>
    export default {
          data(){
            return{
              oldpwd:'',
              newpwd:'',
              comfirmpwd:''
            }
          },
      methods:{
            quit:function(){
              this.$router.push('/index')
            },
            submit:function(){
              this.$http.get('/list/user/revise?oldpwd='
                  +this.oldpwd+"&newpwd="+this.newpwd+"&comfirmpwd="+this.comfirmpwd)
                .then((result)=>{
                  this.oldpwd='';
                  this.newpwd='';
                  this.comfirmpwd='';
                      alert(result.body.msg)
                  if(result.body.code==1){
                     this.$router.push('/index');
                  }
                })
            }
      }
    }
</script>

<style >
  .login-container{
    width:500px;
    height:300px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left: -290px;
    margin-top: -200px;
    border:1px solid gray;
    border-radius:10px;
    opacity:0.8;
    background:url(../assets/img/bg.jpg) no-repeat;
  }
  input{
    width:80%;
    margin-top:20px;
  }
  .submit-btn{
    margin-top:20px;
  }
</style>
