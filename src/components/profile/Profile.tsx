"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import scss from "./profile.module.scss";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className={scss.container}>Загрузка профиля...</div>;
  }

  if (!session) {
    return (
      <div className={scss.container}>
        <div className={scss.mainContainer}>
          <h1>Вы не авторизованы</h1>
          <p>Пожалуйста, войдите в систему, чтобы увидеть профиль.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <button
          className={scss.logout}
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Log Out
        </button>
        <Image
          src={session.user?.image || "/testprofile.jpg"}
          alt="Profile Avatar"
          width={150}
          height={150}
          className={scss.avatar}
        />

        <h1>{session.user?.name || "Игрок Bishkek Football Hub"}</h1>

        <span>{session.user?.email}</span>

        <p>Нападающий. Лучший бомбардир класса. Готов к матчам в Бишкеке!</p>

        <button className={scss.button}>Мои Брони</button>
      </div>
    </div>
  );
}
