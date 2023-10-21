import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { FORM_DATA_KEY } from "../constants/sessionStorageKey";
import formBuildingData from "../data/formBuildingData.json";

import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formBuildingData.options;

  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useFormPersist(FORM_DATA_KEY, { watch, setValue });

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const { name, email, message } = formData;

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name.trim(),
          to_name: "Ihor Havrylov",
          from_email: email,
          to_email: "i.havrylov@gmail.com",
          message: message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success("Thank you. I will get back to you as soon as possible.", {
        duration: 5000,
      });
      reset();
      sessionStorage.removeItem(FORM_DATA_KEY);
    } catch (error) {
      toast.error("Ahh, something went wrong. Please try again.", {
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Write to me on{" "}
          <a
            href="https://t.me/i_havrylov"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="hover:cursor-pointer hover:underline font-bold"
          >
            Telegram
          </a>{" "}
          or fill out the feedback form below.
        </p>

        <form
          className="mt-12 flex flex-col gap-8"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput register={register} errors={errors} options={name} />
          <FormInput register={register} errors={errors} options={email} />
          <FormTextarea register={register} errors={errors} options={message} />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
