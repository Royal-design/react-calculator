import { buttonData } from "../../assets/data";
import { Button } from "../Button/Button";
import "./screen.scss";
import { UseData } from "../../useDataContextHook/UseData";

export const Screen = () => {
  const { calc } = UseData();
  console.log(calc);

  return (
    <div className="calculator">
      <div className="calculator-screen">{calc.num ? calc.num : calc.res}</div>
      <div className="calculator-button">
        {buttonData.map((value, i) => (
          <Button key={i} value={value} />
        ))}
      </div>
    </div>
  );
};
