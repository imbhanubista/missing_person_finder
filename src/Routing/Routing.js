import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Alert, Spin } from "antd";
import { useSelector } from "react-redux";
import Errors from "./Errors";
const SignUp = React.lazy(() => import("../pages/SignUp"));
const LogIn = React.lazy(() => import("../pages/LogIn"));
const ForgetPass = React.lazy(() => import("../pages/ForgetPass"));
const ChangePass = React.lazy(() => import("../pages/ChangePass"));
const Home = React.lazy(() => import("../dashboard/Home"));
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const PostMissing = React.lazy(() => import("../dashboard/PostMissing"));
const ListMissing = React.lazy(() => import("../dashboard/ListMissing"));
const About = React.lazy(() => import("../dashboard/About"));
const ListFound = React.lazy(() => import("../dashboard/ListFound"));
const MissingSubmitted = React.lazy(() =>
  import("../dashboard/MissingSubmitted")
);

const Routing = () => {
  // redux state bata data lina selector
  const selector = useSelector((state) => state.reducers);
  // to check whether the user is logged in or not
  // when "object.keys(selector).length" is <=0 then there will be no data in the store so we call it as empty or user is not logged in
  const isLogged = Object.keys(selector).length > 0;

  return (
    <Suspense
      fallback={
        <div>
          {" "}
          <Spin tip="Loading..." size="large">
            {" "}
            <Alert message="Wait for a while!" type="info" />{" "}
          </Spin>{" "}
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/reset" element={<ChangePass />} />
          <Route path="/signup" element={<SignUp />} />
          {/* isLogged chai mathi bata data aairaheko xa, and isLogged lengeth is greater than 0 than we can redirect it to "/home" 
        else navigate it to "/"route, navigation is done in private route
        */}
          <Route
            path="/home"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/postmissing"
            element={
              <PrivateRoute isLogged={isLogged}>
                <PostMissing />
              </PrivateRoute>
            }
          />
          <Route
            path="/listmissing"
            element={
              <PrivateRoute isLogged={isLogged}>
                <ListMissing />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute isLogged={isLogged}>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/listfound"
            element={
              <PrivateRoute isLogged={isLogged}>
                <ListFound />
              </PrivateRoute>
            }
          />
          <Route
            path="/submitlist"
            element={
              <PrivateRoute isLogged={isLogged}>
                <MissingSubmitted />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<Errors />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routing;
