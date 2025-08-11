// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Courses } from './collections/Courses'
import { Requests } from '@/collections/Requests'
import { Tasks } from '@/collections/Tasks'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  routes: {
    admin: '/',
  },
  email: nodemailerAdapter({
    defaultFromName: process.env.APP_NAME!,
    defaultFromAddress: process.env.SMTP_USER!,
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  admin: {
    avatar: 'gravatar',
    components: {
      graphics: {
        Icon: '@/components/fav',
        Logo: '@/components/logo',
      },
    },
    meta: {
      titleSuffix: `- ${process.env.APP_NAME}`,
      icons: [
        {
          url: '/fav.svg',
        },
      ],
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Requests, Courses, Tasks, Users],
  upload: {
    useTempFiles: true,
    tempFileDir: './temp/',
    limits: {
      fileSize: 2000000, // 2 MB,
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
})
