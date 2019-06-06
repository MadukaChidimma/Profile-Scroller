const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Abuja',
        image: 'https://randomuser.me/api/portraits/men/82.jpg' 
    },
    {
        name: 'Sandra Adams',
        age: 23,
        gender: 'female',
        lookingfor: 'male',
        location: 'Uyo',
        image: 'https://randomuser.me/api/portraits/women/21.jpg' 
    },
    {
        name: 'Mike Ike',
        age: 52,
        gender: 'male',
        lookingfor: 'female',
        location: 'Edo',
        image: 'https://randomuser.me/api/portraits/men/38.jpg' 
    },
];

const profiles = profileIterator(data);

// call first profile
nextProfile(); 

// Next event
document. getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">
    `;
    }else{
        window.location.reload();
    }
}

// Profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true} 
        }
    };
};