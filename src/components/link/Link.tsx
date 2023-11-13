import './link.css';

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

const styles = {
    link: "link",
    linkButtonPrimary : "link-button-primary",
    linkButtonSecondary: "link-button-secondary",
    linkButtonOrange: "link-button-orange"
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
        <NextLink {...rest}
            className={`${styles[appearance]} ${className} transition-all`}>
            {children}
        </NextLink>
    );
};
