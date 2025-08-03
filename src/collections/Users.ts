import type { CollectionConfig } from 'payload'
import { isRole, isServer } from '@/access'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
    hidden: ({ user }) => user?.role != 'admin',
  },
  access: {
    create: ({ req }) => isServer(req),
    read: ({ req }) => Boolean(req.user) || isServer(req),
    update: ({ req }) => isRole(req, 'admin'),
    delete: ({ req }) => isRole(req, 'admin'),
  },
  auth: {
    forgotPassword: {
      // @ts-expect-error
      generateEmailSubject: ({ user }) => {
        return `Hi ${user.name}, reset your password!`
      },
      // @ts-expect-error
      generateEmailHTML: ({ token, user }) => {
        return `
        <!doctype html>
          <html>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

              :root {
                --color-primary: #1b24ff;
                --color-dark: #282828;
                --color-light: #f0f0f0;
                --color-white: #fff;
                --color-muted-foreground: #808080;
              }

              * {
                padding: 0;
                margin: 0;

                font-family: 'JetBrains Mono', 'monospace';
                letter-spacing: -0.05rem;
              }

              body {
                background: var(--color-light);
                padding: 1rem;
              }

              .box {
                background: var(--color-white);
                max-width: 450px;
                margin: auto;
                padding: 2rem;
                padding-bottom: 2.5rem;
                border: 1px solid var(--color-muted-foreground);

                img {
                  width: 6rem;
                }

                h2 {
                  letter-spacing: -0.12rem;
                  color: var(--color-dark);
                  margin-top: 2rem;
                }

                p {
                  color: var(--color-muted-foreground);
                  margin-bottom: 4rem;
                  margin-top: 0.5rem
                }

                ul {
                  li {
                    list-style: none;
                  }
                }

                a {
                  padding: 0.65rem 1.75rem;
                  background: var(--color-primary);
                  color: var(--color-white);
                  text-decoration: none;
                }
              }
            </style>
            <body>
              <div class="box">
                <img src="https://fysite.id/logo.svg" />
                <h2>Hi ${user.name},</h2>
                <p>Reset your password by clicking this button below.</p>
                <a href="${process.env.APP_URL}/reset-password?token=${token}" target="_blank">Reset</a>
              </div>
            </body>
          </html>
        `
      },
    },
    verify: {
      generateEmailSubject: ({ user }) => {
        return `Hi ${user.name}, verify your account!`
      },
      generateEmailHTML: ({ token, user }) => {
        return `
        <!doctype html>
          <html>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');

              :root {
                --color-primary: #1b24ff;
                --color-dark: #282828;
                --color-light: #f0f0f0;
                --color-white: #fff;
                --color-muted-foreground: #808080;
              }

              * {
                padding: 0;
                margin: 0;

                font-family: 'JetBrains Mono', 'monospace';
                letter-spacing: -0.05rem;
              }

              body {
                background: var(--color-light);
                padding: 1rem;
              }

              .box {
                background: var(--color-white);
                max-width: 450px;
                margin: auto;
                padding: 2rem;
                padding-bottom: 2.5rem;
                border: 1px solid var(--color-muted-foreground);

                img {
                  width: 6rem;
                }

                h2 {
                  letter-spacing: -0.12rem;
                  color: var(--color-dark);
                  margin-top: 2rem;
                }

                p {
                  color: var(--color-muted-foreground);
                  margin-bottom: 4rem;
                  margin-top: 0.5rem
                }

                ul {
                  li {
                    list-style: none;
                  }
                }

                a {
                  padding: 0.65rem 1.75rem;
                  background: var(--color-primary);
                  color: var(--color-white);
                  text-decoration: none;
                }
              }
            </style>
            <body>
              <div class="box">
                <img src="https://fysite.id/logo.svg" />
                <h2>Hi ${user.name},</h2>
                <p>Please verify your account!<br />Verify your email by clicking this button.</p>
                <a href="${process.env.APP_URL}/verify?token=${token}" target="_blank">Verify</a>
              </div>
            </body>
          </html>
        `
      },
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      options: ['admin', 'tenant', 'student'],
      access: {
        read: ({ req }) => isRole(req, 'admin'),
        update: ({ req }) => isRole(req, 'admin'),
      },
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
