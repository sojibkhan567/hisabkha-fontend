import {
  ArrowRight,
  ChevronRight,
  Clock,
  Globe,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-green-400/10 dark:bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-300/10 rounded-full blur-2xl"></div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-green-200/20 dark:bg-green-800/10 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-size-[48px_48px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span
          data-slot="badge"
          data-variant="outline"
          className="inline-flex w-fit shrink-0 items-center justify-center overflow-hidden rounded-full border font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground mb-6 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950 px-4 py-1.5 text-sm gap-2"
        >
          <Star className="h-3.5 w-3.5 fill-current" />
          Built specifically for Bangladesh SMBs
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          <span className="text-green-600">হিসাব খাতা</span>
          <br />
          <span className="text-3xl md:text-5xl text-gray-600 dark:text-gray-300 font-semibold">
            Smart Business Management
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Automate attendance, payroll &amp; finances for your restaurant,
          garment factory, or school.{" "}
          <strong className="text-gray-900 dark:text-white">
            Save 5–10 hours every month.
          </strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            data-slot="button"
            data-variant="default"
            data-size="lg"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 h-10 rounded-md has-[&gt;svg]:px-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 text-base gap-2 shadow-lg shadow-green-200 dark:shadow-green-900"
            href="/en/register"
          >
            Start Free Trial — ১৪ দিন বিনামূল্যে
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            data-slot="button"
            data-variant="outline"
            data-size="lg"
            className="inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-10 rounded-md has-[&gt;svg]:px-4 font-semibold px-8 text-base gap-2 border-2 border-gray-300 bg-white hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-500"
            href="/login"
          >
            View Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500">
          No credit card required • Cancel anytime • Free forever plan
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 backdrop-blur shadow-sm">
            <Users className="w-5 h-5 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              500+
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Businesses</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 backdrop-blur shadow-sm">
            <Clock className="w-5 h-5 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              10k+
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Employees</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 backdrop-blur shadow-sm">
            <Zap className="w-5 h-5 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              ৳2Cr+
            </div>
            <div className="text-xs text-gray-500 mt-0.5">Payroll Paid</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 backdrop-blur shadow-sm">
            <Globe className="w-5 h-5 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              99.9%
            </div>
            <div className="text-xs text-gray-500 mt-0.5">uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
