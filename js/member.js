let member_data = JSON.parse(JSON.stringify(data));
var keys = Object.keys(member_data);

for (var i=0; i < keys.length; i++) {
    members = member_data[keys[i]]
    for (var j=0; j < members.length; j++) {
        if (keys[i] == 'main_member') {
            let container = document.querySelector('.main_member .flex-container');
            let card = document.createElement('div');
            card.className = 'card';
            let img = document.createElement('img');
            img.src = members[j]['img'];
            let content = document.createElement('div');
            content.className = 'content';
            let name = document.createElement('h4');
            name.innerHTML = members[j]['name'];
            let position = document.createElement('h5');
            position.innerHTML = members[j]['position'];
            let Research_field = document.createElement('h5');
            Research_field.innerHTML = members[j]['Research_field'];
            let email = document.createElement('h5');
            email.innerHTML = members[j]['email'];

            content.appendChild(name);
            content.appendChild(position);
            content.appendChild(Research_field);
            content.appendChild(email);
            card.appendChild(img);
            card.appendChild(content);
            container.appendChild(card)
        }
        else if (keys[i] == 'sub_member') {
            let container = document.querySelector('.sub_member .flex-container');
            let card = document.createElement('div');
            card.className = 'card';
            let img = document.createElement('img');
            img.src = members[j]['img'];
            let content = document.createElement('div');
            content.className = 'content';
            let name = document.createElement('h4');
            name.innerHTML = members[j]['name'];
            let position = document.createElement('h5');
            position.innerHTML = members[j]['position'];
            let Research_field = document.createElement('h5');
            Research_field.innerHTML = members[j]['Research_field'];
            let email = document.createElement('h5');
            email.innerHTML = members[j]['email'];

            content.appendChild(name);
            content.appendChild(position);
            content.appendChild(Research_field);
            content.appendChild(email);
            card.appendChild(img);
            card.appendChild(content);
            container.appendChild(card)
        }
        else if (keys[i] == 'partners') {
            let container = document.querySelector('.partners .flex-container');
            let card = document.createElement('div');
            card.className = 'card';
            let img = document.createElement('img');
            img.src = members[j]['img'];
            let content = document.createElement('div');
            content.className = 'content';
            let name = document.createElement('h4');
            name.innerHTML = members[j]['name'];

            content.appendChild(name);
            card.appendChild(img);
            card.appendChild(content);
            container.appendChild(card)
        }
    }
}