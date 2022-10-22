import React from "react";
import ReactDOM from "react-dom/client";
import { createClient, Provider } from "urql";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import TopicsPage from "./pages/TopicsPage";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = createClient({
  url: process.env.REACT_APP_API_URL,
  fetchOptions: () => {
    return {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    };
  },
});

root.render(
  <Provider value={client}>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<TopicsPage />}></Route>
          <Route path="topics/:topicName" element={<TopicsPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </Provider>
);


