import axios from 'axios';

export class DataAnalysisConnector {
	private url1: string;
  private url2: string;

	constructor() {
		this.url1 = 'http://localhost:5000/analyze';
    this.url2 = 'http://localhost:5000/analysis';
	}

  public analyzeData = async (dataId) => {
    return await axios.post(`${this.url1}`, null, {
      params: { dataId }
    })
  }

  public getAnalysisById = async (analysisId) => {
    return await axios.get(`${this.url2}/${analysisId}`);
  }
}
