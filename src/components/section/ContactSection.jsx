import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    course: "",
    message: "",
  });

  const [courseOpen, setCourseOpen] = useState(false); // dropdown state

  const courses = ["Men Perfume", "Women Perfume"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectCourse = (course) => {
    setFormData((prev) => ({ ...prev, course }));
    setCourseOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    alert("Thank you! We'll get back to you shortly.");
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      course: "",
      message: "",
    });
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
          Enquire About Our <span className="text-red-800">Courses</span>
        </h1>
        <div className="w-20 h-1 bg-red-800 mx-auto mb-6"></div>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          We're here to help you begin your creative journey. Fill out the form
          below and our team will get back to you shortly.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl border border-gray-300 overflow-hidden shadow-lg">
        <div className="md:flex">
          {/* Left Side */}
          <div className="md:w-1/3 bg-gradient-to-br from-red-700 to-black p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Enquire With Us?</h2>
              <ul className="space-y-4">
                {[
                  "Expert guidance from industry professionals",
                  "Personalized course recommendations",
                  "Flexible learning options",
                  "Quick response to all enquiries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-red-200 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">
                Need immediate assistance?
              </h3>
              <p className="text-white mb-2">📞 +91 7307xxxxxx</p>
              <p className="text-sm text-white">
                Our team is available 10AM - 6PM, Monday to Saturday
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-2/3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Pich Lyheang"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-red-800 focus:border-red-800"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="kenzzypich9898@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-800"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-800"
                    required
                  />
                </div>

                {/* Course Dropdown */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course Interested In
                  </label>
                  <div
                    onClick={() => setCourseOpen(!courseOpen)}
                    className="w-full px-6 py-3 border-2 rounded-lg border-red-800 cursor-pointer flex justify-between items-center"
                  >
                    <span className="text-gray-900">
                      {formData.course || "Select your choice"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transform transition-transform duration-200 ${courseOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {courseOpen && (
                    <div className="absolute p-2 z-50 w-full mt-2 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                      {courses.map((course, i) => (
                        <div
                          key={i}
                          onClick={() => handleSelectCourse(course)}
                          className="px-4 py-3 rounded   hover:bg-red-900 hover:text-white cursor-pointer transition-colors duration-200"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interests and goals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-red-800 focus:border-red-800"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-black to-red-800 text-white font-medium rounded-lg hover:from-red-800 hover:to-black transition duration-300"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
