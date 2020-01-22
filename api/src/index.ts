import express from 'express';
import { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello World from happy-day API',
  });
});

app.listen(PORT, () =>
  console.log(`api server listening on http://localhost:${PORT}`),
);

export default app;
