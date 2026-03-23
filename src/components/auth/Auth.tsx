import AuthCard from "@/entities/authCard/AuthCard";
import scss from "./auth.module.scss";

export default function Auth() {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <AuthCard
          textRegister="Already have an account?"
          textLogin="Don't have an account?"
          typeRegister="Register"
          typeLogin="Login"
          linkLogin="Register here"
          linkRegister="Login here"
        />
      </div>
    </div>
  );
}
