import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("App")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "Hello",
    type: String,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
