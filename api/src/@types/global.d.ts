import type { Usuario } from '../generated/prisma/client.js'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      DATABASE_URL: string
      JWT_SECRET: string
      JWT_EXPIRES_IN: string
      NODE_ENV: 'development' | 'production' | 'test'
      CORS_ORIGIN?: string
    }
  }
  namespace Express {
    interface Request {
      user?: Pick<Usuario, 'id' | 'email'>
    }
  }
}

export {}