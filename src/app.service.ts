import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  root (): string {
    return 'Hello World!'
  }

  debug (obj: any): void {
    console.dir(obj, { colors: true })
  }
}
