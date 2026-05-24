export const metadata = {
  title: "school-login",
  description: "login page for a student and teacher",
};

export default function RootLayout({ children }) {
  return (
    <div className="w-screen h-max" >
      {children}
    </div>
  );
}