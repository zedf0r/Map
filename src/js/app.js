export class ErrorRepository {
  constructor() {
    this.map = new Map([
      [101, "Ошибка чтения"],
      [102, "Ошибка записи"],
      [404, "Ошибка с сервера"],
    ]);
  }

  translate(code) {
    if (this.map.get(code)) {
      throw new Error(`Error with code ${code}: ${this.map.get(code)}`)
    } else {
      throw new Error('Unknown error')
    }
  }
}