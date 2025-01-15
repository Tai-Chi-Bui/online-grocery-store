import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ApiAuthModule } from './api-auth.module';
import { kafkaConfig } from '@app/shared/config/kafka.config';
import { KafkaExceptionFilter } from '@app/shared/filters/kafka-exception.filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ApiAuthModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: kafkaConfig.brokers,
          clientId: kafkaConfig.clientId,
        },
        consumer: {
          groupId: kafkaConfig.groupId,
        },
      },
    },
  );
  
  app.useGlobalFilters(new KafkaExceptionFilter());
  await app.listen();
  console.log('Auth Microservice is listening');
}
bootstrap();