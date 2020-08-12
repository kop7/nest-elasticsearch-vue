import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
    const configService = new ConfigService('.env');
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.setGlobalPrefix(configService.get('GLOBAL_PREFIX'));
    await app.listen(configService.get('NODE_PORT'));
}
bootstrap();
