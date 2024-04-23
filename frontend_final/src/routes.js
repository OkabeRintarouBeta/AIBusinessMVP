import Properties from "views/Properties.js";
import UserProfile from "views/UserProfile.js";
import Analysis from "views/Analysis.js";

const dashboardRoutes = [
  {
    path: "/Properties",
    name: "Properties",
    icon: "nc-icon nc-chart-pie-35",
    component: Properties,
    layout: "/admin"
  },
  {
    path: "/analysis",
    name: "Analysis",
    icon: "nc-icon nc-notes",
    component: Analysis,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
