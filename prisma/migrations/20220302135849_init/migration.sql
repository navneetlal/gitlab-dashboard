-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT,
    "web_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "path_with_namespace" TEXT NOT NULL,
    "description" TEXT,
    "web_url" TEXT NOT NULL,
    "group_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "last_activity_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commit" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "committer_name" TEXT NOT NULL,
    "committer_email" TEXT NOT NULL,
    "committed_date" TIMESTAMP(3) NOT NULL,
    "stats_addition" INTEGER,
    "stats_deletion" INTEGER,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "Commit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_id_key" ON "Group"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Commit_id_key" ON "Commit"("id");

-- CreateIndex
CREATE INDEX "Commit_committer_email_idx" ON "Commit"("committer_email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commit" ADD CONSTRAINT "Commit_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
