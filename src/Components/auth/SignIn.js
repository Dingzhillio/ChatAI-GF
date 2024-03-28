import { useState } from "react";
import { authService } from "../../services/auth.service";
import { toast } from "react-toastify";

const SignIn = ({ setIsOpenSignIn, setIsOpenSignUp }) => {

  const mailIcon = `${process.env.REACT_APP_FRONT}images/email.svg`;
  const pswIcon = `${process.env.REACT_APP_FRONT}images/password.svg`;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {email, password}
    const response = await authService.login(payload);
    if(response.status === 200){
      toast.success("Login successfully");
      setIsOpenSignIn(false);
      window.location.reload();
    }else{
      toast.error("Login failed!");
    }
  }
  const toggle = () => {
    setIsOpenSignUp(true);
    setIsOpenSignIn();
  }
  return (
    <>
      <div className="fixed top-0 left-0 bg-gray-950/[0.7] w-full h-full min-h-screen pt-20">
        <div className="w-2/5 h-4/5 min-h-[410px] bg-[#023875] rounded-md m-auto relative">
          <button
            className="text-white bg-[#544B64] absolute top-0 right-0 py-3 px-4 -mt-1 -mr-1 rounded font-bold"
            onClick={() => setIsOpenSignIn(false)}
          >
            &#x2716;
          </button>

          <div className="text-white text-center py-4 text-3xl shadow-lg shadow- drop-shadow-2xl font-custom text-shadow">
            LOGIN
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-8">
            <div className="bg-white rounded-xl px-3 py-2 flex my-5">
              <div>
                <img src={mailIcon} alt="mail-icon" />
              </div>
              <input
                className="placeholder-gray-500 pl-2 text-xl font-bold outline-none w-full" type="email" name="email"
                placeholder="Email" onChange={(e)=>setEmail(e.target.value)}
              ></input>
            </div>

            <div className="bg-white rounded-xl px-3 py-2 flex my-5">
              <div>
                <img src={pswIcon} alt="mail-icon" />
              </div>
              <input
                className="placeholder-gray-500 pl-2 text-xl font-bold outline-none w-full" type="password" name="password"
                placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
              ></input>
            </div>

            <div className="my-8 mx-3 flex">
                <input type="checkbox" className="w-10 border-2 bg-gray-900"></input>
                <p className="ms-2 text-lg text-white font-bold">Remember me</p>
            </div>

            <button className="text-center text-xl text-white border-[1px] border-black rounded py-2 bg-[#0575C3] font-custom text-shadow-button w-full" type="submit">
              Login
            </button>
          </div>
          </form>
          
          <div className="flex justify-between bg-[#CEE2F9] py-4 px-8 rounded-b">
            <button className="text-[#023670] font-bold text-xl font-custom" onClick={toggle}>SIGN UP</button>
            <button className="text-[#6794A9] text-lg font-bold">Forgot Password?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
