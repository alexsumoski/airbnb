import React from "react";

interface MenuItemProps {
    onClick: () => void;
    label: string;
    bold?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, bold }) => {
    const fontWeightClass = bold ? 'font-semibold' : 'font-thin';

    return (
        <div onClick={onClick} className={`px-4 py-3 hover:bg-neutral-200 transition ${fontWeightClass}`}>
            {label}
        </div>
    );
}

export default MenuItem;