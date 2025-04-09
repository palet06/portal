import {
  Cloud,
  DollarSign,
  EllipsisVertical,
  Euro,
  MessageSquareText,
  PartyPopper,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import  { Calendar } from "@/components/ui/calendar";


const DashboardPage = () => {
  return (
    <div className="w-full px-2 lg:px-40 py-10 flex flex-col gap-5 ">
      {/* GRİD İLK 3 KUTU */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-5  gap-4">
        <div className="isolate col-span-1 sm:col-span-2  md:col-span-3 aspect-auto  rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2">
          <h1 className="text-myh1h2h3 text-xl dark:text-myh1h2h3 font-bold flex justify-center md:justify-start items-center gap-4 tracking-wide leading-relaxed">
            Merhaba Murat!
            <PartyPopper className="text-myprimary-button size-5 " />
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left ">
            <p className="text-mybodytext flex-2/3 dark:text-mybodytext_dark tracking-wide leading-relaxed md:text-lg">
              Kurum içi süreçlerinde aktif etkileşimde kullanabileceğin tüm
              uygulamalara bu portalden erişebilirsin.
            </p>
            <Image
              src={"leading.svg"}
              height={150}
              width={150}
              alt="leading"
              className="flex-1/3"
            />
          </div>
        </div>

        <div className="isolate col-span-1   rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2">
          <div className="flex flex-row md:flex-col gap-3 items-center  m-auto ">
            <div className="flex items-start gap-3 w-[150px] ">
              <DollarSign className="text-[#81E14E] bg-[#E8FADF] rounded-md size-8 p-1" />
              <div className="flex flex-col gap-1">
                <p className="text-mypassivetext dark:text-shadow-mypassivetext_dark">
                  ABD DOLARI
                </p>
                <div className="flex gap-1">
                  <p className="text-shadow-mybodytext dark:text-mybodytext_dark  tracking-wide leading-relaxed ">
                    34,26
                  </p>{" "}
                  <span className="text-sm flex text-mypassivetext dark:text-shadow-mypassivetext_dark items-center">
                    TRY
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start  gap-3 w-[150px]">
              <Euro className="text-myh1h2h3 bg-myh1h2h3/30   rounded-md size-8 p-1" />
              <div className="flex flex-col gap-1 ">
                <p className="text-mypassivetext dark:text-shadow-mypassivetext_dark">
                  EURO
                </p>
                <div className="flex gap-1">
                  <p className="text-shadow-mybodytext dark:text-mybodytext_dark  tracking-wide leading-relaxed">
                    37,55
                  </p>{" "}
                  <span className="text-sm flex text-mypassivetext dark:text-shadow-mypassivetext_dark items-center">
                    TRY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="isolate col-span-1 aspect-auto  rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2">
          <div className="flex flex-col gap-3 items-center m-auto  p-3">
            <Cloud className="text-[#81E14E] size-12" />
            <p className="text-mypassivetext dark:text-shadow-mypassivetext_dark">
              ANKARA
            </p>
            <p className="text-[#81E14E] font-bold text-xl">22.6 °C</p>
          </div>
        </div>
      </div>

      {/* GRİD İKİNCİ  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="isolate col-span-2 rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-2"></div>
        <div className="isolate col-span-1 sm:col-span-2  md:col-span-3 aspect-auto  rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between border-b-2">
            <h1 className="text-mybodytext/60 dark:text-mybodytext_dark text-lg font-bold">
              Son Duyurular
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 cursor-pointer outline-0   text-mybodytext/60 dark:text-mybodytext_dark   p-2 rounded-sm">
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-mycardcontainer dark:bg-mycardcontainer_dark hover:!bg-myprimary hover:!text-white">
                <DropdownMenuItem className="dark:hover:bg-myprimary_dark hover:cursor-pointer hover:!bg-myprimary  hover:!text-white ">
                  Tüm Duyurular
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* DUYURU SATIRLARI */}
          <div className="flex justify-between gap-2 items-start">
            <div className="flex gap-3 items-start">
              <div className="min-h-7 min-w-7  max-h-7 max-w-7 flex items-start ">
                <MessageSquareText className=" p-1 text-myh1h2h3 bg-myh1h2h3/30 rounded-sm " />
              </div>
              <div>
                <p className="text-mybodytext/90 dark:text-mybodytext_dark flex items-start text-sm">
                  İşgücü Piyasasına Geçişin Desteklenmesi Projesi (İSDEP II)
                  Kapsamında Bireysel Danışmanlık Hizmet Alımı İlanı
                </p>
              </div>
            </div>
            <p className="bg-mybackground dark:bg-mypassivetext_dark text-shadow-mybodytext_dark px-1 rounded-sm">
              25.09.2025
            </p>
          </div>
          <div className="flex justify-between gap-2 items-start">
            <div className="flex gap-3 items-start">
              <div className="min-h-7 min-w-7  max-h-7 max-w-7 flex items-start ">
                <MessageSquareText className=" p-1 text-myh1h2h3 bg-myh1h2h3/30 rounded-sm" />
              </div>
              <div>
                <p className="text-mybodytext/90 dark:text-mybodytext_dark flex items-start text-sm">
                  YAZILIM İŞ ANALİSTİ BİREYSEL DANIŞMANLIK HİZMET ALIMI İLANI
                </p>
              </div>
            </div>
            <p className="bg-mybackground dark:bg-my-placeholder_dark text-shadow-mybodytext_dark px-1 rounded-sm ">
              25.09.2025
            </p>
          </div>
          <div className="flex justify-between gap-2 items-start">
            <div className="flex gap-3 items-start">
              <div className="min-h-7 min-w-7  max-h-7 max-w-7 flex items-start ">
                <MessageSquareText className=" p-1 text-myh1h2h3 bg-myh1h2h3/30 rounded-sm" />
              </div>
              <div>
                <p className="text-mybodytext/90 dark:text-mybodytext_dark flex items-start text-sm">
                  İşgücü Piyasasına Geçişin Desteklenmesi Projesi (İSDEP II)
                  Kapsamında “UİGM Kurum İçi 2. Eğitimi Organizasyon Hizmetleri
                  Danışmanlık Dışı Hizmet Alımı” (İhale No:
                  FRIT2-MOLSS-WB-DDH-05)
                </p>
              </div>
            </div>
            <p className="bg-mybackground dark:bg-my-placeholder_dark text-shadow-mybodytext_dark px-1 rounded-sm ">
              25.09.2025
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="isolate col-span-1 rounded-xl bg-mycardcontainer dark:bg-mycardcontainer_dark shadow-lg ring-1 ring-black/5 p-3 flex flex-col items-center gap-2">
          <Calendar

          
            
            mode="single"
            selected={new Date(Date.now())}
            
            className="rounded-md border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
