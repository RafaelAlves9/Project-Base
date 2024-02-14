import { HomeControllerType } from "./exemple.types";
import css from "./exemple.module.scss";

const ExempleComponent = ({ controller }: HomeControllerType) => {
  
  return (
    <div className={css.container}>
      <h1>Exemple</h1>
    </div>
  );
};

export default ExempleComponent;
