import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import AuthProvider from "./Context/AuthContext";
import GlobalProvider from "./Context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
