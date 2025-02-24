import React from "react";
import PageHero from "../components/PageHero";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <PageHero
        title="About Us"
        subtitle="Learn more about our mission, vision, and team."
        backgroundImage="/assets/back.jpg"
      />
      {/* History Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 mb-4">
              Mazingira Smart is a non-governmental organization registered
              under Section 10 of the Non-Governmental Organizations
              Coordination Act, 1990. We are based in Nairobi, Kenya. Our goal
              is to pioneer innovative solutions that combat climate change,
              preserve biodiversity, and promote environment-conscious living.
              We have adopted a holistic approach that defines true
              environmental stewardship which is the restoration of natural
              biodiversity, community engagement, and sustainable development
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
          <div>
            <img
              src="/assets/lightbulb.jpg"
              alt="Our History"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower communities to take ownership of their environment
                through sustainable practices and tree-planting initiatives.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A future where every neighborhood is lush with greenery, every
                breath is fresh, and every individual has access to clean air
                and water.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We prioritize long-term environmental health.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We work with communities and partners to achieve common goals.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We embrace creative solutions to environmental challenges.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              We believe in the power of collective action.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="/assets/team/john-doe.jpg"
                alt="John Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/team/jane-smith.jpg"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/team/michael-brown.jpg"
                alt="Michael Brown"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Brown</h3>
              <p className="text-gray-600">Community Outreach</p>
            </div>
            <div className="text-center">
              <img
                src="/assets/team/sarah-jones.jpg"
                alt="Sarah Jones"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Sarah Jones</h3>
              <p className="text-gray-600">Sustainability Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
