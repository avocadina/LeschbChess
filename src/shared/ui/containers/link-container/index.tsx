import React from "react";

import Link from "next/link";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	href: string;
	target?: string;
}

export default function LinkContainer({ children, href, target, className, ...rest }: Props) {
	return (
		<Link
			href={href}
			target={target}
			rel="noopener noreferrer"
			className={classNames(className)}
			{...rest}
		>
			{children}
		</Link>
	);
}
