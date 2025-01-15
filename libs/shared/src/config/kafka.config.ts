/**
 * Kafka Configuration File
 * 
 * This file contains the configuration settings for Kafka message broker integration.
 * It exports a configuration object used across microservices for Kafka connections.
 * 
 * Configuration includes:
 * - brokers: Array of Kafka broker addresses (from KAFKA_BROKERS env var)
 * - clientId: Identifier for the Kafka client (from KAFKA_CLIENT_ID env var) 
 * - groupId: Consumer group identifier (from KAFKA_GROUP_ID env var)
 * 
 * How to use:
 * Import this config when setting up Kafka client/consumer in microservices:
 * import { kafkaConfig } from '@app/shared/config/kafka.config';
 * 
 * Example usage in NestJS microservice:
 * ClientsModule.register([
 *   {
 *     name: 'AUTH_SERVICE',
 *     transport: Transport.KAFKA,
 *     options: kafkaConfig
 *   }
 * ])
 */


export const kafkaConfig = {
  brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
  clientId: process.env.KAFKA_CLIENT_ID || 'my-app',
  groupId: process.env.KAFKA_GROUP_ID || 'my-group',
}; 