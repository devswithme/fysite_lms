import type { CollectionConfig } from 'payload'
import { isRole } from '@/access'
import path from 'path'

export const Requests: CollectionConfig = {
  slug: 'requests',
  upload: {
    bulkUpload: false,
    mimeTypes: ['application/zip'],
    hideRemoveFile: true,
    focalPoint: false,
    staticDir: path.resolve(__dirname, '../../uploads'),
  },
  admin: {
    hidden: ({ user }) => user?.role == 'student',
    defaultColumns: ['filename', 'belongsTo', 'status', 'feedback'],
  },
  access: {
    create: async ({ req }) => {
      if (!isRole(req, 'tenant')) return false

      const { docs } = await req.payload.find({
        collection: 'requests',
        where: {
          belongsTo: {
            equals: req?.user?.id,
          },
        },
        sort: '-createdAt',
        depth: 0,
        limit: 1,
      })

      return docs[0]?.status != 'pending' || !docs[0]
    },
    read: ({ req }) => {
      if (isRole(req, 'admin')) return true

      return {
        belongsTo: {
          equals: req?.user?.id,
        },
      }
    },
    update: ({ req }) => isRole(req, 'admin'),
    delete: ({ req }) => isRole(req, 'admin'),
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      admin: {
        position: 'sidebar',
      },
      options: ['pending', 'rejected', 'accepted'],
      defaultValue: 'pending',
      access: {
        update: ({ req }) => isRole(req, 'admin'),
        create: ({ req }) => isRole(req, 'admin'),
      },
      required: true,
    },
    {
      name: 'feedback',
      type: 'richText',
      admin: {
        condition: (data) => {
          return data.status != 'pending'
        },
      },
    },
    {
      name: 'belongsTo',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      relationTo: 'users',
      defaultValue: ({ req }) => req?.user?.id,
      access: {
        update: () => false,
        create: () => false,
      },
      required: true,
    },
  ],
}
