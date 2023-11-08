import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

const styles = {
    link: "link hover:underline",
    text: " link",
    button: "button hover:bg-black hover:text-white",
    error: "link text-red-500",
};

type appearances = keyof typeof styles;

interface LinkProps
    extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    NextLinkProps {
    appearance?: appearances;
}

export const Link: React.FC<LinkProps> = ({
    appearance = "link",
    children,
    className='',
    ...rest
}: LinkProps) => {
    return (
        <NextLink {...rest} className={`${styles[appearance]} ${className}`}>
            {children}
        </NextLink>
    );
};
