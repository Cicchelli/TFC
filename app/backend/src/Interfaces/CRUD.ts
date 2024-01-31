export interface CRUDModelCreator<T> {
  create(data: Partial<T>): Promise<T>,
}

export interface CRUDModelReader<T> {
  findAll(): Promise<T[]>,
  findById(id: number): Promise<T | null>,
}

export interface CRUDModelUpdater<T> {
  update(id: number, data: Partial<T>): Promise<T | null>,
}

export interface CRUDModelDeleter {
  delete(id: number): Promise<number>,
}

export interface CRUDModel<T>
  extends CRUDModelCreator<T>, CRUDModelReader<T>, CRUDModelUpdater<T>,
  CRUDModelDeleter { }
