"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMPTY_FORM: FormData = {
  fullName: "",
  phone: "",
  email: "",
  propertyType: "",
  message: "",
};

const contactDetails = [
  {
    label: "Phone",
    value: "+234 902 935 5082",
    href: "tel:+2349029355082",
    icon: "📞",
  },
  {
    label: "Email",
    value: "sunsparkenergy@proton.me",
    href: "mailto:sunsparkenergy@proton.me",
    icon: "✉",
  },
  {
    label: "Address",
    value: "Port Harcourt, Nigeria",
    href: null,
    icon: "📍",
  },
];

const WHATSAPP_NUMBER = "2349029355082";

export default function Contact() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function update<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear the error for this field as soon as the user edits it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (!form.fullName.trim()) {
      next.fullName = "Please enter your name.";
    } else if (form.fullName.trim().length < 2) {
      next.fullName = "Name looks too short.";
    }

    const digits = form.phone.replace(/\D/g, "");
    if (!form.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (digits.length < 10) {
      next.phone = "Enter a valid phone number (at least 10 digits).";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (!form.propertyType) {
      next.propertyType = "Please select a property type.";
    }

    if (!form.message.trim()) {
      next.message = "Please describe your energy requirement.";
    } else if (form.message.trim().length < 10) {
      next.message = "Please provide a little more detail.";
    }

    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      // Focus the first field with an error
      const firstError = Object.keys(validation)[0];
      document.getElementById(firstError)?.focus();
      return;
    }

    setStatus("submitting");

    // No backend yet — simulate a short delay, then show success.
    // TODO: replace with a real submission (API route, Formspree, etc.)
    setTimeout(() => {
      setStatus("success");
    }, 700);
  }

  function buildWhatsAppLink() {
    const lines = [
      "Hello SunSpark Energy! I'd like a quote.",
      "",
      `Name: ${form.fullName || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Email: ${form.email || "—"}`,
      `Property: ${form.propertyType || "—"}`,
      "",
      `Requirement: ${form.message || "—"}`,
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="bg-navy-800 on-dark py-16 md:py-20">
        <div className="container-x">
          <span className="eyebrow eyebrow-light">Get In Touch</span>
          <h1 className="mb-5">Contact SunSpark Energy</h1>
          <p className="prose-on-dark text-xl">
            Request your free solar energy consultation today.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-12">
          {/* ---------- Contact Information ---------- */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-navy-800">
              Get In Touch
            </h2>
            <p className="prose-body mb-8">
              Reach out by phone, email, or WhatsApp — or send us a request
              using the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-5 mb-8">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl bg-ink-50 border border-ink-200"
                >
                  <div className="icon-badge shrink-0">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-navy-800 font-semibold hover:text-solar-600 transition-colors wrap-break-word"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy-800 font-semibold wrap-break-word">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              Chat on WhatsApp
            </Link>

            {/* Availability */}
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-4 text-navy-800">
                Availability
              </h3>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-brandgreen-50 border border-brandgreen-100">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brandgreen-500 text-white shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-navy-800 text-sm">
                    Open 24 hours, 7 days a week
                  </p>
                  <p className="text-xs text-ink-500">
                    Including weekends and public holidays
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Quote Form ---------- */}
          <div>
            <div className="card p-6 md:p-8">
              {/* ---- Success state ---- */}
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brandgreen-100 text-brandgreen-600 mb-5">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-navy-800">
                    Request Received
                  </h2>

                  <p className="prose-muted mb-6 max-w-sm mx-auto">
                    Thank you, {form.fullName.split(" ")[0] || "there"}. We
                    have your details and will be in touch within 24 hours.
                  </p>

                  <div className="bg-ink-50 border border-ink-200 rounded-xl p-5 text-left mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-400 mb-2">
                      Need a faster response?
                    </p>
                    <p className="text-sm text-ink-600 mb-3">
                      Send the same details directly to us on WhatsApp — we are
                      available 24/7.
                    </p>
                    <Link
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-green btn-block text-sm"
                    >
                      Continue on WhatsApp
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY_FORM);
                      setErrors({});
                      setStatus("idle");
                    }}
                    className="text-sm font-bold text-solar-600 hover:text-navy-800 transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                /* ---- Form state ---- */
                <>
                  <h2 className="text-3xl font-bold mb-2 text-navy-800">
                    Request A Quote
                  </h2>
                  <p className="prose-muted mb-6">
                    Tell us about your project and we&apos;ll recommend the
                    right system.
                  </p>

                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                    {/* Full name */}
                    <div>
                      <label htmlFor="fullName" className="field-label">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. John Adeyemi"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        className={`field ${errors.fullName ? "field-error" : ""}`}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className="error-text">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="field-label">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+234 800 000 0000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        className={`field ${errors.phone ? "field-error" : ""}`}
                      />
                      {errors.phone && (
                        <span id="phone-error" className="error-text">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={`field ${errors.email ? "field-error" : ""}`}
                      />
                      {errors.email && (
                        <span id="email-error" className="error-text">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Property type */}
                    <div>
                      <label htmlFor="propertyType" className="field-label">
                        Property Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={form.propertyType}
                        onChange={(e) => update("propertyType", e.target.value)}
                        aria-invalid={!!errors.propertyType}
                        aria-describedby={
                          errors.propertyType ? "propertyType-error" : undefined
                        }
                        className={`field ${
                          errors.propertyType ? "field-error" : ""
                        }`}
                      >
                        <option value="">Select property type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                      {errors.propertyType && (
                        <span id="propertyType-error" className="error-text">
                          {errors.propertyType}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="field-label">
                        Your Energy Requirement{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your energy needs, current bills, or backup requirements…"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={`field h-32 resize-none ${
                          errors.message ? "field-error" : ""
                        }`}
                      />
                      {errors.message && (
                        <span id="message-error" className="error-text">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn btn-primary btn-block disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="opacity-25"
                            />
                            <path
                              d="M12 2a10 10 0 0 1 10 10"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>

                    <p className="text-xs text-ink-400 text-center">
                      We respond within 24 hours. By submitting, you agree to
                      our{" "}
                      <Link
                        href="/privacy"
                        className="text-solar-700 hover:text-navy-800 underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="bg-ink-50 section">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="eyebrow">Visit Us</span>
            <h2 className="section-title">Our Location</h2>
            <span className="title-rule title-rule-center" />
          </div>

          <div className="h-80 rounded-2xl border border-ink-200 bg-ink-100 flex flex-col items-center justify-center gap-3">
            <span className="text-5xl">🗺️</span>
            <p className="prose-muted">Google Map will be added here</p>
            <p className="text-xs text-ink-400">Port Harcourt, Nigeria</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-brandgreen-500 on-dark section">
        <div className="container-x text-center">
          <h2 className="mb-4">Switch To Clean Energy Today</h2>
          <p className="prose-on-dark text-lg max-w-xl mx-auto mb-8">
            SunSpark Energy is ready to design the right solar solution for you.
          </p>
          <Link href="/projects" className="btn btn-outline-light">
            View Our Projects
          </Link>
        </div>
      </section>
    </main>
  );
}