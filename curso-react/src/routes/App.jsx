import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RecoveryPassword from "../pages/RecoveryPassword";
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/recovery-password" exact element={<RecoveryPassword/>} />
          <Route path="/send-email" exact element={<SendEmail/>}/>
          <Route path="/new-password" exact element={<NewPassword/>}/>
          <Route path="/account" exact element={<MyAccount/>} />
          <Route path="/signup" exact element={<CreateAccount/>} />
          <Route path="/checkout" exact element={<Checkout/>} />
          <Route path="/orders" exact element={<Orders/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
