export const routeNavigation = ({ page, payload = {} }) => ({
    type: 'ROUTE_NAVIGATE',
    page,
    payload,
});
