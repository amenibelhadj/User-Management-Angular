export class User{
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  company!: string;
  address!: string;
  statusUser!: string;
  role!: string;
  logo!: string;
  fidelity!: number;
  code!: number;
  isSubscribed!: boolean;
}

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  token: string;
}
