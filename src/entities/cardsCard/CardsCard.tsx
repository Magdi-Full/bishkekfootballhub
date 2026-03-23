import Image from "next/image";
import scss from "./cardsCard.module.scss";

interface PropsCard {
  title: string;
  image: string;
  description: string;
}

export default function CardsCard({ title, description, image }: PropsCard) {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <Image src={image} alt="" width={400} height={300} />
        <div className={scss.text}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
