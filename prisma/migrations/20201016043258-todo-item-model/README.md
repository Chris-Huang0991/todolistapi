# Migration `20201016043258-todo-item-model`

This migration has been generated by Eric Do at 10/16/2020, 2:32:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."TodoItem" (
"id" text   NOT NULL ,
"content" text   NOT NULL ,
"isDone" boolean   NOT NULL DEFAULT false,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201016043258-todo-item-model
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,14 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model TodoItem {
+  id      String  @id @default(cuid())
+  content String
+  isDone  Boolean @default(false)
+}
```