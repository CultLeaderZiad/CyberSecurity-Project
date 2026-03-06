import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 px-8 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            Discuss Your Security Requirements
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Connect with our security team to explore how systematic risk reduction applies to your infrastructure.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <Button className="px-8 py-3 bg-neutral-100 hover:bg-neutral-200 text-black font-semibold rounded-lg transition-colors duration-300">
            Schedule Consultation
          </Button>
          <Button
            variant="outline"
            className="px-8 py-3 border border-neutral-700 text-neutral-100 hover:bg-neutral-900 font-semibold rounded-lg transition-colors duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
