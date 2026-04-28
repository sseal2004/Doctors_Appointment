import React from 'react'
import { assets } from '../../assets/assets'

const About = () => {
  const features = [
    {
      title: 'Efficiency',
      desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.',
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 100-20 10 10 0 000 20z" />
        </svg>
      ),
    },
    {
      title: 'Convenience',
      desc: 'Access to a network of trusted healthcare professionals in your area.',
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 3v7m10-7v7M5 21h14a2 2 0 002-2V8H3v11a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Personalization',
      desc: 'Tailored recommendations and reminders to help you stay on top of your health.',
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 22a8 8 0 0116 0" />
        </svg>
      ),
    },
  ]

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <style>{`
        * {
          box-sizing: border-box;
        }
      `}</style>

      <section className="w-full py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              About Us
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Care made simpler, faster, and more human.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">
              Appointy helps people book healthcare appointments easily and manage their care with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-blue-100/60 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
                <img
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                  src={assets.about_image}
                  alt="About Appointy"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Our story
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Built to improve the healthcare booking experience.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-7 text-slate-600">
                <p>
                  Welcome to Appointy, your trusted partner in managing your healthcare needs conveniently and efficiently.
                  We understand the challenges people face when scheduling doctor appointments and keeping track of their health journey.
                </p>
                <p>
                  Appointy is committed to excellence in healthcare technology. We continuously improve the platform with modern tools,
                  intuitive design, and a smoother user experience for patients and providers alike.
                </p>
                <p>
                  Whether you are booking your first appointment or managing ongoing care, Appointy is here to support you every step of the way.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our vision</p>
                <p className="mt-3 text-sm sm:text-base leading-7 text-slate-700">
                  To create a seamless healthcare experience for every user by making access to care simpler,
                  faster, and more reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Why choose us
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              A better way to manage your health appointments.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Built for patients
                </p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Book smarter. Manage faster. Feel better.
                </h3>
                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-blue-50/90">
                  We design every part of the experience to reduce friction, save time, and make healthcare access feel straightforward.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/15">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="mt-1 text-sm text-blue-100">Support availability</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="mt-1 text-sm text-blue-100">Focused on convenience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About