<template>
	<view class="content">
        <image class="logo" src="../../static/img/logo.png"></image>
		<view>
      <u-input v-model="form.username"></u-input>
      <u-input v-model="form.password" type="password"></u-input>
      <u-button class="u-margin-top-80" ripple type="primary" @click="onLogin">
        登录
      </u-button>
    </view>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';

	export default Vue.extend({
		data() {
			return {
				form:{
          username:'iotadmin',
          password:'123456'
        }
			}
		},
		methods: {
      onLogin(){
        // uni.showToast({title:'登录成功'})
        // uni.switchTab({url: '/pages/home/home'})
       (this as any).$api.authService.authWithUserPwd(this.form).then((res:any)=>{
          if(res.beAuthenticationOk===true){
            uni.showModal({
              content:res.sessionToken
            })
          }
        })
      }
		}
  });  

</script>

<style lang="scss" scoped>
.logo{
  display: block;
  width: 100upx;
  height: 100upx;
  margin: 40upx auto;
}
</style>
