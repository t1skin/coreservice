import axios from 'axios';

export class VisualizationConnector {
	private url: string;

	constructor() {
		this.url = 'http://localhost:5000/visualize';
	}

	public generateVisualisatoin = async (analysisId) => {
		return await axios.get(`${this.url}/${analysisId}`);
	}
}
