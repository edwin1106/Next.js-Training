This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Highlights

- Database created with supabase using github authentication and the password is `FoodiesApp123*`
- You can connect an html tang using `htmlFor = {id}` and using the id of another html tag
- A server action is a function that's guaranteed to execute on the server, nad only there and must have `async` keyword in front of it
- Can't use a server action inside a client component
- Usually the servers actions will be separate from componentes with jsx
- You can import a server action inside a `use client` component
- `revalidatePath()` is a next function allows you to purge cached data on demand for a specific path.
- Store files in local fileSystem is not a great idea, because those files will not available in the running Nextjs application
- We can generate dynamic metada creating a function in the page called `generateMetadata` and it receives the same params as the page
