// Routes that require admin authentication
const publicAdminRoutes = ['createFirstUser', 'forgot', 'login', 'logout', 'forgot', 'inactivity', 'unauthorized', 'reset'];
export const isAdminRoute = ({
  adminRoute,
  route
}) => {
  return route.startsWith(adminRoute);
};
export const isPublicAdminRoute = ({
  adminRoute,
  config,
  route
}) => {
  const isPublicAdminRoute = publicAdminRoutes.some(routeSegment => {
    const segment = config.admin?.routes?.[routeSegment] || routeSegment;
    const routeWithoutAdmin = getRouteWithoutAdmin({
      adminRoute,
      route
    });
    if (routeWithoutAdmin.startsWith(segment)) {
      return true;
    } else if (routeWithoutAdmin.includes('/verify/')) {
      return true;
    } else {
      return false;
    }
  });
  return isPublicAdminRoute;
};
export const getRouteWithoutAdmin = ({
  adminRoute,
  route
}) => {
  return adminRoute && adminRoute !== '/' ? route.replace(adminRoute, '') : route;
};
//# sourceMappingURL=shared.js.map