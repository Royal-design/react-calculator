import "./button.scss";
import { UseData } from "../../useDataContextHook/UseData";

type ValueType = {
  value: any;
};

type value = string;
const getClassName = (value: value) => {
  const className: any = {
    "=": "equals",
    "+": "opt",
    "-": "opt",
    "/": "opt",
    x: "opt"
  };
  return className[value];
};

export const Button = ({ value }: ValueType) => {
  const { calc, setCalc } = UseData();
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num
    });
  };

  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0
    });
  };

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    });
    console.log(calc);
  };
  const equalClick = () => {
    const math = (a: string | number, b: string | number, sign: string) => {
      const result: any = {
        "+": (a: number, b: number) => a + b,
        "/": (a: number, b: number) => a / b,
        x: (a: number, b: number) => a * b,
        "-": (a: number, b: number) => a - b
      };
      return result[sign](a, b);
    };

    setCalc({
      sign: "",
      num: 0,
      res: math(calc.res, calc.num, calc.sign)
    });
  };
  const percentClick = () => {
    setCalc({
      sign: "",
      num: calc.num / 100,
      res: calc.res / 100
    });
  };

  const invertClick = () => {
    setCalc({
      sign: "",
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0
    });
  };
  const handleClick = () => {
    let numberValue;

    const numberString = value.toString();
    if (numberString === "0" && calc.num === 0) {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue
    });
  };
  const handleBtnClick = () => {
    const results: any = {
      ".": commaClick,
      C: resetClick,
      "+": signClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "=": equalClick,
      "%": percentClick,
      "+-": invertClick
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClick();
    }
  };
  return (
    <button
      value={value}
      onClick={handleBtnClick}
      className={`${getClassName(value)} button`}
    >
      {value}
    </button>
  );
};
