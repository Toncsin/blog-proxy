<template>
    <div class="row">
      <!--左侧导航开始-->
       <div class="col-lg-2 left-bar" >
        <div class="profile clearfix">
          <div class="profile_pic">
            <img src="../assets/img/user.png" alt="..." class="img-circle profile_img">
          </div>
          <div class="profile_info">
            <span>欢迎回来</span>
            <h2>Toncsin</h2>
          </div>
        </div>
        <br/>

        <!-- side menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
          <div class="menu_section">
            <ul class="nav side-menu">
              <li class="active"><a @click="goindex"><i class="fa fa-home"></i>后台首页</a></li>
            </ul>
          </div>
          <div class="menu_section">
            <h3>数据管理</h3>
            <ul class="nav side-menu">
              <li><a @click="essayShow">essay列表</a></li>
              <li><a @click="articleShow">article列表</a></li>
              <li><a @click="diaryShow">diary列表</a></li>
            </ul>
          </div>
          <div class="menu_section">
            <h3>账号管理</h3>
            <ul class="nav side-menu">
              <li><a @click="accountShow">修改密码</a></li>
            </ul>
          </div>
          <a @click="logout"><i class="fa fa-sign-out pull-right"></i> 退出登录</a>
        </div>
      </div>

       <div class="col-lg-10 right-box">
         <router-view></router-view>
    </div>
    </div>
</template>
<script>
  export default{
        methods:{
          essayShow:function(){
            this.$router.push('/essay');
          },
          diaryShow:function(){
            this.$router.push('/diary');
          },
          articleShow:function(){
            this.$router.push('/article');
          },
          accountShow:function(){
            this.$router.push('/account');
          },
          logout:function(){
            this.$router.push('/');
          },
          goindex:function(){
            this.$router.push('/index');
          }
        }
  }
</script>

<style>
  a{
    cursor: pointer;
    text-decoration: none;
  }
</style>
