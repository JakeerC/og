# Open Graph Generator

🍇 Open Graph Generator made using [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) for personal use.

Feel free to fork it and use it for your website!

## Deployment Guide

You can achieve deployment fully from the website without cloning the repository.

1. Fork the repository
2. Replace the public/images/logo.png with your logo. Make sure it has the same file name.

   This is optional, replacing the logo will grant you the ease of using the api without having to add your logo link on the parameters every time.

3. Deploy to Vercel.

### Vercel Configuration Settings

There are some configurations that you need to do:

1.  Add the following to the environment variables. **Settings > Environment Variables**

| Name                       | Value                   |
| -------------------------- | ----------------------- |
| NEXT_PUBLIC_DEPLOYMENT_URL | https://your.domain.com |

After configuring, **redeploy the project**

## General OG

### Light Mode & Site Name Only

Query:

`/api/general?siteName=Your Site Name&description=Lorem ipsum&theme=light`

### Light Mode & Template Title

`/api/general?templateTitle=Page Name&siteName=Your Site Name&description=Lorem ipsum&theme=light`

### Dark Mode & Site Name Only

`/api/general?siteName=Your Site Name&description=Lorem ipsum&theme=dark`

### Dark Mode & Template Title

`/api/general?templateTitle=Page Name&siteName=Your Site Name&description=Lorem ipsum&theme=dark`

### Custom Logo

You can also customize logo by specifying `logo`, width is defaulted to 100px.

Or you can also add `logoWidth` and `logoHeight` by specifying pixel number

`/api/general?siteName=Your Site Name&description=Lorem ipsum&theme=dark&logo=https://docs.thcl.dev/apple-icon-180x180.png&logoWidth=120`
