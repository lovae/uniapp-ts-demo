<template>
	<view class="content">
        <image class="logo" src="../../static/img/logo.png"></image>
		<view>
            <u-button class="u-margin-top-80" ripple type="primary" @click="onLogin"
        >登录</u-button
      >
        </view>
	</view>
</template>

<script lang="ts">
  import Vue from 'vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
      onLogin(){
        uni.showToast({title:'登录成功'})
        uni.switchTab({url: '/pages/home/home'})
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
