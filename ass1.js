const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const eventList = document.getElementById("eventList");

const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");
const clearBtn = document.getElementById("clearBtn");
const addSampleBtn = document.getElementById("addSampleBtn");


// event creation
eventForm.addEventListener("submit",(event)=>{
  
  event.preventDefault();
  const eventData ={
    eventTitle: eventData.value,
    eventData: eventData.value,
    eventCategory: eventCategory.value,
    eventDescription: eventDescription.value
  }
  createEventCard(eventData);
  

})


eventForm.addEventListener("submit", event=>{
    event.preventDefault();
})
const sampleEvent = [
    {
        title: "web dev",
        date: "4-06-2026",
        category: "workshop",
        description: "used ius jkdshf"

    },
    {
        title: "web dev2",
        date: "4-06-2026",
        category: "conference",
        description: "bdkfjhafdk hfdlkjghl"
    }

]

// function to create event card    
function createEventCard(eventData){
    const card = document.createElement("div");
    card.innerHTML= `
    <button class = "delete-btn"> X </button>
    <h3>${eventData.eventTitle}</h3>
    <div>${eventData.date} </div>
    <span>${eventData.category}</span>
    <p>${eventData.eventDescription}</p>`
    return card;
  
}


function addEvent(eventData){
const emptyState = document.querySelector(".empty-state");
emptyState.remove();
if (emptyState)
emptyState.remove();

eventContainer.appendChild(createEventCard(eventData));
  if (!title || !date) {
        alert("Please enter title and date!");
        return;
    }
}



// clearAllBtn.addEventListener("click",( )=>{
//   eventContainer.innerHTML='  <div class="empty-state">No events yet. Add Your first event!</div>'
// })

// event delegation for delete button
// const card = Event.target.closest("onClick", function (event) {
    const card = Event.target.closest('.event-card');//event-card
    if (!card) 
        return;
    if (event.target.classList.contains("delete-btn")){
        card.remove();
        checkEmptyState();
    }

    //highlight button
    if(Event.target.classList.contains("highlight-btn")){
        card.classList.toggle("highlighted");
    }
});



eventContainer.addEventListener("click", (event)=>{
  //closer use to target the closest child element of the targeted element
  const card = event.target.closest('.event-card');//event-card
  console.log(card,"inside line 73");

  if(event.target.classList.contains("delete-btn")){
    card.remove()
  }

  if(!eventContainer.querySelector(".event-card")){
    eventContainer.innerHTML=` <div
    class="empty-state">No event yet. Add your first event!</div>`
  }

})





document.getElementById("btn").addEventListener("click",()=>{
       // create h2 tag
    const subHead = document.createElement("h2").textContent="New Sub heading"
    // create image 
    const image=document.createElement("img")

    image.setAttribute("src","https://krmangalam.edu.in/_next/image?url=%2Fkrmuniversity.webp&w=1200&q=75")

    image.setAttribute("alt","K.R Mangalam");

    // append both h2 and image inside content div
    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
})

function addEvent() {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

  

    const list = document.getElementById('eventList');

    // Naya list item (li) create karna
    const li = document.createElement('li');
    li.className = 'event-item';

    // Exactly photo wala structure
    li.innerHTML = 

    list.appendChild(li);

    // Form khali karne ke liye
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}