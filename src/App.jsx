import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
