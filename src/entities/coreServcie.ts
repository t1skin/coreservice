import { ExcelConnector } from "../connectors/excelConnector";

export class CoreService {
  private excelConnector: ExcelConnector;

  constructor() {
    this.excelConnector = new ExcelConnector();
  }

  public getAuthUrl = async (): Promise<string | null> => {
    return await this.excelConnector.createAuthUrl();
  }

  public getAuthToken = async (): Promise<string | null> => {
	return await this.excelConnector.getAuthToken();
  }
}
