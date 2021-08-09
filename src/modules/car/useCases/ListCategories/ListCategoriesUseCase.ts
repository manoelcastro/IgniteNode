import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/CategoriesRepositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.all();
  }
}

export { ListCategoriesUseCase };
