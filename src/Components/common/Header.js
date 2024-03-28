import SignIn from "../auth/SignIn";
import { useNavigate } from "react-router-dom";
import RemainTime from "../RemainTime";

const Header = ({
  isLogin,
  headerReloadFlag,
  setHeaderReloadFlag,
  isOpenSignIn,
  setIsOpenSignIn,
  setIsOpenSignUp,
}) => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/");
  };
  const logo = `${process.env.REACT_APP_FRONT}images/logo.png`;
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-end" onClick={handleOnclick}>
          <img src={logo} alt="logo" className="w-20 cursor-pointer" />
          <div className="text-3xl font-bold mb-4 text-white tracking-wide font-custom ms-3 text-shadow">
            SUMMONBAE
          </div>
        </div>
        {isLogin ? (
          <>
            <RemainTime
              headerReloadFlag={headerReloadFlag}
              setHeaderReloadFlag={setHeaderReloadFlag}
            />
            {/* <button className="text-3xl font-bold mb-4 text-white tracking-wide font-custom ms-3 text-shadow">
              Logout
            </button> */}
            
          </>
        ) : (
          <button onClick={() => setIsOpenSignIn(true)}>
            <p className="bg-blue-700 my-2 rounded px-2 align-middle py-3 text-white text-lg font-bold border-black border">
              Login
            </p>
          </button>
        )}
      </div>
      {isOpenSignIn && (
        <SignIn
          setIsOpenSignIn={setIsOpenSignIn}
          setIsOpenSignUp={setIsOpenSignUp}
        />
      )}
    </>
  );
};
export default Header;
