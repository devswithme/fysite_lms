import { PayloadRequest } from 'payload'

export const isRole = (req: PayloadRequest, role: 'admin' | 'tenant' | 'student') => {
  return req?.user?.role == role
}

export const isServer = (req: PayloadRequest) => {
  console.log(req.headers.get('Authorization'), process.env.API_SECRET)
  return req.headers.get('Authorization')?.split(' ')[1] == process.env.API_SECRET
}
