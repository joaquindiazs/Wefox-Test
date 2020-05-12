export const {
  NODE_ENV = 'development',
  APP_PORT = 3000,
  APP_HOSTNAME = 'localhost'
} = process.env

export const IN_PROD = NODE_ENV === 'production'
