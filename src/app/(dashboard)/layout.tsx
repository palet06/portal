import TopMenu from "@/components/TopMenu";


export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col w-full ">
      {/* Navbar */}
      <div className="sticky top-0">
        <TopMenu />
      </div>
      <div>
        {children}
      </div>

    </div>
   
    
  );
}
