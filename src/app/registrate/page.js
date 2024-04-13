"use client";

import Image from "next/image";

import { useState } from "react";

export default function Registrate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Crea tu cuenta
          </h1>

          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registrarse
            </button>

            <div className="text-center font-semibold">
              o registrate con google
            </div>
            <button
              type="submit"
              className="w-full flex gap-4 justify-center  p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Image
                src="/google.png" // Ruta relativa a la imagen
                alt="Descripción de la imagen"
                width={32} // Ancho deseado
                height={32} // Alto deseado
              />
              <h1 className="text-lg">Login con Google</h1>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
