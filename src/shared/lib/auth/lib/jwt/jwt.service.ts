import { jwtDecode } from "jwt-decode";
import { JwtExpanded, JwtI } from "../../model/auth.interface";

export interface TokenI {
	exp: number;
	iat: number;
	sub: string;
}

class JwtUtils {
	private EXPIRY_OFFSET_MS = 2 * 60 * 1000;

	isExpiredToken(token: string | undefined): boolean {
		if (!token) return true;

		try {
			const decoded = jwtDecode<TokenI>(token);

			return Date.now() > decoded.exp * 1000 - this.EXPIRY_OFFSET_MS;
		} catch (error) {
			console.error(error);
			return true;
		}
	}

	CheckToken(token: string | undefined) {
		let object: JwtExpanded = {
			Scope: {},
			UserId: 0,
			exp: 0,
			iat: 0,
			isExpired: true,
		};

		if (!token) return object;
		try {
			const decoded = jwtDecode<JwtI>(token);
			object = {
				...decoded,
				isExpired: Date.now() > decoded.exp * 1000 - 2000 * 60,
			};
			return object;
		} catch (err) {
			return object;
		}
	}
}

const jwtUtils = new JwtUtils();
export default jwtUtils;
