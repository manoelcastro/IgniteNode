import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/car/useCases/CreateCategory/CreateCategoryController';
import importCategoryController from '../modules/car/useCases/ImportCategory';
import { ListCategoriesController } from '../modules/car/useCases/ListCategories/ListCategoriesController';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  importCategoryController().handle(request, response),
);

export { categoriesRoutes };
