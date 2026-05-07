const TOKEN_KEY = "g_admin_token";

export function getAdminToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function verifyAdminToken(): Promise<boolean> {
  const token = getAdminToken();
  if (!token) return false;
  try {
    const res = await fetch("/api/admin/verify", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function adminLogin(password: string): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.success && data.token) {
      setAdminToken(data.token);
      return { success: true };
    }
    return { success: false, message: data.message ?? "Login failed." };
  } catch {
    return { success: false, message: "Server connection error." };
  }
}

