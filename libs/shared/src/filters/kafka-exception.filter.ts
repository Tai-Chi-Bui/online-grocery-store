/**
 * Kafka Exception Filter
 * 
 * This filter handles RPC exceptions thrown during Kafka message processing.
 * It catches exceptions in microservices using Kafka transport and properly
 * formats them before sending back to the client.
 * 
 * Key features:
 * - Catches RpcException instances
 * - Transforms exceptions into observable error streams
 * - Preserves original error message and details
 * 
 * How to use:
 * 1. Apply to controllers using @UseFilters():
 *    @UseFilters(KafkaExceptionFilter)
 *    export class MyController {}
 * 
 * 2. Or register globally in main.ts:
 *    app.useGlobalFilters(new KafkaExceptionFilter());
 * 
 * The filter ensures consistent error handling across Kafka-based 
 * microservice communication.
 */


import { Catch, RpcExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class KafkaExceptionFilter implements RpcExceptionFilter<RpcException> {
  catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const error = exception.getError();
    
    // Transform error to a standard format
    return throwError(() => ({
      status: 'error',
      message: typeof error === 'string' ? error : (error as {message?: string}).message || 'Unknown error',
      code: typeof error === 'string' ? 'UNKNOWN' : (error as {code?: string}).code || 'UNKNOWN',
      timestamp: new Date().toISOString()
    }));
  }
} 