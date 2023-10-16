# Nuxt 3 / Prisma / tRPC / Zod

A minimal TypeScript Nuxt 3 project using Prisma as an ORM and tRPC / Zod to have type safety from the database to the front end, and back. It also uses *eslint* and *prettier* for linting.

## Setup

Install dependencies and init Nuxt:

```bash
yarn
```

Generate the Prisma client:

```bash
yarn prisma generate
```

Create and edit a ```.env``` file pointing to the database, for example:

```text
DATABASE_URL="file:database.sqlite3"
```

Create and seed the database:

```bash
yarn prisma db push
yarn prisma db seed
```

## Start

```bash
yarn dev -o
```
