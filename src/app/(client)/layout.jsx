import Header from "@/components/header/Hearder";
import AuthHeader from "../(auth)/_componets/AuthHeader";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header></Header>
      
      {children}
    </div>
  );
}
