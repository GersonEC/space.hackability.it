import { getConfigs } from "env-ts-conf";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const googleConfig = getConfigs({
  clientId: {
    type: "string",
    variableName: "GOOGLE_CLIENT_ID",
  },
  clientSecret: {
    type: "string",
    variableName: "GOOGLE_CLIENT_SECRET",
  },
});

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: googleConfig.clientId,
      clientSecret: googleConfig.clientSecret,
    }),
  ],
});
