import { HomeControllerType } from "./exemple.types";

const ExempleComponent = ({ controller }: HomeControllerType) => {
  
  return (
    <div>
      <h1>{controller.states.isOpen.toString()}</h1>
    </div>
  );
};

export default ExempleComponent;
