// SafarPro Travels & Tours — Shared Scripts

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Mobile Menu Drawer ---------- */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuBtn && mobileMenu && menuIcon) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.className = mobileMenu.classList.contains('hidden')
                ? 'fa-solid fa-bars text-xl'
                : 'fa-solid fa-xmark text-xl';
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fa-solid fa-bars text-xl';
            });
        });
    }

    /* ---------- Hero Quick Inquiry Tab Switcher (index.html only) ---------- */
    const umrahBtn = document.getElementById('tab-umrah-btn');
    const flightBtn = document.getElementById('tab-flight-btn');
    const visitBtn = document.getElementById('tab-visit-btn');
    const dynamicFields = document.getElementById('dynamic-fields-1');
    const inquiryTypeInput = document.getElementById('inquiry-type');

    window.switchTab = function (tab) {
        if (!umrahBtn || !flightBtn || !visitBtn || !dynamicFields || !inquiryTypeInput) return;

        [umrahBtn, flightBtn, visitBtn].forEach(btn => {
            btn.className = 'tab-btn flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition text-slate-600 hover:text-navy-800';
        });

        if (tab === 'umrah') {
            umrahBtn.className = 'tab-btn flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition text-navy-800 bg-white shadow-sm';
            inquiryTypeInput.value = 'Umrah Ticket & Package Inquiry';
            dynamicFields.innerHTML = `
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Departure City</label>
                    <select id="hero-departure" class="w-full bg-slate-50 border border-slate-300 focus:border-gold-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none transition font-medium">
                        <option>Lahore (LHE)</option>
                        <option>Islamabad (ISB)</option>
                        <option>Karachi (KHI)</option>
                        <option>Multan (MUX)</option>
                        <option>Peshawar (PEW)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Package Category</label>
                    <select id="hero-details" class="w-full bg-slate-50 border border-slate-300 focus:border-gold-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none transition font-medium">
                        <option>15 Days Economy Umrah</option>
                        <option>21 Days Standard Umrah</option>
                        <option>10 Days VIP Executive Umrah</option>
                        <option>Customized Umrah Package</option>
                    </select>
                </div>
            `;
        } else if (tab === 'flight') {
            flightBtn.className = 'tab-btn flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition text-navy-800 bg-white shadow-sm';
            inquiryTypeInput.value = 'Flight Ticket Inquiry';
            dynamicFields.innerHTML = `
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Departure (Origin)</label>
                    <input type="text" id="hero-departure" placeholder="e.g. Lahore / Islamabad" class="w-full bg-slate-50 border border-slate-300 focus:border-gold-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none transition" value="Lahore">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Destination</label>
                    <input type="text" id="hero-details" placeholder="e.g. Jeddah, Dubai, London" class="w-full bg-slate-50 border border-slate-300 focus:border-gold-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none transition" value="Jeddah">
                </div>
            `;
        } else if (tab === 'visit') {
            visitBtn.className = 'tab-btn flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition text-navy-800 bg-white shadow-sm';
            inquiryTypeInput.value = 'Visit Visa Inquiry';
            dynamicFields.innerHTML = `
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Your City</label>
                    <input type="text" id="hero-departure" placeholder="e.g. Lahore" class="w-full bg-slate-50 border border-slate-300 focus:border-gold-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none transition" value="Lahore">
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Target Country</label>
                    <select id="hero-details" class="w-full bg-slate-50 border border-slate-300 focus:border-gold-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none transition font-medium">
                        <option>Dubai / UAE 30-60 Days Visa</option>
                        <option>Saudi Arabia 1-Year Tourist Visa</option>
                        <option>Turkey Visit Visa File</option>
                        <option>UK / Schengen Europe File Support</option>
                        <option>Malaysia / Thailand Tourist Visa</option>
                    </select>
                </div>
            `;
        }
    };

    /* ---------- Hero Inquiry Form Submission ---------- */
    const heroForm = document.getElementById('hero-inquiry-form');
    if (heroForm) {
        heroForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitter = e.submitter ? e.submitter.value : 'whatsapp';

            const inquiryType = document.getElementById('inquiry-type').value;
            const name = document.getElementById('hero-name').value;
            const phone = document.getElementById('hero-phone').value;
            const departure = document.getElementById('hero-departure')?.value || 'N/A';
            const details = document.getElementById('hero-details')?.value || 'N/A';
            const date = document.getElementById('hero-date').value || 'Flexible';
            const passengers = document.getElementById('hero-passengers').value;

            const text = `*New Inquiry on SafarPro Website*\n\n` +
                         `*Inquiry Type:* ${inquiryType}\n` +
                         `*Name:* ${name}\n` +
                         `*Phone:* ${phone}\n` +
                         `*From / Origin:* ${departure}\n` +
                         `*Details / Destination:* ${details}\n` +
                         `*Travel Date:* ${date}\n` +
                         `*Passengers:* ${passengers}`;

            if (submitter === 'whatsapp') {
                window.open(`https://wa.me/923257686657?text=${encodeURIComponent(text)}`, '_blank');
            } else {
                window.location.href = `mailto:tasneemareesha5@gmail.com?subject=${encodeURIComponent('SafarPro Travel Inquiry - ' + inquiryType)}&body=${encodeURIComponent(text)}`;
            }
        });
    }

    /* ---------- Contact Form Submission (contact.html only) ---------- */
    const contactForm = document.getElementById('contact-form');
    let selectedSubmitTarget = 'whatsapp';
    window.setSubmitTarget = function (target) { selectedSubmitTarget = target; };

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const service = document.getElementById('contact-service').value;
            const message = document.getElementById('contact-message').value;

            const text = `*New Inquiry Message - SafarPro*\n\n` +
                         `*Name:* ${name}\n` +
                         `*Phone:* ${phone}\n` +
                         `*Service Required:* ${service}\n` +
                         `*Message:* ${message}`;

            if (selectedSubmitTarget === 'whatsapp') {
                window.open(`https://wa.me/923257686657?text=${encodeURIComponent(text)}`, '_blank');
            } else {
                window.location.href = `mailto:tasneemareesha5@gmail.com?subject=${encodeURIComponent('Inquiry: ' + service)}&body=${encodeURIComponent(text)}`;
            }
        });
    }
});

/* ---------- Direct Booking Helpers (used across pages) ---------- */
function bookSpecificPackage(packageName) {
    const text = `Hello SafarPro! I am interested in booking details for: *${packageName}*.`;
    window.open(`https://wa.me/923257686657?text=${encodeURIComponent(text)}`, '_blank');
}

function bookVisa(visaType) {
    const text = `Hello SafarPro! I want to apply for: *${visaType}*. Please share details.`;
    window.open(`https://wa.me/923257686657?text=${encodeURIComponent(text)}`, '_blank');
}

function bookFlight(route) {
    const text = `Hello SafarPro! Please share the flight ticket rates for: *${route}*.`;
    window.open(`https://wa.me/923257686657?text=${encodeURIComponent(text)}`, '_blank');
}
