FROM node:18-alpine AS base
WORKDIR /app
COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
