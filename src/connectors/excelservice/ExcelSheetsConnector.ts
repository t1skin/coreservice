import FormData from "form-data";
import axios from "axios";

export class ExcelSheetsConnector {
  private url: string;

  constructor() {
    this.url = "http://localhost:8001/excel_sheets";
  }

  public createSession = async (email): Promise<string | null> => {
    try {
      const response = await axios.post(`${this.url}/create_session`, null, {
        params: { email },
      });
      return response.data;
    } catch (error) {
      console.log("Error creating session:", error);
      return null;
    }
  };

  public getSheets = async (): Promise<string[] | null> => {
    try {
      const response = await axios.get(`${this.url}/`);
      return response.data;
    } catch (error) {
      console.log("Error validating session:", error);
      return null;
    }
  };

  public createWorksheet = async (sheetName) => {
    return await axios.post(`${this.url}/`, { sheetName });
  };

  public deleteWorksheet = async (sheetName) => {
    return await axios.delete(`${this.url}/${sheetName}`);
  };

  public getTableData = async (sheetName, tableName) => {
    return await axios.get(`${this.url}/table/${tableName}`, {
      params: { sheetName }
    });
  }

  public createTable = async (sheetName, tableAddress, tableHasHeaders) => {
    return await axios.post(`${this.url}/table`, {
      sheetName,
      tableAddress,
      tableHasHeaders,
    });
  };

  public deleteTable = async (sheetName, tableName) => {
    return await axios.delete(`${this.url}/table/${tableName}`, {
      params: { sheetName }
    });
  }

  public addDataToTable = async (sheetName, tableName, file) => {
    const formData = new FormData();
    formData.append('file', file.buffer, file.originalname);

    return await axios.post(
      `${this.url}/table/${tableName}?sheetName=${sheetName}`, formData,
      {
        headers: { "Content-Type": `multipart/form-data` }
      }
    );
  };

  public deleteDataFromTable = async (sheetName, tableName, rowIds) => {
    return await axios.delete(`${this.url}/table/${tableName}/rows`, {
      params: { sheetName },
      data: { rowIds }
    });
  }
}
