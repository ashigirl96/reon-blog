import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '@/constants'

import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-1',
})
export const S3Client = new AWS.S3()
