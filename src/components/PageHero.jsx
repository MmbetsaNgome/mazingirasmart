import React from "react";

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative h-64 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;
