export interface Code {
  message?: string;
  status?: number;
  success?: boolean;
}

export interface SimpleCodeResponse {
  code: Code;
}
