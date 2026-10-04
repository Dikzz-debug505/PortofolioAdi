/* ========== Portfolio Enhance — i18n + polish ========== */
(function () {
  'use strict';

  const dict = {
    id: {
      'pre.loading': 'Menyiapkan portofolio',
      'nav.about': 'Tentang',
      'nav.work': 'Karya',
      'nav.skills': 'Keahlian',
      'nav.contact': 'Kontak',
      'hero.eyebrow': 'Portofolio — Adi Ilyas Javarona',
      'hero.line1': 'Creative Developer,',
      'hero.line2': 'merangkai ide jadi',
      'hero.line3': 'karya nyata.',
      'hero.sub': 'Pelajar yang membangun kebiasaan berpikir kreatif dan inovatif lewat prompt engineering dan eksplorasi teknologi sehari-hari.',
      'hero.scroll': 'Scroll untuk masuk',
      'chip.about.title': 'Tentang Saya',
      'chip.about.desc': 'Pelajar, anak kedua dari dua bersaudara, suka bereksperimen.',
      'chip.work.title': 'Karya',
      'chip.work.desc': 'Proyek yang sudah dan sedang dikembangkan.',
      'chip.skills.title': 'Keahlian',
      'chip.skills.desc': 'Prompt engineering, kreativitas, dan inovasi.',
      'chip.contact.title': 'Kontak',
      'chip.contact.desc': 'Mari terhubung dan berkolaborasi.',
      'about.label': 'Tentang Saya',
      'about.title': 'Adi Ilyas Javarona, mencari bentuk lewat rasa ingin tahu.',
      'about.p1': 'Saat ini masih menempuh pendidikan di sebuah sekolah swasta, sebagai anak kedua dari dua bersaudara. Dari situ tumbuh kebiasaan mengamati, mencoba, dan memperbaiki — pelan-pelan membentuk cara berpikir seorang Creative Developer.',
      'about.p2': 'Ketertarikan pada teknologi bermula dari rasa penasaran sederhana: bagaimana sebuah ide bisa berubah jadi sesuatu yang bisa dipakai orang lain. Dari situ lahir kebiasaan bereksperimen dengan prompt engineering dan membangun tools kecil yang berguna.',
      'about.cta': 'Lihat karya',
      'about.stat1': 'Bersaudara',
      'about.stat2': 'Proyek aktif',
      'about.stat3': 'Rasa ingin tahu',
      'work.label': 'Karya',
      'work.live': 'Live',
      'work.soon': 'Segera',
      'work.p1.desc': 'Grup Telegram Tools & Script Mobile Legends. Kumpulan tools praktis dan script untuk MLBB.',
      'work.p2.title': 'Prompt Lab',
      'work.p2.meta': 'Eksperimen AI',
      'work.p2.desc': 'Ruang eksperimen prompt engineering — koleksi teknik dan pola yang terus dikembangkan.',
      'work.p3.title': 'Creative Tools',
      'work.p3.meta': 'Dalam pengembangan',
      'work.p3.desc': 'Serangkaian tools kreatif kecil untuk membantu proses ideasi dan eksekusi.',
      'skills.label': 'Keahlian',
      'skills.title': 'Tiga kekuatan yang terus diasah setiap hari.',
      'skills.sub': 'Bukan sekadar daftar skill — ini cara berpikir yang dipakai di setiap proyek, dari ide awal sampai jadi sesuatu yang bisa dipakai.',
      'skills.s1': 'Merancang instruksi yang tepat agar AI menghasilkan output yang benar-benar berguna.',
      'skills.s2': 'Melihat masalah dari sudut yang tidak biasa, lalu menuangkannya jadi ide konkret.',
      'skills.s3': 'Terus mencoba pendekatan baru dan tidak puas dengan cara yang itu-itu saja.',
      'skills.core': 'Inti',
      'contact.label': 'Kontak',
      'contact.title': 'Mari terhubung.',
      'contact.sub': 'Punya ide, kolaborasi, atau sekadar ingin ngobrol tentang prompt engineering dan kreativitas? Silakan hubungi.',
      'contact.back': 'Kembali ke atas',
      'footer.bio': 'Portofolio pribadi Adi Ilyas Javarona — Creative Developer. Dibangun dengan kreativitas & rasa ingin tahu.',
      'footer.nav': 'Navigasi',
      'footer.work': 'Karya'
    },
    en: {
      'pre.loading': 'Preparing portfolio',
      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Portfolio — Adi Ilyas Javarona',
      'hero.line1': 'Creative Developer,',
      'hero.line2': 'turning ideas into',
      'hero.line3': 'real work.',
      'hero.sub': 'A student building the habit of creative and innovative thinking through prompt engineering and everyday tech exploration.',
      'hero.scroll': 'Scroll to enter',
      'chip.about.title': 'About Me',
      'chip.about.desc': 'Student, second of two siblings, loves to experiment.',
      'chip.work.title': 'Work',
      'chip.work.desc': 'Projects already shipped and currently in progress.',
      'chip.skills.title': 'Skills',
      'chip.skills.desc': 'Prompt engineering, creativity, and innovation.',
      'chip.contact.title': 'Contact',
      'chip.contact.desc': "Let's connect and collaborate.",
      'about.label': 'About Me',
      'about.title': 'Adi Ilyas Javarona, shaping form through curiosity.',
      'about.p1': 'Currently studying at a private school, the second of two siblings. From that grew the habit of observing, trying, and refining — slowly forming the mindset of a Creative Developer.',
      'about.p2': 'Interest in technology began with a simple curiosity: how an idea can become something others can actually use. That led to experimenting with prompt engineering and building small, useful tools.',
      'about.cta': 'View work',
      'about.stat1': 'Siblings',
      'about.stat2': 'Active project',
      'about.stat3': 'Curiosity',
      'work.label': 'Work',
      'work.live': 'Live',
      'work.soon': 'Soon',
      'work.p1.desc': 'Telegram group for Mobile Legends Tools & Scripts. Practical tools and scripts for MLBB.',
      'work.p2.title': 'Prompt Lab',
      'work.p2.meta': 'AI Experiments',
      'work.p2.desc': 'A playground for prompt engineering — techniques and patterns under continuous development.',
      'work.p3.title': 'Creative Tools',
      'work.p3.meta': 'In development',
      'work.p3.desc': 'A series of small creative tools to support ideation and execution.',
      'skills.label': 'Skills',
      'skills.title': 'Three strengths sharpened every day.',
      'skills.sub': 'Not just a skill list — this is the way of thinking used in every project, from first idea to something usable.',
      'skills.s1': 'Crafting precise instructions so AI produces output that is genuinely useful.',
      'skills.s2': 'Seeing problems from unusual angles, then turning them into concrete ideas.',
      'skills.s3': 'Continuously trying new approaches and refusing to settle for the same old ways.',
      'skills.core': 'Core',
      'contact.label': 'Contact',
      'contact.title': "Let's connect.",
      'contact.sub': 'Have an idea, a collaboration, or just want to talk about prompt engineering and creativity? Reach out.',
      'contact.back': 'Back to top',
      'footer.bio': 'Personal portfolio of Adi Ilyas Javarona — Creative Developer. Built with creativity & curiosity.',
      'footer.nav': 'Navigation',
      'footer.work': 'Work'
    }
  };

  let current = localStorage.getItem('adi-lang') || 'id';

  function applyLang(lang) {
    if (!dict[lang]) return;
    current = lang;
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);
    localStorage.setItem('adi-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key] !== undefined) {
        el.textContent = dict[lang][key];
      }
    });

    // Update toggle UI
    document.querySelectorAll('.lang-opt').forEach(opt => {
      opt.classList.toggle('is-active', opt.getAttribute('data-lang') === lang);
    });
  }

  function initLang() {
    applyLang(current);

    const toggle = document.getElementById('langToggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-opt');
      if (!opt) return;
      const lang = opt.getAttribute('data-lang');
      if (lang && lang !== current) applyLang(lang);
    });
  }

  // Run after DOM ready (main.js also waits for this)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLang);
  } else {
    initLang();
  }


  /* ========== Music Toggle ========== */
  function initMusic() {
    const btn = document.getElementById('musicBtn');
    const audio = document.getElementById('bgm');
    if (!btn || !audio) return;

    let playing = false;
    audio.volume = 0.35;

    function setState(on) {
      playing = on;
      btn.classList.toggle('is-playing', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      try {
        if (on) {
          const p = audio.play();
          if (p && p.catch) p.catch(() => { /* autoplay blocked */ setState(false); });
        } else {
          audio.pause();
        }
      } catch (e) { setState(false); }
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      setState(!playing);
    });

    // Respect reduced motion / user preference — start muted
    setState(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
  } else {
    initMusic();
  }

})();