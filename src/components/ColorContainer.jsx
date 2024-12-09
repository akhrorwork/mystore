const colors = ["#ECEBDE", "#D3F1DF", "#EBEAFF", "#FEF3E2"];

import { useGloablContext } from "../hooks/useGlobalContext";

function ColorContainer() {
  const { dispatch } = useGloablContext();
  return (
    <div className="align-elements w-full mb-10 flex justify-end">
      <ul className="flex gap-3">
        {colors.map((color) => {
          return (
            <li
              onClick={() =>
                dispatch({
                  type: "CHANGE_COLOR",
                  payload: color,
                })
              }
              key={color}
              className="w-7 h-7 border rounded-full cursor-pointer hover:border-red-300"
              style={{ backgroundColor: color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
