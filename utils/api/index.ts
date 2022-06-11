import {authInstance, instance} from '../axios'
import {
  AuthResponse,
  AuthWithEmailConfirmDto,
  AuthWithEmailDto,
  AuthWithPhoneConfirmDto,
  AuthWithPhoneDto,
  InitAuthResponse
} from "./types";
import {AxiosResponseHeaders} from "axios";

export const AuthApi = {
  async phone(dto: AuthWithPhoneDto): Promise<InitAuthResponse> {
    const { data } = await authInstance.post<AuthWithPhoneDto, { data: InitAuthResponse }>('/api/v1/auth/send', dto)
    return data;
  },

  async phoneConfirm(dto: AuthWithPhoneConfirmDto): Promise<AuthResponse> {
    const { data } = await authInstance.post<AuthWithPhoneConfirmDto, {data: AuthResponse}>('/api/v1/auth/sign-in', dto)
    return data;
  },

  async email(dto: AuthWithEmailDto) {
    const { data } = await authInstance.post('/api/v1/auth/send', dto)
    return data;
  },

  async emailConfirm(dto: AuthWithEmailConfirmDto) {
    const { data } = await authInstance.post('/api/v1/auth/sign-in', dto)
    return data;
  },

  async refreshToken(refreshToken: string): Promise<{data: AuthResponse, headers: AxiosResponseHeaders}> {
    const { data, headers } = await authInstance.post<string, {data: AuthResponse, headers: AxiosResponseHeaders}>('/api/v1/auth/refresh-token', {}, {
      headers: {
        Cookie: `refresh-token=${refreshToken}`
      }
    })
    return {
      data,
      headers
    };
  },

  async me(token: string) {
    const { data } = await instance.get('/api/v1/account', {
      headers: {
        Authorization: token
      }
    })
    return data;
  }
}
