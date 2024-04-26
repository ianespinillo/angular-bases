import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html'
})
export class ListComponent {
  @Output() public IdToDelete:EventEmitter<string>= new EventEmitter();
  @Input() public characterList: Character[] = [{name: 'Trunks', power: 10}];

  onDeleteCharacter({id}:Character): void {
    if (!id) return;
    this.IdToDelete.emit(id);
  }
}
