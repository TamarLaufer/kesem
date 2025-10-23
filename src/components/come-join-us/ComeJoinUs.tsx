"use client";
import s from "./ComeJoinUs.module.css";
import { STRINGS } from "@/strings/common";
import { renderTextWithBreaks } from "@/functions";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Button from "../Button";
import { Fragment, useState } from "react";
import Spinner from "../spiner/Spinner";
import { theme } from "@/theme";
import Popup from "../popup";
import { CheckCircle } from "lucide-react";

type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  cv?: FileList;
};

type FieldsType = {
  name: keyof FormDataType;
  placeholder: string;
  label: string;
  type: string;
};

const formSchema = z.object({
  firstName: z.string().min(2, "יש למלא שם פרטי"),
  lastName: z.string().min(2, "יש למלא שם משפחה"),
  phone: z.string().min(9, "יש להזין טלפון תקין"),
  cv: z
    .any()
    .refine(
      (value) => value && value.length > 0 && value[0] instanceof File,
      'יש לצרף קובץ קו"ח'
    ),
});

const text = STRINGS.COME_JOIN_US_PAGE.FIRST_PARAGRAPH;
const text2 = STRINGS.COME_JOIN_US_PAGE.JOB_REQIUREMENTS;
const text3 = STRINGS.COME_JOIN_US_PAGE.WHY_US_CONTENT;

const Paragraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p {...props} className={s.paragraphText} />
);

const fields: FieldsType[] = [
  {
    name: "firstName",
    placeholder: STRINGS.COME_JOIN_US_PAGE.FORM.FIRST_NAME,
    label: STRINGS.COME_JOIN_US_PAGE.FORM.FIRST_NAME,
    type: "text",
  },
  {
    name: "lastName",
    placeholder: STRINGS.COME_JOIN_US_PAGE.FORM.LAST_NAME,
    label: STRINGS.COME_JOIN_US_PAGE.FORM.LAST_NAME,
    type: "text",
  },
  {
    name: "phone",
    placeholder: STRINGS.COME_JOIN_US_PAGE.FORM.PHONE,
    label: STRINGS.COME_JOIN_US_PAGE.FORM.PHONE,
    type: "tel",
  },
  {
    name: "cv",
    placeholder: STRINGS.COME_JOIN_US_PAGE.FORM.UPLOAD_FILE,
    label: STRINGS.COME_JOIN_US_PAGE.FORM.UPLOAD_FILE,
    type: "file",
  },
];

export default function ComeJoinUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
  });

  const [loader, setLoader] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const handleClosePopup = () => setOpenPopup(false);

  const onSubmit = async (formData: FormDataType) => {
    setLoader(true);
    try {
      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("phone", formData.phone);
      if (formData.cv && formData.cv.length > 0) {
        data.append("cv", formData.cv[0]);
      }

      const res = await fetch("/api/comeJoinUs", {
        method: "POST",
        body: data,
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
        alert("שגיאה: " + (err.message || "לא ידועה"));
      } else {
        alert("שגיאה לא ידועה");
      }
    }
  };

  return (
    <>
      {loader && <Spinner color={theme.colors.dark_turquoise} />}
      <div className={s.containerAll}>
        <div className={s.container}>
          <div className={s.rightContainer}>
            {renderTextWithBreaks(text, Paragraph)}
            <h1 className={s.text}>{STRINGS.COME_JOIN_US_PAGE.WHY_US}</h1>
            {renderTextWithBreaks(text3, Paragraph)}
            <h1 className={s.text}>
              {STRINGS.COME_JOIN_US_PAGE.WHO_ARE_WE_LOOKIG_FOR}
            </h1>
            {renderTextWithBreaks(text2, Paragraph)}
          </div>

          <div className={s.leftContainer}>
            <Image
              src="/images/5834.jpg"
              alt="cartoon study image"
              width={514}
              height={400}
              style={{ objectFit: "contain" }}
              loading="lazy"
            />
          </div>
        </div>

        <div className={s.containerForm}>
          <h1 className={s.text}>{STRINGS.COME_JOIN_US_PAGE.SOUNDS_GOOD}</h1>
          <div className={s.boxStyleContainer}>
            <form className={s.fieldGroup} onSubmit={handleSubmit(onSubmit)}>
              {fields.map((field) => (
                <Fragment key={field.label}>
                  <legend className={s.inputHeader}>{field.label}</legend>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name, { required: true })}
                    className={s.input}
                    accept={
                      field.type === "file" ? ".pdf,.doc,.docx" : undefined
                    }
                  />
                  {errors[field.name] && (
                    <span className={s.errorSpan}>
                      {errors[field.name]?.message}
                    </span>
                  )}
                </Fragment>
              ))}
              <div className={s.buttonContainer}>
                <Button type="submit" text="הצטרפו אלינו!" $width="15rem" />
              </div>
            </form>
          </div>
        </div>
      </div>

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
