import { Component, OnInit } from '@angular/core';
import { Printer } from '../../models/printer';
import { PrinterService } from '../../services/printer.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.css'],
})
export class PrintersViewComponent implements OnInit {
  constructor(private printerService: PrinterService) {}

  ngOnInit() {
    this.printerService.getPrinters().subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    )
  }
}
