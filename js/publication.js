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

let ul_tag = document.createElement('ul');
ul_tag.className = "grid_year";
paper.appendChild(ul_tag);

for (var i=0; i < keys.length; i++) {

    const now_year = keys[i];

    let li_tag = document.createElement('li');
    let year_a_tag = document.createElement('a');
    year_a_tag.href = "#" + now_year;

    let str_tag = document.createElement('strong');
    str_tag.innerHTML = now_year;

    let span_tag = document.createElement('span');
    span_tag.className = 'count';
    span_tag.innerHTML = temp_data[now_year].length;

    year_a_tag.appendChild(str_tag);
    year_a_tag.appendChild(span_tag);
    li_tag.appendChild(year_a_tag);
    ul_tag.appendChild(li_tag);

    let sec_tag = document.createElement('section');
    sec_tag.className = 'year-section';
    sec_tag.id = now_year;

    let h4_year = document.createElement('h4');
    h4_year.className = "year";
    h4_year.innerHTML = now_year;

    sec_tag.appendChild(h4_year);

    if (now == 'dp' || now == 'ip') {
        for (var j=0; j < temp_data[now_year].length; j++) {
            let a_tag = document.createElement('a');
            a_tag.className = 'paper-link';
            a_tag.href = temp_data[now_year][j]['link'];
            a_tag.innerHTML = temp_data[now_year][j]['title'];
    
            let h4_tag = document.createElement('h4');
            h4_tag.className = 'title';
            h4_tag.appendChild(a_tag);
    
            let p_tag = document.createElement('p');
            p_tag.className = 'info';
            p_tag.innerHTML = temp_data[now_year][j]['author'] + "<br>" + now_year + ", " + temp_data[now_year][j]['country'] + ", " + temp_data[now_year][j]['number'];
    
            let div_tag = document.createElement('div');
            div_tag.className = 'list-item';
            div_tag.appendChild(h4_tag);
            div_tag.appendChild(p_tag);
        
            sec_tag.appendChild(div_tag);
        }
    
        paper.appendChild(sec_tag);

    } else {
        for (var j=0; j < temp_data[now_year].length; j++) {
            let a_tag = document.createElement('a');
            a_tag.className = 'paper-link';
            a_tag.href = temp_data[now_year][j]['link'];
            a_tag.innerHTML = temp_data[now_year][j]['title'];
    
            let h4_tag = document.createElement('h4');
            h4_tag.className = 'title';
            h4_tag.appendChild(a_tag);
    
            let p_tag = document.createElement('p');
            p_tag.className = 'info';
            p_tag.innerHTML = temp_data[now_year][j]['author'] + "<br>" + now_year + ", " + temp_data[now_year][j]['submit'];
    
            let div_tag = document.createElement('div');
            div_tag.className = 'list-item';
            div_tag.appendChild(h4_tag);
            div_tag.appendChild(p_tag);
        
            sec_tag.appendChild(div_tag);
        }
    
        paper.appendChild(sec_tag);
    }
}
