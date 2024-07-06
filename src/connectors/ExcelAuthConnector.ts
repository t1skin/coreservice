import axios from 'axios';

export class ExcelAuthConnector {
	private url: string;

	constructor() {
		this.url = 'http://localhost:8001/excel_auth';
	}

	public createAuthUrl = async (): Promise<string | null> => {
		try {
			console.log(`${this.url}/excel_auth/get_auth_url`);
			const response = await axios.get(`${this.url}/get_auth_url`);
			return response.data;
		} catch (error) {
			console.log('Error fetching auth url:', error.message);
			return null;
		}
	}
}
