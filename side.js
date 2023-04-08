

const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".leftsidebar");

// JSDOC
btn_menu.addEventListener("click", function () {
  side_bar.classList.toggle("expand");
  // changebtn();
  side_bar.classList.contains("expand") ? btn_menu.classList.replace("bx-menu", "bx-menu-alt-right")
    : btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
});

// function changebtn() {
// }

window.addEventListener("resize", function () {
  console.log(window.innerWidth)
  if (this.window.innerWidth < 1020) {
    side_bar.classList.remove("expand");
  }

})

/** just for demo purposes
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 * 
 * this is a very special a7a
 */
class a7a {
  object 

}

//   window.addEventListener("resize", function() {
//     console.log(window.innerWidth)
//     if( this.window.innerWidth <= 400){
//       side_bar.classList.toggle("expand");
//     }
//   })