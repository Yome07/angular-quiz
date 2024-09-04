import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  searchValue: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  emitSearchValue() {
    this.search.emit(this.searchValue);
  }

  resetSearch() {
    this.searchValue = '';
  }
}
