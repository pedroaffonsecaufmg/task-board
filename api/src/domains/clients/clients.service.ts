import { prisma } from '../../config/prismaClient.js'
import { AppError } from '../../utils/AppError.js'

export class ClientsService {
  async getAll() {
    return prisma.cliente.findMany()
  }

  async getById(id: number) {
    const cliente = await prisma.cliente.findUnique({ where: { id } })
    if (!cliente) throw new AppError('Cliente não encontrado', 404)
    return cliente
  }

  async create(data: { name: string; phone: string; email: string }) {
    return prisma.cliente.create({ data })
  }

  async update(id: number, data: Partial<{ name: string; phone: string; email: string }>) {
    try {
      return await prisma.cliente.update({ where: { id }, data })
    } catch {
      throw new AppError('Cliente não encontrado', 404)
    }
  }

  async delete(id: number) {
    try {
      await prisma.cliente.delete({ where: { id } })
    } catch {
      throw new AppError('Cliente não encontrado', 404)
    }
  }
}