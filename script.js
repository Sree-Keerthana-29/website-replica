const slots = [
  { src: 'videos/amazon-video.mp4', logo:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', name:'Amazon', text:'Crack the Nxt Interview with Amazon Leaders' },
  { src: 'videos/uber-video.mp4', logo:'https://upload.wikimedia.org/wikipedia/commons/b/bf/Uber_logo_2018.png', name:'Uber', text:'Explore the Future with Uber Innovators' },
  { src: 'videos/mysys.mp4', logo:'https://upload.wikimedia.org/wikipedia/commons/4/4a/Skype_logo_%282014–2020%29.svg', name:'Msys', text:'Insights from Msys Tech Experts' },
  { src: 'videos/microsoft-video.mp4', logo:'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', name:'Microsoft', text:'Level Up with Microsoft Engineers' },
  { src: 'videos/slice-video.mp4', logo:'https://upload.wikimedia.org/wikipedia/commons/6/66/Slice_Logo.png', name:'Slice', text:'Inside Stories from Slice Builders' },
  { src: 'videos/superk-video.mp4', logo:'https://upload.wikimedia.org/wikipedia/commons/2/20/Superk_logo.png', name:'SuperK', text:'Learn with SuperK Leaders' }
];
let idx = 0;
const bg = document.getElementById('bg-video'),
      logo = document.getElementById('company-logo'),
      nm = document.getElementById('company-name'),
      txt = document.getElementById('company-text');

function load(idx){
  bg.src = slots[idx].src;
  logo.src = slots[idx].logo;
  nm.textContent = slots[idx].name;
  txt.textContent = slots[idx].text;
  bg.play();
}

load(idx);
bg.onended = ()=>{
  idx = (idx+1) % slots.length;
  load(idx);
};
bg.play();

/* ▶️ Scroll to form */
document.getElementById('claim-btn').onclick = ()=> {
  document.getElementById('access-form').scrollIntoView({behavior:'smooth'});
};

/* 🗂️ Speaker Cards + Filtering */
const cards = [
  { img:'https://via.placeholder.com/280x160',title:'Ace Amazon Interview', name:'Recruiter at Amazon', cat:'career' },
  { img:'https://via.placeholder.com/280x160', title:'Ace Amazon Interview', name:'Recruiter at Amazon', cat:'career' },
  { img:'https://via.placeholder.com/280x160', title:'CEO Tips', name:'CEO at Msys', cat:'productivity' }
];
let start=0, filter='all';
function render(){
  const wr = document.getElementById('card-wrapper');
  wr.innerHTML = '';
  const fl = filter === 'all' ? cards : cards.filter(c=>c.cat===filter);
  fl.slice(start,start+3).forEach(c=> {
    wr.innerHTML += 
      <div class="card">
        <img src="${c.img}"/>
        <h4>${c.title}</h4><p>${c.name}</p>
      </div>;
  });
}
function filterCat(c,btn){
  filter=c; start=0;
  document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  render();
}
function nextCard(){
  const fl = filter==='all' ? cards : cards.filter(c=>c.cat===filter);
  if(start+3 < fl.length){ start+=3; render(); }
}
function prevCard(){ if(start >=3){start-=3; render();}}
render();

/* ✔️ Form Submission */
document.getElementById('claimform').onsubmit = e=>{
  e.preventDefault();
  document.getElementById('thanks').style.display='block';
};  