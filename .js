document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    alert('您的資料已處理，謝謝您的註冊！');
    
});
