import { ConfigService, FILE_SYSTEM_MACOS_MUTAGEN } from "../services/ConfigService";
import { SystemService } from "../services/SystemService";

export class ServicesBuildCommand {
    constructor(private configService: ConfigService, private systemService: SystemService) {
    }

    invoke(): void {
        if (this.configService.fileSystem() === FILE_SYSTEM_MACOS_MUTAGEN) {
            this.systemService.exec('mutagen-compose pull')
            this.systemService.exec('mutagen-compose build')
        } else {
            this.systemService.exec('docker-compose pull')
            this.systemService.exec('docker-compose build')

        }
    }
}
