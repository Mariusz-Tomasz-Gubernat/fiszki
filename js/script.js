{
  const columns = document.querySelectorAll('div.column'),
    paragraphs = document.querySelectorAll('div.wrapper-group p'),
    titleEvents = document.querySelectorAll('div.wrapper-group .event'),
    subnavigationNumbers = document.querySelectorAll('.subNavigation ul li p'),
    groupColumns = document.querySelectorAll('div.wrapper-group'),
    bulbs = document.querySelectorAll('.fa-lightbulb'),
    modals= document.querySelectorAll('.event-modal'),
    closeModals = document.querySelectorAll('.close-modal'),
    firstEventsFleshCards= document.querySelector('.select-first-evented'),
    firstDatsFleshCards =document.querySelector('.select-first-dats'),
    activeFirstEvents= 'select-first-evented select-flashcards active',
    activeFirstDats='select-first-dats select-flashcards active';
        
/*********************************************  SHOW MODAL  *****************************************************/

const showModal = function () {
  
  for(let bulb of bulbs){
  
    document.querySelector('.fa-lightbulb');
  
    const bulbId = bulb.getAttribute('id').replace('bulb','');
  
    bulb.addEventListener('click',function(){ 
  
      for(let modal of modals) {
        document.querySelector('.event-modal');
        const modalId = modal.getAttribute('id').replace('modal','');
  
        if(bulbId === modalId) {
          modal.classList.add('active');
        }
        
        for(let closeModal of closeModals) {
          document.querySelector('.close-modal');
         
          closeModal.addEventListener('click',function(){
         
            modal.classList.remove('active')
         
          });
        }
      }
    });
  }
};

/********************************************* SELECT GROUP FLASHCARDS  *****************************************/

const selectGroupFlashcards= function(){
  for(const subnavigationNumber of subnavigationNumbers){

    document.querySelectorAll('.subNavigation ul li p');
  
    subnavigationNumber.addEventListener('click',function(){
  
      const clickedElement = this;
      const subnavigationNumberID = clickedElement.getAttribute('id').replace('#','');
  
      for(const groupColumn of groupColumns) {
        document.querySelector('div.wrapper-group');
  
        const groupColumnID = groupColumn.getAttribute('id');
  
        if(subnavigationNumberID == groupColumnID){groupColumn.classList.add('group-active')}
        else{groupColumn.classList.remove('group-active')}          
      }
    });
  }
}

/*********************************************  FLASHCARDS  ******************************************************/

const FlashCards = function () {

    firstEventsFleshCards.addEventListener('click',function(){
      
      firstDatsFleshCards.classList.remove('active');
      firstEventsFleshCards.classList.add('active');
      
      for(let titleEvent of titleEvents){
        titleEvent.classList.remove('none');
      }
      
      for(let paragraph of paragraphs){
            paragraph.classList.remove('active');
          }
    });

    firstDatsFleshCards.addEventListener('click',function(){
    
      firstDatsFleshCards.classList.add('active');
      firstEventsFleshCards.classList.remove('active');
    
      for(let titleEvent of titleEvents){
        titleEvent.classList.add('none');
      }
    
      for(let paragraph of paragraphs){
        paragraph.classList.add('active');
      }
    });

    for (const column of columns) {
      document.querySelector('div.column');

      column.addEventListener('click', function () {

        const clickedElement = this;
        const columnId = clickedElement.getAttribute('id');
        
        if(firstEventsFleshCards.className === activeFirstEvents) {
          for (const paragraph of paragraphs) {
            document.querySelector('div.column p');
          
            const paragraphId = paragraph.getAttribute('id').replace('#', '');

            if (columnId == paragraphId) { paragraph.classList.toggle('active'); }
          
            else { paragraph.classList.remove('active'); }
          
          }
        }  
        
        if(firstDatsFleshCards.className === activeFirstDats) {
          for (const titleEvent of titleEvents) {
            document.querySelector('div.column .event');
            
            const titleId = titleEvent.getAttribute('id').replace('event', '');

            if (columnId == titleId) { titleEvent.classList.toggle('none'); }
          
            else { titleEvent.classList.add('none'); }
          
          }
        }       
    });
  }
};

/*************************************************  NAVIGATION-SLIDER  ***********************************************************/

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.getElementsByClassName("mySlides");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex-1].style.display = "flex";
}


initFunctions = [
  selectGroupFlashcards(),
  FlashCards(),
  showModal(),
]
}
