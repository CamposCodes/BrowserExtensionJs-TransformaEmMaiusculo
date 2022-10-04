
document.addEventListener('DOMContentLoaded',function(){
    
    let textArea = document.querySelector('#text-area');
    textArea.style.display = 'none';
    
    function upper(text){
        return text.toUpperCase();
    }
    
    let btn = document.querySelector('#btn');
    btn.addEventListener('click',function(){
        
        let text = document.querySelector('#text').value;
        let result = document.querySelector('#result');
        
        result.innerHTML = upper(text);
        
        let btnCopy = document.createElement('button');
        btnCopy.classList.add('btn-copy');
        btnCopy.textContent = 'copiar';
        document.querySelector('#text-area').appendChild(btnCopy);
        btnCopy.addEventListener('click', copyText);
        textArea.style.display = 'flex';
    });
    
    function copyText(){
        let textCopy = result.textContent;
        let btnCopy = document.querySelector('.btn-copy');
        if(navigator.clipboard.writeText(textCopy)){
            btnCopy.textContent = ' | copiado';
            btnCopy.style.background = "var(--color2)";
            btnCopy.style.color = "var(--color3)";
        }
        addButtonRefresh();
    }

    function addButtonRefresh(){
        let btnRefresh = document.createElement('button');
        btnRefresh.classList.add('btn-refresh');
        btnRefresh.textContent = 'transformar outro texto';
        document.querySelector('#all').appendChild(btnRefresh);
        btnRefresh.addEventListener('click', function(){
            window.location.reload();
        });
    }
});

