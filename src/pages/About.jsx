import React from "react";
import PageHero from "../components/PageHero";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <PageHero
        title="About Us"
        subtitle="Learn more about our mission, vision, and team."
        backgroundImage="/assets/gallery/39.jpg"
      />
      {/* History Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 mb-4">
              Mazingira Smart is a non-governmental organization registered
              under Public Benefits Organizations Act of 2013. We are based in
              Nairobi, Kenya. Our goal is to pioneer innovative solutions that
              combat climate change, preserve biodiversity, and promote
              environment-conscious living. We have adopted a holistic approach
              that defines true environmental stewardship which is the
              restoration of natural biodiversity, community engagement, and
              sustainable development
            </p>
            <p className="text-gray-600 mb-4">
              At Mazingira Smart,we embrace diversity by welcoming individuals
              from different backgrounds who provide insight into issues
              relating to their physical, social, and occupational environments.
              We work with public and private institutions and organizations,
              respectively synergizing our efforts to realize common goals. In
              addition, our activities extend to advocacy for socio-economic
              empowerment targeting different communities and programs that
              promote income generation and sustainable livelihoods.
            </p>
            <p className="text-gray-600">
              Indeed, we believe that our collective efforts serve as a beacon
              of hope, illuminating a path toward a world with thriving
              ecosystems. Together, we can make a difference that resonates
              through time.
            </p>
          </div>

          {/* Image */}
          <div className="flex gap-1">
            <img
              src="/assets/Tree.jpg"
              alt="Our History"
              className="w-1/3 h-auto rounded-lg shadow-md"
            />
            <img
              src="/assets/Meru Oak.jpeg"
              alt="Our History"
              className="w-1/3 h-auto rounded-lg shadow-md"
            />
            <img
              src="/assets/Avocados7.jpg"
              alt="Our History"
              className="w-1/3 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center ml-auto mr-auto mb-8 pb-4 border-b-2 border-green-600 inline-block max-w-xs">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Graphic */}
            <div>
              <img
                src="/assets/Save-our-planet.jpg"
                alt="Our History"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To promote environmental conservation, responsible resource
                  management, and empower all individuals for socioeconomic
                  advancement through advocacy, education, and impactful
                  initiatives.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To contribute towards building a sustainable and flourishing
                  ecosystem by preserving natural resources and empowering
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-green-600 inline-block">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Integrity */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              Commitment to honesty, transparency, and ethical conduct in all
              our actions, ensuring the utmost trust and credibility in our
              environmental conservation efforts.
            </p>
          </div>

          {/* Respect */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Respect</h3>
            <p className="text-gray-600">
              Honoring the diverse perspectives, cultures, and beliefs of
              individuals and communities, fostering an inclusive environment
              where everyone's contributions to environmental conservation are
              valued and appreciated.
            </p>
          </div>

          {/* Teamwork */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
            <p className="text-gray-600">
              Collaborative spirit, where individuals work cohesively,
              leveraging diverse skills and perspectives, to achieve common
              environmental goals, fostering a stronger, unified impact in
              conservation efforts.
            </p>
          </div>

          {/* Innovation */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Commitment to continuously exploring inventive solutions and
              creative approaches, driving the evolution of environmental
              conservation practices, and ensuring our initiatives remain
              progressive and impactful.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <ul className="list-inside space-y-4">
            <li className="text-gray-600">Peter Nderitu - Board Chair</li>
            <li className="text-gray-600">Gerald Maina - Secretary</li>
            <li className="text-gray-600">Dr. Paul Muriuki - Treasurer</li>
            <li className="text-gray-600">Job Gakuya - Board Member</li>
            <li className="text-gray-600">Mercy Njoroge - Board Member</li>
            {/* <li className="text-gray-600">Daniel Gathieri - Director</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
