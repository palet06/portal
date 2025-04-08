import { Cloud, DollarSign, Euro, PartyPopper } from "lucide-react";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="w-full px-2 md:px-40 py-10 ">
      {/* <div className="bg-gradient-to-r from-[#DC0D15] to-red-500 h-[200px] object-fill bg-current">



      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
        <div className="isolate col-span-1 md:col-span-3 aspect-auto  rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2">
          <h1 className="text-myh1h2h3 dark:text-myh1h2h3 font-bold flex justify-center md:justify-start items-center gap-4 tracking-wide leading-relaxed">
            Merhaba Murat!
            <PartyPopper className="text-myprimary-button size-5 " />
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left ">

          <p className="text-mybodytext dark:text-mybodytext_dark tracking-wide leading-relaxed">
            Kurum içi süreçlerinde aktif etkileşimde kullanabileceğin tüm
            uygulamalara bu portalden erişebilirsin.
          </p>
          <Image
          src={"leading.svg"}
          height={180}
          width={180}
          alt="leading"
          
          />
          </div>
        </div>

        <div className="isolate col-span-1 aspect-auto  rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2">
          
          <div className="flex flex-col gap-3 items-center  p-3">
            <div className="flex items-start   gap-3 w-[150px]">
              <DollarSign className="text-[#81E14E] bg-[#E8FADF] rounded-md size-8 p-1" />
              <div className="flex flex-col gap-1">
                <p className="text-mypassivetext dark:text-shadow-mypassivetext_dark" >ABD DOLARI</p>
                <div className="flex gap-1">
                  <p className="text-shadow-mybodytext dark:text-mybodytext_dark  tracking-wide leading-relaxed ">34,26</p> <span className="text-sm flex text-mypassivetext dark:text-shadow-mypassivetext_dark items-center">TRY</span>
                </div>
              </div>
            </div>

            <div className="flex items-start  gap-3 w-[150px]">
              <Euro className="text-[#4DD4F2] bg-[#D7F5FC] rounded-md size-8 p-1" />
              <div className="flex flex-col gap-1 ">
                <p className="text-mypassivetext dark:text-shadow-mypassivetext_dark">EURO</p>
                <div className="flex gap-1">
                  <p className="text-shadow-mybodytext dark:text-mybodytext_dark  tracking-wide leading-relaxed">37,55</p> <span className="text-sm flex text-mypassivetext dark:text-shadow-mypassivetext_dark items-center">TRY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="isolate col-span-1 aspect-auto  rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2">
          <div className="flex flex-col gap-3 items-center  p-3">
            <Cloud className="text-[#81E14E] size-12" />
            <p className="text-mypassivetext dark:text-shadow-mypassivetext_dark">ANKARA</p>
            <p className="text-[#81E14E] font-bold text-xl">22.6 °C</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
