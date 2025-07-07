"use client";

import { STRINGS } from "@/strings/common";
import {
  Container,
  Text,
  Reqiurements,
  ParagraphText,
  RightContainer,
  LeftContainer,
  FieldGroup,
  InputHeader,
  Input,
  BoxStyleContainer,
  ContainerAll,
  ErrorSpan,
  ButtonContainer,
} from "./ComeJoinUs.styles";
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

const ComeJoinUs = () => {
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
  const handleClosePopup = () => {
    setOpenPopup(false);
  };

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

      const response = await fetch("/api/comeJoinUs", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unknown error");
      }

      const result = await response.json();
      console.log("✅ succeeded:", result);
      setLoader(false);
      setOpenPopup(true);
      reset();
    } catch (error: unknown) {
      setLoader(false);
      const firebaseError = error as Error;
      alert("שגיאה: " + (firebaseError.message || "לא ידועה"));
    }
  };

  return (
    <>
      {loader && <Spinner color={theme.colors.dark_turquoise} />}
      <ContainerAll>
        <Container>
          <RightContainer>
            {renderTextWithBreaks(text, ParagraphText)}
            <Text>{STRINGS.COME_JOIN_US_PAGE.WHY_US}</Text>
            {renderTextWithBreaks(text3, Reqiurements)}
            <Text>{STRINGS.COME_JOIN_US_PAGE.WHO_ARE_WE_LOOKIG_FOR}</Text>
            {renderTextWithBreaks(text2, Reqiurements)}
          </RightContainer>
          <LeftContainer>
            <Image
              src="/images/5834.jpg"
              alt="cartoon study image"
              width={514}
              height={400}
            />
          </LeftContainer>

          {/* <Text>{STRINGS.COME_JOIN_US_PAGE.COMING_SOON}</Text> */}
          {/* <SecondaryText>{STRINGS.COME_JOIN_US_PAGE.MEANTIME}</SecondaryText>
      <SecondaryText>{STRINGS.COME_JOIN_US_PAGE.EMAIL}</SecondaryText> */}
        </Container>
        <Text>{STRINGS.COME_JOIN_US_PAGE.SOUNDS_GOOD}</Text>
        <BoxStyleContainer>
          <FieldGroup as="form" onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field) => {
              if (field.name !== "cv") {
                return (
                  <Fragment key={field.label}>
                    <InputHeader>{field.label}</InputHeader>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name, { required: true })}
                    />
                    {errors[field.name] && (
                      <ErrorSpan style={{ color: "red" }}>
                        {errors[field.name]?.message}
                      </ErrorSpan>
                    )}
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={field.label}>
                    <InputHeader>{field.label}</InputHeader>
                    <Input
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name, { required: true })}
                      accept=".pdf,.doc,.docx"
                    />
                    {errors[field.name] && (
                      <ErrorSpan style={{ color: "red" }}>
                        {errors[field.name]?.message}
                      </ErrorSpan>
                    )}
                  </Fragment>
                );
              }
            })}
            <ButtonContainer>
              <Button type="submit" text="הצטרפו אלינו!" $width={"5rem"} />
            </ButtonContainer>
          </FieldGroup>
        </BoxStyleContainer>
      </ContainerAll>
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

export default ComeJoinUs;
