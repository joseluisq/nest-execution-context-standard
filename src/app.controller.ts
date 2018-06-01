import { Get, Controller } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor (private readonly appService: AppService) { }

  @Get()
  root (): string {
    return this.appService.root()
  }

  run (): void {
    // Printing a sample message
    this.appService.debug(this.appService.root())
  }
}
