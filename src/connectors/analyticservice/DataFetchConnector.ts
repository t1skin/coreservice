import axios from 'axios';

export class DataFetchConnector {
	private url: string;

	constructor() {
		this.url = 'http://localhost:5000/fetch-data';
	}

	public fetchAndStoreData = async (sheetName, tableName, email) => {
		return await axios.get(`${this.url}`, {
      params: { 
        sheetName,
        tableName,
        email 
      }
    });
	}
}
