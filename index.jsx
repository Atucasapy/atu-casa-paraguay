import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-orange-500 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="A Tu Casa Paraguay" className="w-12 h-12" />
            <h1 className="text-2xl font-bold">A Tu Casa Paraguay</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary">Catálogo</Button>
            <Button variant="secondary">Carrito</Button>
            <Button variant="secondary">Contacto</Button>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-orange-100">
        <img
          src="/banner.png"
          alt="Promoción A Tu Casa Paraguay"
          className="w-full h-auto"
        />
      </section>

      {/* Catálogo */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-2xl shadow-md">
            <img src="/producto1.jpg" alt="Producto 1" className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Defensa Delantera</h3>
            <p className="text-orange-500 font-bold text-lg">Gs. 450.000</p>
            <Button className="mt-4 w-full">Agregar al carrito</Button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-orange-50 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¿Tenés dudas o querés hacer tu pedido?</h2>
          <p className="mb-6">Escribinos directo por WhatsApp o seguinos en Facebook</p>
          <div className="flex justify-center gap-4">
            <a href="https://wa.me/595XXXXXXXX" target="_blank">
              <Button className="bg-green-500 hover:bg-green-600">WhatsApp</Button>
            </a>
            <a href="https://facebook.com/atuCasaParaguay" target="_blank">
              <Button className="bg-blue-600 hover:bg-blue-700">Facebook</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white p-6 mt-10 text-center">
        © 2025 A Tu Casa Paraguay. Todos los derechos reservados.
      </footer>
    </div>
  );
}
