import { ExcelAuthConnector } from "../connectors/ExcelAuthConnector";
import { ExcelSheetsConnector } from "../connectors/ExcelSheetsConnector";

export class CoreService {
  private ExcelAuthConnector: ExcelAuthConnector;
  private ExcelSheetsConnector: ExcelSheetsConnector;

  constructor() {
    this.ExcelAuthConnector = new ExcelAuthConnector();
    this.ExcelSheetsConnector = new ExcelSheetsConnector();
  }

  public getAuthUrl = async (): Promise<string | null> => {
    return await this.ExcelAuthConnector.createAuthUrl();
  };

  public getAuthToken = async (code): Promise<string | null> => {
    return await this.ExcelAuthConnector.getAuthToken(code);
  };

  public createSession = async (email): Promise<string | null> => {
    return await this.ExcelSheetsConnector.createSession(email);
  }

  public getSheets = async (): Promise<string[] | null> => {
    return await this.ExcelSheetsConnector.getSheets();
  }

  public createWorksheet = async (sheetName) => {
    return await this.ExcelSheetsConnector.createWorksheet(sheetName);
  }

  public deleteWorkSheet = async (sheetName) => {
    return await this.ExcelSheetsConnector.deleteWorksheet(sheetName);
  }

  public getTableData = async (sheetName, tableName) => {
    return await this.ExcelSheetsConnector.getTableData(sheetName, tableName);
  }

  public createTable = async (sheetName, tableAddress, tableHasHeaders) => {
    return await this.ExcelSheetsConnector.createTable(
      sheetName, 
      tableAddress, 
      tableHasHeaders
    );
  }

  public deleteTable = async (sheetName, tableName) => {
    return await this.ExcelSheetsConnector.deleteTable(sheetName, tableName);
  }

  public addDataToTable = async (sheetName, tableName, file) => {
    return await this.ExcelSheetsConnector.addDataToTable(
      sheetName,
      tableName,
      file
    );
  }

  public deleteDataFromTable = async (sheetName, tableName, rowIds) => {
    return await this.ExcelSheetsConnector.deleteDataFromTable(
      sheetName,
      tableName,
      rowIds
    );
  }
}
