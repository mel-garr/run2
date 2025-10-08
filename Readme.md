Prisma most used methodes
| **Method**     | **Purpose / Description**                                                                          | **Example**                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `findUnique()` | Finds a single record that matches a **unique field** (like `id` or `email`).                      | `await prisma.user.findUnique({ where: { email: "alice@example.com" } })`                                                                                  |
| `findFirst()`  | Finds the **first** record matching a filter (useful when the field is not unique).                | `await prisma.user.findFirst({ where: { name: "Alice" } })`                                                                                                |
| `findMany()`   | Returns an **array of records** matching optional filters (or all if no filter).                   | `await prisma.user.findMany()`                                                                                                                             |
| `create()`     | Inserts a **new record** into the database.                                                        | `await prisma.user.create({ data: { name: "Bob", email: "bob@example.com" } })`                                                                            |
| `createMany()` | Inserts **multiple records at once** (faster bulk insert).                                         | `await prisma.user.createMany({ data: [{ name: "Tom" }, { name: "Anna" }] })`                                                                              |
| `update()`     | Updates an existing record (must match a unique field).                                            | `await prisma.user.update({ where: { id: 1 }, data: { name: "Alice Updated" } })`                                                                          |
| `updateMany()` | Updates **multiple** records matching a filter.                                                    | `await prisma.user.updateMany({ where: { role: "user" }, data: { active: false } })`                                                                       |
| `upsert()`     | Either **updates** if record exists or **creates** it if not — great for “insert or update” logic. | `await prisma.user.upsert({ where: { email: "alice@example.com" }, update: { name: "Alice V2" }, create: { name: "Alice", email: "alice@example.com" } })` |
| `delete()`     | Deletes a single record (by unique field).                                                         | `await prisma.user.delete({ where: { id: 1 } })`                                                                                                           |
| `deleteMany()` | Deletes **multiple** records matching a filter.                                                    | `await prisma.user.deleteMany({ where: { active: false } })`                                                                                               |
| `count()`      | Counts the number of records matching a filter.                                                    | `await prisma.user.count({ where: { role: "admin" } })`                                                                                                    |
| `aggregate()`  | Performs operations like **count**, **avg**, **sum**, **min**, **max** on a model.                 | `await prisma.user.aggregate({ _count: true, _avg: { age: true } })`                                                                                       |
| `groupBy()`    | Groups records by one or more fields (advanced analytics).                                         | `await prisma.user.groupBy({ by: ['role'], _count: true })`                                                                                                |

Common Prisma Field Modifiers & Options

| **Modifier / Attribute**     | **Example**                                               | **Meaning / Use Case**                                                     |
| ---------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| `@id`                        | `id Int @id @default(autoincrement())`                    | Marks this field as the **primary key**. Usually auto-incremented.         |
| `@default(value)`            | `createdAt DateTime @default(now())`                      | Sets a **default value** for new records.                                  |
| `@unique`                    | `email String @unique`                                    | Ensures the field value is **unique** in the table.                        |
| `@relation()`                | `user User @relation(fields: [userId], references: [id])` | Defines a **relationship** (foreign key) between models.                   |
| `@updatedAt`                 | `updatedAt DateTime @updatedAt`                           | Automatically updates this field’s value every time the record is updated. |
| `?`                          | `phone String?`                                           | Makes the field **optional** (can be `null`).                              |
| `[]`                         | `eves Eve[]`                                              | Represents a **list/array** or **one-to-many relationship**.               |
| `@map("column_name")`        | `email String @map("user_email")`                         | Maps the Prisma field to a **different DB column name**.                   |
| `@default(uuid())`           | `id String @id @default(uuid())`                          | Generates a **UUID** instead of an auto-increment number.                  |
| `@@unique([field1, field2])` | `@@unique([userId, eveId])`                               | Creates a **composite unique constraint** across multiple fields.          |


currently most work i do with express
| Code snippet                                                 | Description                         |
| ------------------------------------------------------------ | ----------------------------------- |
| `const express = require('express'); const app = express();` | Create Express app                  |
| `app.use(express.json());`                                   | Parse JSON request bodies           |
| `app.use('/api/auth', authRoutes);`                          | Mount a router on a path            |
| `app.listen(3000, () => console.log('Server running'));`     | Start server on port 3000           |
| `const router = express.Router();`                           | Create a router for routes          |
| `router.post('/signup', (req, res) => {});`                  | Define POST endpoint                |
| `router.get('/users', (req, res) => {});`                    | Define GET endpoint                 |
| `module.exports = router;`                                   | Export router for use in `index.js` |

