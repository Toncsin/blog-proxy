<template>
  <div class="sky">
    <div class="clouds_one"></div>
    <div class="clouds_two"></div>
    <h1>Welcome Back!</h1>
    <div class="clouds_three"></div>
  </div>
</template>

<script>
    export default {
        name: "welcome"
    }
</script>

<style>
  .sky {
    height: 100%;
    background: #007fd5;
    position: relative;
    overflow: hidden;
    animation: sky_background 50s ease-out infinite;
    transform: translate3d(0, 0, 0);
  }

  .sky .clouds_one {
    background: url("../assets/img/cloud_one.png");
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 300%;
    animation: cloud_one 50s linear infinite;
    transform: translate3d(0, 0, 0);
  }

  .sky .clouds_two {
    background: url("../assets/img/cloud_two.png");
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 300%;
    animation: cloud_two 75s linear infinite;
    transform: translate3d(0, 0, 0);
  }

  .sky .clouds_three {
    background: url("../assets/img/cloud_three.png");
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 300%;
    animation: cloud_three 100s linear infinite;
    transform: translate3d(0, 0, 0);
  }

  @keyframes sky_background {
    0% {
      background: #007fd5;
      color: #007fd5
    }
    50% {
      background: #000;
      color: #a3d9ff
    }
    100% {
      background: #007fd5;
      color: #007fd5
    }
  }
  @keyframes cloud_one {
    0% {
      left: 0
    }
    100% {
      left: -200%
    }
  }
  @keyframes cloud_two {
    0% {
      left: 0
    }
    100% {
      left: -200%
    }
  }
  @keyframes cloud_three {
    0% {
      left: 0
    }
    100% {
      left: -200%
    }
  }
</style>
