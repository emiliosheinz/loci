import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!process.env.PORT || !process.env.HOST) {
    throw new Error("PORT and HOST must be defined in environment variables");
  }

  await app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(
      `🚀 Server is running on http://${process.env.HOST}:${process.env.PORT}`,
    );
  });
}
bootstrap();
