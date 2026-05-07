const TOKEN_KEY = "g_admin_token";
export const getAdminToken = () => localStorage.getItem(TOKEN_KEY);
export const setAdminToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

export async function adminLogin(password: string) {
  // Filhal testing ke liye simple login
  if (password === "admin123") {
    setAdminToken("dummy-token");
    return { success: true };
  }
  return { success: false, message: "Invalid Password" };
}

