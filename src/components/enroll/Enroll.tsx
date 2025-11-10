"use client";
import styles from "./Enroll.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useState } from "react";
import Popup from "@/components/popup/Popup";
import { CheckCircle } from "lucide-react";
import { STRINGS } from "@/strings/common";
import Spinner from "../spiner/Spinner";
import { theme } from "@/theme";
import Button from "../Button";

type FormDataType = {
  firstName: string;
  lastName: string;
  city: string;
  schoolName: string;
  grade: string;
  gradeNumber: number;
  studentPhone: string;
  parentName: string;
  parentPhone: string;
  email: string;
  howDidYouHereAboutUs: string[];
  howDidYouHereAboutUsField?: string;
  comments?: string;
};

type InputType = {
  name: keyof FormDataType;
  placeholder: string;
  label: string;
  type: string;
};

const formSchema = z
  .object({
    firstName: z.string().min(1, "יש להזין שם פרטי"),
    lastName: z.string().min(1, "יש להזין שם משפחה"),
    city: z.string().min(1, "יש להזין עיר"),
    schoolName: z.string().min(1, "יש להזין את שם בית הספר"),
    grade: z.string().min(1, "יש להזין כיתה"),
    gradeNumber: z.coerce.number().min(1, "מספר הכיתה חייב להיות גדול מ-0"),
    studentPhone: z.string().min(9, "יש להזין טלפון תקין"),
    parentName: z.string().min(1, "יש להזין שם ההורה"),
    parentPhone: z.string().min(9, "יש להזין טלפון תקין"),
    email: z.string().email("יש להזין אימייל תקין"),
    howDidYouHereAboutUs: z.array(z.string()).min(1, "נא לבחור אפשרות"),
    howDidYouHereAboutUsField: z.string().optional(),
    comments: z.string().optional(),
  })
  .refine(
    (data) =>
      !data.howDidYouHereAboutUs.includes("פרסום אחר") ||
      (data.howDidYouHereAboutUsField &&
        data.howDidYouHereAboutUsField.trim() !== ""),
    {
      message: "מכיון שבחרת 'פרסום אחר', נשמח לפירוט סוג הפרסום",
      path: ["howDidYouHereAboutUsField"],
    }
  );

export default function Enroll() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
  });

  const howDidYouHearOptions = [
    "גוגל",
    "פייסבוק",
    "מתנס גבעת שמואל",
    "אינסטגרם",
    "חבר/ה",
    "פליירים",
    "מגנטים",
    "פרסום אחר",
  ];

  const [openPopup, setOpenPopup] = useState(false);
  const [loader, setLoader] = useState(false);
  const rawValues = watch("howDidYouHereAboutUs") || [];
  const howDidYouHereAboutUsValues = Array.isArray(rawValues)
    ? rawValues
    : [rawValues];
  const isOtherChecked = howDidYouHereAboutUsValues.includes("פרסום אחר");
  // const [isEnroll, setEnroll] = useState(false);

  const fields: InputType[] = [
    {
      name: "firstName",
      placeholder: STRINGS.ENROLL_PAGE.FIRST_NAME,
      label: STRINGS.ENROLL_PAGE.FIRST_NAME,
      type: "text",
    },
    {
      name: "lastName",
      placeholder: STRINGS.ENROLL_PAGE.LAST_NAME,
      label: STRINGS.ENROLL_PAGE.LAST_NAME,
      type: "text",
    },
    {
      name: "city",
      placeholder: STRINGS.ENROLL_PAGE.CITY,
      label: STRINGS.ENROLL_PAGE.CITY,
      type: "text",
    },
    {
      name: "schoolName",
      placeholder: STRINGS.ENROLL_PAGE.SCHOOL_NAME,
      label: STRINGS.ENROLL_PAGE.SCHOOL_NAME,
      type: "text",
    },
    {
      name: "grade",
      placeholder: STRINGS.ENROLL_PAGE.GRADE,
      label: STRINGS.ENROLL_PAGE.GRADE,
      type: "text",
    },
    {
      name: "gradeNumber",
      placeholder: STRINGS.ENROLL_PAGE.GRADE_NUMBER,
      label: STRINGS.ENROLL_PAGE.GRADE_NUMBER,
      type: "text",
    },
    {
      name: "studentPhone",
      placeholder: STRINGS.ENROLL_PAGE.STUDENT_PHONE,
      label: STRINGS.ENROLL_PAGE.STUDENT_PHONE,
      type: "tel",
    },
    {
      name: "parentName",
      placeholder: STRINGS.ENROLL_PAGE.PARENT_NAME,
      label: STRINGS.ENROLL_PAGE.PARENT_NAME,
      type: "text",
    },
    {
      name: "parentPhone",
      placeholder: STRINGS.ENROLL_PAGE.PARENT_PHONE,
      label: STRINGS.ENROLL_PAGE.PARENT_PHONE,
      type: "tel",
    },
    {
      name: "email",
      placeholder: STRINGS.ENROLL_PAGE.EMAIL,
      label: STRINGS.ENROLL_PAGE.EMAIL,
      type: "email",
    },
    {
      name: "howDidYouHereAboutUs",
      placeholder: STRINGS.ENROLL_PAGE.HERE_ABOUT_US,
      label: STRINGS.ENROLL_PAGE.HERE_ABOUT_US,
      type: "radio",
    },
    {
      name: "comments",
      placeholder: STRINGS.ENROLL_PAGE.COMMENTS_REQUESTS,
      label: STRINGS.ENROLL_PAGE.COMMENTS_REQUESTS,
      type: "text",
    },
  ];

  const handleClosePopup = useCallback(() => setOpenPopup(false), []);

  const onSubmit = async (formData: FormDataType) => {
    setLoader(true);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok)
        throw new Error((await res.json()).message || "Unknown error");

      await res.json();
      setLoader(false);
      setOpenPopup(true);
      reset();
    } catch (err: unknown) {
      setLoader(false);
      if (err instanceof Error) {
        // setEnroll(true);
        alert("שגיאה: " + (err.message || "לא ידועה"));
      } else {
        alert("שגיאה לא ידועה");
      }
    }
  };

  return (
    <>
      {loader && <Spinner color={theme.colors.dark_turquoise} />}
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <p className={styles.headerText}>
          {STRINGS.ENROLL_PAGE.JOIN_US_TO_KESEM}
        </p>
        <fieldset className={styles.inputContainer}>
          {fields.map((field) =>
            field.name === "howDidYouHereAboutUs" ? (
              <div key={field.label} className={styles.fieldGroup}>
                <div className={styles.headerContainer}>
                  <legend className={styles.inputHeader}>{field.label}</legend>
                </div>

                {howDidYouHearOptions.map((option) => (
                  <label key={option} className={styles.ceckBoxLabel}>
                    <input
                      type="checkbox"
                      value={option}
                      {...register("howDidYouHereAboutUs")}
                      className={styles.inputCheckBox}
                    />
                    {option}
                  </label>
                ))}

                {isOtherChecked && (
                  <>
                    <textarea
                      maxLength={100}
                      placeholder={STRINGS.ENROLL_PAGE.PLEASE_DETAIL}
                      {...register("howDidYouHereAboutUsField")}
                      className={styles.textarea}
                    />
                    {errors.howDidYouHereAboutUsField && (
                      <span className={styles.errorSpan}>
                        {errors.howDidYouHereAboutUsField.message}
                      </span>
                    )}
                  </>
                )}
                {errors[field.name] && (
                  <span className={styles.errorSpan}>
                    {errors[field.name]?.message}
                  </span>
                )}
              </div>
            ) : (
              <div key={field.label} className={styles.fieldGroup}>
                <legend className={styles.inputHeader}>{field.label}</legend>
                {field.name === "comments" ? (
                  <textarea
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    className={styles.textarea}
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name)}
                    className={styles.input}
                  />
                )}
                {errors[field.name] && (
                  <span className={styles.errorSpan}>
                    {errors[field.name]?.message}
                  </span>
                )}
              </div>
            )
          )}
        </fieldset>
        <div className={styles.buttonContainer}>
          <Button
            type="submit"
            text={STRINGS.ENROLL_PAGE.SEND}
            $backgroundColor={theme.colors.turquoise}
            color={theme.colors.white}
            $width="15rem"
          />
        </div>
      </form>

      {!loader && openPopup && (
        <Popup
          icon={<CheckCircle />}
          title={STRINGS.ENROLL_PAGE.SUCCESS_TITLE}
          text={STRINGS.ENROLL_PAGE.DETAILS_SENT_SUCCESSFULLY}
          buttonText={STRINGS.ENROLL_PAGE.THANK_YOU}
          $buttonTextColor={theme.colors.white}
          onClick={handleClosePopup}
        />
      )}
    </>
  );
}
