//style import
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main id={styles["main-section"]}>
      <div id={styles["image-container"]}>
        <div alt="store" id={styles["bg-image"]}></div>
      </div>
      <div className="container" id={styles["about-container"]}>
        <div id={styles["about"]}>
          <h1>Delicious Food, Delivered to you</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
