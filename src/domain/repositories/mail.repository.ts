import { type MailEntity } from '../entity/mail.entity'

export abstract class MailRepository {
  abstract add: (title: string, body: string) => Promise<void>
  abstract get: (id: string) => Promise<MailEntity>
  abstract getAll: () => Promise<MailEntity[]>
  abstract update: (id: string, title: string, body: string) => Promise<void>
  abstract delete: (id: string) => Promise<void>
}
