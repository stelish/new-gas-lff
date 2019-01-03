import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'gs-dd-general',
  templateUrl: 'gs-dd-general.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GsDDGeneralComponent {
  @Input() selectedItem: any;
  @Input() showDD: boolean = false;
  @Input() title: any;
  // requires name & value
  @Input() items: any; // Array<{name: string, value: any}>
  @Output() itemSelectedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private ref:ChangeDetectorRef) {

  }

  ngOnChanges(changes:SimpleChanges): void {
    this.ref.markForCheck();
  }

  itemSelected(item) {
    this.selectedItem = item;
    this.itemSelectedEvent.emit(item);
    // close dropdown
    this.showDD = false;
  }

}
