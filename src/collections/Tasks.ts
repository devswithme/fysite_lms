import {Access, CollectionConfig} from "payload";
import {isRole} from "@/access";

export const Tasks: CollectionConfig = {
  slug: 'tasks',
  upload: {
    bulkUpload: false,
    mimeTypes: ['application/zip'],
    hideRemoveFile: true,
    focalPoint: false,
    staticDir: './uploads/tasks'
  },
  admin: {
    defaultColumns: ['filename', 'course', 'status', 'feedback']
  },
  access: {
    create: async ({req}) => {
      if(!isRole(req, 'student')) return false

      const {docs} =  await req.payload.find({
        collection: 'tasks',
        where: {
          belongsTo: {
            equals: req?.user?.id
          }
        },
        sort: '-createdAt',
        depth: 0,
        limit: 1
      })

      return docs[0]?.status != 'pending' || !docs[0]
    },
    read: (({req}) => {
      if(isRole(req, 'admin')) return true

      return {
        or: [
          {
            belongsTo: {
              equals: req?.user?.id
            }
          },
          {
            tenant: {
              equals: req?.user?.id
            }
          }
        ]
      }
    }) as Access,
    update: ({req}) => {
      return {
        tenant: {
          equals: req?.user?.id
        }
      }
    },
    delete: ({req}) => isRole(req, 'admin')
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'rejected', 'accepted'],
      defaultValue: 'pending',
      admin: {
        position: 'sidebar'
      },
      access: {
        create: () => false,
      },
      required: true,
    },
    {
      name: 'course',
      type: 'relationship',
      required: true,
      relationTo: 'courses',
      access: {
        update: ({req}) => isRole(req, 'student')
      },
      // @ts-expect-error
      filterOptions: ({req}) => {
        return {
          or: [
            {
              grantedTo: {
                equals: req?.user?.id
              }
            },
            {
              belongsTo: {
                equals: req?.user?.id
              }
            }
          ]
        }
      }
    },
    {
      name: 'feedback',
      type: 'richText',
      admin: {
        condition: (data) => {
          return data.status != 'pending'
        }
      }
    },
    {
      name: 'belongsTo',
      type: 'relationship',
      admin: {
        position: 'sidebar'
      },
      relationTo: 'users',
      defaultValue: ({req}) => req?.user?.id,
      access: {
        update: () => false,
        create: () => false
      },
      required: true,
    },
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'users',
      hidden: true
    },
  ],
  hooks: {
    beforeChange: [
      async({data, req, operation}) => {
        if(operation == 'create' && data.course){
          const course = await req.payload.findByID({
            collection: 'courses',
            id: data.course,
            depth: 0
          })

          if(course.belongsTo){
            data.tenant = course.belongsTo
          }
        }

        return data
      }
    ]
  }
}