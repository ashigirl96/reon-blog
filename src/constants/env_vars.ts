import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

export const AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || ''
export const AWS_SECRET_ACCESS_KEY =
  process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || ''
export const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY || ''
export const GALLERY_BUCKET_NAME = process.env.NEXT_PUBLIC_GALLERY_BUCKET || ''

export const GALLERY_DATABASE_ID =
  process.env.NEXT_PUBLIC_GALLERY_DATABASE_ID || ''
export const TECH_BLOG_DATABASE_ID =
  process.env.NEXT_PUBLIC_TECH_BLOG_DATABASE_ID || ''
