import { Route, Routes } from "react-router-dom";

import { AlvadevRoutes } from "../alvadev/routes/AlvadevRoutes";

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<AlvadevRoutes/>}></Route>
        </Routes>
    </div>
  )
}