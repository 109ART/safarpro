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

/* ================================================================
   Request a Quote — Popup Modal (Category-based)
   ================================================================ */

// !! IMPORTANT !!
// Replace YOUR_FORM_ID below with the endpoint Formspree gives you
// after you create a form at https://formspree.io (see setup notes).
const QUOTE_FORM_ENDPOINT = "https://formspree.io/f/xjybpqep";

let currentQuoteCategory = 'flight';

function openQuoteModal(category) {
    const modal = document.getElementById('quote-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    selectCategory(category || 'flight');
}

function closeQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

function selectCategory(category) {
    currentQuoteCategory = category;
    const categoryField = document.getElementById('quote-category');
    const tabs = {
        flight: document.getElementById('cat-flight-btn'),
        umrah: document.getElementById('cat-umrah-btn'),
        visa: document.getElementById('cat-visa-btn')
    };
    const groups = {
        flight: document.getElementById('fields-flight'),
        umrah: document.getElementById('fields-umrah'),
        visa: document.getElementById('fields-visa')
    };
    const categoryLabels = {
        flight: 'Flight Tickets',
        umrah: 'Umrah Package',
        visa: 'Visit Visa'
    };

    if (categoryField) categoryField.value = categoryLabels[category] || category;

    Object.keys(tabs).forEach(key => {
        if (!tabs[key] || !groups[key]) return;
        if (key === category) {
            tabs[key].classList.add('gold-gradient-bg', 'text-navy-900', 'shadow');
            tabs[key].classList.remove('text-slate-500');
            groups[key].classList.remove('hidden');
        } else {
            tabs[key].classList.remove('gold-gradient-bg', 'text-navy-900', 'shadow');
            tabs[key].classList.add('text-slate-500');
            groups[key].classList.add('hidden');
        }
    });

    // Only require fields inside the currently visible category group
    ['fields-flight', 'fields-umrah', 'fields-visa'].forEach(id => {
        const group = document.getElementById(id);
        if (!group) return;
        const isVisible = !group.classList.contains('hidden');
        group.querySelectorAll('input, select').forEach(el => {
            if (el.type === 'hidden' || el.readOnly) return;
            el.required = isVisible;
        });
    });

    // Re-apply trip type visuals if flight tab is active
    if (category === 'flight') {
        const tripTypeField = document.getElementById('quote-trip-type');
        selectTripType(tripTypeField && tripTypeField.value === 'Return' ? 'return' : 'oneway');
    }
}

function selectTripType(type) {
    const oneWayBtn = document.getElementById('trip-oneway-btn');
    const returnBtn = document.getElementById('trip-return-btn');
    const returnDateWrap = document.getElementById('return-date-wrap');
    const returnDateInput = document.getElementById('quote-return-date');
    const tripTypeField = document.getElementById('quote-trip-type');

    if (!oneWayBtn || !returnBtn || !returnDateWrap) return;

    if (type === 'return') {
        tripTypeField.value = 'Return';
        returnBtn.classList.add('gold-gradient-bg', 'text-navy-900');
        returnBtn.classList.remove('bg-slate-100', 'text-slate-600');
        oneWayBtn.classList.remove('gold-gradient-bg', 'text-navy-900');
        oneWayBtn.classList.add('bg-slate-100', 'text-slate-600');
        returnDateWrap.classList.remove('hidden');
        if (returnDateInput) returnDateInput.required = true;
    } else {
        tripTypeField.value = 'One Way';
        oneWayBtn.classList.add('gold-gradient-bg', 'text-navy-900');
        oneWayBtn.classList.remove('bg-slate-100', 'text-slate-600');
        returnBtn.classList.remove('gold-gradient-bg', 'text-navy-900');
        returnBtn.classList.add('bg-slate-100', 'text-slate-600');
        returnDateWrap.classList.add('hidden');
        if (returnDateInput) { returnDateInput.required = false; returnDateInput.value = ''; }
    }
}

function adjustPassengerCount(fieldId, delta, min, max) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    let value = parseInt(input.value || '0', 10) + delta;
    value = Math.max(min, Math.min(max, value));
    input.value = value;
}

function resetQuoteForm() {
    const form = document.getElementById('quote-form');
    if (!form) return;
    form.reset();
    ['flight-adults', 'umrah-adults', 'visa-applicants'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 1;
    });
    ['flight-children', 'umrah-children'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = 0;
    });
    selectTripType('oneway');
    selectCategory(currentQuoteCategory);
}

document.addEventListener('DOMContentLoaded', function () {
    const quoteForm = document.getElementById('quote-form');
    const quoteStatus = document.getElementById('quote-form-status');
    const quoteSubmitBtn = document.getElementById('quote-submit-btn');

    // Initialize default category state on page load (in case modal exists on this page)
    if (document.getElementById('quote-modal')) {
        selectCategory('flight');
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (quoteStatus) {
                quoteStatus.textContent = '';
                quoteStatus.className = 'text-xs font-semibold mt-2 text-center';
            }
            if (quoteSubmitBtn) {
                quoteSubmitBtn.disabled = true;
                quoteSubmitBtn.textContent = 'Sending...';
            }

            const formData = new FormData(quoteForm);

            fetch(QUOTE_FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    if (quoteStatus) {
                        quoteStatus.textContent = "Thank you! Your request has been sent — we'll contact you shortly.";
                        quoteStatus.classList.add('text-emerald-600');
                    }
                    resetQuoteForm();
                    setTimeout(closeQuoteModal, 2500);
                } else {
                    throw new Error('Submission failed');
                }
            })
            .catch(() => {
                if (quoteStatus) {
                    quoteStatus.textContent = "Something went wrong. Please try again or WhatsApp us directly.";
                    quoteStatus.classList.add('text-red-500');
                }
            })
            .finally(() => {
                if (quoteSubmitBtn) {
                    quoteSubmitBtn.disabled = false;
                    quoteSubmitBtn.textContent = 'Send Request';
                }
            });
        });
    }

    // Close modal when clicking the backdrop
    const quoteModal = document.getElementById('quote-modal');
    if (quoteModal) {
        quoteModal.addEventListener('click', function (e) {
            if (e.target === quoteModal) closeQuoteModal();
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeQuoteModal();
    });
});