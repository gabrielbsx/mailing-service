export abstract class MailEntity {
  id: string
  title: string
  body: string

  constructor (id: string, title: string, body: string) {
    this.id = id
    this.title = title
    this.body = body
  }
}
