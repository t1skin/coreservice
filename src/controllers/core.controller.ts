import { CoreService } from "../services/coreServcie";
import { Request, Response } from "express";

export class CoreController {
  private coreService: CoreService;

  constructor() {
    this.coreService = new CoreService();
  }

  public getAuthUrl = async (req: Request, res: Response): Promise<void> => {
    try {
      const authUrl = await this.coreService.getAuthUrl();
      return res.status(200).json(authUrl);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public getAuthToken = async (req: Request, res: Response) => {
    const code = req.query.code;
    try {
      const response = await this.coreService.getAuthToken(code);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public createSession = async (req: Request, res: Response) => {
    const email = req.query.email;
    try {
      const response = await this.coreService.createSession(email);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public getSheets = async (req: Request, res: Response) => {
    try {
      const sheets = await this.coreService.getSheets();
      return res.status(200).json(sheets);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  public createWorksheet = async (req: Request, res: Response) => {
    const sheetName = req.body.sheetName;
    try {
      const response = await this.coreService.createWorksheet(sheetName);
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  };

  public deleteWorksheet = async (req: Request, res: Response) => {
    const sheetName = req.params.sheetName;
    try {
      const response = await this.coreService.deleteWorkSheet(sheetName);
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  };

  public getTableData = async (req: Request, res: Response) => {
    const tableName = req.params.tableName;
    const sheetName = req.query.sheetName;
    try {
      const response = await this.coreService.getTableData(
        sheetName,
        tableName
      );
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  };

  public createTable = async (req: Request, res: Response) => {
    const { sheetName, tableAddress, tableHasHeaders } = req.body;
    try {
      const response = await this.coreService.createTable(
        sheetName,
        tableAddress,
        tableHasHeaders
      );
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  };

  public deleteTable = async (req: Request, res: Response) => {
    const tableName = req.params.tableName;
    const sheetName = req.query.sheetName;
    try {
      const response = await this.coreService.deleteTable(sheetName, tableName);
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  };

  public addDataToTable = async (req: Request, res: Response) => {
    const tableName = req.params.tableName;
    const sheetName = req.query.sheetName;
    const file = req.file;

    console.log(tableName, sheetName, file);

    try {
      const response = await this.coreService.addDataToTable(
        sheetName,
        tableName,
        file
      );
      return res.status(response.status).json(response.data);
    } catch (error) {
      console.log(error);
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  };

  public deleteDataFromTable = async (req: Request, res: Response) => {
    const tableName = req.params.tableName;
    const sheetName = req.query.sheetName;
    const rowIds = req.body.rowIds;
    try {
      const response = await this.coreService.deleteDataFromTable(
        sheetName,
        tableName,
        rowIds
      );
      return res.status(response.status).json(response.data);
    } catch (error) {
      return res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  }
}
