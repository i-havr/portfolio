import React, { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { endStringWithThreeDots } from "../utils/endStringWithThreeDots";
import { testimonials } from "../constants";

import { styles } from "../styles";

const FeedbackCard = ({
  index,
  actionHandler,
  testimonial,
  name,
  linkedin,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-4 xs:p-10 rounded-3xl w-full xs:w-[320px]"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1 min-h-full flex flex-col justify-between pb-12">
      <p className="text-white tracking-wider text-[18px]">
        {endStringWithThreeDots(testimonial)}
      </p>

      <div className="relative flex justify-between items-start gap-1 h-20">
        <button
          type="button"
          className="absolute -top-12 text-xs cursor-pointer hover:underline focus:underline"
          onClick={actionHandler}
        >
          {"... read more"}
        </button>
        <div className="flex-1 flex flex-col">
          <div className="flex gap-1">
            <span className="blue-text-gradient">@</span>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="text-white font-medium text-[16px] cursor-pointer hover:underline"
            >
              {name}
            </a>
          </div>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState("");

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (name, text) => {
    setActiveTestimonial({ name, text });
    setIsOpen(true);
  };

  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>
        <div
          className={`-mt-20 pb-14 px-6 flex flex-wrap justify-center gap-7`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              actionHandler={() =>
                openModal(testimonial.name, testimonial.testimonial)
              }
              {...testimonial}
            />
          ))}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-black-200 border border-white-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white-100"
                  >
                    {`${activeTestimonial.name} says:`}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-white-100 whitespace-pre-wrap">
                      {activeTestimonial.text}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-white-100 px-4 py-2 text-sm font-medium text-tertiary hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
