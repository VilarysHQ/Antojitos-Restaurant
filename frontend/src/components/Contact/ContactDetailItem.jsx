export default function ContactDetailItem({ icon: Icon, title, children }) {
  return (
    <div className="flex min-w-0 items-start gap-3.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#f4dcc7] bg-[#fff0e0] text-[#d42a20]">
        <Icon size={21} strokeWidth={1.9} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-1 text-[13px] font-extrabold text-[#3b1b12]">{title}</h3>
        <div className="break-words text-[12px] leading-[1.7] text-[#74564b]">
          {children}
        </div>
      </div>
    </div>
  )
}