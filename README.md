This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form Email Setup

To enable the contact form to send emails to your inbox, add the following environment variables to your `.env.local` file in the `Portfolio_` directory:

```
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_gmail_app_password
MY_EMAIL=your_gmail@gmail.com
```

- `GMAIL_USER`: Your Gmail address (sender)
- `GMAIL_PASS`: Your Gmail App Password (not your regular password; see below)
- `MY_EMAIL`: The email address where you want to receive messages (can be the same as `GMAIL_USER`)

### How to get a Gmail App Password
1. Go to your Google Account > Security > App passwords: https://myaccount.google.com/apppasswords
2. Generate a new app password for 'Mail'.
3. Use the generated password as `GMAIL_PASS`.

**Restart your dev server after adding or changing environment variables.**
