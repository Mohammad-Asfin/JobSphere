import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PlusSquare, Code2, Zap, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6 border border-indigo-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  JobSphere Modernization 2.0
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  Find the right job. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                    Build your future.
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Discover top-tier tech opportunities that match your skills, experience, and career goals seamlessly on our modern platform.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link to="/employee/feed" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-200">
                    Find Jobs <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/employer/dashboard" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-medium transition-all shadow-sm">
                    Post a Job
                  </Link>
                </div>
                
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No hidden fees</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct applications</div>
                </div>
              </div>

              {/* Visual Graphic */}
              <div className="hidden lg:block relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative bg-white border border-slate-100 shadow-2xl rounded-2xl p-6">
                  <div className="space-y-4">
                    {/* Mock Job Card */}
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                        <div className="w-12 h-12 rounded-lg bg-indigo-100 flex-shrink-0"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                          <div className="h-3 bg-slate-200 rounded w-1/3"></div>
                          <div className="flex gap-2 mt-2">
                            <div className="h-5 w-16 bg-blue-100 rounded-md"></div>
                            <div className="h-5 w-16 bg-emerald-100 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-slate-200 bg-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
              <div>
                <p className="text-3xl font-bold text-indigo-600 mb-1">500+</p>
                <p className="text-sm text-slate-500 font-medium">Active Jobs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-600 mb-1">120+</p>
                <p className="text-sm text-slate-500 font-medium">Top Companies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-600 mb-1">98%</p>
                <p className="text-sm text-slate-500 font-medium">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-600 mb-1">24/7</p>
                <p className="text-sm text-slate-500 font-medium">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why choose JobSphere?</h2>
              <p className="text-lg text-slate-600">Built by developers, for developers. We cut through the noise to bring you the best opportunities.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Search, title: "Smart Search", desc: "Find jobs instantly by skills, company, location, or role." },
                { icon: PlusSquare, title: "Easy Job Posting", desc: "Publish professional job listings to our talent pool in minutes." },
                { icon: Code2, title: "Technology Focused", desc: "Discover opportunities perfectly aligned with the technologies you know." },
                { icon: Zap, title: "Modern Experience", desc: "A lightning-fast, highly responsive job discovery experience." }
              ].map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                    <f.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl text-slate-900">JobSphere</span>
          </div>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            Find opportunities. Build careers.
          </p>
          <div className="flex justify-center gap-6 text-sm font-medium text-slate-600 mb-8">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/employee/feed" className="hover:text-indigo-600">Find Jobs</Link>
            <Link to="/employer/dashboard" className="hover:text-indigo-600">Post a Job</Link>
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} JobSphere. Built with React, Vite, Tailwind CSS & Spring Boot.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
