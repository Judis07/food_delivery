import { lazy, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import PublicRoute from "./routes/publicRoute";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <PublicRoute path="/login" component={Login} exact />
            <PublicRoute path="/register" component={SignUp} exact />
            <ProtectedRoute path="/" component={Home} exact />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
