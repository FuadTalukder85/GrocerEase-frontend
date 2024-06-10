import { loginUser } from "@/utils/LoginUser";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export type LoginUserType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUserType>();
  const onSubmit: SubmitHandler<LoginUserType> = async (data) => {
    try {
      const res = await loginUser(data);
      console.log(res);
      reset();
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };
  return (
    <div>
      <div className="card shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-medium text-[#333333]">Sign in</h5>
          <Link href="/create-account">
            <p className="text-sm text-[#E85363] hover:text-[#c44c58] cursor-pointer">
              Create an account
            </p>
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 mt-5">
          <div className="form-control">
            <label className="text-left" htmlFor="">
              Email <span className="text-[#E85363]">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input order border-[#dbd8d8] text-xs md:w-96 mt-3"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="text-left" htmlFor="">
              Password <span className="text-[#E85363]">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input order border-[#dbd8d8] text-xs mt-3"
              {...register("password")}
            />
          </div>

          <div className="flex justify-between items-center mt-5">
            <div>
              <div className="form-control">
                <button
                  type="submit"
                  className=" border bg-[#333333] text-white hover:bg-[#5DD2C0] transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase"
                >
                  Sign in
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#E85363] hover:text-[#c44c58] cursor-pointer">
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
