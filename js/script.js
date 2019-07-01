/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.getElementsByClassName('student-item');
//console.log(list);

const page = 10;




const showPage = (list, page_num) => {


   let start_index = (page_num * page) - page;
   let end_index = (page_num * page);


   for (let i = 0; i < list.length; i += 1) {

      if (i >= start_index && i < end_index) {

         list[i].style.display = 'block';

      } else {

         list[i].style.display = 'none';
      }

   }
}
showPage(list, 2);


const appendPageLinks = (list) => {


   let currentPage;                              //Tracks pages
   let getNumberOfPages = Math.ceil(list.length / page);
   let pageList;                                 //Display on current page//
   let div = document.createElement('div');      //Creation of new div//
   div.classList.add('pagination');             //Added pagination class//
   page.appenChild('div');                     //Appended to the class page in div?//
   $('div ul').apppend('<li> <a> </a> </li>');  /*Added ul to the pagination div to store pagination links.
                                                 Append will select all class names enclosed in the div element, in this casse
                                                 includes the Pagination Class! */


}

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
/*function showPage()



/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.