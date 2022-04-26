import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    selected: boolean;
}

export default function Marker({ selected, onClick, ..._props }: any) {

    const src = (selected) ? "https://luupdate.com/wp-content/uploads/2021/08/covid-vaccine-01_original.png" : "https://media.discordapp.net/attachments/690694542550106222/962086605135417414/covid-vaccine-01_original-modified.png";

    const dynamicAnimation = () => {
        return selected ? "-translate-x-2/4 -translate-y-2/4 animate-bounce" : "";
    };

    return (

        <img className={`h-12 w-12 absolute ${dynamicAnimation()}`}
            src={src} alt="Landscape picture" onClick={onClick} />


    );
}