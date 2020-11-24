<template>
  <view class="content">
    <u-toast ref="uToast" />
    <image class="logo" src="../../static/img/logo.png"></image>
    <view class="u-padding-40">
      <view class="u-flex">
        <u-icon
          class="u-margin-right-16"
          name="account"
          size="40"
          color="#a7aab1"
        ></u-icon>
        <u-input
          type="text"
          class="u-flex-1"
          border
          require
          v-model="form.acount"
          placeholder="请输入账号"
        ></u-input>
      </view>
      <view class="u-flex u-margin-bottom-40 u-margin-top-40">
        <u-icon
          class="u-margin-right-16"
          name="lock"
          size="40"
          color="#a7aab1"
        ></u-icon>
        <u-input
          border
          class="u-flex-1"
          password-icon
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        ></u-input>
      </view>
      <u-button class="u-margin-top-80" ripple type="primary" @click="onLogin">
        登录
      </u-button>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
// import UserAuthorize from "@/api/UserAuthorize";
// import authService from '@/api/index'
import store from "@/store";

export default Vue.extend({
  data() {
    return {
      form: {
        acount: "iotadmin",
        password: "123456",
      },
    };
  },
  methods: {
    onLogin() {
      // uni.showToast({title:'登录成功'})
      // uni.switchTab({url: '/pages/home/home'})
      (this as any).$api.
      authService.authWithUserPwd(this.form).then((res:any)=>{
          if(res.beAuthenticationOk===true){
            (this.$refs.uToast as any).show({
              title:'登陆成功',
              type: 'success',
              duration:'1000',
              url: '/pages/home/home',
              isTab: true
            })
          }
        })
      /* (this as any).$api.UserAuthorize.AuthWithUserPwd(this.form.acount, this.form.password).then(
        (result:any) => {
          if (result.beAuthenticationOk) {
            uni.setStorage({
              key: "token",
              data: result.sessionToken,
              success: () => {
                (this as any).$api.UserAuthorize.SetApiTokens(result.sessionToken);
                store.commit("changePhone", this.form.acount);
                uni.showModal({
                  content: result.sessionToken,
                });
                // uni.switchTab({
                //   url: "/pages/home/home",
                // });
              },
            });
          } else {
            (this.$refs.uToast as any).show({
              title: result.failedMessage,
              type: "error",
            });
          }
        }
      ) */
    },
  },
});
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 100upx;
  height: 100upx;
  margin: 40upx auto;
}
</style>
