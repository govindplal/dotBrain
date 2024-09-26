import Sidebar from "@/components/sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex">
        <Sidebar/>
      <div className="flex-grow bg-gray-100 p-6">
        {children}
      </div>
    </div>
    );
  }