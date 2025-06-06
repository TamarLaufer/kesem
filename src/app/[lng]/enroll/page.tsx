"use client";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Input,
  Button,
  HeaderText,
  BackgroundVideo,
  BackgroundVideoOverlay,
} from "./Enroll.styles";
import { useTranslation } from "react-i18next";

type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

type InputType = {
  name: keyof FormDataType;
  placeholder: string;
  label: string;
  type: string;
};

const Enroll = () => {
  const { register, handleSubmit, reset } = useForm<FormDataType>();
  const { t } = useTranslation("common");

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
      name: "phone",
      placeholder: t("ENROLL_PAGE.PHONE"),
      label: `${t("ENROLL_PAGE.PHONE")}`,
      type: "tel",
    },
    {
      name: "email",
      placeholder: t("ENROLL_PAGE.EMAIL"),
      label: t("ENROLL_PAGE.EMAIL"),
      type: "email",
    },
  ];

  const onSubmit = async (formData: FormDataType) => {
    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok) {
      alert(result.message || "נרשמת בהצלחה!");
      reset();
    } else {
      alert(result.error || "אירעה שגיאה בהרשמה");
    }
  };

  return (
    <FormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
      <BackgroundVideo
        src="/videos/students.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <BackgroundVideoOverlay />
      <HeaderText>{t("ENROLL_PAGE.JOIN_US_TO_KESEM")}</HeaderText>
      {fields.map((field) => {
        return (
          <Input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name, { required: true })}
          />
        );
      })}

      <Button type="submit">{t("ENROLL_PAGE.SEND")}</Button>
    </FormContainer>
  );
};

export default Enroll;
