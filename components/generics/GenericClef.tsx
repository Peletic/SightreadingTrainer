import Image from 'next/image'

export default function GenericClef({svg} : {svg: typeof import("*.svg")}) {
    return(<div className={"relative w-fit h-fit"}>
        <Image height={112} src={svg} alt={"clef"} objectFit={"contain"} className={"mt-[50%] transform-[translateY(-50%)] bg-yellow-300/70"}>
        </Image>
    </div>)
}