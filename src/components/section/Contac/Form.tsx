import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.subject || !form.message) {
      alert("Mohon lengkapi seluruh data terlebih dahulu.");
      return;
    }

    const whatsappMessage = `Halo PT. Pisut Jaya Mandiri,

Saya menghubungi perusahaan melalui website.

Nama: ${form.name}
Nomor WhatsApp: ${form.phone}
Subjek: ${form.subject}

Pesan:
${form.message}

Terima kasih.`;
    
    const url = `https://wa.me/6282151062726?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="rounded-3xl bg-[#141b2b]  p-8 shadow-2xl md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Nama */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-white/70">
              Nama Lengkap
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-blue-400/10"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-white/70">
              Nomor WhatsApp
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-blue-400/10"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-white/70">
            Subjek
          </label>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Contoh: Penawaran Proyek"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-blue-400/10"
          />
        </div>

        {/* Pesan */}
        <div>
          <label className="mb-2 block text-sm font-semibold uppercase tracking-widest text-white/70">
            Pesan
          </label>

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tuliskan kebutuhan proyek Anda..."
            className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-blue-400/10"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-400/10 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
        >
          <Send size={20} />
          Kirim Pesan ke WhatsApp
        </button>
      </form>
    </div>
  );
}
