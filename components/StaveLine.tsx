export default function StaveLine({children}) {
    return (<div className={"bg-[url('/staff.svg')] bg-repeat-x bg-contain bg-center bg-origin-content " +
            "min-w-auto min-h-[20%] max-h-24 my-[48px] py-4 " +
            "grid grid-rows-1 grid-cols-4 gap-0 " +
            "justify-items-center content-center"}>
        {children}
    </div>)
}