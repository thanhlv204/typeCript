import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { User } from "../interface/User";
import instance from "../axios";

type Props = {
  isLogin?: boolean;
};

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

const AuthForm = ({ isLogin }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(UserSchema) });

  const nav = useNavigate();

  const onSubmit = async (data: User) => {
    try {
      if (isLogin) {
        const res = await instance.post(`/login`, data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
        nav("/admin");
        // logic login
      } else {
        // logic register
        await instance.post(`/register`, data);
        nav("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>{isLogin ? "login" : "register"}</h1>
        <div className="*:mb-3">
          <label htmlFor="email" className="form-lable">
            email
          </label>
          <input
            type="text"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="*:mb-3">
          <label htmlFor="password" className="form-lable">
            password
          </label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-3">
          <button className="bg-blue-500">
            {isLogin ? "login" : "register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
