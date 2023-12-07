let text = document.getElementById('search');
text.addEventListener('input', search);

const allReferenceList = JSON.parse(fs.readFileSync("list.json",'utf-8'));
create_htmlReferenceList(allReferenceList)

function search(event){
    var searchdata = []
    let key = event.currentTarget.value;
    if(key != ""){
        for(i=0;i<allReferenceList.length;i++){
            let add = {};
            add["category"] = allReferenceList[i].category;
            add["subcategory"] = []
            for(j=0; j<allReferenceList[i].subcategory.length; j++){
                let temp = allReferenceList[i].subcategory[j].list.filter(function(data){
                    return data.name.toUpperCase().includes(key.toUpperCase()) || data.brief.includes(key)
                })
                if(temp.length != 0){
                    let sublist = {};
                    sublist["subName"] = allReferenceList[i].subcategory[j].subName;
                    sublist["list"] = temp

                    add["subcategory"].push(sublist);
                }
            }
            if(add.subcategory.length>0){
                searchdata.push(add);
            }
        }
    }
    else{
        searchdata = allReferenceList
    }
    create_htmlReferenceList(searchdata)
}

function create_htmlReferenceList(ReferenceList){  
    // 子要素のremove
    let container = document.getElementById('ReferenceList-container');
    let clone = container.cloneNode(false);
    container.parentNode.replaceChild(clone,container);

    // fragment
    let fragment = document.createDocumentFragment();

    // DOM生成
    for(i=0; i<ReferenceList.length; i++){
        let containerDiv = document.createElement('div');
        containerDiv.classList = 'grid-module--col Layout-module--container';

        let categoryName = document.getElementById('categoryName-template').content.cloneNode(true);
        categoryName.querySelector('.ReferenceList-module--categoryName').textContent = ReferenceList[i].category;
        fragment.appendChild(categoryName);

        for(j=0; j<ReferenceList[i].subcategory.length; j++){
            let gridDiv =document.createElement('div');
            gridDiv.classList = 'grid-module--grid';

            let subcategoryName = document.getElementById('subcategoryName-template').content.cloneNode(true);
            subcategoryName.querySelector('.ReferenceList-module--subcategoryName').textContent = ReferenceList[i].subcategory[j].subName;
            gridDiv.appendChild(subcategoryName);

            let listUl = document.createElement('ul');
            listUl.classList = 'ReferenceList-module--moduleList';

            for(k=0; k<ReferenceList[i].subcategory[j].list.length; k++){
                let referenceItem = document.getElementById('referenceItem-template').content.cloneNode(true);
                referenceItem.querySelector('.ReferenceList-module--itemName').textContent = ReferenceList[i].subcategory[j].list[k].name;
                referenceItem.querySelector('.ReferenceList-module--itemName').href = ReferenceList[i].subcategory[j].list[k].link;
                referenceItem.querySelector('.ReferenceList-module--itemBrief').textContent = ReferenceList[i].subcategory[j].list[k].brief;
                listUl.appendChild(referenceItem);
            }
            gridDiv.appendChild(listUl);
            containerDiv.appendChild(gridDiv);
        }
        fragment.appendChild(containerDiv);
    }

    // 取得し直してDOMに追加
    document.getElementById('ReferenceList-container').appendChild(fragment);
}
