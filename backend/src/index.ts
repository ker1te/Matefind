import {$log} from "@tsed/common";
import {PlatformExpress } from "@tsed/platform-express";
import {Server, sequelize} from "./Server";

async function bootstrap() {
  try {
    $log.debug("Start server...");
    const platform = await PlatformExpress.bootstrap(Server);
    await sequelize.authenticate();
    await platform.listen();
    $log.debug("Server initialized");
  } catch (er) {
    $log.error(er);
  }
}

bootstrap();
