/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//////Created global const variable "list" and stored the list element 'student-item' wthin "list".
const list = document.getElementsByClassName('student-item');
//////Logged list out to console to ensure that list of li items/54 students were captured. 

/**** created a second global const variable "page" to store number of items to dsplay on
      each page.****/
const page = 10;

/**** Created - display a page function called "showPage" to hide all students in a list
      except for 10, which are to display on any page.
      
      The showPage() accepts 2 parameters (list, page_num)in which list is the list of 54
      students and page_num, representing the page number.  FMI Learned why fuctions are
      considered first class citizens in that a parameter by default is declared and
      initialized hence my second parameter page_num witin the showPage().****/
const showPage = (list, page_num) => {

   /**** Created 2 local variables: "start_index" which computes and stores the first index.
         the last index is computed and stored in "end_index" ****/
   let start_index = (page_num * page) - page;
   let end_index = (page_num * page);

   /**** The for loop within the showPage function provides dynamic functionality
         providing flexibilty to work with a list of any length.  The for loop 
         loops over the student list and if the condtion(s) witin the curly braces (is)are
         true for each student in the list, the student is displayed on the page/ "block". If
         the condtion is false, hence else the student is hidden and will not display on
         the page/ "none".   The list is an array of object as the counter index starts with
            zero****/
   for (let i = 0; i < list.length; i += 1) {

      if (i >= start_index && i < end_index) {

         list[i].style.display = 'block';

      } else {

         list[i].style.display = 'none';

      }

   }

}

//////Called showPage(list, 2); and passed two arguments (list, 2) to test the function.

/**** Created the const appendPageLinks() that creates and appends functional pagination links.
      appendPageLinks accepts one argument, the global variable "list"/ which is the student
      list.****/

const appendPageLinks = (list) => {
   /**** getNumberOfPages -  Calculates # of pages required for student list. used the
         Math libray, division, and the array.length property to store value in
         getNumberOfPages.****/
   let getNumberOfPages = Math.ceil(list.length / page);
   //////logged to console.log(getNumberOfPages); to test number of pages.

   //////Created new div element and declared/initialized as newDiv via the doc.createElement method.
   let newDiv = document.createElement('div');
   //////(newDiv) tag recieves a "pagination" class.
   //////console.log(newDiv); to determine if the pagination class was added.
   newDiv.classList.add('pagination');
   //////AppendedChild (newDiv) recieves a "page" class from parent via querySelector.
   document.querySelector(".page").appendChild(newDiv);
   /****Created new UL element and declared/initialized as newUl via the doc.createElement
        method. Added newUl to the "pagination"  newDiv to store links via appendChild.****/
   let newUl = document.createElement('UL');
   newDiv.appendChild(newUl);

   /**** for loop starts Pagaination to dynamically iterate all li elements (Student List)
         with corresponding number per page.adds li and a tags with the page number for
         each page. Created variables "li" and "a" via the createElement method
         a.textContext adds numbers to the buttons.****/
   for (let i = 1; i <= getNumberOfPages; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      /**** Stored pagination links (#) in a.href anchor tag with href attribute.
            a.href attribute locates the corresponding link ****/
      a.href = "#";
      a.textContent = i;
      //////console.log(a.textContent); to log page numbers to console for testing.

      /****If statement (when i iterates to 1 && 1===1) condition is executed only
           once for this condition to be true and once this condition is true,
           the 'active' classname is added initially to the first pagination link. *****/
      if (i === 1) {
         a.className = 'active';
         showPage(list, 1);
      }
      //////Appended "a" to "li" tags and appended "li" to "newUl" tags.
      newUl.appendChild(li);
      li.appendChild(a);
   }
   /****Add an event listener to each a tag, once link is clicked,
        will call the showPage function to display page****/
   newUl.addEventListener('click', (event) => {
      //////const linkClick holds the click event, the listener 
      const linkClick = event.target;
      //////pageNum targets the correct link "linkClick"
      let pageNum = event.target.textContent;
      /****Calls the showPage function and passes global variable "list" (student details)
           and local variable pageNum.****/
      showPage(list, pageNum);
      //////selects all a tags and stores in const links.
      const links = document.querySelectorAll('a');
      //////loops over paginated links to remove active class
      for (let p = 0; p < links.length; p++) {

         links[p].className = 'none';
      }
      //////adds the active class to the link recently clicked via linkClick
      linkClick.className = 'active';
   });

}
//////Calling the appendPageLinks()and passing the list variable as an argument.
appendPageLinks(list);









