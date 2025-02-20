import { Request, Response } from 'express';

class HelloWordController {
  public helloWord(req: Request, res: Response) {
    return res.status(200).json({ message: 'Hello World1' });
  }
}

export const helloWordController = new HelloWordController();
