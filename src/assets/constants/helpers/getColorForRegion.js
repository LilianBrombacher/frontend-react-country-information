function getColorForRegion(region) {
    // Hier kun je de logica toevoegen om de kleur voor elke regio te bepalen
    // Bijvoorbeeld, je kunt een switch statement gebruiken of een mapping object
    switch (region) {
        case 'Africa':
            return 'blue'; // Vervang dit met de daadwerkelijke kleur voor de regio
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'black'; // Standaardkleur als de regio niet wordt herkend
    }
}
export default getColorForRegion