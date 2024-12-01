function searchBooks() {
    // الحصول على النص من خانة البحث
    var searchTerm = document.getElementById('search').value.toLowerCase();
    
    // الحصول على جميع العناصر التي تحتوي على الكتب
    var books = document.querySelectorAll('.book');

    // تصفية الكتب بناءً على النص المدخل
    books.forEach(function(book) {
        var title = book.querySelector('h2').textContent.toLowerCase(); // الحصول على عنوان الكتاب
        if (title.includes(searchTerm)) {
            book.style.display = 'block'; // عرض الكتاب إذا كان العنوان يحتوي على النص المدخل
        } else {
            book.style.display = 'none'; // إخفاء الكتاب إذا لم يحتوي العنوان على النص المدخل
        }
    });
}



const countdown = () => {
    const targetDate = new Date("2025-07-07T00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;
  
    // حساب الأيام والساعات والدقائق والثواني
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    // عرض القيم
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    // تحديث العد التنازلي كل ثانية
    if (gap < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "<h2>حان وقت الباكالوريا!</h2>";
    }
  };
  
  const interval = setInterval(countdown, 1000);
  

  document.addEventListener("DOMContentLoaded", function() {
    const planCompletionButton = document.createElement('button');
    planCompletionButton.innerText = 'إتمام الخطة';
    planCompletionButton.style.padding = '10px 20px';
    planCompletionButton.style.backgroundColor = '#28a745';
    planCompletionButton.style.color = 'white';
    planCompletionButton.style.border = 'none';
    planCompletionButton.style.cursor = 'pointer';
    planCompletionButton.style.marginTop = '20px';
    
    planCompletionButton.addEventListener('click', function() {
      alert('تم تنفيذ الخطة بنجاح! حافظ على الاستمرارية.');
    });
  
    document.querySelector('.goal-plan').appendChild(planCompletionButton);
  });
  
  
  function submitAssessment() {
    // الحصول على القيم المدخلة
    var preparation = document.getElementById("study-preparation").value;
    var timeManagement = document.getElementById("time-management").value;
    var stressLevel = document.getElementById("stress-level").value;

    // تقييم النتيجة بناءً على القيم المدخلة
    var score = (parseInt(preparation) + parseInt(timeManagement) + parseInt(stressLevel)) / 3;

    // تحديد النتيجة
    var resultText = "";
    if (score <= 1.5) {
        resultText = "يجب عليك تحسين استعدادك وتنظيم وقتك. يمكنك العمل أكثر على تقليل التوتر.";
    } else if (score <= 2.5) {
        resultText = "أنت في مسار جيد ولكن يحتاج بعض التحسين في الالتزام بتنظيم الوقت.";
    } else {
        resultText = "أنت على الطريق الصحيح! حافظ على أدائك المتميز.";
    }

    // إظهار النتيجة
    document.getElementById("assessment-result").innerText = resultText;
    document.getElementById("result").style.display = "block";
}



// أوقات الصلاة لكل يوم (كمثال على أوقات الصلاة)
const prayerTimes = {
  "الفجر": "05:30 AM",
  "الظهر": "12:30 PM",
  "العصر": "03:45 PM",
  "المغرب": "06:00 PM",
  "العشاء": "07:30 PM"
};

function generateCalendar() {
  const daysInMonth = new Date(2024, 11, 0).getDate(); // ديسمبر 2024
  const calendarContainer = document.getElementById('calendar');
  const selectedDayContainer = document.getElementById('selected-day');
  const motivationalMessageContainer = document.getElementById('motivational-message');
  const prayerTimesContainer = document.getElementById('prayer-times');

  // إضافة أيام الأسبوع
  const daysOfWeek = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
  daysOfWeek.forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.innerText = day;
      calendarContainer.appendChild(dayDiv);
  });

  // إضافة الأيام من الشهر
  for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.innerText = i;
      dayDiv.onclick = function() {
          selectDay(i);
      };
      calendarContainer.appendChild(dayDiv);
  }

  // دالة لاختيار يوم وإظهاره في المكان المخصص
  function selectDay(day) {
      // إزالة التحديد عن جميع الأيام
      const allDays = document.querySelectorAll('.calendar div');
      allDays.forEach(item => item.classList.remove('active'));

      // إضافة التحديد لليوم المختار
      const dayDivs = document.querySelectorAll('.calendar div');
      dayDivs.forEach(div => {
          if (div.innerText == day) {
              div.classList.add('active');
          }
      });

      // عرض اليوم المختار
      selectedDayContainer.innerHTML = `تم اختيار يوم ${day}.`;
      
      // عرض الرسالة التحفيزية
      motivationalMessageContainer.innerHTML = "تذكر أن يومك يجب أن يكون مليئًا بالتخطيط الجيد! عليك تخصيص الوقت للمراجعة والنوم والترفيه.";
      
      // عرض أوقات الصلاة
      let times = `<h3>أوقات الصلاة لهذا اليوم:</h3>`;
      for (const [prayer, time] of Object.entries(prayerTimes)) {
          times += `<p><strong>${prayer}:</strong> ${time}</p>`;
      }
      prayerTimesContainer.innerHTML = times;
  }
}

window.onload = generateCalendar;
