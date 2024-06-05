"use client";

import type { NextPage } from "next";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        "service_ukha5rj",  // Replace with your service ID
        "template_48q0skr", // Replace with your template ID
        e.target as HTMLFormElement,
        "D6rvZ-4VTYBkI0nkJ" // Replace with your user ID
      );
      toast.success("Email Sent Successfully");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    const email = "brahimkarmouna@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker" />
            </div>
            <h4>the first roid ,32</h4>
            <p>Tangie, Morocco</p>
          </div>
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone" />
            </div>
            <h4>Call Us On</h4>
            <p>+212 7662-69594</p>
          </div>
          <div className="contact-info-item padd-15" onClick={handleEmailClick}>
            <div className="icon">
              <i className="fa fa-envelope" />
            </div>
            <h4>Email</h4>
            <p>brahimkarmouna@gmail.com</p>
          </div>
        </div>
        <div className="row">
          <form className="contact-form padd-15" onSubmit={sendEmail}>
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name*"
                    name="name"
                    required
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                    name="email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject*"
                    name="subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your Message*"
                    name="message"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padd-15">
                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
