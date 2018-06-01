import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

declare const module: any

async function bootstrap () {
  await NestFactory.createApplicationContext(AppModule)

  if (module.hot) {
    module.hot.accept()
  }
}

// tslint:disable-next-line
bootstrap()
