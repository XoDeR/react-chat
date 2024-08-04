import AppRouter from "@router/AppRouter";
import useOnAuthStateChanged from "@hooks/useOnAuthStateChanged";

const App = () => {
  useOnAuthStateChanged();

  return <AppRouter />;
};

export default App;
