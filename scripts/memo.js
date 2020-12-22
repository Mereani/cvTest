$(document).ready(function(){
    $('section.section1').hide();
    $('section.section2').hide();
    $('section.section3').hide();

    $('li').on('click', function(){
        const myClass = this.className;
        if($('section').hasClass(myClass)) {
            $('section.' + myClass).show();
            $('section').not('.' + myClass).hide();
        }
    });
});



// <div id='menu'>
// <ul>
// <li class='section1'>Section1</li>
// <li class='section2'>Section2</li>
// <li class='section3'>Section3</li>
// </ul>
// </div>
// <div id='container'>
// <section class='section1'>
//   <header>
//     <h3>
//     Section1
//     </h3>
//   </header>
//   <main>
//     <p>
//     Lorem1
//     </p>
//   </main>
// </section>
// <section class='section2'>
//   <header>
//     <h3>
//     Section2
//     </h3>
//   </header>
//   <main>
//     <p>
//     Lorem2
//     </p>
//   </main>
// </section>
// <section class='section3'>
//   <header>
//     <h3>
//     Section3
//     </h3>
//   </header>
//   <main>
//     <p>
//     Lorem3
//     </p>
//   </main>
// </section>
// </div>