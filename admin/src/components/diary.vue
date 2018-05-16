<template>
  <div class="row">
    <div class="col-lg-1"></div>
    <div class="col-lg-10">
      <table class="tab-content">
        <tr>
          <th>Id</th>
          <th class="fir">title</th>
          <th class="sec">content</th>
          <th class="thr">operation</th>
        </tr>
        <tr v-for="(i,index) in diary">
          <td>{{i.id}}</td>
          <td>{{i.title}}</td>
          <td>{{i.content}}</td>
          <td><a @click="updshow" class="upd">更新</a><a @click="deletes"  class="del">删除</a></td>
        </tr>
      </table>
      <button class="btn-success btn btn-sm" style="width: 30%;" @click="addshow">添加</button>
      <div v-show="updShow" class="txa">
      <textarea class="text-success" v-model="newcontent">
        </textarea><br>
        <button class="btn-success btn btn-sm" @click="contentComfrim">确定</button>
        <button class="btn-danger btn btn-sm" @click="updclose">关闭</button>
      </div>
      <div v-show="updTitleShow" class="txa">
        <textarea class="text-success" v-model="newtitle">
          </textarea><br>
        <button class="btn-success btn btn-sm" @click="updsubmit">提交</button>
        <button class="btn-danger btn btn-sm" @click="updclose">关闭</button>
      </div>
      <div v-show="addShow" class="txa">
        <textarea class="text-success" v-model="newcontent">请输入要添加的内容:</textarea><br>
        <button class="btn-success btn btn-sm" @click="addcontentconfrim">确定</button>
        <button class="btn-danger btn btn-sm" @click="addclose">关闭</button>
      </div>
      <div v-show="addtitleShow" class="txa">
        <textarea class="text-success" v-model="newtitle">请输入要添加的标题:</textarea><br>
        <button class="btn-success btn btn-sm" @click="addsubmit">提交</button>
        <button class="btn-danger btn btn-sm" @click="addclose">关闭</button>
      </div>
      <div v-show="updShow||addShow" class="showcontent">
        <p><b>标题:</b>{{newtitle}}</p>
        <p><b>内容:</b>{{newcontent}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        title:'',
        content:'',
        diary:'',
        newcontent:'',
        newtitle:'',
        id:'',
        updShow:false,
        updTitleShow:false,
        addShow:false,
        addtitleShow:false
      }
    },
    beforeCreate:function(){
      this.$http.get('/list/diary/find').then((result)=>{
        this.diary=result.body;
      })
    },
    methods:{
      updshow:function(e){
        this.updShow=true;
        this.id=e.target.parentNode.parentNode.firstChild.innerHTML;
      },
      updclose:function(){
        this.updShow=false;
        this.updTitleShow=false;
        this.newcontent='';
        this.newtitle='';
      },
      contentComfrim:function(){
        this.updTitleShow=true;
      },
      updsubmit:function(){
        this.$http.get('/list/diary/update?id='+this.id+"&title="+this.newtitle+"&content="+this.newcontent).then(result=>{
          if(result.body.code==1){
            alert('更新成功!');
            this.$router.replace('/blank3')
          }
        });

        this.id='';
      },
      addshow:function(){
        this.addShow=true;
      },
      addclose:function(){
        this.addShow=false;
        this.addtitleShow=false;
        this.newcontent='';
        this.newtitle='';
      },
      addcontentconfrim:function(){
        this.addtitleShow=true;
      },
      addsubmit:function(){
        this.$http.get('/list/diary/insert?title='+this.newtitle+"&content="+this.newcontent).then(result=>{
          if(result.body.code==1){
            alert('添加成功!');
            this.$router.replace('/blank3')
          }
        });

      },
      deletes:function(e){
        if(confirm("确定删除?")){
          this.id=e.target.parentNode.parentNode.firstChild.innerHTML;
          this.$http.get('/list/diary/delete?id='+this.id).then(result=>{
            if(result.body.code==1){
              alert('删除成功!');
              this.$router.replace('/blank3')
            }
          })
        }
      }
    }
  }
</script>

<style>
  .showcontent{
    position: fixed;
    top:5px;
    text-align: left;
    height:50px;
  }
  .showcontent p{
    background-color: #eeeeee;
    color:gray;
  }
</style>
