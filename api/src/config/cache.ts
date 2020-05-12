import { RedisOptions } from 'ioredis'

const {
  REDIS_PORT = 6379,
  REDIS_HOST = 'localhost',
} = process.env

export const REDIS_OPTIONS: RedisOptions = {
  port: +REDIS_PORT,
  host: REDIS_HOST,
}