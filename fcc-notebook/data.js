function Certificate(name, sections) {
  this.name = name;
  this.sections = sections;
}

const cert1 = new Certificate(
  'Responsive Web Design',
  ['Basic HTML & CSS',
   'Basic CSS',
   'Applied Visual Design',
   'Applied Accessibility',
   'Responsive Web Design Principles',
   'CSS Flexbox',
   'CSS Grid',
   'Projects']
);

const cert2 = new Certificate(
  'Responsive Web Design',
  ['Basic JavaScript',
   'ES6',
   'Regular Expressions',
   'Debugging',
   'Basic Data Structures',
   'Basic Algorithm Scripting',
   'Object Oriented Programming',
   'Functional Programming',
   'Intermediate Algorithm Scripting',
   'Projects']
);

function Language(name, tags) {
  this.name = name;
  this.tags = tags;
}

const html = new Language('HTML');
const css = new Language('CSS');
const js = new Language('JavaScript');

function Concept(concept, description, language, certificate, section){
  this.concept = concept;
  this.description = description;
  this.Language = language;
  this.certificate = certificate;
  this.section = section;
}

let data = [{"concept":"string.length","description":"returns the array's last filled index + 1"},{"concept":"array.push(element)","description":"appends element to the end of the array"},{"concept":"array.pop()","description":"removes last element of the array and returns it"},{"concept":"array.unshift(element)","description":"appends element to the start of the array"},{"concept":"array.shift()","description":"removes first element of the array and returns it"},{"concept":"console.log(value)","description":"prints value in the console"},{"concept":"typeof(value)","description":"returns the data type of the given value"}];
