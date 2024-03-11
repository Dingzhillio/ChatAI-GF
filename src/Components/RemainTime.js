import { useNavigate } from "react-router-dom";
import timer from "../images/time.png";
import { authService } from "../services/auth.service";
import { userService } from "../services/user.service";
import { useEffect, useState } from "react";

const RemainTime = ({headerReloadFlag, setHeaderReloadFlag}) => {
  const [remainTime, setRemainTime] = useState();
  const navigate = useNavigate();
  const handleMembership = () => {
    navigate("/membership");
  };
  const fetchData = async () => {
    const user = userService.read() ? userService.read() : {};
    if (user) {
      const user_id = user.data._id;
      const userInfo = await authService.fetch(user_id);
      setRemainTime(userInfo.data.remainTime);
    }
  };
  useEffect(() => {
    fetchData();
    setHeaderReloadFlag(false)
  }, [headerReloadFlag, setHeaderReloadFlag]);
  return (
    <>
      <div className="bg-[#270E0C] min-w-64 my-3 pr-5 relative flex">
        <button
          className="-ms-5 -my-1 text-5xl px-2 text-center font-custom font-black text-[#A2401C] rounded-lg shadow-black shadow-[0_3px_3px_0px_rgba(0,0,0,0.3)] active:shadow-none border-2 border-[#270E0C] bg-gradient-to-b from-amber-800 to-amber-300"
          onClick={handleMembership}
        >
          &#x2B;
        </button>
        <div className="text-end  w-full text-white font-custom text-4xl">
          {remainTime}
        </div>
        <div className="absolute right-3 translate-x-[100%] top-0 -translate-y-1">
          <img src={timer} alt="timer" className="w-12" />
        </div>
      </div>
    </>
  );
};

export default RemainTime;
