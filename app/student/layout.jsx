export const metadata = {
  title: "student-page",
  description: "page for the student",
};

export default function RootLayout({ children }) {
  return (
    <div className="w-screen h-max" >
      {children}
    </div>
  );
}