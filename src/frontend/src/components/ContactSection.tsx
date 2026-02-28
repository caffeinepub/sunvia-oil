import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { useSubmitInquiry } from "@/hooks/useQueries";
import mascotImg from "/assets/generated/sunvia-mascot-nobg-transparent.dim_600x600.png";
import sbzLogo from "/assets/uploads/IMG-20260226-WA0022-2.jpg";

const SBZ_LOGO_SRC = sbzLogo;
const MASCOT_SRC = mascotImg;

type FormData = {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  message: string;
  packagingInterest: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  message: "",
  packagingInterest: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const submitInquiry = useSubmitInquiry();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.country.trim()) newErrors.country = "Country is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitInquiry.mutateAsync({
        ...form,
        packagingInterest: form.packagingInterest || "Not specified",
      });
      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      // handled by mutation error state
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-charcoal section-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl title-bar-center">
            Contact Us for Bulk Supply Inquiries
          </h2>
          <p className="font-body text-white/60 text-lg mt-5 max-w-xl mx-auto">
            Tell us about your requirements and we'll respond promptly with
            pricing, availability, and documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-6"
          >
            {/* Brand card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                {/* Sunvia.Oil mascot logo */}
                <img
                  src={MASCOT_SRC}
                  alt="Sunvia.Oil"
                  className="w-12 h-12 object-contain shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-xl">
                    Sunvia<span className="text-gold">.Oil</span>
                  </h3>
                  <p className="font-body text-gold text-xs font-semibold uppercase tracking-widest mt-0.5">
                    Farms to Markets, Worldwide
                  </p>
                </div>
                {/* SBZ Enterprises logo — separate */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <img
                    src={SBZ_LOGO_SRC}
                    alt="SBZ Enterprises"
                    className="w-9 h-9 rounded-lg object-cover opacity-85"
                  />
                  <span className="font-body text-white/35 text-[9px] uppercase tracking-widest font-semibold text-center leading-tight">
                    SBZ
                    <br />
                    Enterprises
                  </span>
                </div>
              </div>

              <p className="font-body text-white/65 text-sm leading-relaxed mb-6">
                Exporting premium refined sunflower oil globally. We work
                directly with importers, distributors, and food manufacturers to
                provide consistent bulk supply.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sbzintl@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                    <Mail className="w-4.5 h-4.5 text-gold" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs uppercase tracking-wide">
                      Email
                    </p>
                    <p className="font-body text-white text-sm group-hover:text-gold transition-colors">
                      sbzintl@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919400051880"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors shrink-0">
                    <Phone className="w-4.5 h-4.5 text-gold" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs uppercase tracking-wide">
                      Phone / WhatsApp
                    </p>
                    <p className="font-body text-white text-sm group-hover:text-gold transition-colors">
                      +91 94000 51880
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-gold" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs uppercase tracking-wide">
                      Location
                    </p>
                    <p className="font-body text-white text-sm">
                      Pirayiri, Palakkad,
                      <br />
                      Kerala, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Building2
                      className="w-4.5 h-4.5 text-gold"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs uppercase tracking-wide">
                      Company
                    </p>
                    <p className="font-body text-white text-sm">
                      SBZ Enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919400051880?text=Hello%2C%20I%20am%20interested%20in%20Sunvia.Oil%20bulk%20supply.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/15 border border-[#25D366]/30 rounded-2xl p-5 hover:bg-[#25D366]/25 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white"
                  aria-label="WhatsApp"
                  role="img"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-body font-semibold text-white text-sm">
                  Message on WhatsApp
                </p>
                <p className="font-body text-white/55 text-xs mt-0.5">
                  +91 94000 51880 — Quick response
                </p>
              </div>
            </a>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-7 lg:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
                    <CheckCircle2
                      className="w-8 h-8 text-green-600"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display font-bold text-charcoal text-2xl mb-3">
                    Inquiry Sent
                  </h3>
                  <p className="font-body text-charcoal-mid text-base leading-relaxed mb-6">
                    Thank you for contacting SBZ Enterprises. We'll review your
                    inquiry and respond as soon as possible.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="border-border text-charcoal font-body font-medium"
                  >
                    Send Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display font-bold text-charcoal text-xl mb-6">
                    Send Bulk Supply Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="font-body font-medium text-charcoal text-sm"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`font-body text-sm h-10 ${errors.name ? "border-destructive" : ""}`}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="font-body text-destructive text-xs">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="company"
                        className="font-body font-medium text-charcoal text-sm"
                      >
                        Company Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company"
                        value={form.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                        className={`font-body text-sm h-10 ${errors.company ? "border-destructive" : ""}`}
                        autoComplete="organization"
                      />
                      {errors.company && (
                        <p className="font-body text-destructive text-xs">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Country */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="country"
                        className="font-body font-medium text-charcoal text-sm"
                      >
                        Country <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="country"
                        type="text"
                        placeholder="Your country"
                        value={form.country}
                        onChange={(e) =>
                          handleChange("country", e.target.value)
                        }
                        className={`font-body text-sm h-10 ${errors.country ? "border-destructive" : ""}`}
                        autoComplete="country-name"
                      />
                      {errors.country && (
                        <p className="font-body text-destructive text-xs">
                          {errors.country}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="font-body font-medium text-charcoal text-sm"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`font-body text-sm h-10 ${errors.email ? "border-destructive" : ""}`}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="font-body text-destructive text-xs">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-body font-medium text-charcoal text-sm"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="font-body text-sm h-10"
                        autoComplete="tel"
                      />
                    </div>

                    {/* Packaging Interest */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="packaging"
                        className="font-body font-medium text-charcoal text-sm"
                      >
                        Packaging Interest
                      </Label>
                      <Select
                        value={form.packagingInterest}
                        onValueChange={(val) =>
                          handleChange("packagingInterest", val)
                        }
                      >
                        <SelectTrigger
                          id="packaging"
                          className="font-body text-sm h-10"
                        >
                          <SelectValue placeholder="Select packaging type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            value="Retail Packs"
                            className="font-body text-sm"
                          >
                            Retail Packs
                          </SelectItem>
                          <SelectItem
                            value="Food Service Packs"
                            className="font-body text-sm"
                          >
                            Food Service Packs
                          </SelectItem>
                          <SelectItem
                            value="Industrial/Bulk"
                            className="font-body text-sm"
                          >
                            Industrial / Bulk
                          </SelectItem>
                          <SelectItem
                            value="Private Label/OEM"
                            className="font-body text-sm"
                          >
                            Private Label / OEM
                          </SelectItem>
                          <SelectItem
                            value="Other"
                            className="font-body text-sm"
                          >
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 mb-6">
                    <Label
                      htmlFor="message"
                      className="font-body font-medium text-charcoal text-sm"
                    >
                      Message / Requirements{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your requirements — volumes, destination, preferred packaging, certifications needed, etc."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      rows={4}
                      className={`font-body text-sm resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="font-body text-destructive text-xs">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {submitInquiry.isError && (
                    <p className="font-body text-destructive text-sm mb-4 bg-destructive/5 px-3 py-2 rounded-lg">
                      Something went wrong. Please try again or contact us
                      directly by email.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={submitInquiry.isPending}
                    className="w-full bg-gold text-charcoal hover:bg-gold-deep font-body font-bold text-base h-11 shadow-gold hover:shadow-lg transition-all"
                  >
                    {submitInquiry.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>

                  <p className="font-body text-charcoal-mid/60 text-xs text-center mt-3">
                    No pricing shown. All inquiries are handled confidentially.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
