"use client";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-50 to-gray-100 text-center px-6">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <AlertTriangle className="w-16 h-16 text-red-600" />
        <h1 className="text-4xl font-bold text-gray-900">Sayfa Bulunamadı</h1>
        <p className="text-gray-600">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen adresi
          kontrol edin ya da ana sayfaya dönün.
        </p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => router.back()}
            className="px-5 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
          >
            Geri Dön
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Ana Sayfaya Git
          </button>
        </div>
      </div>

      <footer className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Miraç Oto | Akhisar Oto Servis
      </footer>
    </main>
  );
}
