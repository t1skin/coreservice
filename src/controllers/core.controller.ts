import { CoreService } from '../entities/coreServcie';
import { Request, Response } from 'express';

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
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public getAuthToken = async (req: Request, res: Response) => {
    try {
      const response = await this.coreService.getAuthToken();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
