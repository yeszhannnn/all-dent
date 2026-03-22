import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги и цены — ALL DENT Астана",
  description:
    "Полный прайс стоматологических услуг: терапия, имплантация, ортодонтия, ортопедия, хирургия, Севоран. Прозрачные цены без скрытых доплат.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
