import { Router } from 'express';

import { CreateSpecificationController } from '../modules/car/useCases/CreateSpecifications/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/car/useCases/ListSpecifications/ListSpecificationsController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.get('/', listSpecificationsController.handle);
specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
