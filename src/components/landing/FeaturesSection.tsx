import {
  ChartColumn,
  Clock,
  FileText,
  Shield,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            data-slot="badge"
            data-variant="outline"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none [&amp;&gt;svg]:size-3 [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground mb-4 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950"
          >
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything to manage your team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            One platform for attendance, payroll, and finances
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-50 dark:hover:shadow-green-950 transition-all duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
              QR Code Attendance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Quick check-in via QR code or manual entry. Works on any device,
              anywhere.
            </p>
          </div>
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-50 dark:hover:shadow-green-950 transition-all duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
              Overtime Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Automatic overtime calculation based on shift hours and org rules.
            </p>
          </div>
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-50 dark:hover:shadow-green-950 transition-all duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
              One-Click Payslip
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Generate PDF payslips instantly with full salary breakdowns.
            </p>
          </div>
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-50 dark:hover:shadow-green-950 transition-all duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ChartColumn className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
              Finance Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Track income &amp; expenses with insightful visual reports.
            </p>
          </div>
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-50 dark:hover:shadow-green-950 transition-all duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
              Multi-Tenant Secure
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Your data is fully isolated and encrypted from other businesses.
            </p>
          </div>
          <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:shadow-lg hover:shadow-green-50 dark:hover:shadow-green-950 transition-all duration-200">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
              Mobile Friendly
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Works perfectly on tablets and smartphones, no app needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
