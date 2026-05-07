import { useState } from "react";
import { useLocation } from "wouter";
import { adminLogin } from "@/lib/admin-auth";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await adminLogin(password);
    if (result.success) setLocation("/admin");
    else setError("Invalid Password");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">G</div>
          <h2 className="text-2xl font-bold">Admin Sign-In</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded" 
              placeholder="Enter admin password"
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button type="submit" className="w-full bg-primary py-2 rounded-full font-bold">Sign In</button>
        </form>
      </div>
    </div>
  );
}

