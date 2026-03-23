import Image from "next/image";
import scss from "./header.module.scss";
import Link from "next/link";
import { SiFusionauth } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <Link href={"/"}>
          <Image src={"/logobg.png"} alt="" width={200} height={110} />
        </Link>
        <nav>
          <Link href={"/fields"}>Поля</Link>
          <Link href={"/futsals"}>Футзалы</Link>
          <Link href={"/support"}>Поддержка</Link>
        </nav>
        <div className={scss.icons}>
          <Link href={"/auth"}>
            <span>
              <SiFusionauth />
            </span>
          </Link>
          <Link href={"/profile"}>
            <span>
              <CgProfile />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
