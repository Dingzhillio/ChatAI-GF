import Header from "./common/Header";
import { userService } from "../services/user.service";
import coin from "../images/64263219044.png";
import { costService } from "../services/cost.service";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const Membership = () => {
  const [headerReloadFlag, setHeaderReloadFlag] = useState(false)
  const isLogin = userService.read() ? true : false;

  const [membershipPlan, setMembershipPlan] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const stripePromise = loadStripe("pk_test_51O5TjdEDrDR7MqCwZ8bMHD5dGg1YvsNUlsNM9o1iiE08UDgLCTGHxbR0OMshP8sMZt1ugWQN0ltUv9qxPCebhtgG00YCUN6omv");

  const fetchData = async () => {
    const membership = await costService.read();
    setMembershipPlan(membership.plan);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this timeout according to your actual loading time

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  const handlePayment = async (payment_id) => {
    const userInfo = userService.read();
    const user_id = userInfo.data._id;
    const plan_id = payment_id;

    const session = await costService.send(plan_id, user_id);
    const stripe = await stripePromise;
    
    await stripe.redirectToCheckout({ sessionId: session.data.id })

    console.log("data", session);
    toast.success("Payment successfully")
  }
  return (
    <>
    {
      isLoading ? (
        <div className="bg-black h-screen">
              <div className="absolute top-[50%] left-[50%]">
                <div class="lds-heart">
                  <div></div>
                </div>
              </div>
            </div>
      ) : (
        <div className="bg-hero-pattern h-full bg-cover min-h-screen">
        <div className="max-w-screen-xl mx-auto py-3 px-5">
          <Header isLogin={isLogin} headerReloadFlag={headerReloadFlag} setHeaderReloadFlag={setHeaderReloadFlag} />
          <div className="w-full h-full border-t-2 border-[#0A1921] bg-gray-900/[0.4] fixed top-20 left-0">
            <div className="bg-fuchsia-600/[0.4] mt-20 text-white border-y-2 border-[#0A1921]/[0.8]">
              <div className="max-w-screen-xl mx-auto px-7 py-5 grid grid-cols-4 gap-4">
                {membershipPlan.map((data, index) => (
                  <form
                    className="text-center mx-8 p-3 min-w-[200px]"
                    key={index} onClick={()=>handlePayment(data._id)}
                  >
                    <div
                      className={`
                    ${index % 4 === 0 ? "bg-[#0575C3] " : ""}
                    ${index % 4 === 1 ? "bg-[#C51F5B] " : ""}
                    ${index % 4 === 2 ? "bg-[#D453F5] " : ""}
                    ${index % 4 === 3 ? "bg-[#F3B712] " : ""}
                    border border-black rounded-2xl mx-2 p-3 cost-box-shadow`}
                    >
                      <div
                        className={`
                      ${index % 4 === 0 ? "gradient-1" : ""}
                      ${index % 4 === 1 ? "gradient-2" : ""}
                      ${index % 4 === 2 ? "gradient-3" : ""}
                      ${index % 4 === 3 ? "gradient-4" : ""}
                      rounded-2xl border border-black/[0.3] p-3`}
                      >
                        <img src={coin} alt="coin" className="w-full" />
                        <div className="text-4xl font-custom font-bold text-shadow-cost">
                          $ {data.cost}
                        </div>
                      </div>
                    </div>
                    <div className="text-4xl mt-7 font-bold">
                      {data.min} min
                    </div>
                  </form>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
      
    </>
  );
};
export default Membership;
