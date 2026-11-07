import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            data-slot="badge"
            data-variant="outline"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground mb-4 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950"
          >
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by businesses across Bangladesh
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex gap-1 mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              &quot;হিসাব খাতা আমাদের বেতন প্রক্রিয়া সম্পূর্ণ বদলে দিয়েছে। এখন
              ১০ মিনিটেই সব হয়ে যায়।&quot;
            </p>
            <div
              data-orientation="horizontal"
              role="none"
              data-slot="separator"
              className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mb-4"
            ></div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              Rahim Uddin
            </p>
            <p className="text-xs text-gray-500">Garments Factory Owner</p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex gap-1 mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              &quot;QR attendance saves us so much time. Staff love it and
              errors are gone completely.&quot;
            </p>
            <div
              data-orientation="horizontal"
              role="none"
              data-slot="separator"
              className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mb-4"
            ></div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              Fatema Begum
            </p>
            <p className="text-xs text-gray-500">Restaurant Manager</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex gap-1 mb-4">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              &quot;Best investment for our institution. Payslip generation used
              to take 2 days, now 5 minutes.&quot;
            </p>
            <div
              data-orientation="horizontal"
              role="none"
              data-slot="separator"
              className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mb-4"
            ></div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              Karim Ahmed
            </p>
            <p className="text-xs text-gray-500">School Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
