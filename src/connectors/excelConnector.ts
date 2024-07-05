import axios from 'axios';

export class ExcelConnector {
	private url: string;

	constructor() {
		this.url = 'http://localhost:8001';
	}

	public createAuthUrl = async (): Promise<string | null> => {
		try {
			const response = await axios.get(`${this.url}/get_auth_url`);
			return response.data;
		} catch (error) {
			console.log('Error fetching auth url:', error);
			return null;
		}
	}
}
