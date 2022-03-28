import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={SignUp} exact />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
