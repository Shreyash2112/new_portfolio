import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhoneIphone } from "react-icons/md";
import cn from "../../lib/utils";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "../../config/emailjs";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { LuSend } from "react-icons/lu";

function Contact() {
    const { EMAILJS_PUBLIC_API_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = emailjsConfig
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true)
        try {
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, { publicKey: EMAILJS_PUBLIC_API_KEY })
                .then(() => {
                    setFormData({ name: "", email: "", message: "" })
                    toast.success('Message sent successfully 🚀', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                })
                .catch(() => {
                    toast.error('Something went wrong! ❌', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                })
                .finally(() => {
                    setIsSubmitting(false)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <ToastContainer />
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MdOutlineEmail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a
                                        href="mailto:shreyashpurankar21@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors "
                                    >
                                        shreyashpurankar21@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MdOutlinePhoneIphone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a
                                        href="tel: +919096772270"
                                        className="text-muted-foreground hover:text-primary transition-colors "
                                    >
                                        +919096772270
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MdOutlineLocationOn className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors ">
                                        Nagpur, Maharashtra, India
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-6">
                            <div className="text-left">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2 pl-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="username"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="text-left">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2 pl-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="user@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="text-left">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2 pl-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <LuSend size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Contact