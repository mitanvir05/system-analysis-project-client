import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import { useNavigate } from "react-router-dom";

const MakeAppointment = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Our teeth have such an important role to play in our lives. They help
          us chew and digest food, they help us to talk and speak clearly and
          they also give our face its shape. A smile also has other day-to-day
          benefits. It can give us greater confidence, as well as influence our
          social lives, careers and relationships.
        </p>
        <button
          className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
          onClick={() => navigate("/appointment")}
        >
          Make Appointment
        </button>
      </div>
    </section>
  );
};

export default MakeAppointment;
