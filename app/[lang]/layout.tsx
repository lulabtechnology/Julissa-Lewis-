import { GSAPExperience } from "@/components/GSAPExperience";

export default function LocalizedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GSAPExperience />
      {children}
    </>
  );
}
