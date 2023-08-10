import { useAuth } from "./AuthContext";

const Login = () => {
  const { login } = useAuth();
  const { user } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const usernameValue = e.target.username.value;
    const passwordValue = e.target.password.value;
    if (!usernameValue || !passwordValue) {
      return;
    }
    login(usernameValue, passwordValue);
  };

  const taskManagementVisible = !!user;
  const inputStyledComp =
    "outline-none border border-grey-800 p-2 rounded-md w-auto sm:min-w-[50%] min-w-full";
  return (
    <form
      onSubmit={handleLogin}
      hidden={!taskManagementVisible}
      className="flex flex-col w-full gap-8 justify-center items-center"
    >
      <h1 className="text-center font-bold  text-3xl">Login</h1>
      <input
        type="text"
        autoFocus
        required
        name="username"
        className={`${inputStyledComp}`}
        placeholder="Username"
      />
      <input
        type="password"
        className={`${inputStyledComp}`}
        placeholder="Password"
        name="password"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 p-2 rounded-md px-4 text-white font-semibold md:text-base text-sm  min-w-full sm:min-w-[50%]"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
