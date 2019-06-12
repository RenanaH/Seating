import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.sass']
})
export class NewRoomComponent implements OnInit {
  profileForm = new FormGroup({
    roomName: new FormControl('', Validators.required),
    numberOfRows: new FormControl(''),
    average: new FormControl('', Validators.required),
  });


  constructor() { }

  ngOnInit() {
  }

}
