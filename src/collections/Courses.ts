import type { Access, CollectionConfig, PayloadRequest } from 'payload'
import { isRole, isServer } from '@/access'

export const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    defaultColumns: ['filename', 'code', 'belongsTo', 'createdAt'],
  },
  access: {
    create: ({ req }) => isRole(req, 'admin'),
    read: (({ req }) => {
      if (isRole(req, 'admin') || isServer(req)) return true

      return {
        or: [
          {
            grantedTo: {
              equals: req?.user?.id,
            },
          },
          {
            belongsTo: {
              equals: req?.user?.id,
            },
          },
        ],
      }
    }) as Access,
    update: ({ req }) => isRole(req, 'admin') || isServer(req),
    delete: ({ req }) => isRole(req, 'admin'),
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      unique: true,
    },
    {
      name: 'belongsTo',
      type: 'relationship',
      relationTo: 'users',
      filterOptions: () => {
        return {
          role: {
            equals: 'tenant',
          },
        }
      },
    },
    {
      name: 'grantedTo',
      type: 'relationship',
      hasMany: true,
      relationTo: 'users',
      access: {
        read: ({ req }) => !isRole(req, 'student'),
      },
      filterOptions: () => {
        return {
          role: {
            equals: 'student',
          },
        }
      },
    },
  ],
  upload: {
    bulkUpload: false,
    mimeTypes: ['application/zip'],
    hideRemoveFile: true,
    focalPoint: false,
    staticDir: './uploads/courses',
  },
}
