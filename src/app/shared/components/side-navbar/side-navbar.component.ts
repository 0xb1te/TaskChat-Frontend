import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import {
  Component,
  computed,
  Input,
  OnInit,
  output,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { Message } from '../../../features/messages/pages/message-chat/message-chat.component';
import { HttpService } from '../../../core/services/http.service';
import { ApiPaths } from '../../../core/constants/api-paths';
import { Router, RouterModule } from '@angular/router';
import { MessagesRoutes } from '../../../features/messages/messages.routes';

export type Category = {
  name: string;
  messages: Message[];
  totalMessages: number;
  id: number;
};

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  public categoryList: WritableSignal<Category[]> = signal([]);
  public filteredCategories: Signal<Category[]> = computed(() => {
    let filteredList = this.categoryList().sort((n1, n2) => n1.id - n2.id);
    return filteredList;
  });
  public selectedCategory = output<Category>();
  public createdCategory = output<Category>();
  @Input() public set sentMessage(message: Message | undefined) {
    if (!message) {
      return;
    }

    this.categoryList().map((el) => {
      if (message.category.id == el.id) {
        el.totalMessages++;
      }

      return el;
    });
  }
  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    // Retrieves the total of Categories
    this.httpService.get(ApiPaths.CategoryController).subscribe({
      next: (response) => this.categoryList.set(response as Category[]),
      error: (error) => console.error(error),
    });
  }

  onSubmit() {
    Swal.fire({
      title: 'Create a new Category',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Create',
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          this.httpService
            .post(ApiPaths.CategoryController, {
              name: login,
            })
            .subscribe({
              next: (response) => {
                const newCategory = response as Category;
                this.categoryList().push(newCategory);
                this.createdCategory.emit(newCategory);
                return response;
              },
              error: (error) => console.error(error),
            });
        } catch (error) {
          Swal.showValidationMessage(`
          Request failed: ${error}
        `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Category Succesfully Created!`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }

  public updatedCategory(category: Category) {
    this.selectedCategory.emit(category);
  }
}
