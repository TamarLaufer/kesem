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
  HeaderContainer,
  CeckBoxLabel,
  InputCheckBox,
} from "./Enroll.styles";
import React, { useCallback, useState } from "react";
import Popup from "@/components/popup/Popup";
import { CheckCircle } from "lucide-react";
import { STRINGS } from "@/strings/common";
import Spinner from "../spiner/Spinner";
import { theme } from "@/theme";

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
  howDidYouHereAboutUs: z.array(z.string()).min(1, "נא לבחור אפשרות"),
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

  const [openPopup, setOpenPopup] = useState(false);
  const [loader, setLoader] = useState(false);

  const howDidYouHearOptions = [
    "גוגל",
    "פייסבוק",
    "מתנס גבעת שמואל",
    "אינסטגרם",
    "חבר/ה",
    "פרסום אחר",
  ];

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

  const handleClosePopup = useCallback(() => {
    setOpenPopup(false);
  }, []);

  const onSubmit = async (formData: FormDataType) => {
    setLoader(true);
    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Trying to submit:", formData);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      const result = await response.json();
      console.log("✅ Enroll succeeded:", result);
      setLoader(false);
      setOpenPopup(true);
      reset();
    } catch (error: unknown) {
      setLoader(false);
      const firebaseError = error as Error;
      console.error("🔥 Firestore submission error:", firebaseError);
      alert("שגיאה: " + (firebaseError.message || "לא ידועה"));
    }
  };

  return (
    <>
      {loader && <Spinner color={theme.colors.dark_turquoise} />}
      <FormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <HeaderText>{STRINGS.ENROLL_PAGE.JOIN_US_TO_KESEM}</HeaderText>
        <InputContainer>
          {fields.map((field) => {
            //CheckBox buttons
            if (field.name === "howDidYouHereAboutUs") {
              return (
                <FieldGroup key={field.label}>
                  <HeaderContainer>
                    <InputHeader>{field.label}</InputHeader>
                  </HeaderContainer>
                  {howDidYouHearOptions.map((option) => (
                    <CeckBoxLabel key={option}>
                      <InputCheckBox
                        type="checkbox"
                        value={option}
                        {...register("howDidYouHereAboutUs")}
                      />
                      {option}
                    </CeckBoxLabel>
                  ))}
                  {errors[field.name] && (
                    <ErrorSpan style={{ color: "red" }}>
                      {errors[field.name]?.message}
                    </ErrorSpan>
                  )}
                </FieldGroup>
              );
            }
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
        <SendButton type="submit">{STRINGS.ENROLL_PAGE.SEND}</SendButton>
      </FormContainer>
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
};

export default Enroll;
