import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div className="card shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-medium text-black">Login</h5>
          <p className="mt-5">Create an account</p>
        </div>

        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="card-body p-0 mt-5"
        >
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input order border-[#EFEDEC] text-xs md:w-96"
              // {...register("email")}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              className="input order border-[#EFEDEC] text-xs"
              // {...register("password")}
            />
          </div>

          <div className="flex justify-between items-center mt-5">
            <div>
              <div className="form-control">
                <button
                  type="submit"
                  className=" border bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase"
                >
                  Sign in
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs cursor-pointer hover:text-[#FD6F8D]">
                Forgot your password?
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
