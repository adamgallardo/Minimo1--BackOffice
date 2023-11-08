import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ValorationService } from 'src/app/services/valoration.service';
import { IValoration } from 'src/app/models/valoration';

@Component({
  selector: 'app-user-detail',
  templateUrl: './valoration-detail.component.html',
  styleUrls: ['./valoration-detail.component.css']
})
export class ValorationDetailComponent implements OnInit {
  @Input() valoration?: IValoration;

  constructor(
    private route: ActivatedRoute,
    private valorationService: ValorationService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getValoration();
  }

  getValoration(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.valorationService.getValoration(id)
      .subscribe(valoration => this.valoration = valoration);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.valoration) {
      const id = String(this.route.snapshot.paramMap.get('id'));
      const valorationTO = {
        name: this.valoration.name,
        mark: this.valoration.mark,
        participation: this.valoration.participation
      };
      console.log(valorationTO);
      this.valorationService.updateValoration(id, valorationTO)
        .subscribe(() => this.goBack());

    }
  }
}