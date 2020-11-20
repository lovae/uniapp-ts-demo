<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            console.log('App Launch1')
        },
        onShow() {
            console.log('App Show1')
        },
        onHide() {
            console.log('App Hide1')
        }
    });
</script>

<style lang='scss'>
    @import "uview-ui/index.scss";
    /*每个页面公共css */
    @import "./styles/css/app.scss";
</style>
