import MainLayout from "@/components/layout/MainLayout";
import { Phone, MapPin, Clock3, Mail } from "lucide-react";

const contactInfo = [
    {
        icon: <Phone className="h-5 w-5" />,
        title: "Điện thoại",
        content: "0901 234 567",
        sub: "Hỗ trợ tư vấn nhanh mỗi ngày",
    },
    {
        icon: <Mail className="h-5 w-5" />,
        title: "Email",
        content: "tiecuoithuthuy@gmail.com",
        sub: "Tiếp nhận yêu cầu và báo giá",
    },
    {
        icon: <MapPin className="h-5 w-5" />,
        title: "Địa chỉ",
        content: "An Lộc, Bình Long, Đồng Nai",
        sub: "Phục vụ tiệc cưới tại nhà và sự kiện gia đình",
    },
    {
        icon: <Clock3 className="h-5 w-5" />,
        title: "Thời gian làm việc",
        content: "06:00 - 20:00",
        sub: "Từ thứ 2 đến Chủ nhật",
    },
];

const Contact = () => {
    return (
        <MainLayout>
            <section className="bg-[#f8f5f3]">


                {/* Contact content */}
                <div className="mx-auto max-w-full grid-cols-1 gap-8 px-4 py-14 ">
                    {/* Left */}
                    <div>
                        <p className="text-sm font-serif uppercase tracking-[0.2em] text-[#d97745]">
                            Thông tin liên hệ
                        </p>
                        <h2 className="mt-3 font-playfair text-3xl text-[#4b403d] md:text-4xl">
                            Chúng tôi luôn sẵn sàng tư vấn
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#7b6f6a] md:text-base">
                            Dù là tiệc cưới, tiệc hỏi, liên hoan gia đình hay đặt bàn theo số
                            lượng riêng, bên mình sẽ hỗ trợ tư vấn món ăn, số lượng bàn và cách
                            chuẩn bị phù hợp nhất.
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4 ">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className=" flex items-start gap-4 md:flex-col md:items-center rounded-2xl border border-[#eadfd8] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    {/* Icon */}
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6e7de] text-[#d97745]">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 md:text-center">
                                        <h3 className="text-base font-semibold text-[#4b403d] md:block">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-[#5c4f4a] md:block">
                                            {item.content}
                                        </p>

                                        <p className="mt-1 text-sm text-[#8d817b]">
                                            {item.sub}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Map / note */}
                <div className="mx-auto max-w-6xl px-4 pb-14">
                    <div className="overflow-hidden rounded-[24px] border border-[#eadfd8] bg-white shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6344084309203!2d106.6132544757105!3d11.649379342484444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317355b5b649516b%3A0x13c26cbf5e14c40!2zVGnhu4djIEPGsOG7m2kgVGh1IFRo4buneQ!5e0!3m2!1svi!2s!4v1774603897582!5m2!1svi!2s"
                            className="w-full h-[300px] md:h-[400px]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Contact;