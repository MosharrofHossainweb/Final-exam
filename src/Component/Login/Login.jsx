import React from 'react';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="registration bg-white  w-full">
        <div className="account flex   lg:w-full md:w-[1300px] w-[300px] ">
          <div className="form w-[640px] h-[863px] px-3 ">
            <div className="form_head ">
              <h2 className=" head1 ">WELCOME BACK!</h2>
              <h3 className=" head2">
                Don’t have a account{' '}
                <span onClick={()=>navigate('/register')} className="text-[#8699DA] mt-[20px]">Sign up</span>
              </h3>
            </div>
            <div className="input_box lg:mb-[36px] md:mb-[26px] mb-[16px] mt-[20px] md:mt-[35px] lg:mt-[64px] ">
              <label className="block">Username</label>
              <input
                type="email"
                placeholder="deniel123@gmail.com"
                className=" email "
              />
            </div>

            <div className="mb-[36px]">
              <label className="block">Password</label>
              <div className="relative">
                <FaRegEyeSlash className="absolute lg:top-[30px] right-2 lg:right-[20px]" />
                <input
                  type="password"
                  placeholder="••••••"
                  className=" password  "
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-eye"></i>
                </button>
              </div>
            </div>

            {/* ======================forgate password======================= */}
            <div className="flex w-[300px] lg:w-[640px] md:w-[500px] items-center justify-between px-4 py-2 md:px-6">
              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="w-5 h-5 text-blue-600 border-2 border-blue-400 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-gray-700 text-sm md:text-base"
                >
                  Remember me
                </label>
              </div>

              {/* Forget Password */}
              <div>
                <a
                  href="#"
                  className="text-blue-600 text-sm md:text-base hover:underline"
                >
                  Forget password?
                </a>
              </div>
            </div>
            {/* ======================forgate password======================= */}
            <button type="submit" className=" sing ">
              Sign In
            </button>
            {/* ===========social media========== */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 w-[300px] lg:w-[640px] md:w-[500px] mb-4">
                ------or continue with-------
              </p>
              <div className="flex justify-center w-[300px] lg:[700px] md:w-[650px] space-x-4">
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                  <img
                    src="https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0"
                    alt="Google"
                    className="w-9 h-9"
                  />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                  <img
                    src="https://th.bing.com/th/id/R.4073836f2fdb4bcd7ec76a1ff2f08886?rik=nSKRykqkPd%2bZ7g&pid=ImgRaw&r=0"
                    alt="Facebook"
                    className="w-9 h-9"
                  />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                  <img
                    src="https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?rs=1&pid=ImgDetMain"
                    alt="Apple"
                    className="w-9 h-9"
                  />
                </button>
              </div>
            </div>
            {/* ===========social media========== */}
          </div>
          <div className="account_image lg:w-[960px] md:w-[600px] w-[300px]">
            <img src="image\Image.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
