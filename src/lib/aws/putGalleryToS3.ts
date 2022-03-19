import { GALLERY_BUCKET_NAME } from '@/constants'
import { S3Client } from './client'
import { generateRandom } from '@/lib/random'

export const putGalleryToS3 = async (notionImgUrl: string) => {
  const Key = `${generateRandom()}.png`
  const response = await fetch(notionImgUrl)
  const bodyArray = await response.arrayBuffer()
  const Body = Buffer.from(bodyArray)
  await S3Client.putObject(
    {
      Bucket: GALLERY_BUCKET_NAME,
      Key,
      Body,
    },
    (err, data) => {
      if (err) {
        console.log(err, err.stack)
      } else {
        console.log(data)
      }
    },
  ).promise()
  return `https://${GALLERY_BUCKET_NAME}.s3.ap-northeast-1.amazonaws.com/${Key}`
}
