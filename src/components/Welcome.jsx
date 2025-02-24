import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="undefined mx-auto max-w-7xl sm:px-0">
        <div className="items-center pt-16 lg:pt-[56px] lg:grid lg:grid-cols-12 gap-y-12 lg:gap-y-4 xl:gap-y-8 section-bg lg:rounded-3xl">
          <div className="relative flex flex-col sm:pb-0 lg:pb-16 pl-5 pr-5 lg:pr-0 lg:col-span-6 lg:pl-[70px] lg:pt-[14px]">
            <div className="py-4 w-fit">
              <p className="text-xl font-semibold text-green-900">
                Welcome to Mazingira Smart
              </p>
            </div>
            <div>
              <div>
                <h3 className="py-5 text-green-900 text-[28px] leading-10 lg:text-subtitle text-#0A033C font-bold">
                  Conserving our environment together.
                </h3>
              </div>
              <div>
                <p className="md:pb-32 leading-8 text-gray-700 lg:pb-44 sm:pb-20 font-base">
                  At Mazingira Smart, we believe in the transformative power of
                  community-driven development and building resilience through
                  collaboration with local and international partners to realize
                  common objectives while leveraging on collective strengths and
                  resources. Our innovative approach encompasses supporting
                  creativity contributing to sustainability of projects leading
                  to mutual benefits.
                  <br />
                  <br />
                  We envision a future where every neighborhood is lush with
                  greenery, every breath is fresh, and every individual has
                  access to clean air and water. Our mission is built on the
                  conviction that collective action can lead to profound change
                  entailing improved incomes, disposable household incomes,
                  dietary diversity, better environment, scaled down pollution,
                  etc.
                  <br />
                  <br />
                  By focusing on sustainable practices and tree planting
                  projects, we empower local communities to take ownership of
                  their environment. Every tree planted represents hope for
                  cleaner air, healthier ecosystems, and stronger communities.
                </p>
              </div>
              <div className=" pt-12 mb-8  lg:-mt-40">
                <a
                  target=" "
                  rel="noreferrer"
                  href="/contact"
                  className="px-6 py-5 bg-green-900 text-white ml-0.5 text-sm font-semibold rounded"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
          <div className="relative pt-4 lg:col-span-6">
            <div className="absolute z-0 h-24 translate-x-1/2 bg-contain translate-y-1/6 lg:-translate-y-10 lg:h-48 lg:translate-x-36 w-44 lg:block"></div>
            <div className="relative  lg:pl-20 sm:pl-5">
              <img
                src="/assets/welcome.jpg"
                alt="mazingira-smart"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
