import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./container/PageContainer";
import Card from "./components/Card"

import { useSelector } from "react-redux";

const App=()=> {
  const { drawerState } = useSelector(state=>state)
  
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          {
            drawerState.drawer && <Card/>
          }
          <Footer />
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
