import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 

  Devices : any = [];
  DeviceDetail : any = [];

  query: string = '';
  searchFilter: any = '';

  constructor( private dataService: DataService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): any {
    this.actRoute.params.subscribe(res => {
      this.dataService.getData(res['id']).subscribe((data: any) => {
        this.DeviceDetail = data;
      });
      this.dataService.getAll().subscribe((data: any) => {
        this.Devices = data.filter((es:any)=> es.deviceId != res['id']);
      });
    })
    
  }

}
