import Link from "next/link";
import scss from "./footer.module.scss";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <div className={scss.icons}>
          <a className={scss.youtube} href="https://www.youtube.com/@Magdi-p9l">
            <span>
              <FaYoutube />
            </span>
          </a>
          <a
            className={scss.instagram}
            href="https://www.instagram.com/magdi_fcb/"
          >
            <span>
              <FaInstagram />
            </span>
          </a>
          <a
            className={scss.telegram}
            href="https://web.telegram.org/k/#@justlikeyourm"
          >
            <span>
              <FaTelegram />
            </span>
          </a>
          <a className={scss.vk} href="https://vk.com/levprozhnev">
            <span>
              <FaVk />
            </span>
          </a>
        </div>
        <p>© 2026 Bishkek Football Hub. All rights reserved.</p>
      </div>
    </div>
  );
}
