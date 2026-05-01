export const configuration = () => ({
  app: {
    port: Number.parseInt(process.env.PORT ?? "3000", 10),
  },
  jwt: {
    secret: process.env.JWT_SECRET ?? "dev-only-secret-change-me",
    expiresIn: process.env.JWT_EXPIRES_IN ?? "15m",
  },
});
