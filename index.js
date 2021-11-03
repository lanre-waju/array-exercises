/*
1.  SOFTWARE ENGINEERING STUDENTS
* Programming Quiz: Software Engineering Students
*/

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `softwareEngineeringStudents`
 * - The variable `softwareEngineeringStudents` should be an array containing the values of 10 students from your class
 * - Your code should print `softwareEngineeringStudents` to the console
 *
 */

let softwareEngineeringStudents = [
    "Lanre",
    "Kingsley",
    "Stephanie",
    "Edu",
    "Apollos",
    "Pere-ebi",
    "Stephen",
    "Oreos",
    "Adewole",
    "Dara",
];

console.log(softwareEngineeringStudents);

/*
2.  BUILDING THE CREW
* Programming Quiz: Building the Crew
*/
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - The variable `crew` should be an array containing the Serenity\'s crew
 * - Your code should print `crew` to the console as an array. Do not iterate over the elements.
 *
 */

let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew);

/*
3.  THE PRICE IS RIGHT
* Programming Quiz: The Price is Right
*/

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements.
 */

const prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

prices[0] = 17.0;
prices[2] = 18.0;
prices[6] = 19.0;

console.log(prices);

/*
4.  COLORS OF THE RAINBOW
* Programming Quiz: Colors of the Rainbow
*
* Use only the splice() method to modify the rainbow variable:
*  - remove "Blackberry"
*  - add "Yellow" and "Green"
*  - add "Purple"
*/

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2, 1);
rainbow.splice(2, 0, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);

/*
5.  QUIDDITCH CUP
* Programming Quiz: Quidditch Cup
*/
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false.
 */

const team = [
    "Oliver Wood",
    "Angelina Johnson",
    "Katie Bell",
    "Alicia Spinnet",
    "George Weasley",
    "Fred Weasley",
    "Harry Potter",
    "Lanre Fagbeyiro",
];

function hasEnoughPlayers(team) {
    if (team.length >= 7) {
        return true;
    } else {
        return false;
    }
}

console.log(hasEnoughPlayers(team));

/*
6. JOINING THE CREW
* Programming Quiz: Joining the Crew
*/
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */

let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];

let doctor = "Simon";
let sister = "River";
let shepherd = "Book";

crew.push(doctor, sister, shepherd);
console.log(crew);