import { useContext } from "react";
import { AppContext } from "../context/Provider";

export const CurrentEvent = () => {
  const { currentEvent: ev } = useContext(AppContext);

  return (
    <div>
      <div className="relative">
        <img src={ev?.image} className="w-full max-h-[500px] rounded-2xl" />
        <p
          className={`absolute top-2 right-2 px-4 py-2 text-sm ${
            ev.status === "CANCELED"
              ? "bg-gray-500"
              : ev.status === "ACTIVE"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {ev?.status}
        </p>
      </div>

      <div>
        <h3 className="my-2 font-bold">Terms and conditions</h3>
        <p className=" w-full h-[2px] bg-gray-600 my-2"></p>
      </div>
      <p>{ev?.term}</p>
    </div>
  );
};
