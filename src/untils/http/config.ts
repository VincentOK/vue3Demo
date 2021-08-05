import { AxiosRequestConfig } from "axios"
import { excludeProps } from "./utils"
// import {getToken} from "../../hooks/token"
export interface httpSuccessCode {
  code:number;
  message:string;
  result: any;
}

/**
 * 默认配置
 */
export const defaultConfig: AxiosRequestConfig = {
  baseURL: "/api",
  timeout: 10000, //10秒超时
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    // "multipart/form-data"
    "X-Requested-With": "XMLHttpRequest",
    // "token":getToken().refToken.value,
    "Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjkzYmRlZDE3LTU2MzYtNDNjYi05MTI0LTlmMmNhNzJmNjA4ZCJ9.Md4buOjFwfrYA4V0RHm1LKDeU6hPIqkBsKIh2llIOx--_gHQEjD0PJN5NvmpiFoIMJB70tgNx12ZlqtQcNhNzw"
  },
}

export function genConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
  if (!config) {
    return defaultConfig
  }

  const { headers } = config
  if (headers && typeof headers === "object") {
    defaultConfig.headers = {
      ...defaultConfig.headers,
      ...headers,
    }
  }
  return { ...excludeProps(config!, "headers"), ...defaultConfig }
}

export const METHODS = ["post", "get", "put", "delete", "option", "patch"]
