import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Echogee - Home",
  description:
    "Echogee Global is a leading Energy and Technology Coperation. Echogee global utilize technological softwares to make positive impact in the life of its large consumers in Africa and Europe. Echogee has many subsidiaries, and its goals aligns with the mission of Echogee Global. Echogee have partnered with over Internation congolomorates companies across various industries, helping them unlock the power of their Technology and Energy to drive growth and innovation.",
  author: "Gabriel Egwu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="children">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
