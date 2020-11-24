import instance from '@/request/http'
import base from '@/request/base'

const authService:any={
  authWithUserPwd(params:any){
    const config ={
      LoginDevice: "web",
      LoginType: "FORMS",
      UserName: params.username,
      UserPassword: params.password
    }
    return instance.post('/AuthenticationToken/authWithUserPwd.do',config)
  }
}

export default authService