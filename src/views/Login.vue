<template>
  <div>
    <div class="login">
      <div class="zoomin">
        <div class="zoomout">
        </div>
      </div>
    </div>

    <div class="form-area">
      <md-card class="form-card">
        <md-field md-clearable>
          <label>ID</label>
          <md-input class="input-id"></md-input>
        </md-field>
        <md-field>
          <label>비밀번호</label>
          <md-input class="input-pwd" type="password"></md-input>
        </md-field>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  overflow: hidden;
  color: #000;
  text-align:center;
}

.form-area {
  position: absolute;
  top: 20rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 250px; /* Need a specific value to work */

  color: #fff;
  background-color: transparent;

  .md-input {
    box-shadow: 2px 2px 10px #000;
    display: block;
    margin: 0 auto 0 auto;
    padding: 5px;
  }
  .md-field label {
    left: 10px;
  }
  .md-field.md-focused label {
    left: 0;
  }
  .md-field.md-has-value label {
    left: 0;
  }

  .input-id, .input-pwd {
    color: #fff;
    background-color: #345c7d3b;
    border-radius: 5px;
  }
}

.zoomin {
  width: 100%;
  height: 100vh;
  text-align:center;
  background: url(/img/app_splash.png);
  background-size: auto;
  background-attachment: fixed;
  background-repeat: repeat;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-animation: zoomin 20s ease-in infinite;
  animation: zoomin 20s ease-in infinite;
  transition: all .5s ease-in-out;
  overflow: hidden;
}

.zoomout {
  width: 100%;
  height: 100vh;
  text-align:center;
  background: none;
  -webkit-animation: zoomout 20s ease-in infinite;
  animation: zoomout 20s ease-in infinite;
  transition: all .5s ease-in-out;
  overflow: hidden;
}

@-webkit-keyframes zoomin {
  0% { transform: scale(1); }
  50%  {transform: scale(1.15); }
  100% { transform: scale(1); }
}
@keyframes zoomin {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100%  { transform: scale(1); }
}
@-webkit-keyframes zoomout {
  0% { transform: scale(1); }
  50% { transform: scale(0.85); }
  100% { transform: scale(1); }
}
@keyframes zoomout {
  0% { transform: scale(1); }
  50% { transform: scale(0.85); }
  100% { transform: scale(1); }
}
</style>
