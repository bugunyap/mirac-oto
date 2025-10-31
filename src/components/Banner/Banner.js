import React from "react";

function Banner({ imageUrl, title, description }) {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-blue-800/90"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Banner;
