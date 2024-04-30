import { Helmet } from "react-helmet-async";
import about from "../../assets/images/about.jpg";

// import { Helmet } from "react-helmet";


const About = () => {
  return (
    <div className=" p-5 mt-5">
      <Helmet>
        <title>Gravo | About</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl font-bold text-center text-red-500">About Us</h1>
      <div className="border w-1/4 mx-auto mt-3"></div>


      <div className="flex flex-col md:flex-row justify-center p-5 mt-10 bg-[#22cbcb29]">


        <div className=" flex-1 flex flex-col justify-center lg:p-8 md:p-5 p-2">
          <img className=" " src={about} alt="" />
        </div>

        <div className="flex-1 flex flex-col justify-center lg:p-8 md:p-5 p-2">
          <h1 className="text-xl lg:text-3xl md:text-2xl font-extrabold">
            Welcome to Our Art Agency
          </h1>
          <p className="mt-5">
            At our agency, we are dedicated to helping you find the perfect art or crafts. With years of experience in the art industry, our team of experts is committed to providing exceptional service and guiding you through every step of the process. Whether you are buying, selling, or investing, we are here to assist you in achieving your goals. Contact us today to learn more about how we can help you fulfill your art needs.
          </p>
          <button>
            <a href="/contact" className="bg-red-500 hover:bg-[#1d504f] text-white font-bold py-2 px-4 rounded inline-block mt-4 transition-colors duration-300 ease-in-out">
              Contact Us
            </a>
          </button>
        </div>
      </div>



      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-10 p-5 mt-10">
        <div className="flex-1">
          <p>
            Welcome to <strong>Gravo</strong>, where we believe in
            transforming your dreams into tangible realities. With a passion for
            art and a commitment to exceptional service, we are
            dedicated to guiding you through every step of your art
            journey.
          </p>

          <p>
            At <strong>Gravo</strong>, we understand that buying, selling, or
            renting a Art item can be one of the most significant decisions in
            your life. That is why we are here to provide you with the
            expertise, support, and personalized attention you deserve.
          </p>

          <p>
            Our team consists of seasoned professionals who bring a wealth of
            experience and knowledge to the table. From skilled Art
            agents to dedicated administrative staff, each member of our team is
            committed to exceeding your expectations and ensuring your
            satisfaction.
          </p>

          <p>Contact us today to get started on your real estate journey!</p>
        </div>



        <div className="flex-1">
          <section className="p-6 bg-slate-100 rounded-xl">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                <p className="text-sm sm:text-base">Clients</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                <p className="text-sm sm:text-base">Followers on social media</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
                <p className="text-sm sm:text-base">Published art</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
                <p className="text-sm sm:text-base">TED talks</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                <p className="text-sm sm:text-base">Years of experience</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                <p className="text-sm sm:text-base">Workshops</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
