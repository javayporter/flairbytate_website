import React from "react";
import headdshot from "../assets/headshot.jpg";

const aboutText =
  "Hi, I’m Juanita Tate—a space curator passionate about helping people experience luxury in everyday living.";

const aboutTextp1 =
  "My story began in my own home.As a single mom raising two boys, I wanted to create a space that felt uplifting and full of comfort, even when working with a limited budget.I quickly realized that luxury isn’t about how much you spend—it’s about creativity, resourcefulness, and knowing how to make a space work beautifully for you.";

const aboutTextp2 =
  "Those first projects, born out of love for my family, sparked something bigger. Over the years, my style evolved and my work expanded into luxury decorating, but my philosophy hasn’t changed: true luxury is a feeling.It’s the sense of ease, beauty, and pride you feel when you walk through your door.Today, I bring that same vision to my clients—curating spaces that reflect who they are, elevate their lifestyle, and show that luxury is possible for everyone.Whether it’s a simple refresh or a full transformation, my mission is to create designs that feel both timeless and personal.";

const aboutTextp3 =
  "Because in the end, it’s not just about beautiful rooms—it’s about creating a better quality of life through the spaces we live in every day.";

const Jumbotron: React.FC = () => {
  return (
    <section className="jumbotron" id="about">
      <img src={headdshot} alt="Founder" className="jumbotron-image" />
      <div className="jumbotron-text">
        <h2>About Us</h2>
        <p>{aboutText}</p>
        <p>{aboutTextp1}</p>
        <p>{aboutTextp2}</p>
        <p>{aboutTextp3}</p>
      </div>
    </section>
  );
};

export default Jumbotron;
