export interface JwtTokenI {
	exp: number;
	iat: number;
	sub: string;
}

export interface JwtI {
	Scope: {};
	UserId: number;
	exp: number;
	iat: number;
}

export interface JwtExpanded extends JwtI {
	isExpired: boolean;
}
