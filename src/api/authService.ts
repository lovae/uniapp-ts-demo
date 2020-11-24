import instance from '@/request/http'
import base from '@/request/base'

const authService:any={
  authWithUserPwd:function(params:any){
    const config ={
      LoginDevice: "web",
      LoginType: "FORMS",
      UserName: params.acount,
      UserPassword: params.password
    }
    return instance.post(base.auth+'AuthenticationToken/authWithUserPwd.do',config)
  }
}

export default authService