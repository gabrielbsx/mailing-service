export abstract class ScheduleRepository {
  abstract add: (title: string, body: string, rangeDate: { start: Date, end: Date }) => Promise<void>
  abstract get: (id: string) => Promise<void>
  abstract getAll: () => Promise<void>
  abstract update: (id: string, title: string, body: string, rangeDate: { start: Date, end: Date }) => Promise<void>
  abstract delete: (id: string) => Promise<void>
}
