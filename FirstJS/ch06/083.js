
const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
console.log(bruce);
update.apply(bruce,[1955,'acter']);
console.log(bruce);

console.log(madeline);
update.apply(madeline, [1918,'writer']);
console.log(madeline);
