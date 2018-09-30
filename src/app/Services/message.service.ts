import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(selectedUsage:boolean,example:string,output:string) {
        this.subject.next({ usage: selectedUsage , input :example,op:output});
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}