export const kafkaConfig = {
  brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
  clientId: process.env.KAFKA_CLIENT_ID || 'my-app',
  groupId: process.env.KAFKA_GROUP_ID || 'my-group',
}; 