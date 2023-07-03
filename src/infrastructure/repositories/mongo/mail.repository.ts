import { type MailRepository } from '@/domain/repositories/mail.repository'
import { type MongoMailModel } from '@/infrastructure/models/mongo/mail.model'

export class MongoMailRepository implements MailRepository {
  public async add (title: string, body: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async get (id: string): Promise<MongoMailModel> {
    throw new Error('Method not implemented.')
  }

  public async getAll (): Promise<MongoMailModel[]> {
    throw new Error('Method not implemented.')
  }

  public async update (id: string, title: string, body: string): Promise<void> {
    throw new Error('Method not implemented.')
  }

  public async delete (id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
