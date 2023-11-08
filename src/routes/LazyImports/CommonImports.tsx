import { lazy } from "react";

const CommonImports = {
  NotFound: lazy(() => import("@pages/NotFound/NotFound")),
  NotAuth: lazy(() => import("@pages/NotAuth/NotAth")),
};

export { CommonImports };