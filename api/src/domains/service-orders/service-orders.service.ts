import { prisma } from '../../config/prismaClient.js'
import { AppError } from '../../utils/AppError.js'

export class ServiceOrdersService {
  async getAll() {
    return prisma.ordemServico.findMany()
  }

  async getById(id: number) {
    const ordem = await prisma.ordemServico.findUnique({ where: { id } })
    if (!ordem) throw new AppError('Ordem de serviço não encontrada', 404)
    return ordem
  }

  async create(data: { client_id: number; device: string; issue: string; status?: string }) {
    return prisma.ordemServico.create({ data })
  }

  async update(id: number, data: Partial<{ device: string; issue: string; status: string }>) {
    try {
      return await prisma.ordemServico.update({ where: { id }, data })
    } catch {
      throw new AppError('Ordem de serviço não encontrada', 404)
    }
  }

  async delete(id: number) {
    try {
      await prisma.ordemServico.delete({ where: { id } })
    } catch {
      throw new AppError('Ordem de serviço não encontrada', 404)
    }
  }
}