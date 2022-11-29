import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

const PROFILE_PATH = "/profile";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<div>Home</div>} />
      <Route path={PROFILE_PATH}>
        <Route path={":id"} element={<ProfilePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
