import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Севоран, отзывы, FAQ и контакты — ALL DENT Астана",
  description:
    "Лечение во сне (Севоран), отзывы пациентов из 2GIS, ответы на частые вопросы и контактная информация стоматологии ALL DENT в Астане.",
};

export default function SevoranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
