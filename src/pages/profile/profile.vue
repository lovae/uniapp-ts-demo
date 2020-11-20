<template>
	<view class="content">
		<view>
            <u-button  @click="onLogout">退出登录</u-button>
        </view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  methods:{
      onLogout(){
        uni.reLaunch({url:'/pages/login/login'})
      }
  }
})

</script>

<style lang="scss" scoped>

</style>
