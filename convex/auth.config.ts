export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN || 'https://auth.kaaty.co.in',
      applicationID: 'convex',
    },
  ],
}
