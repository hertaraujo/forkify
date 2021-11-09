import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector(`.bookmarks__list`);
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it ;)`;
  _message = ``;


  addHandlerRender(handlerSubs) {
    window.addEventListener(`load`, handlerSubs);
  }
  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
  }
}

export default new BookmarksView();
{
  /* <div class="preview__user-generated">
  <svg>
    <use href="${icons}#icon-user"></use>
  </svg>
</div>; */
}
