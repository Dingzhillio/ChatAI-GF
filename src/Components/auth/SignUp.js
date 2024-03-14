import mailIcon from "../../images/email.svg";
import personIcon from "../../images/person.svg";
import pswIcon from "../../images/password.svg";
import { useState } from "react";
import { authService } from "../../services/auth.service";
import { toast } from "react-toastify";

const SignUp = ({ setIsOpenSignUp,setIsOpenSignIn }) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {name, email, password}
    const response = await authService.signup(payload);

    if (response.status === 201) {
      toast.success("Successfully registered!");
      setIsOpenSignUp(false);
      window.location.reload();
    }else {
      toast.error("User already exists");
    }
  }
  const toggle = () => {
    setIsOpenSignUp();
    setIsOpenSignIn(true);
  }
  return (
    <>
      <div className="fixed top-0 left-0 bg-gray-950/[0.7] w-full h-full min-h-screen pt-20">
        <div className="w-2/5 h-5/6 min-h-[410px] bg-[#023875] rounded-md m-auto relative">
          <button
            className="text-white bg-[#544B64] absolute top-0 right-0 py-3 px-4 -mt-1 -mr-1 rounded font-bold z-10"
            onClick={() => setIsOpenSignUp(false)}
          >
            &#x2716;
          </button>

          <div className="text-white text-center py-4 text-3xl shadow-lg shadow- drop-shadow-2xl font-custom text-shadow">
            SIGN UP
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-8">
              <div className="bg-white rounded-xl px-3 py-2 flex my-5">
                <div>
                  <img src={mailIcon} alt="mail-icon" />
                </div>
                <input
                  className="placeholder-gray-500 pl-2 text-xl font-bold outline-none w-full"
                  name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
                  
                ></input>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 flex my-5">
                <div>
                  <img src={personIcon} alt="mail-icon" />
                </div>
                <input
                  className="placeholder-gray-500 pl-2 text-xl font-bold outline-none w-full"
                  name="name" placeholder="Nick Name" onChange={(e)=>setName(e.target.value)}
                  
                ></input>
              </div>
              <div className="bg-white rounded-xl px-3 py-2 flex my-5">
                <div>
                  <img src={pswIcon} alt="mail-icon" />
                </div>
                <input
                  className="placeholder-gray-500 pl-2 text-xl font-bold outline-none w-full" type="password"
                  name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
                ></input>
              </div>
              <button
                className="text-center text-xl text-white font-custom text-shadow-button border-[1px] border-black rounded py-2 bg-[#0575C3] w-full"
                type="submit"
              >
                SignUp
              </button>
            </div>
          </form>
          <div className="bg-[#CEE2F9] rounded-b text-center py-4 text-lg font-bold text-[#6794A9]">
            Already have an account?{" "}
            <button className="text-xl text-[#023875] cursor-pointer font-custom" onClick={()=>toggle()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
