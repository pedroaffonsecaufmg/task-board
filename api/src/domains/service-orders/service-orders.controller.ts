import { Request, Response } from 'express'
import { ServiceOrdersService } from './service-orders.service.js'

const serviceOrdersService = new ServiceOrdersService()

export class ServiceOrdersController {
  async getAll(req: Request, res: Response) {
    const ordens = await serviceOrdersService.getAll()
    return res.status(200).json(ordens)
  }

  async getById(req: Request, res: Response) {
    const ordem = await serviceOrdersService.getById(Number(req.params.id))
    return res.status(200).json(ordem)
  }

  async create(req: Request, res: Response) {
    const { clientId, device, issue, status } = req.body
    const ordem = await serviceOrdersService.create({ client_id: clientId, device, issue, status })
    return res.status(201).json(ordem)
  }

  async update(req: Request, res: Response) {
    const { device, issue, status } = req.body
    const ordem = await serviceOrdersService.update(Number(req.params.id), { device, issue, status })
    return res.status(200).json(ordem)
  }

  async delete(req: Request, res: Response) {
    await serviceOrdersService.delete(Number(req.params.id))
    return res.status(204).send()
  }
}