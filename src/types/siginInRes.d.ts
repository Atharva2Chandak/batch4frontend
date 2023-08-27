export type ISignInRes = {
  id: number;
  username: string;
  roles: string[];
  accessToken: string;
  tokenType: string;
}