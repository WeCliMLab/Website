import React from 'react';
import { Mail, MapPin, Phone, Clock, Globe, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ================= HERO ================= */}
      <div className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We welcome collaborations, student inquiries, and scientific exchanges. 
            Here is how you can reach the Weather & Climate Modelling Group.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* ================= LEFT: CONTACT INFO ================= */}
          <div className="space-y-8">
            
            {/* Address Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Lab Location</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Weather and Climate Modelling Lab,<br />
                            5C, Academic Block-2,<br />
                            Department of Earth and Environmental Sciences,<br />
                            IISER Mohali, Sector 81, S.A.S. Nagar,<br />
                            Punjab 140306, INDIA.
                        </p>
                    </div>
                </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Inquiries</h3>
                        <p className="text-slate-500 text-sm mb-3">
                            For PhD applications, collaborations, or general questions:
                        </p>
                        <a href="mailto:rajuattada@iisermohali.ac.in" className="text-lg font-bold text-emerald-600 hover:underline">
                            rajuattada@iisermohali.ac.in
                        </a>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
                    <Clock className="h-5 w-5 text-slate-500 mb-3" />
                    <h4 className="font-bold text-slate-900">Working Hours</h4>
                    <p className="text-sm text-slate-600">Mon - Fri: 09:00 - 18:00</p>
                </div>
                <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
                    <Globe className="h-5 w-5 text-slate-500 mb-3" />
                    <h4 className="font-bold text-slate-900">Institute</h4>
                    <a href="https://www.iisermohali.ac.in/" target="_blank" className="text-sm text-blue-600 hover:underline">
                        Visit IISER Mohali
                    </a>
                </div>
            </div>

          </div>

          {/* ================= RIGHT: MAP ================= */}
          <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm h-full min-h-[400px]">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.348227694723!2d76.72688027623725!3d30.652303589495146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe95ad5d332f1%3A0x958376997092996e!2sIndian%20Institute%20of%20Science%20Education%20and%20Research%20Mohali!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0, borderRadius: '12px'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
}