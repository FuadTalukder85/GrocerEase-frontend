"use client";
import { registerUser } from "@/utils/RegisterUser";
import { SubmitHandler, useForm } from "react-hook-form";

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>();
  const onSubmit: SubmitHandler<UserType> = async (data) => {
    try {
      const res = await registerUser(data);
      console.log(res);
      reset();
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };
  return (
    <div className="hero max-w-screen-xl mx-auto bg-base-200 md:mt-16 p-10">
      <div className="hero-content flex-col">
        {/* lg:flex-row-reverse */}
        <span className="text-2xl font-medium text-black">
          Create an Account
        </span>
        <div className="flex gap-10 mt-8">
          <div className="bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="md:flex gap-10">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="First name"
                    className="input order border-[#dbd8d8] text-xs md:w-56"
                    {...register("firstName")}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input order border-[#dbd8d8] text-xs md:w-56"
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input order border-[#dbd8d8] text-xs"
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input order border-[#dbd8d8] text-xs"
                  {...register("password")}
                />
              </div>

              <div className="form-control mt-5">
                <button
                  type="submit"
                  className="border bg-[#333333] text-white hover:bg-[#5DD2C0] transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="bg-base-100 p-10">
            <p className="mt-10 pr-16">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
