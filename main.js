let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

//navbar scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//swipper
var swiper = new Swiper(".nouvel-arrivage", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
})

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openCommentsBtn");
    const closeModalBtn = document.querySelector(".close");
    const modal = document.getElementById("commentsModal");
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");

    // Ouvrir la fenêtre modale
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Fermer la fenêtre modale
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fermer la modale si on clique en dehors
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Soumettre un commentaire
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comment = document.getElementById("comment").value;

        if (name && email && comment) {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment-box");
            commentElement.innerHTML = `<strong>${name}</strong> <br> ${comment}`;
            
            commentsList.appendChild(commentElement);

            // Réinitialiser le formulaire
            commentForm.reset();
        }
    });
});
