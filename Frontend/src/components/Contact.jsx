import { useState } from "react";

import SectionHeading from "./SectionHeading";
import MagicButton from "./ui/MagicButton";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { Redo } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    comment: "",
  });

  const {
    mutate: addComment,
    isLoading,
    isError,
    error,
    isPending,
  } = useMutation({
    mutationFn: async (formData) => {
      const res = await fetch("/api/v1/enquiry/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Failed to send message");
      }

      return res.json();
    },

    onSuccess: () => {
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        comment: "",
      });
    },

    onError: () => {
      toast.error("Failed to send message!");
    },
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(formData);
  };

  return (
    <div className="py-5 max-w-4xl mx-auto mt-5">
      <SectionHeading text="Contact Me" />

      <form className="space-y-4 md:space-y-3" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Muhammad Usman"
            required
            className="text-gray-900 rounded-lg block w-full p-2.5 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-sm"
          />
        </div>

        {/* Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@gmail.com"
              required
              className="text-gray-900 rounded-lg block w-full p-2.5 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-sm"
            />
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="mobile"
              className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="0000 000000"
              required
              minLength={11}
              maxLength={11}
              className="text-gray-900 rounded-lg block w-full p-2.5 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-sm"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter the subject"
            required
            className="text-gray-900 rounded-lg block w-full p-2.5 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 placeholder:text-sm dark:text-white"
          />
        </div>

        {/* Comment */}
        <div>
          <label
            htmlFor="comment"
            className="block mb-1 sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Message
          </label>
          <textarea
            name="comment"
            rows="4"
            id="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="Leave a comment..."
            required
            className="text-gray-900 rounded-lg block w-full p-2.5 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:text-sm"
          />
        </div>

        {/* Error Message */}
        {isError && <div className="text-red-500 text-sm">{error.message}</div>}

        {/* Submit Button */}
        <div className="flex justify-end">
          <MagicButton
            title={isPending ? "Submitting..." : "Submit"}
            isLoading={isLoading}
            icon={!isPending && <Redo size={16} />}
            position="right"
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
