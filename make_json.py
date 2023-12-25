import json
import os


file_path = './src/assets/json/publication.json'
category = {'11':'dpc', '12':'dpj', '13':'dp', '21':'ipc', '22':'ipj', '23':'ip'}

if os.path.isfile(file_path):
    with open(file_path, 'r', encoding='UTF-8') as f:
        json_data = json.load(f)
else:
    json_data = {'dpc':{}, 'dpj':{}, 'dp':{}, 'ipc':{}, 'ipj':{}, 'ip':{}}
    
while True:
    command = int(input("1-추가, 2-수정, 3-종료\n"))
    if command == 3:
        break
    
    if command == 1:
    
        region = input("1-Domestic, 2-International\n")
        ptype = input("1-conference, 2-journal, 3-patent\n")
        
        year = input("연도를 입력해주세요\n")
        
        title = input("제목을 입력해주세요\n")
        author = input("저자 혹은 출원자를 ,를 통해 입력해주세요\n")
        if ptype == "3":
            country = input("출원지를 입력해주세요\n")
            number = input("출원 번호를 입력해주세요\n")
        else:
            submit = input("학회 혹은 저널 이름을 입력해주세요\n")
            link = input("논문 링크를 입력해주세요\n")
            addi = input("추가 정보를 입력해주세요\n")

        cat = category[region+ptype]
        
        temp = {}
        temp['title'] = title
        temp['author'] = author
        if ptype == "3":
            temp['country'] = country
            temp['number'] = number
        else:
            temp['submit'] = submit
            temp['link'] = link
            temp['addi'] = addi
            
        if year in json_data[cat].keys():
            json_data[cat][year].insert(0, temp)
        else:
            json_data[cat][year] = [temp]
                
    else:
        id = input("수정할 글의 id를 입력해주세요(해당 연도의 몇 번쨰 글인지):\n")
    

with open(file_path, 'w', encoding='UTF-8') as f:
    f.write("data = ")
    json.dump(json_data, f, indent="\t", ensure_ascii = False)