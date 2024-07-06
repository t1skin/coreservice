import { 
  VisualizationConnector 
} from "../connectors/analyticservice/VisualizationConnector";

import {
  DataAnalysisConnector
} from "../connectors/analyticservice/DataAnalysisConnector";

import {
  ExcelSheetsConnector
} from "../connectors/excelservice/ExcelSheetsConnector";

import {
  DataFetchConnector
} from "../connectors/analyticservice/DataFetchConnector";

import {
  ExcelAuthConnector
} from "../connectors/excelservice/ExcelAuthConnector";

export class CoreService {
  private DataFetchConnector: DataFetchConnector;
  private ExcelAuthConnector: ExcelAuthConnector;
  private ExcelSheetsConnector: ExcelSheetsConnector;
  private DataAnalysisConnector: DataAnalysisConnector;
  private VisualizationConnector: VisualizationConnector;

  constructor() {
    this.DataFetchConnector = new DataFetchConnector();
    this.ExcelAuthConnector = new ExcelAuthConnector();
    this.ExcelSheetsConnector = new ExcelSheetsConnector();
    this.DataAnalysisConnector = new DataAnalysisConnector();
    this.VisualizationConnector = new VisualizationConnector();
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

  public fetchAndStoreData = async (sheetName, tableName, email) => {
    return await this.DataFetchConnector.fetchAndStoreData(
      sheetName,
      tableName,
      email
    );
  }

  public analyzeData = async (dataId) => {
    return await this.DataAnalysisConnector.analyzeData(dataId);
  }

  public getAnalysisById = async (analysisId) => {
    return await this.DataAnalysisConnector.getAnalysisById(analysisId);
  }

  public generateVisualisation = async (analysisId) => {
    return await this.VisualizationConnector.generateVisualisatoin(analysisId);
  }
}
