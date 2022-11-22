import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
//import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from "./authContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render( 
    <BrowserRouter>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </BrowserRouter>
    
  );
  


