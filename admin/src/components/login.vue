<template>
    <div class="row login-container">
              <h1 class="foo">管理员登录</h1>
        <div class="input-group">
          <input v-model="uname" type="text" class="form-control" placeholder="管理员登录名" >
        </div>
        <div class="input-group">
          <input v-model="upwd" type="password" class="form-control" placeholder="管理员登录密码" >
        </div>
        <div class="submit-btn">
          <a class="btn btn-default submit"
           @click="login"
          >
          &nbsp;登&nbsp;录&nbsp;
          </a>
        </div>
            <h3 class="foo">后台管理系统</h3>
    </div>
</template>


<script>
  export default {
    data:function(){
        return  {
            uname:'',
            upwd:''
        }
    },
    methods:{
        login:function(){
            //发请求
          this.$http
            .get('/list/user?uname='
              +this.uname+"&upwd="+this.upwd)
            .then((result)=>{
              //console.log(result.data);
              if(result.data.code == 1){
                  //跳转到首页
                this.$router.push('/index');
              }
            })
        }
    }
  }

</script>


<style>
  .login-container{
    width:500px;
    height:300px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left: -250px;
    margin-top: -200px;
    border:1px solid gray;
    border-radius:10px;
    opacity:0.8;
    background:url(../assets/img/bg.jpg) no-repeat;
  }
  input{
    width:100%;
    margin-left:100px;
    margin-top:20px;
  }
  .submit-btn{
    margin-top:20px;
  }
  .foo{
    color:#2b542c;
  }
</style>
