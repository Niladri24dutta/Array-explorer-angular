import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class MessagesService {
    private subject = new Subject<any>();
    private resetSubject = new Subject<any>();

    sendMessage(selectedUsage:boolean,example:string,output:string) {
        this.subject.next({ usage: selectedUsage , input :example,op:output});
    }

    resetLocale(reset:string){
        this.resetSubject.next({reset : reset});
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getResetValue():Observable<any>{
        return this.resetSubject.asObservable();
    }

    clearResetValue(){
        this.resetSubject.next();
    }
}