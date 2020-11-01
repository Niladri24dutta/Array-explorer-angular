import { Injectable } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable()
export class NotificationService {

  constructor(private messageService: MessageService) {}
    
    sendSuccessMessage(summary:string,successMsg:string) {
        this.messageService.add({severity:'success', summary:summary, detail:successMsg});
    }
    
    sendErrorMessage(summary:string,errMsg:string) {
      this.messageService.add({severity:'error', summary:summary, detail:errMsg});
    }
    clear() {
        this.messageService.clear();
    }

}
