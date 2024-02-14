import ExempleComponent from "./exemple.component";
import UseExempleController from "./exemple.controller";
import { ControllerProps } from "./exemple.types";

const Exemple = (props: ControllerProps) => {
  const controller = UseExempleController(props);
  return <ExempleComponent controller={controller} />;
};

export default Exemple;
