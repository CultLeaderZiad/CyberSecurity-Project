import { Button } from "../../../../components/ui/button";

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 bg-[linear-gradient(136deg,rgba(24,110,180,1)_16%,rgba(47,162,208,1)_57%,rgba(85,244,252,1)_100%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[104px] max-w-6xl mx-auto">
          <div className="flex-shrink-0">
            <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-4xl lg:text-5xl leading-tight lg:leading-[72px]">
              How to choose <br />
              cybersecurity solution
            </h2>
          </div>

          <div className="flex flex-col items-start gap-[38px]">
            <p className="[font-family:'Lato',Helvetica] font-normal text-white text-2xl lg:text-[29px] leading-relaxed lg:leading-[40.6px] max-w-[500px]">
              Having difficulties choosing the right solution for your business?
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-8">
              <Button className="bg-[#54f4fc] hover:bg-[#54f4fc]/90 text-black [font-family:'Montserrat',Helvetica] font-bold text-base tracking-[0.80px] px-[30px] py-[17px] h-auto rounded-lg">
                BOOK AN APPOINTMENT
              </Button>

              <Button
                variant="outline"
                className="border-[#54f4fc] text-[#54f4fc] hover:bg-[#54f4fc]/10 [font-family:'Montserrat',Helvetica] font-bold text-base tracking-[0.80px] px-[30px] py-[17px] h-auto rounded-lg"
              >
                TALK WITH US
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
