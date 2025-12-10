import React from "react";

export default function EventRegistration() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Event Registered Successfully!");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px"
        }}
      >
        <div className="event-card">

          {/* Internal CSS */}
          <style>{`
            .event-card {
              width: 360px;
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
              padding: 20px;
              font-family: Arial;
            }

            .event-banner {
              width: 100%;
              height: 180px;
              border-radius: 12px;
              object-fit: cover;
              margin-bottom: 15px;
            }

            .event-card h2 {
              text-align: center;
              color: #0a4ef5;
              margin-bottom: 15px;
            }

            .event-input {
              width: 100%;
              padding: 10px;
              font-size: 14px;
              margin: 8px 0;
              border: 1px solid #ccc;
              border-radius: 5px;
            }

            .btn-register {
              width: 100%;
              padding: 12px;
              font-size: 16px;
              background: linear-gradient(45deg, #0a4ef5, #00b7ff);
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 10px;
            }

            .btn-register:hover {
              background: linear-gradient(45deg, #083fc9, #009edf);
            }
          `}</style>

          {/* Event Banner Image */}
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="Event"
            className="event-banner"
          />

          <h2>Event Registration</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="event-input"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              className="event-input"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              className="event-input"
              placeholder="Event Name"
              required
            />

            <button type="submit" className="btn-register">
              Register Now
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
