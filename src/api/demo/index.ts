import http from '@/utils/http';

export const USER_LOGIN = '/api/demo/login';
export const USER_INFO = '/api/demo/info';
export const USER_LOGOUT = '/api/demo/logout';
export const USER_ADDRESS = '/api/demo/address';

export interface LoginParams {
    username: string;
    password: string;
}

export interface UserInfo {
    id: number;
    name: string;
    email: string;
}

export interface AddressInfo {
    province: string;
    city: string;
    district?: string;
}

class UserService implements UserApi {
    login(data: LoginParams): Promise<string> {
        return http.post(USER_LOGIN, data);
    }

    getInfo(): Promise<UserInfo> {
        return http.get(USER_INFO);
    }

    logout(): Promise<void> {
        return http.post(USER_LOGOUT);
    }
    getAddress(userId: number): Promise<AddressInfo> {
        return http.get(USER_ADDRESS, { params: { userId } });
    }
}

export interface UserApi {
    login(data: LoginParams): Promise<string>;
    getInfo(): Promise<UserInfo>;
    logout(): Promise<void>;
    getAddress(userId: number): Promise<AddressInfo>;
}

export default new UserService();
