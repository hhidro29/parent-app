"use client";

import Link from "next/link";
import Image from "next/image";

// SVG Paths
const svgPaths = {
  currencyDollar: "M14.0003 2.33333C20.4435 2.33351 25.6663 7.5571 25.6663 14.0003C25.6662 20.4434 20.4434 25.6662 14.0003 25.6663C7.5571 25.6663 2.33351 20.4435 2.33333 14.0003C2.33333 7.55699 7.55699 2.33333 14.0003 2.33333ZM14.0003 4.66634C8.84567 4.66634 4.66634 8.84567 4.66634 14.0003C4.66652 19.1548 8.84578 23.3333 14.0003 23.3333C19.1547 23.3332 23.3332 19.1547 23.3333 14.0003C23.3333 8.84578 19.1548 4.66652 14.0003 4.66634ZM14.0023 8.16634C14.5293 8.16636 14.9561 8.57879 14.9564 9.08724V9.36849C15.9196 9.59778 16.6364 10.1481 17.1019 10.6702C17.4456 11.0558 17.4007 11.6373 17.0013 11.9691C16.6016 12.3008 15.9984 12.2571 15.6546 11.8714C15.2896 11.462 14.7409 11.0999 14.0023 11.0999C13.218 11.0999 12.8138 11.3051 12.6292 11.4798C12.4633 11.6372 12.3677 11.8698 12.4251 12.2181C12.4921 12.6236 12.9621 13.0794 14.0023 13.0794C15.1374 13.0794 16.0822 13.4127 16.7191 14.0423C17.3584 14.6744 17.5947 15.5168 17.4671 16.3226C17.2739 17.5428 16.2349 18.368 14.9564 18.6419V18.9124C14.9563 19.421 14.5294 19.8333 14.0023 19.8333C13.4751 19.8333 13.0473 19.421 13.0472 18.9124V18.6312C12.0843 18.4017 11.3683 17.8515 10.9027 17.3304C10.5587 16.9452 10.6033 16.3637 11.0023 16.0316C11.4015 15.6995 12.0047 15.7422 12.349 16.1273C12.716 16.538 13.2641 16.8997 14.0023 16.8997C15.0995 16.8997 15.5298 16.3571 15.5794 16.0443C15.6231 15.7686 15.5433 15.5186 15.3519 15.3294C15.158 15.1378 14.7565 14.9212 14.0023 14.9212C12.5231 14.9212 10.8214 14.2117 10.5404 12.5072C10.401 11.6618 10.6208 10.8022 11.2913 10.1663C11.7467 9.73471 12.349 9.46277 13.0472 9.33822V9.08724C13.0475 8.57878 13.4752 8.16634 14.0023 8.16634Z",
  kid: "M21.3573 3.11644C21.1207 2.51714 20.443 2.22314 19.8437 2.45977C19.2444 2.69641 18.9504 3.37408 19.187 3.97338C19.2524 4.13884 19.2939 4.27551 19.3197 4.38764C17.5703 3.10115 15.7148 2.51039 13.8891 2.45402C11.5013 2.3803 9.26798 3.2223 7.48082 4.42131C5.70213 5.61464 4.27476 7.22193 3.53414 8.81127C2.86172 10.2542 2.60184 12.1258 3.89802 13.3941C3.7389 14.1048 3.65495 14.8439 3.65495 15.6026C3.65495 21.1608 8.16075 25.6666 13.7189 25.6666C19.1879 25.6666 23.6381 21.3042 23.7795 15.8693C24.7311 15.3486 25.2195 14.3267 25.4352 13.3923C25.669 12.3795 25.6528 11.2059 25.3913 10.0931C25.1289 8.97598 24.5783 7.80773 23.6919 6.92934C23.7388 6.926 23.7848 6.92425 23.8299 6.9242C24.4742 6.92358 24.996 6.40075 24.9954 5.75642C24.9948 5.11208 24.4719 4.59025 23.8276 4.59087C23.1681 4.5915 22.549 4.75626 22.1128 4.88143C22.0263 4.90623 21.9508 4.92841 21.8822 4.94855C21.8058 4.97098 21.738 4.99088 21.6734 5.00906C21.7368 4.42977 21.6296 3.80595 21.3573 3.11644ZM5.98828 15.6026C5.98828 15.0333 6.04983 14.4783 6.16662 13.9441C11.7435 14.2554 15.0634 13.6316 17.4397 12.2558C17.6456 12.7738 17.9454 13.2875 18.3626 13.7669C19.0813 14.5928 20.0968 15.2579 21.4492 15.681C21.4071 19.9144 17.9623 23.3333 13.7189 23.3333C9.44942 23.3333 5.98828 19.8721 5.98828 15.6026ZM5.41592 11.5584C5.25898 11.2532 5.22339 10.7104 5.64911 9.79683C6.18038 8.65677 7.2924 7.35754 8.78079 6.35897C10.2607 5.36608 12.0222 4.73083 13.8171 4.78624C15.5813 4.84071 17.4812 5.56388 19.2929 7.4725L19.6379 7.83598L20.1391 7.83597C21.7289 7.83594 22.7364 8.99462 23.1198 10.6267C23.3081 11.4281 23.307 12.2378 23.1617 12.8674C23.0739 13.2474 22.954 13.4887 22.8475 13.6361C21.4256 13.3372 20.6001 12.7837 20.1227 12.2352C19.5883 11.621 19.3952 10.9044 19.3952 10.2675C19.3952 9.81156 19.1296 9.39738 18.7152 9.20719C18.3008 9.01701 17.8135 9.08567 17.4678 9.38298C15.5836 11.0034 12.7167 12.075 5.41592 11.5584ZM9.73295 17.1776C10.3773 17.1776 10.8996 16.6552 10.8996 16.0109C10.8996 15.3666 10.3773 14.8442 9.73295 14.8442C9.08862 14.8442 8.56628 15.3666 8.56628 16.0109C8.56628 16.6552 9.08862 17.1776 9.73295 17.1776ZM18.702 16.0109C18.702 16.6552 18.1797 17.1776 17.5353 17.1776C16.891 17.1776 16.3687 16.6552 16.3687 16.0109C16.3687 15.3666 16.891 14.8442 17.5353 14.8442C18.1797 14.8442 18.702 15.3666 18.702 16.0109ZM11.4626 18.5832C11.2655 17.9698 10.6085 17.6323 9.99502 17.8294C9.38158 18.0264 9.04405 18.6835 9.24114 19.297C9.58955 20.3814 10.9519 21.9052 13.5626 21.9052C16.1382 21.9052 17.6823 20.4338 18.1873 19.4909C18.4915 18.923 18.2777 18.2159 17.7097 17.9117C17.1417 17.6074 16.4346 17.8213 16.1304 18.3893C15.9933 18.6453 15.1998 19.5719 13.5626 19.5719C11.9606 19.5719 11.4994 18.6978 11.4626 18.5832Z",
  image: "M2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19ZM5 4H19C19.5523 4 20 4.44771 20 5V15.4472C18.9884 13.1786 17.7783 11 16.5 11C16.1253 11 15.7154 11.2458 15.2935 11.6517C14.8468 12.0815 14.3866 12.6909 13.9401 13.3784C13.5994 12.7097 13.2381 12.0456 12.8646 11.419C11.6108 9.31556 10.2189 7.63635 9 7.63635C7.30259 7.63635 5.45119 10.7072 4 13.6527V5C4 4.44772 4.44771 4 5 4ZM18.8172 17.767L19.6715 19.741C19.494 19.9019 19.2585 20 19 20H5C4.61127 20 4.27435 19.7782 4.10888 19.4542C4.03032 19.1831 4.06618 18.829 4.09528 18.647C4.13889 18.3741 4.20778 18.108 4.26993 17.902C4.30026 17.8015 4.32708 17.7217 4.34514 17.6701L4.35423 17.6444C5.09245 15.9916 6.06674 13.8227 7.12647 12.0627C7.66491 11.1684 8.17004 10.4749 8.61257 10.0285C8.78396 9.8556 8.9105 9.75518 8.99348 9.69785C9.0088 9.70837 9.02544 9.72019 9.04341 9.73344C9.27046 9.90089 9.57476 10.1988 9.94092 10.6594C10.671 11.5778 11.44 12.8773 12.1582 14.2866L13.3379 16.6011C13.5126 16.9441 13.9931 16.9692 14.2027 16.6464L15.6175 14.4676C15.9538 13.9499 16.2581 13.545 16.5156 13.2628C16.6652 13.4451 16.8415 13.6947 17.04 14.0222C17.6551 15.0371 18.2511 16.4038 18.8172 17.767Z",
  imageCircle: "M16 9C17.1046 9 18 8.10457 18 7C18 5.89543 17.1046 5 16 5C14.8954 5 14 5.89543 14 7C14 8.10457 14.8954 9 16 9Z",
  filter: "M3.42684 7.58377L5.23267 7.58375C5.64963 9.40899 7.24185 10.7678 9.14239 10.7678C11.043 10.7678 12.6352 9.40895 13.0521 7.58368L20.5732 7.58362C21.0851 7.58361 21.5 7.1565 21.5 6.62964C21.5 6.10277 21.085 5.67567 20.5732 5.67567L13.0502 5.67574C12.6303 3.85467 11.0401 2.5 9.14239 2.5C7.2447 2.5 5.65441 3.8547 5.23455 5.6758L3.42682 5.67582C2.91495 5.67582 2.5 6.10294 2.5 6.6298C2.5 7.15666 2.91496 7.58377 3.42684 7.58377ZM3.42683 18.3202H11.4125C11.831 20.1433 13.4222 21.4999 15.3212 21.4999C17.2203 21.4999 18.8115 20.1433 19.23 18.3202H20.5732C21.085 18.3202 21.5 17.8931 21.5 17.3663C21.5 16.8394 21.085 16.4123 20.5732 16.4123H19.2301C18.8117 14.589 17.2204 13.2322 15.3212 13.2322C13.4221 13.2322 11.8308 14.589 11.4124 16.4123H3.42683C2.91496 16.4123 2.5 16.8394 2.5 17.3663C2.5 17.8931 2.91496 18.3202 3.42683 18.3202Z",
  close: "M15.5544 5.79248C15.9263 5.42055 15.9263 4.81754 15.5544 4.44561C15.1825 4.07368 14.5794 4.07368 14.2075 4.44561L10 8.65313L5.79248 4.44561C5.42055 4.07368 4.81754 4.07368 4.44561 4.44561C4.07368 4.81754 4.07368 5.42055 4.44561 5.79248L8.65313 10L4.44561 14.2075C4.07368 14.5794 4.07368 15.1825 4.44561 15.5544C4.81754 15.9263 5.42055 15.9263 5.79248 15.5544L10 11.3469L14.2075 15.5544C14.5794 15.9263 15.1825 15.9263 15.5544 15.5544C15.9263 15.1825 15.9263 14.5794 15.5544 14.2075L11.3469 10L15.5544 5.79248Z",
};

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path d={svgPaths.currencyDollar} fill="#F7BA58" />
      </svg>
    </div>
  );
}

function Kid() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <path clipRule="evenodd" d={svgPaths.kid} fill="#477AD7" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function ImageIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPaths.imageCircle} fill="#6B46A5" />
        <path clipRule="evenodd" d={svgPaths.image} fill="#6B46A5" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.filter} fill="#2C313A" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.close} fill="#959DAC" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function HeaderBackground() {
  return (
    <div className="absolute h-[130px] left-0 overflow-clip top-0 w-full rounded-bl-[28px]">
      <Image
        src="/assets/images/header-bg-clean.png"
        alt="Header Background"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}

function PaymentCard() {
  return (
    <Link href="/payment" className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <CurrencyDollar />
          <p className="font-['Inter'] font-semibold leading-[16px] not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center">Payment</p>
        </div>
      </div>
    </Link>
  );
}

function MyChildCard() {
  return (
    <Link href="/my-child" className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <Kid />
          <p className="font-['Inter'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center w-[min-content]">My Child</p>
        </div>
      </div>
    </Link>
  );
}

function GalleryCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] shadow-[0px_12px_16px_0px_rgba(129,134,142,0.12)]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative w-full">
          <ImageIcon />
          <p className="font-['Inter'] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[12px] text-center w-[min-content]">Galery</p>
        </div>
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <PaymentCard />
      <MyChildCard />
      <GalleryCard />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start p-[12px] relative w-full">
      <HeaderBackground />
      <p className="font-['Inter'] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-white z-10">Good Morning</p>
      <QuickActions />
    </div>
  );
}

function StoryHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="relative shrink-0">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative">
          <p className="font-['Inter'] font-bold leading-[24px] relative shrink-0 text-[#2c313a] text-[16px]">Story</p>
          <p className="font-['Inter'] font-normal leading-[18px] relative shrink-0 text-[#5e677b] text-[12px]">All Children</p>
        </div>
      </div>
      <FilterIcon />
    </div>
  );
}

function PromoCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        {/* Header */}
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[28px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <circle cx="14" cy="14" fill="#E9CBF7" r="14" />
            </svg>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter'] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Spesial Buat Kamu</p>
            </div>
          </div>
          <CloseIcon />
        </div>

        {/* Promo Image */}
        <div className="h-[133px] overflow-hidden relative rounded-[12px] shrink-0 w-full bg-gradient-to-r from-[#b8eff3]/85 to-[#34CE9E]">
          <Image
            src="/assets/images/promo-banner-wonderlab.png"
            alt="Champions Wonderlab"
            fill
            className="object-cover object-right"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-[12px]">
            <div className="flex flex-col gap-[2px] max-w-[55%]">
              <p className="font-['Inter'] font-bold leading-[18px] text-[#2c313a] text-[14px]">
                Champions Wonderlab
              </p>
              <p className="font-['Inter'] font-normal leading-[16px] text-[#2c313a] text-[10px]">
                Program Belajar dan Stimulasi Anak Usia Dini Terinspirasi dari Kurikulum Singapura
              </p>
            </div>
            <div>
              <button className="bg-[#f26d0f] font-['Inter'] font-bold leading-[18px] px-[12px] py-[4px] rounded-full text-[12px] text-white hover:bg-[#d96010] transition-colors">
                Lihat Lokasi
              </button>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="h-[5px] relative shrink-0 w-[23px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 5">
              <circle cx="2.5" cy="2.5" fill="#20A4B0" r="2.5" />
              <circle cx="11.5" cy="2.5" fill="#D9D9D9" r="2.5" />
              <circle cx="20.5" cy="2.5" fill="#D9D9D9" r="2.5" />
            </svg>
          </div>
          <p className="font-['Inter'] font-semibold leading-[16px] not-italic relative shrink-0 text-[#20a4b0] text-[12px] text-center">Lihat Semua</p>
        </div>
      </div>
    </div>
  );
}

function ClassReportCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        {/* Header */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[28px] rounded-full overflow-hidden">
            <Image
              src="/assets/images/avatar-class-report.png"
              alt="Class Report Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
            <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">4 hours ago</p>
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter'] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Class Report · Champions Wonderlab</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="h-[120px] w-full rounded-[8px] overflow-hidden relative">
          <Image
            src="/assets/images/promo-banner-discovering-me.png"
            alt="Discovering Me - This Is Me!"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
          <p className="font-['Inter'] font-bold leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-full">Discovering Me - This Is Me!</p>
          <p className="font-['Inter'] font-normal leading-[18px] not-italic relative shrink-0 text-[#2c313a] text-[12px] w-full">{`We hope you're having a great day! Here is Little Wonder's update from the classroom:`}</p>
        </div>

        <p className="font-['Inter'] font-bold leading-[22px] min-w-full not-italic relative shrink-0 text-[#20a4b0] text-[14px] text-right w-[min-content]">See Session Report</p>
      </div>
    </div>
  );
}

function AnnouncementCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[28px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <circle cx="14" cy="14" fill="#E9CBF7" r="14" />
            </svg>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
            <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black">4 hours ago</p>
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter'] font-semibold leading-[18px] min-h-px min-w-px not-italic relative text-[12px] text-black">Announcement</p>
            </div>
          </div>
        </div>
        <p className="font-['Inter'] font-normal leading-[22px] not-italic relative shrink-0 text-[#2c313a] text-[14px] w-full">{`Don't forget your water bottles!`}</p>
        <p className="font-['Inter'] font-bold leading-[22px] not-italic relative shrink-0 text-[#20a4b0] text-[14px] text-right w-full">See Detail</p>
      </div>
    </div>
  );
}

function SessionReportCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cfd3db] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[28px] rounded-full overflow-hidden">
            <Image
              src="/assets/images/avatar-dora-session.png"
              alt="Dora Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative text-black">
            <div className="content-stretch flex font-['Inter'] font-normal gap-[4px] items-start leading-[normal] relative shrink-0 text-[12px] w-full">
              <p className="flex-[1_0_0] min-h-px min-w-px relative">Dora A · English Academy</p>
              <p className="relative shrink-0">{` 4 hours ago`}</p>
            </div>
            <p className="font-['Inter'] font-bold leading-[22px] relative shrink-0 text-[14px] w-full">Dora&apos;s Session Report</p>
          </div>
        </div>
        <div className="bg-[#d9d9d9] h-px shrink-0 w-full" />
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="font-['Inter'] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#2c313a] text-[14px] w-[min-content]">Discovering Me - This Is Me!</p>
        </div>
        <p className="font-['Inter'] font-bold leading-[22px] min-w-full not-italic relative shrink-0 text-[#20a4b0] text-[14px] text-right w-[min-content]">See Detail</p>
      </div>
    </div>
  );
}

function StorySection() {
  return (
    <div className="bg-[#f7f9fd] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative w-full">
        <StoryHeader />
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          <PromoCard />
          <ClassReportCard />
          <AnnouncementCard />
          <SessionReportCard />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="content-stretch flex flex-col items-start w-full">
      <div className="bg-[#1fb0c3] h-[24px] shrink-0 w-full" />
      <HeaderSection />
      <StorySection />
    </div>
  );
}
