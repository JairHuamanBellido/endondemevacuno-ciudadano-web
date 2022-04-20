import { IPropsIcon } from "./IPropsIcon";

export default function BackIcon({ color }: IPropsIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path fill={color} d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
        </svg>
    );
}
