import ExempleComponent from "./exemple.component";
import UseExempleController from "./exemple.controller";

const Exemple = () => {
  const controller = UseExempleController();
  return <ExempleComponent controller={controller} />;
};

export default Exemple;
