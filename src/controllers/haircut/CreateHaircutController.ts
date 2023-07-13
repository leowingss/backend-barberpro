import { Request, Response } from 'express';
import { CreateHaircutService } from '../../services/haircut/CreateHaircutService';


class CreateHaircutController {
    async handle(req: Request, res: Response) {

        const { name, price } = req.body;

        const user_id = req.user_id;

        const createHaircutSevice = new CreateHaircutService();

        const haircut = await createHaircutSevice.execute({
            user_id,
            name,
            price
        });

        return res.json(haircut);

    }
}

export { CreateHaircutController };