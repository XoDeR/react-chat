const AuthPage = () => {
  const step = "Step 1/3";

  return (
    <div className="relative flex h-full flex-col gap-2 bg-slate-400 py-10">
      <div className="mx-auto h-full max-w-300px rounded-md bg-slate-700 text-white px-6">
        CHAT
      </div>
      <p className="text-center font-bold text-white">
        {"Step"} {step.split(" ")[1]}
      </p>
    </div>
  );
};

export default AuthPage;
