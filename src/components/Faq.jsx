const Faq = () => {
  return (
    <div>
      <section className="dark:text-[#f0f0f0]">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is the return policy for purchased paintings?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Our return policy allows you to return a painting within 30
                  days of purchase for a full refund. The painting must be in
                  its original condition and packaging. To initiate a return,
                  please contact our customer service team. We strive to make
                  the return process as smooth as possible for you.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How long does shipping take, and how much does it cost?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  We offer standard shipping, which typically takes 5-7 business
                  days for domestic orders. International shipping times may
                  vary depending on the destination. Shipping costs are
                  calculated at checkout based on your location and the size of
                  your order. We also offer expedited shipping options for
                  faster delivery.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Can I commission a custom painting?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Yes, we offer a custom painting service for those looking for
                  a unique piece of art. You can work with one of our talented
                  artists to create a painting that matches your vision and
                  style. Please contact our customer service team to discuss
                  your preferences and receive a quote for your custom painting.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
