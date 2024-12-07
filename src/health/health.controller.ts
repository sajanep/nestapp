import { Controller, Get, Logger } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    private logger = new Logger("HealthCheck");
    constructor(
        private health: HealthCheckService,
        private http: HttpHealthIndicator
    ) { }

    @Get()
    @HealthCheck()
    check() {
        // this.logger.log('Entering health check');
        return this.health.check([
            () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ]);
    }
}
