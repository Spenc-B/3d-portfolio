import { motion } from "framer-motion";
import { useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Build mailto link as a simple no-backend solution
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:spencer@example.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Contact</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 bg-tertiary p-8 rounded-2xl"
        >
          <p className="text-secondary text-sm md:text-base mb-6">
            Got a project in mind or just want to say hello? Drop me a message.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-primary py-3 px-4 rounded-lg text-white outline-none border border-transparent focus:border-quaternary text-sm placeholder:text-slate-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-primary py-3 px-4 rounded-lg text-white outline-none border border-transparent focus:border-quaternary text-sm placeholder:text-slate-500"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-primary py-3 px-4 rounded-lg text-white outline-none border border-transparent focus:border-quaternary text-sm resize-none placeholder:text-slate-500"
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="bg-quaternary hover:bg-quaternary/80 transition-colors py-3 px-8 rounded-lg text-white font-bold text-sm w-fit self-center md:self-start cursor-pointer"
            >
              {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Info panel */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 flex flex-col justify-center gap-8"
        >
          <div>
            <h3 className="text-white font-bold text-xl md:text-2xl">
              Let's work together
            </h3>
            <p className="text-secondary text-sm md:text-base mt-3 leading-relaxed">
              I'm always open to new opportunities and collaborations. Whether
              you need a website built from scratch, want to improve an existing
              one, or just want to connect — feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-secondary text-sm md:text-base">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-quaternary flex-shrink-0" />
              <span>Based in the UK</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-quaternary flex-shrink-0" />
              <span>Open to remote work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");