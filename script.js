// Family Tree App 

function initNodeCard() { 
 if (document.getElementById('node-card-overlay')) return; 

 // Full-screen image lightbox 
 const lightbox = document.createElement('div'); 
 lightbox.id = 'img-lightbox'; 
 lightbox.addEventListener('click', () => lightbox.classList.remove('visible')); 
 const lightboxImg = document.createElement('img'); 
 lightboxImg.id = 'img-lightbox-img'; 
 lightboxImg.addEventListener('click', e => e.stopPropagation()); 
 lightbox.appendChild(lightboxImg); 
 document.body.appendChild(lightbox); 

 const overlay = document.createElement('div'); 
 overlay.id = 'node-card-overlay'; 
 overlay.addEventListener('click', hideNodeCard); 

 const card = document.createElement('div'); 
 card.id = 'node-info-card'; 
 card.addEventListener('click', e => e.stopPropagation()); 

 const closeBtn = document.createElement('button'); 
 closeBtn.id = 'node-card-close'; 
 closeBtn.textContent = '×'; 
 closeBtn.addEventListener('click', hideNodeCard); 

 const img = document.createElement('img'); 
 img.id = 'node-card-img'; 
 img.alt = ''; 
 img.title = 'Click to enlarge'; 
 img.style.cursor = 'zoom-in'; 
 img.addEventListener('click', () => { 
 const lb = document.getElementById('img-lightbox'); 
 const lbImg = document.getElementById('img-lightbox-img'); 
 lbImg.src = img.src; 
 lbImg.alt = img.alt; 
 lb.classList.add('visible'); 
 }); 

 const body = document.createElement('div'); 
 body.id = 'node-card-body'; 

 card.appendChild(closeBtn); 
 card.appendChild(img); 
 card.appendChild(body); 
 overlay.appendChild(card); 
 document.body.appendChild(overlay); 
} 

function calcAge(dob) { 
 if (!dob) return null; 
 const s = String(dob).trim(); 
 const today = new Date(); 
 if (/^\d{4}$/.test(s)) { 
 return today.getFullYear() - parseInt(s, 10); 
 } 
 const parts = s.split('/'); 
 if (parts.length === 3) { 
 const [d, m, y] = parts.map(Number); 
 const birth = new Date(y, m - 1, d); 
 let age = today.getFullYear() - birth.getFullYear(); 
 const monthDiff = today.getMonth() - birth.getMonth(); 
 if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--; 
 return age; 
 } 
 return null; 
} 

function formatGender(gender) { 
 if (!gender) return '<span style="color:#6b7280;font-weight:600;">N/A</span>'; 
 const isXY = gender.toLowerCase().includes('y'); 
 return isXY 
 ? '<span style="color:#2563eb;font-weight:700;">XY</span>' 
 : '<span style="color:#db2777;font-weight:700;">XX</span>'; 
} 

function formatDob(dob) { 
 const age = calcAge(dob); 
 const dobText = dob ? String(dob).trim() : null; 
 const agePart = age !== null 
 ? `<span style="color:#111827;font-weight:700;font-size:15px;">${age}</span>` 
 : '<span style="color:#6b7280;font-weight:600;">N/A</span>'; 
 const dobPart = dobText 
 ? `<span style="color:#9ca3af;font-size:11px;margin-left:5px;">(${dobText})</span>` 
 : ''; 
 return agePart + dobPart; 
} 

function showNodeCard(nodeData) { 
 initNodeCard();
const overlay = document.getElementById('node-card-overlay'); 
 const img = document.getElementById('node-card-img'); 
 const body = document.getElementById('node-card-body'); 

 img.src = nodeData.img || 'img/default-user.svg'; 
 img.alt = nodeData.name; 

 const skip = new Set(['child', 'flag', 'img', 'name', 'dob', 'gender', 'note', 'spouse', 'mother']); 
 const extras = Object.entries(nodeData).filter(([k]) => !skip.has(k)); 

 const dobDisplay = formatDob(nodeData.dob); 
 const genderDisplay = formatGender(nodeData.gender); 
 const noteText = nodeData.note || ''; 
 const spouse = nodeData.spouse || ''; 
 const mother = nodeData.mother || ''; 

 const displayName = nodeData.name.replace(/(^| )(\w)/g, (_, s, c) => s + c.toUpperCase()); 
 body.innerHTML = 
 `<h3 class="card-name">${displayName}</h3>` + 
 (nodeData.flag === 'me' ? '<span class="card-flag-me">★ Me</span>' : '') + 
 `<div class="card-info-row"><span class="card-info-key">DOB</span><span class="card-info-val">${dobDisplay}</span></div>` + 
 `<div class="card-info-row"><span class="card-info-key">Gender</span><span class="card-info-val">${genderDisplay}</span></div>` + 
 `<div class="card-info-row"><span class="card-info-key">Spouse</span><span class="card-info-val">${spouse || '<span style="color:#6b7280;">N/A</span>'}</span></div>` + 
 (mother ? `<div class="card-info-row"><span class="card-info-key">Mother</span><span class="card-info-val">${mother}</span></div>` : '') + 
 (noteText ? `<div class="card-note">${noteText}</div>` : '') + 
 extras.map(([k, v]) => 
 `<div class="card-info-row"><span class="card-info-key">${k}</span><span class="card-info-val">${v}</span></div>` 
 ).join(''); 

 overlay.classList.add('visible'); 
} 

function hideNodeCard() { 
 const overlay = document.getElementById('node-card-overlay'); 
 if (overlay) overlay.classList.remove('visible'); 
} 

function getBirthdayInfo(dob) { 
 if (!dob) return null; 
 const s = String(dob).trim(); 
 if (/^\d{4}$/.test(s)) return null; 
 const parts = s.split('/'); 
 if (parts.length !== 3) return null; 
 const [d, m] = parts.map(Number); 
 const today = new Date(); today.setHours(0, 0, 0, 0); 
 const birthday = new Date(today.getFullYear(), m - 1, d); birthday.setHours(0, 0, 0, 0); 
 const diffDays = Math.round((birthday - today) / 86400000); 
 return { 
 isCurrentMonth: birthday.getMonth() === today.getMonth(), 
 isWithin10Days: diffDays >= -10 && diffDays <= 10, 
 isTodayOrTomorrow: diffDays === 0 || diffDays === 1, 
 }; 
} 

function createBirthdayBadge(dob) { 
 const bday = getBirthdayInfo(dob); 
 if (!bday) return null; 
 const badge = document.createElement('span'); 
 badge.style.cssText = 'position:absolute;top:-10px;right:-8px;font-size:13px;line-height:1;pointer-events:none;'; 
 if (bday.isTodayOrTomorrow) { 
 badge.textContent = '🎂'; 
 } else if (bday.isWithin10Days) { 
 badge.textContent = '★'; 
 badge.style.cssText += 'color:#eab308;font-size:18px;'; 
 } else if (bday.isCurrentMonth) {
badge.textContent = '★'; 
 badge.style.cssText += 'color:#3b82f6;font-size:18px;'; 
 } else { 
 return null; 
 } 
 return badge; 
} 

function drawTree(node, bgColor = '') { 
 const wrapper = document.createElement('div'); 
 wrapper.style.cssText = `padding:20px; background-color:${bgColor || '#f0f8ff'}; overflow:auto; display:block;`; 
 wrapper.style.setProperty('--tree-bg', bgColor || '#f0f8ff'); 
 wrapper.classList.add('tree'); 

 function buildList(nodeData, depth = 0) { 
 const li = document.createElement('li'); 
 const label = document.createElement('span'); 
 label.classList.add('tree-node-label'); 
 label.dataset.depth = depth % 5; 
 label.style.position = 'relative'; 
 if (nodeData.flag === 'me') label.classList.add('flag-me'); 
 label.style.cursor = 'pointer'; 

 const nameParts = nodeData.name.trim().split(' '); 
 const lastWord = nameParts[nameParts.length - 1]; 
 const rawLabel = /^anh$/i.test(lastWord) && nameParts.length >= 2 
 ? nameParts.slice(-2).join(' ') 
 : lastWord; 
 const nameNode = document.createTextNode(rawLabel.replace(/(^| )(\w)/g, (_, s, c) => s + c.toUpperCase())); 
 if (nodeData.flag && nodeData.flag.toLowerCase().includes('die')) {; 
 label.appendChild(nameNode); 
 label.style.color = '#9ca3af'; 
 label.style.background = '#f3f4f6'; 
 label.style.borderColor = '#000000'; 
 } else { 
 label.appendChild(nameNode); 
 } 

 if (nodeData.gender) { 
 const gIcon = document.createElement('span'); 
 const isXY = nodeData.gender.toLowerCase().includes('y'); 
 gIcon.textContent = isXY ? ' ♂' : ' ♀'; 
 gIcon.style.cssText = `font-size:14px;font-weight:900;color:${isXY ? '#2563eb' : '#db2777'};-webkit-text-stroke:0.4px ${isXY ? '#2563eb' : '#db2777'};`; 
 label.appendChild(gIcon); 
 } 

 const badge = createBirthdayBadge(nodeData.dob); 
 if (badge) label.appendChild(badge); 

 label.addEventListener('click', (e) => { 
 e.stopPropagation(); 
 showNodeCard(nodeData); 
 }); 

 const spouseName = nodeData.spouse || nodeData.vo || nodeData.chong || ''; 
 if (spouseName) { 
 const nodeRow = document.createElement('div'); 
 nodeRow.style.cssText = 'display:inline-flex;align-items:center;gap:6px;'; 
 nodeRow.appendChild(label); 
 const connector = document.createElement('span'); 
 connector.textContent = '❤'; 
 connector.style.cssText = 'color:#e11d48;font-size:12px;pointer-events:none;'; 
 const spouseLabel = document.createElement('span'); 
 spouseLabel.classList.add('tree-node-label'); 
 spouseLabel.dataset.depth = depth % 5; 
 const spouseDie = /\(die\)\s*$/i.test(spouseName); 

 const nameParts = spouseName.trim().split(' '); 
 const spouseDisplayName = nameParts[nameParts.length - 1].replace(/\s*\(die\)\s*$/i, '').replace(/^\w/, c => c.toUpperCase()); 
 // const nameNode = document.createTextNode(lastName); 

 // const spouseDisplayName = spouseName.replace(/\s*\(die\)\s*$/i, '').replace(/(^| )(\w)/g, (_, s, c) => s + c.toUpperCase()); 
 if (spouseDie) { 
 spouseLabel.textContent = spouseDisplayName;
spouseLabel.style.color = '#9ca3af'; 
 spouseLabel.style.background = '#f3f4f6'; 
 spouseLabel.style.borderColor = '#000000'; 
 } else { 
 spouseLabel.textContent = spouseDisplayName; 
 } 
 if (nodeData.gender) { 
 const spouseIcon = document.createElement('span'); 
 const isXY = nodeData.gender.toLowerCase().includes('y'); 
 spouseIcon.textContent = isXY ? ' ♀' : ' ♂'; 
 spouseIcon.style.cssText = `font-size:14px;font-weight:900;color:${isXY ? '#db2777' : '#2563eb'};-webkit-text-stroke:0.4px ${isXY ? '#db2777' : '#2563eb'};`; 
 spouseLabel.appendChild(spouseIcon); 
 } 
 nodeRow.appendChild(connector); 
 nodeRow.appendChild(spouseLabel); 
 li.appendChild(nodeRow); 
 } else { 
 li.appendChild(label); 
 } 

 const children = (nodeData.child || []).filter(Boolean); 
 if (children.length > 0) { 
 const ul = document.createElement('ul'); 
 children.forEach(child => ul.appendChild(buildList(child, depth + 1))); 
 li.appendChild(ul); 
 } 
 return li; 
 } 

const ul = document.createElement('ul');
  ul.appendChild(buildList(node));
  wrapper.appendChild(ul);
  document.body.appendChild(wrapper);
}
 
const urlParams = new URLSearchParams(window.location.search);
switch (urlParams.get('id')) {
  case 'a999a435-81dc-4911-835b-2c4a440dc68f':   
    drawTree(aObject, '#fff8e1');
    drawTree(bObject, '#e1f5fe');
    drawTree(cObject, '#e8f5e9');
    drawTree(dObject, '#fce4ec');
    break;
  case '95e9f282-816f-4823-ae75-e7d62386f4bc':
    drawTree(bObject, '#e1f5fe');
    break;
}