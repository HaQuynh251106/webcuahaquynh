


  document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'))
                          .map(el => el.value)
                          .join(', ');
    const bio = document.getElementById('bio').value;
    if (name && email && phone && gender && bio) {
      alert('Đăng ký thành công!\n' +
            `Họ và tên: ${name}\n` +
            `Email: ${email}\n` +
            `Số điện thoại: ${phone}\n` +
            `Giới tính: ${gender}\n` +
            `Sở thích: ${hobbies}\n` +
            `Giới thiệu bản thân: ${bio}`);
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  });