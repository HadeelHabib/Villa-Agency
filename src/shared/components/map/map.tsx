import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        className="w-full border-0 h-[500px] rounded-[10px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.4743873356833!2d-80.12135612476251!3d25.95247787723259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e0!3m2!1sen!2s!4v1710599138055!5m2!1sen!2s"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
