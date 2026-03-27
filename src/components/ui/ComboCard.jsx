import React from 'react'

const ComboCard = ({ img, title, description, items, price }) => {
    return (
        <div className="overflow-hidden rounded-[18px] border border-[#e7ddd7] bg-[#f8f5f3] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl">
            <img
                src={img}
                alt={title}
                className="h-[150px] md:h-[180px] w-full object-cover"
            />

            <div className="px-5 py-6 md:px-10 md:py-8 text-center flex flex-col items-center">
                <h3 className="font-serif text-[20px] md:text-[26px] lg:text-[30px]">
                    {title}
                </h3>

                {/* <p className="mt-3 text-sm md:text-[14px] text-[#8d817b]">
                    {description}
                </p> */}

                <ul className="mx-auto mt-2 md:mt-6 w-full max-w-[260px] space-y-2 text-left">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 text-[13px] sm:text-[20px] text-[#6f6662]"
                        >
                            <span className="h-[5px] w-[5px] rounded-full bg-[#8a817c]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-8 hidden sm:block">
                    <p className="font-serif text-[16 px] sm:text-4xl text-[#c7804f] hidden sm:block">
                        {price}
                        <span className="ml-2 text-[16px] text-[#6f6662]"></span>
                    </p>
                </div>

                {/* <button className=" mt-6 rounded-full border border-[#d5a27d] px-10 py-3 text-[15px] text-[#c7804f] transition hover:bg-[#c7804f] hover:text-white hidden sm:block">
                    Xem chi tiết
                </button> */}
            </div>
        </div>
    );
};


export default ComboCard