export type AuthWithPhoneDto = {
  phone: string;
}
export type AuthWithPhoneConfirmDto = {
  phone: string;
  code: string;
}
export type AuthWithEmailDto = {
  email: string;
}
export type AuthWithEmailConfirmDto = {
  email: string;
  code: string;
}

export type InitAuthResponse = {
  message: string;
  status: string;
}

export type AuthTokens = {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export type AuthResponse = {
  token: AuthTokens
}
