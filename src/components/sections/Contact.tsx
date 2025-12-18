import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/profile";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_bosm7ej";
const EMAILJS_TEMPLATE_ID = "Contact Us";
const EMAILJS_PUBLIC_KEY = "EYneoH-m57XT-Ug0T";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: profile.email,
      }, EMAILJS_PUBLIC_KEY);

      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kutkarshh", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "github.com/kutkarshh", href: profile.github },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(243,75%,58%,0.1)_0%,_transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">I'm currently open to new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!</p>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><link.icon className="h-5 w-5" /></div>
                    <div><p className="text-sm text-muted-foreground">{link.label}</p><p className="font-medium text-foreground group-hover:text-primary transition-colors">{link.value}</p></div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border"><div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-5 w-5 text-primary" /><span>{profile.location}</span></div></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div><label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label><Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required className="bg-muted border-border focus:border-primary" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required className="bg-muted border-border focus:border-primary" /></div>
              <div><label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label><Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your message..." rows={5} required className="bg-muted border-border focus:border-primary resize-none" /></div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-white py-6 text-lg">{isSubmitting ? "Sending..." : <><Send className="mr-2 h-5 w-5" />Send Message</>}</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
