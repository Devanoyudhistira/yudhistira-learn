export const metadata = {
  title: "teacher-page",
  description: "page for the teacher",
};

export default function RootLayout({ children }) {
  return (
    <div className="w-screen h-max" >
      {children}
    </div>
  );
}