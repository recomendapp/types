import type { Database as ExtendedDatabase } from './type.db.extended';

declare global {
  type Database = ExtendedDatabase;
}
