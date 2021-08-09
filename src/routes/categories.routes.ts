import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/car/useCases/CreateCategory/CreateCategoryController';
import importCategoryController from '../modules/car/useCases/ImportCategory';
import listCategoryController from '../modules/car/useCases/ListCategories';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) =>
  listCategoryController().handle(request, response),
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoryController().handle(request, response),
);

export { categoriesRoutes };
