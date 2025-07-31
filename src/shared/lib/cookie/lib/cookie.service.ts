import { jwtDecode } from "jwt-decode";
import { JwtTokenI } from "../../auth/model/auth.interface";

class CookieService {
	private catchError = (error: any) => {
		if (error.message === "document is not defined") {
			return undefined;
		}
		console.error(error);
		return undefined;
	};

	getCookie = (name: string) => {
		try {
			if (typeof document !== "undefined") {
				const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
				if (match) return match[2].replaceAll('"', "");
			}
			return undefined;
		} catch (error: any) {
			this.catchError(error);
		}
	};

	setCookie = (name: string, value: any, options?: any) => {
		try {
			if (!document) return;
			options = {
				path: "/",
				...options,
			};

			let updatedCookie: string = String(name) + "=" + String(value);
			for (const optionKey in options) {
				updatedCookie += "; " + optionKey;
				const optionValue = options[optionKey];
				if (optionValue !== true) {
					updatedCookie += "=" + optionValue;
				}
			}

			document.cookie = updatedCookie;
		} catch (err: any) {
			this.catchError(err);
		}
	};

	setCookieWithToken = (name: string, token: string, options?: any) => {
		try {
			if (typeof document !== "undefined") {
				const decoded = jwtDecode<JwtTokenI>(token);
				const expiresIn = decoded.exp * 1000 - Date.now(); // Разница во времени

				if (expiresIn <= 0) {
					console.warn(`Токен ${name} уже истек, не устанавливаем куки.`);
					return;
				}

				options = {
					path: "/",
					"max-age": Math.floor(expiresIn / 1000), // Время в секундах
					secure: true,
					sameSite: "Lax",
					...options,
				};

				const optionParts = Object.entries(options).map(([key, val]) => (val === true ? key : `${key}=${val}`));

				const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(token)}; ${optionParts.join("; ")}`;

				document.cookie = updatedCookie;
			}
		} catch (error: any) {
			console.error("Ошибка установки куки с токеном:", error);
		}
	};
}

const cookieService = new CookieService();
export default cookieService;
