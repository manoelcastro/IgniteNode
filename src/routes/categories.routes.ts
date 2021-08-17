import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/car/useCases/CreateCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/car/useCases/ImportCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/car/useCases/ListCategories/ListCategoriesController';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
