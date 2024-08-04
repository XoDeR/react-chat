import Login from "@components/Auth/Login";
import useChatStore from "@store/Store";

const AuthPage = () => {
  const isLoggedIn = useChatStore((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="relative flex h-full flex-col gap-2 bg-slate-400 py-10">
      <div className="mx-auto h-full max-w-300px rounded-md bg-slate-700 text-white px-6">
        CHAT
      </div>
      <p className="text-center font-bold text-white">
        Login Signup ForgotPassword Signout
      </p>
      {!isLoggedIn && (
        <div>
          <button>Login</button>
          <button>Signup</button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
