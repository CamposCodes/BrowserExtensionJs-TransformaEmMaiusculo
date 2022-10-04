
document.addEventListener('DOMContentLoaded',function(){
    
    function openTextArea(){
        let textArea = document.querySelector('#text-area');
        if(textArea.style.display == 'none'){
            textArea.style.display = 'flex';
        }
        else{
            textArea.style.display = 'none';
        }
    }
    openTextArea();
    
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
        openTextArea();
    });

    function copyText(){
        let textCopy = result.textContent;
        let btnCopy = document.querySelector('.btn-copy');
        if(navigator.clipboard.writeText(textCopy)){
            btnCopy.textContent = ' | copiado';
            btnCopy.style.background = "var(--color2)";
            btnCopy.style.color = "var(--color3)";
        }
    }
});

