export abstract class ScheduleEntity {
  id: string
  title: string
  body: string
  rangeDate: { start: Date, end: Date }

  constructor (id: string, title: string, body: string, rangeDate: { start: Date, end: Date }) {
    this.id = id
    this.title = title
    this.body = body
    this.rangeDate = rangeDate
  }
}
