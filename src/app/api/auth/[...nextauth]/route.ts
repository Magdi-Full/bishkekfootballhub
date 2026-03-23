import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Создаем обработчик
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("--- ПОПЫТКА ВХОДА ---");
      if (!user?.email) return false;

      try {
        const res = await pool.query("SELECT id FROM users WHERE email = $1", [
          user.email,
        ]);
        let userId;

        if (res.rowCount === 0) {
          const insert = await pool.query(
            "INSERT INTO users(name, email, image) VALUES($1, $2, $3) RETURNING id",
            [user.name, user.email, user.image],
          );
          userId = insert.rows[0].id;
        } else {
          userId = res.rows[0].id;
        }

        if (account) {
          await pool.query(
            `INSERT INTO accounts(user_id, provider, provider_account_id)
             VALUES($1, $2, $3)
             ON CONFLICT(provider, provider_account_id) DO NOTHING`,
            [userId, account.provider, account.providerAccountId],
          );
        }
        return true;
      } catch (dbError) {
        console.error("!!! ОШИБКА БАЗЫ ДАННЫХ:", dbError);
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Убедись, что это есть в .env.local
  debug: true,
});

// Экспортируем как GET и POST для App Router
export { handler as GET, handler as POST };
