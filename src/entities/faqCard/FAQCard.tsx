"use client";

import scss from "./faqCard.module.scss";
import { useState } from "react";

interface TextChanger {
  mainText: string;
  backText: string;
}

export default function FAQCard({ backText, mainText }: TextChanger) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={scss.container}>
      <div className={scss.mainContainer} onClick={() => setIsOpen(!isOpen)}>
        <h3>{isOpen ? mainText : backText}</h3>
      </div>
    </div>
  );
}
