import { Fade } from "react-awesome-reveal";

const Customer = () => {
  return (
    <div className="mx-4">
      <section className="my-8 dark:text-[#f0f0f0]">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <Fade cascade direction="down" duration={900} delay={300} triggerOnce>
            <h1 className="text-4xl font-bold leading-none text-center">
              What Our Customers Say About Us
            </h1>
          </Fade>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <Fade cascade direction="down" duration={1000} delay={500}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
              </Fade>
              <p className="px-6 py-1 text-lg italic">
                I recently purchased a beautiful landscape painting from your
                store, and I couldn't be happier with the experience. The
                quality of the painting exceeded my expectations, and it has
                transformed my living room into a cozy and welcoming space.
              </p>
              <Fade cascade direction="down" duration={900} delay={600}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </Fade>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-[#4793AF]"></span>
            <p>Leroy Jenkins</p>
          </div>
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <Fade cascade direction="down" duration={900} delay={550}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
              </Fade>
              <p className="px-6 py-1 text-lg italic">
                I stumbled upon your website while searching for a gift, and I'm
                so glad I did! The selection of paintings you offer is truly
                remarkable—each piece is unique and captivating. I ended up
                purchasing a modern abstract painting for my friend, and they
                absolutely loved it.
              </p>
              <Fade cascade direction="down" duration={900} delay={650}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </Fade>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg bg-[#4793AF]"></span>
            <p>Adam Johns</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customer;
