import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    title = 'Test';
    jsonText = '';

    constructor(private http: HttpClient) {}
    
    onBtnClick() {
        console.log('clicked');
        this.http.get('/api/student').subscribe(data => {
            this.jsonText = JSON.stringify(data);
        });
    }
}
