// const setClock = document.querySelector('.clock');

// function clock() {
//     const now = new Date();
//     let h = now.getHours().toLocaleString().padStart(2, '0');
//     const m = now.getMinutes().toLocaleString().padStart(2, '0');
//     const s = now.getSeconds().toLocaleString().padStart(2, '0');
//     h = h % 12;
//     h = h ? h : 12;
//     const ampm = h >= 12 ? 'Am' :'Pm'

//     let html = `
//         <span>${h}:</span>
//         <span>${m}:</span>
//         <span>${s}</span>
//         <span>${ampm}</span>

//     `;

//     setClock.innerHTML = html;

// }

// setInterval(clock, 1000);