import { type MailEntity } from '@/domain/entity/mail.entity'

export class MongoMailModel implements MailEntity {
  public id: string
  public title: string
  public body: string

  constructor (id: string, title: string, body: string) {
    this.id = id
    this.title = title
    this.body = body
  }
}
