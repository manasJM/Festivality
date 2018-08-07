import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  notificationTitle: string;
  userMessage: string;
  constructor(private dialogRef: MatDialogRef<NotificationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userMessage = this.data.userMessageDisplayed;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
