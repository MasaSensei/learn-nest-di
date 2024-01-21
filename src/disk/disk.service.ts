import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log(`Disk Membutuhkan Daya 20 Watt Untuk menampilkan Data`);
    this.powerService.supplyPower(20, 'Disk');
    return `data yang diambil dari disk`;
  }
}
