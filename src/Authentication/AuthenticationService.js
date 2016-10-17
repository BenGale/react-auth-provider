let authenticated = false;

export const isAuthenticated = () => authenticated;
export const login = () => authenticated = true;
export const logout = () => authenticated = false;
