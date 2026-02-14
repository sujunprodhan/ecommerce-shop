import Header from "@/components/header/Hearder";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}
