import axios from 'axios';

export class ExcelAuthConnector {
	private url: string;

	constructor() {
		this.url = 'http://localhost:8001/excel_auth';
	}

	public createAuthUrl = async (): Promise<string | null> => {
		try {
			const response = await axios.get(`${this.url}/get_auth_url`);
			return response.data;
		} catch (error) {
			console.log('Error fetching auth url:', error.message);
			return null;
		}
	}

	public getAuthToken = async (code): Promise<string | null> => {
		try {
			const response = await axios.get(`${this.url}/get_auth_token`, {
				params: { code }
			});
			return response.data;
		} catch (error) {
			console.log('Error when getting auth token:', error.message);
			return null;
		}
	}
}
