Update thêm vụ login với register bằng firebase

T chưa tạo cái tài khoản data chung bên firebase nên nếu muốn kiểm chứng cái code có chạy ổn không thì thêm mấy hàm console.log vô nha
Hoặc là tạo acc firebase rồi thay đổi cái firebase configuration trong cái này lại:
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyDapH6ck-s3TQ154taWCz8EWQHS3ZQ3Gr8",
          authDomain: "uitweb-5c26c.firebaseapp.com",
          databaseURL: "https://uitweb-5c26c-default-rtdb.firebaseio.com",
          projectId: "uitweb-5c26c",
          storageBucket: "uitweb-5c26c.appspot.com",
          messagingSenderId: "488733525168",
          appId: "1:488733525168:web:a56bcf9ba83e63c8f9e775",
          measurementId: "G-Q608ZEJ2R8"
        }; 
        Cái này là data realtime và nhớ chỉnh rules lại write với read thành true nha.
