import { Router } from 'express';

import { CreateSpecificationController } from '../modules/car/useCases/CreateSpecifications/CreateSpecificationController';
import { listSpecificationsController } from '../modules/car/useCases/ListSpecifications';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
