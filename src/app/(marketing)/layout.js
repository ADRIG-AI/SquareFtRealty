import Navbar from "@/components/navbar";

export default function MarketingLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
