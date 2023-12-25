let page = document.querySelector('#page-title').innerHTML;
let paper = document.querySelector('.paper-div');

let now;

if (page == 'International Conferences') {
    now = 'ipc';
} else if (page == 'International Journals') {
    now = 'ipj';
} else if (page == 'International Patents') {
    now = 'ip';
} else if (page == 'Domestic Conferences') {
    now = 'dpc';
} else if (page == 'Domestic Journals') {
    now = 'dpj';
} else {
    now = 'dp';
};

let testdata = JSON.parse(JSON.stringify(data));
let temp_data = testdata[now];
var keys = Object.keys(temp_data);
keys.reverse();

for (var i=0; i < keys.length; i++) {
    let sec_tag = document.createElement('section');
    sec_tag.className = 'year-section';
    sec_tag.id = keys[i];

    let h4_year = document.createElement('h4');
    h4_year.className = "year";
    h4_year.innerHTML = keys[i];

    sec_tag.appendChild(h4_year);

    if (now == 'dp' || now == 'ip') {
        for (var j=0; j < temp_data[keys[i]].length; j++) {
            let a_tag = document.createElement('a');
            a_tag.className = 'paper-link';
            a_tag.href = temp_data[keys[i]][j]['link'];
            a_tag.innerHTML = temp_data[keys[i]][j]['title'];
    
            let h4_tag = document.createElement('h4');
            h4_tag.className = 'title';
            h4_tag.appendChild(a_tag);
    
            let p_tag = document.createElement('p');
            p_tag.className = 'info';
            p_tag.innerHTML = temp_data[keys[i]][j]['author'] + "<br>" + keys[i] + ", " + temp_data[keys[i]][j]['country'] + ", " + temp_data[keys[i]][j]['number'];
    
            let div_tag = document.createElement('div');
            div_tag.className = 'list-item';
            div_tag.appendChild(h4_tag);
            div_tag.appendChild(p_tag);
        
            sec_tag.appendChild(div_tag);
        }
    
        paper.appendChild(sec_tag);

    } else {
        for (var j=0; j < temp_data[keys[i]].length; j++) {
            let a_tag = document.createElement('a');
            a_tag.className = 'paper-link';
            a_tag.href = temp_data[keys[i]][j]['link'];
            a_tag.innerHTML = temp_data[keys[i]][j]['title'];
    
            let h4_tag = document.createElement('h4');
            h4_tag.className = 'title';
            h4_tag.appendChild(a_tag);
    
            let p_tag = document.createElement('p');
            p_tag.className = 'info';
            p_tag.innerHTML = temp_data[keys[i]][j]['author'] + "<br>" + keys[i] + ", " + temp_data[keys[i]][j]['submit'];
    
            let div_tag = document.createElement('div');
            div_tag.className = 'list-item';
            div_tag.appendChild(h4_tag);
            div_tag.appendChild(p_tag);
        
            sec_tag.appendChild(div_tag);
        }
    
        paper.appendChild(sec_tag);
    }
}
