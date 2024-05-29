import { Body, Controller, Delete, Param, Post, ValidationPipe } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dtos/chat.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) { }
  // create
  @Post()
  async create(
    //le décorateur fait du paramètre le req.body
    @Body() body: CreateChatDto
  ) {
    //recuperation du body
    //verification du dto

    // appel de la fonction du service
    return await this.chatService.create(body)
  }

  @Delete(":id")
  async remove(
    //param dynamique dans l'url
    @Param("id") id: number,
    @Param() param: any
  ) {
    console.log("🚀 ~ ChatController ~ param:", param)
    console.log("🚀 ~ ChatController ~ id:", id)
    await this.chatService.remove(id)
    return { message: `le chat id ${id} a été supprimé` }
  }



  //abonné au sujet test: écoute les abonnements de nats
  @MessagePattern('test')
  // test(@Payload("message2") data: any) {
  test(@Payload() data: any) {
    console.log("🚀 ~ ChatController ~ test ~ data:", data)
    console.log("test")
    return { ...data, winner: "test" }
  }

  // //la fonction au dessus est "écrasée"
  // @MessagePattern('test')
  // testReceive() {
  //   console.log("testReceive")
  //   // return { message: "retour" }
  // }
}
