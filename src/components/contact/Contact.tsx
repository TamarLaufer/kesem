"use client";
import Button from "@/components/Button";
import Popup from "@/components/popup/Popup";
import { STRINGS } from "@/strings/common";
import { theme } from "@/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./Contact.module.css";
import { CheckCircle } from "lucide-react";

type ContactDataType = {
  fullName: string;
  city: string;
  grade: string;
  phone: string;
  email: string;
  subject: string;
};

type InputType = {
  name: keyof ContactDataType;
  placeholder: string;
  label: string;
  type: string;
};

const contactSchema = z.object({
  fullName: z.string().min(1, "יש להזין שם מלא"),
  city: z.string().min(1, "יש להזין עיר"),
  grade: z.string().min(1, "יש להזין כיתה"),
  phone: z.string().min(9, "יש להזין טלפון תקין"),
  email: z.string().email("יש להזין אימייל תקין"),
  subject: z
    .string()
    .min(2, "יש לפרט את נושא הפניה")
    .max(250, "עד 250 תווים בלבד"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactDataType>({
    resolver: zodResolver(contactSchema),
  });

  const [openPopup, setOpenPopup] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const fields: InputType[] = [
    {
      name: "fullName",
      placeholder: STRINGS.CONTACT_PAGE.FORM.FULL_NAME,
      label: STRINGS.CONTACT_PAGE.FORM.FULL_NAME,
      type: "text",
    },
    {
      name: "city",
      placeholder: STRINGS.CONTACT_PAGE.FORM.CITY,
      label: STRINGS.CONTACT_PAGE.FORM.CITY,
      type: "text",
    },
    {
      name: "grade",
      placeholder: STRINGS.CONTACT_PAGE.FORM.GRADE,
      label: STRINGS.CONTACT_PAGE.FORM.GRADE,
      type: "text",
    },
    {
      name: "phone",
      placeholder: STRINGS.CONTACT_PAGE.FORM.PHONE,
      label: STRINGS.CONTACT_PAGE.FORM.PHONE,
      type: "tel",
    },
    {
      name: "email",
      placeholder: STRINGS.CONTACT_PAGE.FORM.EMAIL,
      label: STRINGS.CONTACT_PAGE.FORM.EMAIL,
      type: "email",
    },
    {
      name: "subject",
      placeholder: STRINGS.CONTACT_PAGE.FORM.CONTACT_SUBJECT_DETAILS,
      label: STRINGS.CONTACT_PAGE.FORM.CONTACT_SUBJECT,
      type: "text",
    },
  ];

  const contactText: string[] = [
    STRINGS.CENTER_HOURS_GSH,
    STRINGS.CENTER_LOCATION_GSH,
    STRINGS.CENTER_HOURS_RAANANA,
    STRINGS.CENTER_LOCATION_RAANANA,
    STRINGS.CENTER_HOURS_KRIYAT_ONO,
    STRINGS.CENTER_LOCATION_KRIYAT_ONO,
  ];

  const onSubmit = async (formData: ContactDataType) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      await response.json();
      setOpenPopup(true);
      reset();
    } catch (error: unknown) {
      const firebaseError = error as Error;
      alert("שגיאה: " + (firebaseError.message || "לא ידועה"));
    }
  };

  return (
    <form className={styles.contactContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>
          {STRINGS.CONTACT_PAGE.WE_WANT_TO_HERE_FROM_YOU}
        </h1>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.fieldsContainer}>
          {fields.map((field) => (
            <div key={field.label} className={styles.fieldGroup}>
              <legend className={styles.inputHeader}>{field.label}</legend>
              {field.name === "subject" ? (
                <>
                  <textarea
                    className={styles.textarea}
                    placeholder={field.placeholder}
                    maxLength={250}
                    {...register(field.name, { required: true })}
                  />
                  <p
                    id="subject-counter"
                    className={`${styles.text} ${styles.counter}`}
                    aria-live="polite"
                  >
                    {watch("subject")?.length || 0}/250
                  </p>
                </>
              ) : (
                <input
                  className={styles.input}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name, { required: true })}
                />
              )}
              {errors[field.name] && (
                <span className={styles.errorSpan}>
                  {errors[field.name]?.message}
                </span>
              )}
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <Button
              type="submit"
              text={STRINGS.CONTACT_PAGE.FORM.DONE_SEND_REQUEST}
              $backgroundColor={theme.colors.turquoise}
              color={theme.colors.white}
              $width="15rem"
            />
          </div>
        </div>

        <div className={styles.iframeContainer}>
          <div className={styles.detailsContainer}>
            <p
              className={styles.text}
              style={{ fontSize: 22, fontWeight: 500 }}
            >
              {STRINGS.CONTACT_PAGE.CENTER_DETAIL}
            </p>
            {contactText.map((text) =>
              text.includes("\n") ? (
                <p
                  key={text}
                  className={styles.text}
                  style={{ fontWeight: "700", marginTop: 10 }}
                >
                  {text}
                </p>
              ) : (
                <p key={text} className={styles.text}>
                  {text}
                </p>
              )
            )}
            <p className={styles.text} style={{ marginTop: 20 }}>
              {STRINGS.CONTACT_PAGE.CENTER_EMAIL}
            </p>
            <p className={styles.text}>{STRINGS.CONTACT_PAGE.CENTER_PHONE}</p>
          </div>
          {isClient && (
            <iframe
              className={styles.styledIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.4625520853324!2d34.8537098!3d32.0712744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b97cdd24a19%3A0x55c47045165d9c15!2z15DXldeT15nXmNeV16jXmdeV150g16LXmdeo15XXoNeZ!5e0!3m2!1siw!2sil!4v1751149352749!5m2!1siw!2sil"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>

      {openPopup && (
        <Popup
          onClick={() => setOpenPopup(false)}
          buttonText={STRINGS.CONTACT_PAGE.THANKS}
          icon={<CheckCircle />}
          title={STRINGS.CONTACT_PAGE.YOUR_DETAILS_SENT_SECCESSFULLY}
          text={STRINGS.CONTACT_PAGE.CONTACT_WITH_YOU_SOON}
          $buttonTextColor={theme.colors.white}
        />
      )}
    </form>
  );
};

export default Contact;
