import scss from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <h2>Bishkek Football Hub — Твой путь к идеальному матчу</h2>
        <p>
          Мы объединяем футбольное комьюнити Бишкека в одном месте. Больше не
          нужно переписываться в сотнях чатов, чтобы найти поле или собрать
          команду. Бронируй лучшие площадки города, находи достойных соперников
          и играй в футбол тогда, когда тебе удобно. Весь футбол столицы — в
          твоем смартфоне.
        </p>
      </div>
    </div>
  );
}
