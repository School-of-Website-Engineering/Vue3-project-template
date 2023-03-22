export const USER_LOGIN = '/auth/login';
import http, { Response } from '@/utils/http';

// 用户登录
export interface IUserLogin {
    username: string;
    password: string | number;
}

export interface UserInfo {
    id: number;
    username: string;
    mobile: number;
    email: string;
}

export interface userApi {
    //http.post 方法返回的是一个 Promise 对象，它的解析值类型应该是 <AxiosResponse<any>>，而不是 string。如果你想获取到接口返回的结果，应该返回 Promise<AxiosResponse<any>>，或者在 http 模块中对返回值进行处理，只返回响应数据部分。
    //
    // 正确的方式是将 Promise<string> 修改为 Promise<AxiosResponse<any>> 或者 Promise<Response<UserInfo>>，具体取决于你想如何处理接口响应数据：
    getUserLogin(user: IUserLogin): Promise<Response<Response>>;
}

class UserService implements userApi {
    getUserLogin(user: IUserLogin): Promise<Response<Response>> {
        return http.post(USER_LOGIN, user);
    }
}

export default new UserService();
