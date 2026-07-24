import InfoContact from "./InfoContact";
import Form from "./Form";

export default function Contact() {
  return (
    <section id="contact" className=" p-10 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-blue-400">
            Hubungi Kami
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Mari Diskusikan Proyek Anda
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-on-surface-variant">
            Kami siap membantu kebutuhan konstruksi, penyewaan alat berat,
            maupun kerja sama bisnis dengan pelayanan profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <InfoContact />
          </div>

          <div className="lg:col-span-7">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
