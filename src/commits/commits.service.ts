import { Injectable } from '@nestjs/common';
import { Commit, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CommitsService {
  constructor(private prisma: PrismaService) { }

  create(data: Prisma.CommitCreateInput): Promise<Commit> {
    return this.prisma.commit.create({
      data,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CommitWhereUniqueInput;
    where?: Prisma.CommitWhereInput;
    orderBy?: Prisma.CommitOrderByWithRelationInput;
  }): Promise<Commit[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.commit.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(commitWhereUniqueInput: Prisma.CommitWhereUniqueInput): Promise<Commit> {
    return this.prisma.commit.findUnique({
      where: commitWhereUniqueInput
    });
  }

  async update(params: {
    where: Prisma.CommitWhereUniqueInput;
    data: Prisma.CommitUpdateInput;
  }): Promise<Commit> {
    const { where, data } = params;
    return this.prisma.commit.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.CommitWhereUniqueInput): Promise<Commit> {
    return this.prisma.commit.delete({
      where,
    });
  }
}
