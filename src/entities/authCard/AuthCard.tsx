"use client";

import { useState } from "react";
import scss from "./authCard.module.scss";
import { signIn, signOut } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

interface AuthProps {
  typeRegister: string;
  textRegister: string;
  typeLogin: string;
  textLogin: string;
  linkRegister: string;
  linkLogin: string;
}

export default function AuthCard({
  typeRegister,
  textRegister,
  typeLogin,
  textLogin,
  linkRegister,
  linkLogin,
}: AuthProps) {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className={scss.container}>
      {isAuth ? (
        <div className={scss.mainContainer}>
          <h1>{typeRegister}</h1>
          <button
            className={scss.google}
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            Continue With Google
            <span>
              <FaGoogle />
            </span>
          </button>
          <div className={scss.inputs}>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="User" />
          </div>
          <button>{typeRegister}</button>
          <p>
            {textRegister}
            <span onClick={() => setIsAuth(!isAuth)}>{linkRegister}</span>
          </p>
        </div>
      ) : (
        <div className={scss.mainContainer}>
          <h1>{typeLogin}</h1>
          <button
            className={scss.google}
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            Continue With Google
            <span>
              <FaGoogle />
            </span>
          </button>
          {isAuth ? (
            <div className={scss.inputs}>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="User" />
            </div>
          ) : (
            <div className={scss.inputs}>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
            </div>
          )}
          <button>{typeLogin}</button>
          <p>
            {textLogin}
            <span onClick={() => setIsAuth(!isAuth)}>{linkLogin}</span>
          </p>
        </div>
      )}
    </div>
  );
}
