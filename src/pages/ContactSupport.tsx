import { useState } from "react";
import { db } from "../lib/firebase"; // Ensure Firebase is configured
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const ContactSupport = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message)
      return alert("All fields are required!");

    setLoading(true);
    try {
      await addDoc(collection(db, "support_requests"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting support request:", error);
    }
    setLoading(false);
  };

  return (
    
    <div className="max-w-lg mx-auto p-6 bg-[#e5dbb5] rounded-lg">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Contact Support</h1>
      {success && (
        <p className="text-green-500">
          Request submitted successfully! We'll get back to you soon.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className=" w-full rounded-md border border-[#f66435] bg-white text-gray-900 placeholder-[#f66435] px-3 py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f66435] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          rows={4} 
          required
        ></textarea>
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
};

export default ContactSupport;
