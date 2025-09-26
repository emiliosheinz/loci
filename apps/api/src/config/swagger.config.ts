import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const config = new DocumentBuilder()
  .setTitle("Loci API")
  .setVersion("1.0")
  .setLicense("MIT", "https://opensource.org/license/mit/")
  .setBasePath("api")
  .build();

export function setupSwagger(app: INestApplication): void {
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/docs", app, document);
}
