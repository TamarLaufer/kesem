"use client";
import Button from "@/components/Button";
import Popup from "@/components/popup/Popup";
import { STRINGS } from "@/strings/common";
import { theme } from "@/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContactContainer,
  DetailsContainer,
  ErrorSpan,
  FieldGroup,
  FieldsContainer,
  FormContainer,
  Header,
  StyledIframe,
  IframeContainer,
  Input,
  InputHeader,
  Text,
  TextContainer,
  Textarea,
} from "./Contact.styles";
import { ButtonContainer } from "./Contact.styles";

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
      type: "text",
    },
    {
      name: "email",
      placeholder: STRINGS.CONTACT_PAGE.FORM.EMAIL,
      label: STRINGS.CONTACT_PAGE.FORM.EMAIL,
      type: "text",
    },
    {
      name: "subject",
      placeholder: STRINGS.CONTACT_PAGE.FORM.CONTACT_SUBJECT_DETAILS,
      label: STRINGS.CONTACT_PAGE.FORM.CONTACT_SUBJECT,
      type: "text",
    },
  ];

  const onSubmit = async (formData: ContactDataType) => {
    try {
      const response = await fetch("/api/contact", {
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

  return (
    <ContactContainer as="form" onSubmit={handleSubmit(onSubmit)}>
      <TextContainer>
        <Header>{STRINGS.CONTACT_PAGE.WE_WANT_TO_HERE_FROM_YOU}</Header>
      </TextContainer>
      <FormContainer>
        <FieldsContainer>
          {fields.map((field) => {
            return (
              <FieldGroup key={field.label}>
                <InputHeader>{field.label}</InputHeader>
                {field.name === "subject" ? (
                  <>
                    <Textarea
                      placeholder={field.placeholder}
                      maxLength={250}
                      {...register(field.name)}
                      onChange={(e) => {
                        register(field.name).onChange(e);
                      }}
                    />
                    <Text
                      style={{
                        fontSize: "0.75rem",
                        color: theme.colors.grey,
                        marginTop: "4px",
                      }}
                    >
                      {watch("subject")?.length || 0}/250
                    </Text>
                  </>
                ) : (
                  <Input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.name, { required: true })}
                  />
                )}
                {errors[field.name] && (
                  <ErrorSpan style={{ color: "red" }}>
                    {errors[field.name]?.message}
                  </ErrorSpan>
                )}
              </FieldGroup>
            );
          })}
          <ButtonContainer>
            <Button
              type="submit"
              text={STRINGS.CONTACT_PAGE.FORM.DONE_SEND_REQUEST}
              $backgroundColor={theme.colors.turquoise}
              color={theme.colors.white}
            />
          </ButtonContainer>
        </FieldsContainer>
        <IframeContainer>
          <DetailsContainer>
            <Text>{STRINGS.CONTACT_PAGE.CENTER_DETAIL}</Text>
            <Text>{STRINGS.CONTACT_PAGE.CENTER_HOURS}</Text>
            <Text>{STRINGS.CONTACT_PAGE.CENTER_LOCATION}</Text>
            <Text>{STRINGS.CONTACT_PAGE.CENTER_EMAIL}</Text>
            <Text>{STRINGS.CONTACT_PAGE.CENTER_PHONE}</Text>
          </DetailsContainer>
          <StyledIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.4625520853324!2d34.8537098!3d32.0712744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b97cdd24a19%3A0x55c47045165d9c15!2z15DXldeT15nXmNeV16jXmdeV150g16LXmdeo15XXoNeZ!5e0!3m2!1siw!2sil!4v1751149352749!5m2!1siw!2sil"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </IframeContainer>
      </FormContainer>
      {openPopup && <Popup onClick={() => setOpenPopup(false)} />}
    </ContactContainer>
  );
};

export default Contact;
