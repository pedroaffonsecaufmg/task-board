import { Request, Response } from 'express'
import { ClientsService } from './clients.service.js'

const clientsService = new ClientsService()

export class ClientsController {
  async getAll(req: Request, res: Response) {
    const clientes = await clientsService.getAll()
    return res.status(200).json(clientes)
  }

  async getById(req: Request, res: Response) {
    const cliente = await clientsService.getById(Number(req.params.id))
    return res.status(200).json(cliente)
  }

  async create(req: Request, res: Response) {
    const { name, phone, email } = req.body
    const cliente = await clientsService.create({ name, phone, email })
    return res.status(201).json(cliente)
  }

  async update(req: Request, res: Response) {
    const { name, phone, email } = req.body
    const cliente = await clientsService.update(Number(req.params.id), { name, phone, email })
    return res.status(200).json(cliente)
  }

  async delete(req: Request, res: Response) {
    await clientsService.delete(Number(req.params.id))
    return res.status(204).send()
  }
}