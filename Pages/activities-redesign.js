/* ============================================
   ACTIVITIES REDESIGN - JAVASCRIPT
   ============================================ */

// ============ UPCOMING SLIDER ============

let currentSlide = 0;
const slides = document.querySelectorAll('.upcoming-slide');
const totalSlides = slides.length;
let sliderInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Normalize index to be within bounds
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  slides[currentSlide].classList.add('active');
  updateIndicators();
}

function changeSlide(direction) {
  clearInterval(sliderInterval);
  showSlide(currentSlide + direction);
  startSliderAutoPlay();
}

function goToSlide(index) {
  clearInterval(sliderInterval);
  showSlide(index);
  startSliderAutoPlay();
}

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function startSliderAutoPlay() {
  sliderInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000); // Change slide every 5 seconds
}

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', function() {
  showSlide(0);
  startSliderAutoPlay();
});

// Stop auto-play on hover
const upcomingSlider = document.querySelector('.upcoming-slider-container');
if (upcomingSlider) {
  upcomingSlider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  upcomingSlider.addEventListener('mouseleave', startSliderAutoPlay);
}

// ============ YEAR DROPDOWN FUNCTIONALITY ============

function toggleYearDropdown(button) {
  const dropdown = button.nextElementSibling;
  const isActive = dropdown.classList.contains('active');
  
  // Close all other dropdowns
  document.querySelectorAll('.year-dropdown-menu').forEach(menu => {
    if (menu !== dropdown) {
      menu.classList.remove('active');
      menu.parentElement.previousElementSibling.classList.remove('active');
    }
  });
  
  // Toggle current dropdown
  dropdown.classList.toggle('active');
  button.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.program-dropdown')) {
    document.querySelectorAll('.year-dropdown-menu').forEach(menu => {
      menu.classList.remove('active');
    });
    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
      trigger.classList.remove('active');
    });
  }
});

// ============ YEAR CONTENT LOADING ============

const yearContentData = {
  pathway: {
    2025: {
      images: [
        '../Assets/activities/Pathway_Program/img1.jpg',
        '../Assets/activities/Pathway_Program/img2.jpg',
        '../Assets/activities/Pathway_Program/img3.jpg'
      ],
      description: 'In 2025, our Pathway to Schooling program continues to support over 100 children in their educational journey. We provide mentorship, academic resources, and guidance to ensure they succeed in school and beyond. Our dedicated volunteers work closely with each child to identify their strengths and help them overcome challenges.'
    },
    2024: {
      images: [
        '../Assets/activities/Pathway_Program/img1.jpg',
        '../Assets/activities/Pathway_Program/img2.jpg',
        '../Assets/activities/Pathway_Program/img3.jpg'
      ],
      description: 'During 2024, we expanded our reach to 150 children across multiple schools in the region. Through personalized mentoring sessions, scholarship assistance, and regular progress tracking, we helped students improve their academic performance and confidence. Many students received recognition for their outstanding achievements.'
    },
    2023: {
      images: [
        '../Assets/activities/Pathway_Program/img1.jpg',
        '../Assets/activities/Pathway_Program/img2.jpg',
        '../Assets/activities/Pathway_Program/img3.jpg'
      ],
      description: '2023 marked a significant milestone for our Pathway program. We launched digital learning initiatives, providing computers and internet access to underprivileged students. The program impacted over 120 children, helping them develop 21st-century skills alongside traditional academics.'
    },
    2022: {
      images: [
        '../Assets/activities/Pathway_Program/img1.jpg',
        '../Assets/activities/Pathway_Program/img2.jpg',
        '../Assets/activities/Pathway_Program/img3.jpg'
      ],
      description: 'In 2022, we introduced summer intensive programs focusing on foundation skills in mathematics and languages. Our mentors conducted weekly sessions to strengthen academic fundamentals, resulting in improved grades and increased student engagement in learning.'
    },
    2021: {
      images: [
        '../Assets/activities/Pathway_Program/img1.jpg',
        '../Assets/activities/Pathway_Program/img2.jpg',
        '../Assets/activities/Pathway_Program/img3.jpg'
      ],
      description: 'The 2021 program adapted to online learning challenges, providing digital mentorship to students from home. Despite the pandemic, we maintained consistent support and helped students transition to online education successfully.'
    },
    2020: {
      images: [
        '../Assets/activities/Pathway_Program/img1.jpg',
        '../Assets/activities/Pathway_Program/img2.jpg',
        '../Assets/activities/Pathway_Program/img3.jpg'
      ],
      description: 'In 2020, our Pathway program began its journey with the vision of supporting children from marginalized communities. We established mentoring relationships with 80 students, providing academic guidance and encouragement to help them stay in school.'
    }
  },
  akanksha: {
    2025: {
      images: [
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png'
      ],
      description: 'Akanksha 2025 focuses on fulfilling aspirations through comprehensive scholarship programs and career development workshops. We\'re helping students explore diverse career paths and develop skills necessary for their chosen professions through mentorship and hands-on training.'
    },
    2024: {
      images: [
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png'
      ],
      description: 'In 2024, our Akanksha initiative provided scholarships to 50 deserving students and conducted career guidance sessions featuring professionals from various fields. Students had opportunities to interact with role models and learn about different career options available to them.'
    },
    2023: {
      images: [
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png'
      ],
      description: '2023 saw the launch of our internship matching program, where students were paired with professionals for real-world experience. This initiative successfully connected 30 students with internship opportunities, helping them gain practical skills and industry exposure.'
    },
    2022: {
      images: [
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png'
      ],
      description: 'During 2022, Akanksha focused on skill development workshops including personality development, public speaking, and technical skills. Over 100 participants benefited from these sessions, gaining confidence and competencies essential for their futures.'
    },
    2021: {
      images: [
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png'
      ],
      description: 'In 2021, we conducted virtual mentoring sessions and webinars featuring industry experts who shared insights about their career journeys. Despite the pandemic, the program successfully reached 80 students with aspirational content and guidance.'
    },
    2020: {
      images: [
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png',
        '../Assets/activities/Akanksha.png'
      ],
      description: 'Akanksha began in 2020 with the mission to identify and support talented students from underprivileged backgrounds. The program started with scholarship support and mentoring for 40 students, creating a foundation for future expansion.'
    }
  },
  chetna: {
    2025: {
      images: [
        '../Assets/activities/Sanjeevani/background1.jpg',
        '../Assets/activities/Sanjeevani/content_img1.jpg',
        '../Assets/activities/Sanjeevani/content_img2.jpg'
      ],
      description: 'Chetna 2025 initiatives focus on health awareness and environmental consciousness. We\'re conducting workshops on nutrition, hygiene, and sustainable living practices. Our awareness campaigns are reaching schools and communities to promote holistic well-being and environmental responsibility.'
    },
    2024: {
      images: [
        '../Assets/activities/Sanjeevani/background1.jpg',
        '../Assets/activities/Sanjeevani/content_img1.jpg',
        '../Assets/activities/Sanjeevani/content_img2.jpg'
      ],
      description: 'In 2024, Chetna organized medical awareness camps covering topics like preventive healthcare, nutrition, and mental well-being. We reached over 500 people with health check-ups and educational sessions, promoting preventive health practices in the community.'
    },
    2023: {
      images: [
        '../Assets/activities/Sanjeevani/background1.jpg',
        '../Assets/activities/Sanjeevani/content_img1.jpg',
        '../Assets/activities/Sanjeevani/content_img2.jpg'
      ],
      description: '2023 witnessed significant expansion of our Chetna program with environmental conservation drives and health awareness camps. We conducted 12 major events reaching 800 individuals with health education and community engagement initiatives.'
    },
    2022: {
      images: [
        '../Assets/activities/Sanjeevani/background1.jpg',
        '../Assets/activities/Sanjeevani/content_img1.jpg',
        '../Assets/activities/Sanjeevani/content_img2.jpg'
      ],
      description: 'During 2022, our Chetna program focused on women\'s health and education. We conducted special health camps exclusively for women and organized awareness sessions on health rights and wellness, reaching 300 women in the community.'
    },
    2021: {
      images: [
        '../Assets/activities/Sanjeevani/background1.jpg',
        '../Assets/activities/Sanjeevani/content_img1.jpg',
        '../Assets/activities/Sanjeevani/content_img2.jpg'
      ],
      description: 'In 2021, Chetna adapted to pandemic challenges by conducting online awareness sessions on COVID-19 prevention, mental health, and nutrition. We reached households with important health information during a critical time.'
    },
    2020: {
      images: [
        '../Assets/activities/Sanjeevani/background1.jpg',
        '../Assets/activities/Sanjeevani/content_img1.jpg',
        '../Assets/activities/Sanjeevani/content_img2.jpg'
      ],
      description: 'Chetna was launched in 2020 with the mission of raising health and environmental awareness. Our initial efforts included community health camps and awareness drives that educated 200+ people about preventive health measures.'
    }
  },
  distribution: {
    2025: {
      images: [
        '../Assets/activities/Distribution_Drive/dist1.png',
        '../Assets/activities/Distribution_Drive/dist1f.png',
        '../Assets/activities/Distribution_Drive/backgroun.png'
      ],
      description: 'Our 2025 Distribution Drive focuses on back-to-school essentials and winter clothing. We\'ve already distributed supplies to over 300 children and families, ensuring they have necessary materials for education and protection from harsh weather.'
    },
    2024: {
      images: [
        '../Assets/activities/Distribution_Drive/dist1.png',
        '../Assets/activities/Distribution_Drive/dist1f.png',
        '../Assets/activities/Distribution_Drive/backgroun.png'
      ],
      description: 'In 2024, we conducted three major distribution drives covering school supplies, clothing, and food items. Over 400 families benefited from our initiatives, receiving essential items that improved their quality of life and educational opportunities.'
    },
    2023: {
      images: [
        '../Assets/activities/Distribution_Drive/dist1.png',
        '../Assets/activities/Distribution_Drive/dist1f.png',
        '../Assets/activities/Distribution_Drive/backgroun.png'
      ],
      description: '2023 was a landmark year for our distribution efforts. We distributed over 2000 items including textbooks, uniforms, stationery, and clothing to underprivileged children in multiple locations across the region.'
    },
    2022: {
      images: [
        '../Assets/activities/Distribution_Drive/dist1.png',
        '../Assets/activities/Distribution_Drive/dist1f.png',
        '../Assets/activities/Distribution_Drive/backgroun.png'
      ],
      description: 'During 2022, our distribution drives particularly focused on supporting construction worker families with winter clothing and educational materials. We distributed items to 250 families, ensuring children could attend school comfortably.'
    },
    2021: {
      images: [
        '../Assets/activities/Distribution_Drive/dist1.png',
        '../Assets/activities/Distribution_Drive/dist1f.png',
        '../Assets/activities/Distribution_Drive/backgroun.png'
      ],
      description: 'In 2021, facing economic challenges, our distribution drives became even more crucial. We provided food assistance and essential supplies to 180 families, helping them navigate difficult times.'
    },
    2020: {
      images: [
        '../Assets/activities/Distribution_Drive/dist1.png',
        '../Assets/activities/Distribution_Drive/dist1f.png',
        '../Assets/activities/Distribution_Drive/backgroun.png'
      ],
      description: 'Our inaugural distribution drive in 2020 focused on providing school uniforms, bags, and stationery to 150 children. This initiative marked the beginning of our commitment to ensure every child has access to educational resources.'
    }
  }
};

function loadYearContent(program, year) {
  const contentDiv = document.getElementById(`${program}-content`);
  const data = yearContentData[program]?.[year];
  
  if (!data) {
    contentDiv.innerHTML = '<p class="text-center text-gray-500">Content coming soon</p>';
    contentDiv.classList.remove('hidden');
    return;
  }

  // Create year content HTML
  let html = '<div class="year-slider-wrapper">';
  html += '<div class="year-slider">';
  
  data.images.forEach((img, index) => {
    html += `<div class="year-slide ${index === 0 ? 'active' : ''}">
      <img src="${img}" alt="Year ${year} - Image ${index + 1}" onerror="this.src='../Assets/activities.png'">
    </div>`;
  });
  
  html += '</div>';
  
  // Add slider controls if multiple images
  if (data.images.length > 1) {
    html += '<div class="year-slider-controls">';
    data.images.forEach((_, index) => {
      html += `<button class="year-slider-btn ${index === 0 ? 'active' : ''}" onclick="switchYearSlide('${program}', ${index})"></button>`;
    });
    html += '</div>';
  }
  
  html += '</div>';
  
  // Add description
  html += `<div class="year-description">${data.description}</div>`;
  
  contentDiv.innerHTML = html;
  contentDiv.classList.remove('hidden');
  
  // Store current slide index for this year/program combination
  window[`${program}_${year}_slide`] = 0;
}

function switchYearSlide(program, slideIndex) {
  const slides = document.querySelectorAll(`#${program}-content .year-slide`);
  const buttons = document.querySelectorAll(`#${program}-content .year-slider-btn`);
  
  slides.forEach(slide => slide.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));
  
  if (slides[slideIndex]) {
    slides[slideIndex].classList.add('active');
  }
  if (buttons[slideIndex]) {
    buttons[slideIndex].classList.add('active');
  }
}

// Close dropdowns when content is loaded
document.addEventListener('click', function(event) {
  if (event.target.closest('.year-option')) {
    // Close the dropdown after selection
    const dropdown = event.target.closest('.program-dropdown');
    const menu = dropdown.querySelector('.year-dropdown-menu');
    const trigger = dropdown.querySelector('.dropdown-trigger');
    
    setTimeout(() => {
      menu.classList.remove('active');
      trigger.classList.remove('active');
    }, 300);
  }
});
