"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormContainer,
  Input,
  HeaderText,
  InputContainer,
  SendButton,
  InputHeader,
  ErrorSpan,
  FieldGroup,
} from "./Enroll.styles";
import { useTranslation } from "react-i18next";
import React, { useCallback, useState } from "react";
import Popup from "@/components/popup/Popup";
import { CheckCircle } from "lucide-react";

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
  howDidYouHereAboutUs?: string;
  comments?: string;
};

type InputType = {
  name: keyof FormDataType;
  placeholder: string;
  label: string;
  type: string;
};

const formSchema = z.object({
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
  howDidYouHereAboutUs: z.string().optional(),
  comments: z.string().optional(),
});

const Enroll = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
  });
  const { t } = useTranslation("common");
  const [openPopup, setOpenPopup] = useState(false);

  const fields: InputType[] = [
    {
      name: "firstName",
      placeholder: t("ENROLL_PAGE.FIRST_NAME"),
      label: t("ENROLL_PAGE.FIRST_NAME"),
      type: "text",
    },
    {
      name: "lastName",
      placeholder: t("ENROLL_PAGE.LAST_NAME"),
      label: t("ENROLL_PAGE.LAST_NAME"),
      type: "text",
    },
    {
      name: "city",
      placeholder: t("ENROLL_PAGE.CITY"),
      label: t("ENROLL_PAGE.CITY"),
      type: "text",
    },
    {
      name: "schoolName",
      placeholder: t("ENROLL_PAGE.SCHOOL_NAME"),
      label: t("ENROLL_PAGE.SCHOOL_NAME"),
      type: "text",
    },
    {
      name: "grade",
      placeholder: t("ENROLL_PAGE.GRADE"),
      label: t("ENROLL_PAGE.GRADE"),
      type: "text",
    },
    {
      name: "gradeNumber",
      placeholder: t("ENROLL_PAGE.GRADE_NUMBER"),
      label: t("ENROLL_PAGE.GRADE_NUMBER"),
      type: "text",
    },
    {
      name: "studentPhone",
      placeholder: t("ENROLL_PAGE.STUDENT_PHONE"),
      label: `${t("ENROLL_PAGE.STUDENT_PHONE")}`,
      type: "tel",
    },
    {
      name: "parentName",
      placeholder: t("ENROLL_PAGE.PARENT_NAME"),
      label: `${t("ENROLL_PAGE.PARENT_NAME")}`,
      type: "text",
    },
    {
      name: "parentPhone",
      placeholder: t("ENROLL_PAGE.PARENT_PHONE"),
      label: `${t("ENROLL_PAGE.PARENT_PHONE")}`,
      type: "tel",
    },
    {
      name: "email",
      placeholder: t("ENROLL_PAGE.EMAIL"),
      label: t("ENROLL_PAGE.EMAIL"),
      type: "email",
    },
    {
      name: "howDidYouHereAboutUs",
      placeholder: t("ENROLL_PAGE.HERE_ABOUT_US"),
      label: t("ENROLL_PAGE.HERE_ABOUT_US"),
      type: "text",
    },
    {
      name: "comments",
      placeholder: t("ENROLL_PAGE.COMMENTS_REQUESTS"),
      label: t("ENROLL_PAGE.COMMENTS_REQUESTS"),
      type: "text",
    },
  ];

  const onSubmit = async (formData: FormDataType) => {
    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      const result = await response.json();
      console.log("✅ Enroll succeeded:", result);
      setOpenPopup(true);
      reset();
    } catch (error: unknown) {
      const firebaseError = error as Error;
      console.error("🔥 Firestore submission error:", firebaseError);
      alert("שגיאה: " + (firebaseError.message || "לא ידועה"));
    }
  };

  const handleClosePopup = useCallback(() => {
    setOpenPopup(false);
  }, []);

  return (
    <FormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
      <HeaderText>{t("ENROLL_PAGE.JOIN_US_TO_KESEM")}</HeaderText>
      <InputContainer>
        {fields.map((field) => {
          return (
            <FieldGroup key={field.label}>
              <InputHeader>{field.label}</InputHeader>
              <Input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.name, { required: true })}
              />
              {errors[field.name] && (
                <ErrorSpan style={{ color: "red" }}>
                  {errors[field.name]?.message}
                </ErrorSpan>
              )}
            </FieldGroup>
          );
        })}
      </InputContainer>
      <SendButton type="submit">{t("ENROLL_PAGE.SEND")}</SendButton>
      {openPopup && (
        <Popup
          icon={<CheckCircle />}
          title={t("ENROLL_PAGE.SUCCESS_TITLE")}
          text={t("ENROLL_PAGE.DETAILS_SENT_SUCCESSFULLY")}
          buttonText={t("ENROLL_PAGE.THANK_YOU")}
          onClick={handleClosePopup}
        />
      )}
    </FormContainer>
  );
};

export default Enroll;
