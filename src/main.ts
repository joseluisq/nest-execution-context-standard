import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppController } from './app.controller'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  const appCtrl = app.get(AppController)

  appCtrl.run()
}

// tslint:disable-next-line
bootstrap()
