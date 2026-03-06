import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = {
  quote:
    "By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7% and reduced PCI scope.",
  author: {
    name: "Alberto Flores",
    title: "IT Director",
    avatar: "/avatar-1.png",
    fallback: "AF",
  },
};

const paginationDots = [
  { active: true, bgColor: "bg-[#54f4fc]" },
  { active: false, bgColor: "bg-[#54f4fc4c]" },
  { active: false, bgColor: "bg-[#54f4fc4c]" },
  { active: false, bgColor: "bg-[#54f4fc4c]" },
  { active: false, bgColor: "bg-[#54f4fc4c]" },
];

export const ServicesOfferedSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-14 w-full py-14">
      <div className="flex flex-col items-center gap-10 w-full max-w-[1220px] px-4">
        <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[56px]">
          Customer Testimonials
        </h2>

        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="flex flex-col items-center gap-8 p-0">
            <blockquote className="[font-family:'Lato',Helvetica] font-normal text-white text-xl md:text-2xl text-center tracking-[0] leading-relaxed max-w-[1187px]">
              "{testimonialData.quote}"
            </blockquote>

            <Avatar className="w-40 h-40 rounded-full">
              <AvatarImage
                src={testimonialData.author.avatar}
                alt={testimonialData.author.name}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl">
                {testimonialData.author.fallback}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-center gap-6">
              <h3 className="[font-family:'Lato',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-[44.8px]">
                {testimonialData.author.name}
              </h3>

              <p className="[font-family:'Lato',Helvetica] font-light text-white text-2xl text-center tracking-[0] leading-[33.6px]">
                {testimonialData.author.title}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-10">
          {paginationDots.map((dot, index) => (
            <button
              key={index}
              className={`${dot.bgColor} w-6 h-6 rounded-xl transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#54f4fc] focus:ring-offset-2 focus:ring-offset-transparent`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={dot.active ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
