import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Akash",
      review:
        "Had a tooth extraction today and it was super duper quick . I'm one of those that are afraid of anesthesia and dentist lol. I thought it would last longer cause my tooth were already wrecked but Doctor made it painless and easy. ",
      location: "Uttara",
      img: people1,
    },
    {
      _id: 2,
      name: "Maryland",
      review:
        "Clinic’s well sanitized and super accommodating ng staff. Had my whitening here and after 2 sessions lang, I’m very happy with the result! Thanks Doctor ",
      location: "Mirpur",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "Highly recommended this dental clinic. Especially when I was on surgery of my impacted wisdom tooth, Dr. Pat is very approachable and professional to get my tooth. And don't be hesitate to check your teeth because they will assist you. They have PPE, Covid form to get your personal information and the clinic is sanitized. They're also have payment terms if u don't afford the cost.",
      location: "Dhanmondi",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
