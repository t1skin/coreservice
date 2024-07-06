import { ExcelAuthConnector } from "../connectors/ExcelAuthConnector";

export class CoreService {
  private ExcelAuthConnector: ExcelAuthConnector;

  constructor() {
    this.ExcelAuthConnector = new ExcelAuthConnector();
  }

  public getAuthUrl = async (): Promise<string | null> => {
    return await this.ExcelAuthConnector.createAuthUrl();
  }

  public getAuthToken = async (code): Promise<string | null> => {
	return await this.ExcelAuthConnector.getAuthToken(code);
  }
}
