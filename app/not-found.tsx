import { NotFoundView } from "@/components/NotFoundView";

export const metadata = {
  title: "404 | JJL Independent Accounting",
  description: "Página no encontrada / Page not found — JJL Independent Accounting.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return <NotFoundView />;
}
