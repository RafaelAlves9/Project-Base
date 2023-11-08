import { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CommonDataPaths } from "./DataPaths/CommonDataPaths";
import Loading from "@shared/Loading/Loading";

const RoutesApp = () => {
  
  return (
    <Router>
      <Suspense fallback={<Loading isLoadingParam={true} />}>
        <Routes>

          {/* public routes */}
          {CommonDataPaths.map((common, key) => (
            <Route
              key={key}
              path={common.path}
              element={<common.element />}
            />
          ))}
          
          {/* private client routes */}
          {/* <Route element={<AuthRequiredRoutes roleRoute="client" />} >
            {ClientDataPaths.map((common, key) => (
              <Route
                key={key}
                path={common.path}
                element={<common.element />}
              />
            ))}
          </Route> */}

        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesApp;
