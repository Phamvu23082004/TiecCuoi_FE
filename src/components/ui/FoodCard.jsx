// import React from "react";

// const FoodCard = ({ img, title, description, price }) => {
//   return (
//     <div
//       className="
//       group flex flex-col h-full
//       overflow-hidden
//       rounded-[20px]
//       border border-[#e7ddd7]
//       bg-[#f8f5f3]
//       transition-all duration-300
//       hover:-translate-y-1 hover:shadow-lg
//     "
//     >
//       {/* Image */}
//       <img
//         src={img}
//         alt={title}
//         className="
//           h-[100px] sm:h-[150px] md:h-[180px]
//           w-full object-cover
//           transition duration-500
//           group-hover:scale-105
//         "
//       />

//       {/* Content */}
//       <div className="flex flex-col flex-1 px-3 py-1 sm:px-2 sm:py-3 text-center">
        
//         {/* Title */}
//         <h3
//           className="
//             font-playfair
//             text-[13px] sm:text-[17px] md:text-[22px]
//             py-1
//             leading-snug
//             text-[#4b403d]
//             line-clamp-2
//             sm:min-h-[44px]
//           "
//         >
//           {title}
//         </h3>

//         {/* Description */}
//         <p
//           className="
//             hidden sm:block
//             mt-2
//             text-[13px] md:text-[14px]
//             text-[#8d817b]
//             line-clamp-2
//             min-h-[40px]
//           "
//         >
//           {description}
//         </p>

//         {/* Button */}
//         {/* <div className="mt-3 sm:mt-auto sm:pt-4 flex justify-center">
//           <button
//             className="
//               hidden sm:block
//               rounded-full border border-[#d5a27d]
//               px-5 py-1.5 sm:px-6 sm:py-2
//               text-[12px] sm:text-[13px]
//               text-[#c7804f]
//               transition
//               hover:bg-[#c7804f] hover:text-white
//             "
//           >
//             Xem chi tiết
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default FoodCard;


// import React from "react";

// const FoodCard = ({ img, title, description, price, imageClassName = "" }) => {
//   return (
//     <div
//       className="
//         group flex flex-col h-full
//         overflow-hidden
//         rounded-[20px]
//         border border-[#e7ddd7]
//         bg-[#f8f5f3]
//         transition-all duration-300
//         hover:-translate-y-1 hover:shadow-lg
//       "
//     >
//       <img
//         src={img}
//         alt={title}
//         className={`
//           h-[100px] sm:h-[150px] md:h-[180px]
//           w-full object-cover
//           transition duration-500
//           group-hover:scale-105
//           ${imageClassName}
//         `}
//       />

//       <div className="flex flex-col flex-1 px-3 py-1 sm:px-2 sm:py-3 text-center">
//         <h3
//           className="
//             font-playfair
//             text-[13px] sm:text-[17px] md:text-[22px]
//             py-1
//             leading-snug
//             text-[#4b403d]
//             line-clamp-2
//             h-[36px] sm:h-[44px] 
//           "
//         >
//           {title}
//         </h3>

//         <p
//           className="
//             hidden sm:block
//             mt-2
//             text-[13px] md:text-[14px]
//             text-[#8d817b]
//             line-clamp-2
//             min-h-[40px]
//           "
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;


import React from "react";

const FoodCard = ({ img, title, description, price, imageClassName = "" }) => {
  return (
    <div
      className="
        group flex flex-col h-full
        overflow-hidden
        rounded-[20px]
        border border-[#e7ddd7]
        bg-[#f8f5f3]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      <img
        src={img}
        alt={title}
        className={`
          h-[100px] sm:h-[150px] md:h-[180px]
          w-full object-cover
          transition duration-500
          group-hover:scale-105
          ${imageClassName}
        `}
      />

      <div className="flex flex-col flex-1 px-3 py-2 sm:px-4 sm:py-3 text-center">
        <h3
          className="
            font-playfair
            text-[12px] sm:text-[17px] md:text-[22px]
            leading-snug
            text-[#4b403d]
            line-clamp-2
            h-[34px] sm:h-[44px] md:h-[56px]
            flex items-center justify-center
          "
        >
          {title}
        </h3>

        <p
          className="
            hidden sm:block
            mt-2
            text-[13px] md:text-[14px]
            text-[#8d817b]
            line-clamp-2
            min-h-[40px]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;