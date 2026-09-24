/**
 * MY DICT - Modern Thai-English PWA Translator & Dictionary
 */

// Daily Vocabulary Dataset
const DAILY_WORDS = [
  { word: 'Perseverance', ipa: '/ˌpɜː.sɪˈvɪə.rəns/', pos: 'noun', meaning: 'ความเพียรพยายาม, ความมุมานะ', example: 'Success requires perseverance and dedication.' },
  { word: 'Serendipity', ipa: '/ˌser.ənˈdɪp.ə.ti/', pos: 'noun', meaning: 'การพบเจอสิ่งดีๆ โดยบังเอิญ', example: 'Finding this cozy cafe was pure serendipity.' },
  { word: 'Resilience', ipa: '/rɪˈzɪl.jəns/', pos: 'noun', meaning: 'ความสามารถในการฟื้นตัวจากอุปสรรค', example: 'Courage and resilience will get you through tough times.' },
  { word: 'Eloquent', ipa: '/ˈel.ə.kwənt/', pos: 'adjective', meaning: 'พูดจาฉะฉาน คมคาย สละสลวย', example: 'She delivered an eloquent speech at the ceremony.' },
  { word: 'Ambiguity', ipa: '/ˌæm.bɪˈɡjuː.ə.ti/', pos: 'noun', meaning: 'ความคลุมเครือ, ความกำกวม', example: 'Avoid ambiguity in your business emails.' },
  { word: 'Empathy', ipa: '/ˈem.pə.θi/', pos: 'noun', meaning: 'ความเข้าอกเข้าใจผู้อื่น', example: 'Empathy is crucial for strong leadership.' },
  { word: 'Ubiquitous', ipa: '/juːˈbɪk.wɪ.təs/', pos: 'adjective', meaning: 'ที่มีอยู่ทุกหนทุกแห่ง', example: 'Smartphones have become ubiquitous in daily life.' }
];

// Curated Useful Everyday Phrases
const PHRASE_CATEGORIES = {
  greetings: {
    name: '💬 ทักทายทั่วไป',
    items: [
      { en: 'How is everything going?', th: 'ช่วงนี้เป็นอย่างไรบ้าง?' },
      { en: 'Nice to meet you!', th: 'ยินดีที่ได้รู้จักครับ/ค่ะ' },
      { en: 'Have a wonderful day!', th: 'ขอให้เป็นวันที่ดีนะ!' },
      { en: 'Thank you for your assistance.', th: 'ขอบคุณสำหรับความช่วยเหลือครับ/ค่ะ' },
      { en: 'I really appreciate your help.', th: 'รู้สึกซาบซึ้งในความช่วยเหลือของคุณมาก' },
      { en: 'Keep in touch!', th: 'ติดต่อกันเรื่อยๆ นะ' }
    ]
  },
  travel: {
    name: '✈️ ท่องเที่ยว & เดินทาง',
    items: [
      { en: 'Where is the nearest train station?', th: 'สถานีรถไฟที่ใกล้ที่สุดอยู่ที่ไหน?' },
      { en: 'How much is the ticket to downtown?', th: 'ตั๋วไปตัวเมืองราคาเท่าไหร่?' },
      { en: 'Could you please take a photo for us?', th: 'ช่วยถ่ายรูปให้พวกเราหน่อยได้ไหมครับ/ค่ะ?' },
      { en: 'I have a hotel reservation under my name.', th: 'ฉันได้จองห้องพักโรงแรมไว้ในชื่อของฉัน' },
      { en: 'Is there free Wi-Fi here?', th: 'ที่นี่มีสัญญาณไวไฟฟรีไหม?' },
      { en: 'Can you show me on the map?', th: 'ช่วยชี้ตำแหน่งในแผนที่ให้ดูหน่อยได้ไหม?' }
    ]
  },
  dining: {
    name: '🍽️ สั่งอาหาร & คาเฟ่',
    items: [
      { en: 'Could we have the menu, please?', th: 'ขอเมนูอาหารหน่อยครับ/ค่ะ' },
      { en: 'What do you recommend?', th: 'มีเมนูอะไรแนะนำบ้างครับ/ค่ะ?' },
      { en: 'Can I have the bill/check, please?', th: 'เช็คบิลด้วยครับ/ค่ะ' },
      { en: 'I am allergic to peanuts.', th: 'ฉันแพ้ถั่วลิสง' },
      { en: 'Can I get this to go / take away?', th: 'ขอสั่งกลับบ้านได้ไหมครับ/ค่ะ?' },
      { en: 'Could I have iced water, please?', th: 'ขอน้ำเปล่าเย็นสักแก้วครับ/ค่ะ' }
    ]
  },
  shopping: {
    name: '🛍️ ช้อปปิ้ง & ซื้อของ',
    items: [
      { en: 'How much does this cost?', th: 'อันนี้ราคาเท่าไหร่?' },
      { en: 'Can you give me a discount?', th: 'ลดราคาให้หน่อยได้ไหมครับ/ค่ะ?' },
      { en: 'Do you accept credit cards?', th: 'รับบัตรเครดิตไหมครับ?' },
      { en: 'Can I try this on?', th: 'ขอลองใส่ตัวนี้ได้ไหมครับ/ค่ะ?' },
      { en: 'Do you have this in a larger size?', th: 'มีไซส์ใหญ่กว่านี้ไหมครับ?' },
      { en: 'I will take this one.', th: 'ฉันเอาชิ้นนี้ครับ/ค่ะ' }
    ]
  },
  emergency: {
    name: '🚨 ฉุกเฉิน & ขอความช่วยเหลือ',
    items: [
      { en: 'Please help me!', th: 'ช่วยฉันด้วยครับ/ค่ะ!' },
      { en: 'I lost my passport and wallet.', th: 'ฉันทำหนังสือเดินทางและกระเป๋าเงินหาย' },
      { en: 'Where is the nearest hospital?', th: 'โรงพยาบาลที่ใกล้ที่สุดอยู่ที่ไหน?' },
      { en: 'Please call an ambulance.', th: 'ช่วยเรียกรถพยาบาลให้หน่อยครับ' },
      { en: 'I am feeling very sick.', th: 'ฉันรู้สึกไม่สบายมาก' },
      { en: 'Where is the police station?', th: 'สถานีตำรวจอยู่ที่ไหน?' }
    ]
  }
};

class MyDictApp {
  constructor() {
    this.currentTab = 'translate';
    this.sourceLang = 'auto'; // 'auto', 'en', 'th'
    this.detectedLang = 'en';
    this.targetLang = 'th';
    this.sourceText = '';
    this.translatedText = '';
    this.phonetic = '';
    this.dictBreakdown = [];
    this.isLoading = false;
    this.isRecording = false;
    this.isSpeaking = false;
    this.activePhraseCategory = 'greetings';
    this.debounceTimer = null;
    this.deferredPrompt = null;
    
    // Stored State
    this.theme = localStorage.getItem('mydict_theme') || 'dark';
    this.savedWords = JSON.parse(localStorage.getItem('mydict_saved') || '[]');
    this.history = JSON.parse(localStorage.getItem('mydict_history') || '[]');
    this.isOnline = navigator.onLine;

    // Pick Word of the day based on date
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    this.wordOfDay = DAILY_WORDS[dayOfYear % DAILY_WORDS.length];

    this.init();
  }

  init() {
    // Apply Theme
    document.documentElement.setAttribute('data-theme', this.theme);

    // Initial Render
    this.render();

    // Event Listeners
    this.setupNetworkListeners();
    this.setupPwaListeners();
    this.setupSpeechRecognition();
  }

  setupNetworkListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.showToast('เชื่อมต่ออินเทอร์เน็ตแล้ว 🟢');
      this.updateOfflineBanner();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.showToast('อยู่ในโหมดออฟไลน์ 🔴');
      this.updateOfflineBanner();
    });
  }

  setupPwaListeners() {
    // Service Worker Registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((err) => {
          console.warn('SW registration failed:', err);
        });
      });
    }

    // Capture install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      const banner = document.getElementById('pwa-install-banner');
      if (banner) banner.style.display = 'flex';
    });

    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
      this.showToast('ติดตั้ง My Dict สำเร็จแล้ว! 🎉');
      const banner = document.getElementById('pwa-install-banner');
      if (banner) banner.style.display = 'none';
    });
  }

  setupSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      this.recognition = new SpeechRec();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;

      this.recognition.onstart = () => {
        this.isRecording = true;
        this.renderRecordingUI();
      };

      this.recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        const textarea = document.getElementById('source-input');
        if (textarea) {
          textarea.value = transcript;
          this.handleInputChange(transcript);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        this.isRecording = false;
        this.renderRecordingUI();
        this.showToast('เกิดข้อผิดพลาดในการรับเสียง หรือไมโครโฟนไม่ได้รับอนุญาต');
      };

      this.recognition.onend = () => {
        this.isRecording = false;
        this.renderRecordingUI();
      };
    }
  }

  toggleSpeechRecognition() {
    if (!this.recognition) {
      this.showToast('เบราว์เซอร์นี้ยังไม่รองรับระบบสั่งงานด้วยเสียง');
      return;
    }

    if (this.isRecording) {
      this.recognition.stop();
    } else {
      // Set language based on active source lang
      const isThai = this.sourceLang === 'th' || (this.sourceLang === 'auto' && /[\u0E00-\u0E7F]/.test(this.sourceText));
      this.recognition.lang = isThai ? 'th-TH' : 'en-US';
      try {
        this.recognition.start();
      } catch (e) {
        console.warn('Recognition start error:', e);
      }
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mydict_theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
    this.renderHeader();
  }

  swapLanguages() {
    const swapBtn = document.getElementById('btn-swap');
    if (swapBtn) {
      swapBtn.classList.add('rotating');
      setTimeout(() => swapBtn.classList.remove('rotating'), 300);
    }

    if (this.sourceLang === 'auto') {
      // If was auto, switch based on detected language
      if (this.detectedLang === 'th') {
        this.sourceLang = 'en';
        this.targetLang = 'th';
      } else {
        this.sourceLang = 'th';
        this.targetLang = 'en';
      }
    } else if (this.sourceLang === 'en') {
      this.sourceLang = 'th';
      this.targetLang = 'en';
    } else {
      this.sourceLang = 'en';
      this.targetLang = 'th';
    }

    // Swap text if both exist
    if (this.translatedText && this.sourceText) {
      const prevSource = this.sourceText;
      this.sourceText = this.translatedText;
      const textarea = document.getElementById('source-input');
      if (textarea) textarea.value = this.sourceText;
      this.executeTranslation(this.sourceText);
    } else {
      this.renderLangBar();
    }
  }

  setSourceLanguage(lang) {
    if (this.sourceLang === lang) return;
    this.sourceLang = lang;
    this.targetLang = lang === 'th' ? 'en' : 'th';
    this.renderLangBar();
    if (this.sourceText.trim()) {
      this.executeTranslation(this.sourceText);
    }
  }

  handleInputChange(text) {
    this.sourceText = text;
    const charCountEl = document.getElementById('char-count');
    if (charCountEl) charCountEl.textContent = `${text.length} ตัวอักษร`;

    clearTimeout(this.debounceTimer);

    if (!text.trim()) {
      this.translatedText = '';
      this.phonetic = '';
      this.dictBreakdown = [];
      this.renderResultBox();
      return;
    }

    // Debounce translation
    this.debounceTimer = setTimeout(() => {
      this.executeTranslation(text);
    }, 600);
  }

  async executeTranslation(text) {
    const query = text.trim();
    if (!query) return;

    this.isLoading = true;
    this.renderResultBox();

    // Check if offline
    if (!navigator.onLine) {
      // Check if word is already in saved/history
      const cached = this.history.find(h => h.query.toLowerCase() === query.toLowerCase());
      if (cached) {
        this.translatedText = cached.translation;
        this.phonetic = cached.phonetic || '';
        this.dictBreakdown = cached.dictBreakdown || [];
        this.isLoading = false;
        this.renderResultBox();
        this.showToast('ดึงข้อมูลจากประวัติ (ออฟไลน์)');
        return;
      }
      this.isLoading = false;
      this.translatedText = '⚠️ กำลังออฟไลน์ ไม่สามารถแปลคำศัพท์ใหม่ได้ โปรดเชื่อมต่ออินเทอร์เน็ต';
      this.renderResultBox();
      return;
    }

    // Language detection heuristic
    const hasThaiChars = /[\u0E00-\u0E7F]/.test(query);
    let sl = this.sourceLang;
    let tl = this.targetLang;

    if (sl === 'auto') {
      sl = 'auto';
      tl = hasThaiChars ? 'en' : 'th';
    }

    try {
      // Google GTX Translation API
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&dt=bd&dt=rm&q=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error('API response was not ok');

      const data = await response.json();

      // Extract translation
      let translation = '';
      if (data[0] && Array.isArray(data[0])) {
        translation = data[0].map(item => item[0]).filter(Boolean).join('');
      }

      // Detected language
      if (data[2]) {
        this.detectedLang = data[2];
      }

      // Phonetic / Transliteration
      let phonetic = '';
      if (data[0] && data[0][data[0].length - 1] && data[0][data[0].length - 1][3]) {
        phonetic = data[0][data[0].length - 1][3];
      }

      // Dictionary Breakdown (parts of speech & alternative translations)
      let dictBreakdown = [];
      if (data[1] && Array.isArray(data[1])) {
        dictBreakdown = data[1].map(item => ({
          pos: item[0], // noun, verb, adjective
          terms: item[1] || []
        }));
      }

      this.translatedText = translation || 'ไม่พบผลการแปล';
      this.phonetic = phonetic;
      this.dictBreakdown = dictBreakdown;

      // Save to history
      this.saveToHistory(query, this.translatedText, phonetic, dictBreakdown, this.detectedLang, tl);

    } catch (err) {
      console.warn('GTX translation failed, trying fallback...', err);
      // Fallback: MyMemory API
      try {
        const fallbackPair = hasThaiChars ? 'th|en' : 'en|th';
        const fallbackUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=${fallbackPair}`;
        const fbRes = await fetch(fallbackUrl);
        const fbData = await fbRes.json();
        if (fbData?.responseData?.translatedText) {
          this.translatedText = fbData.responseData.translatedText;
          this.phonetic = '';
          this.dictBreakdown = [];
          this.saveToHistory(query, this.translatedText, '', [], hasThaiChars ? 'th' : 'en', hasThaiChars ? 'en' : 'th');
        } else {
          this.translatedText = 'เกิดข้อผิดพลาดในการแปล กรุณาลองใหม่อีกครั้ง';
        }
      } catch (fbErr) {
        this.translatedText = 'ไม่สามารถเชื่อมต่อระบบแปลภาษาได้ในขณะนี้';
      }
    } finally {
      this.isLoading = false;
      this.renderResultBox();
      this.renderLangBar();
    }
  }

  saveToHistory(query, translation, phonetic, dictBreakdown, from, to) {
    if (!query || !translation) return;

    // Remove duplicates
    this.history = this.history.filter(h => h.query.toLowerCase() !== query.toLowerCase());

    // Prepend new item
    this.history.unshift({
      id: Date.now(),
      query,
      translation,
      phonetic,
      dictBreakdown,
      from,
      to,
      timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
    });

    // Keep max 50 items
    if (this.history.length > 50) this.history.pop();
    localStorage.setItem('mydict_history', JSON.stringify(this.history));
  }

  toggleFavorite() {
    if (!this.sourceText || !this.translatedText) return;

    const existingIndex = this.savedWords.findIndex(item => item.query.toLowerCase() === this.sourceText.trim().toLowerCase());

    if (existingIndex >= 0) {
      this.savedWords.splice(existingIndex, 1);
      this.showToast('ลบออกจากคำศัพท์ที่บันทึกแล้ว');
    } else {
      this.savedWords.unshift({
        id: Date.now(),
        query: this.sourceText.trim(),
        translation: this.translatedText.trim(),
        phonetic: this.phonetic,
        date: new Date().toLocaleDateString('th-TH')
      });
      this.showToast('บันทึกคำศัพท์แล้ว ⭐');
    }

    localStorage.setItem('mydict_saved', JSON.stringify(this.savedWords));
    this.renderResultBox();
  }

  isSaved(query) {
    return this.savedWords.some(item => item.query.toLowerCase() === query.trim().toLowerCase());
  }

  speak(text, lang) {
    if (!('speechSynthesis' in window)) {
      this.showToast('เบราว์เซอร์นี้ไม่รองรับระบบเสียงพูด');
      return;
    }

    if (this.isSpeaking) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Choose appropriate language voice
    if (lang === 'th' || (!lang && /[\u0E00-\u0E7F]/.test(text))) {
      utterance.lang = 'th-TH';
      utterance.rate = 0.95;
    } else {
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      const speakerBtn = document.getElementById('btn-speak-target');
      if (speakerBtn) speakerBtn.classList.add('speaking');
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      const speakerBtn = document.getElementById('btn-speak-target');
      if (speakerBtn) speakerBtn.classList.remove('speaking');
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      const speakerBtn = document.getElementById('btn-speak-target');
      if (speakerBtn) speakerBtn.classList.remove('speaking');
    };

    window.speechSynthesis.speak(utterance);
  }

  copyToClipboard(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('คัดลอกลงคลิปบอร์ดแล้ว 📋');
    }).catch(() => {
      this.showToast('ไม่สามารถคัดลอกได้');
    });
  }

  clearInput() {
    this.sourceText = '';
    this.translatedText = '';
    this.phonetic = '';
    this.dictBreakdown = [];
    const textarea = document.getElementById('source-input');
    if (textarea) {
      textarea.value = '';
      textarea.focus();
    }
    const charCountEl = document.getElementById('char-count');
    if (charCountEl) charCountEl.textContent = '0 ตัวอักษร';
    this.renderResultBox();
  }

  usePhrase(text) {
    this.currentTab = 'translate';
    this.sourceText = text;
    this.render();
    const textarea = document.getElementById('source-input');
    if (textarea) textarea.value = text;
    this.executeTranslation(text);
  }

  switchTab(tab) {
    if (this.currentTab === tab) return;
    this.currentTab = tab;
    this.render();
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 2600);
  }

  promptPwaInstall() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        this.showToast('กำลังติดตั้ง My Dict...');
      }
      this.deferredPrompt = null;
      const banner = document.getElementById('pwa-install-banner');
      if (banner) banner.style.display = 'none';
    });
  }

  dismissInstallBanner() {
    const banner = document.getElementById('pwa-install-banner');
    if (banner) banner.style.display = 'none';
  }

  deleteHistoryItem(id, event) {
    if (event) event.stopPropagation();
    this.history = this.history.filter(h => h.id !== id);
    localStorage.setItem('mydict_history', JSON.stringify(this.history));
    this.render();
    this.showToast('ลบรายการประวัติแล้ว');
  }

  clearAllHistory() {
    if (confirm('คุณต้องการล้างประวัติการแปลทั้งหมดใช่หรือไม่?')) {
      this.history = [];
      localStorage.removeItem('mydict_history');
      this.render();
      this.showToast('ล้างประวัติทั้งหมดแล้ว');
    }
  }

  deleteSavedItem(id, event) {
    if (event) event.stopPropagation();
    this.savedWords = this.savedWords.filter(s => s.id !== id);
    localStorage.setItem('mydict_saved', JSON.stringify(this.savedWords));
    this.render();
    this.showToast('ลบออกจากคำศัพท์ที่บันทึกแล้ว');
  }

  // ==========================================
  // RENDER METHODS
  // ==========================================

  render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      <div id="toast-container" class="toast-container"></div>
      
      <div id="offline-banner" class="offline-banner" style="display: ${this.isOnline ? 'none' : 'flex'}">
        <span>⚠️ ออฟไลน์: กำลังเปิดโหมดประวัติ & คำศัพท์ที่บันทึกไว้</span>
      </div>

      <!-- PWA Install Banner -->
      <div id="pwa-install-banner" class="pwa-install-banner" style="display: ${this.deferredPrompt ? 'flex' : 'none'}">
        <div class="pwa-info">
          <div class="brand-icon" style="width: 34px; height: 34px;">
            <img src="/logo.png" alt="My Dict" />
          </div>
          <div class="pwa-info-text">
            <strong>ติดตั้ง My Dict บนหน้าจอ</strong>
            <span>เข้าใช้งานไว ใช้งานได้โดยไม่ต้องเปิดเบราว์เซอร์</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <button id="btn-install-pwa" class="btn-install">ติดตั้ง</button>
          <button id="btn-dismiss-pwa" class="btn-dismiss" title="ปิด">×</button>
        </div>
      </div>

      <!-- Header -->
      <header class="app-header">
        <a href="#" class="brand" id="brand-link">
          <div class="brand-icon">
            <img src="/logo.png" alt="My Dict Logo" />
          </div>
          <div class="brand-text">
            <h1>My Dict <span class="brand-badge">PWA</span></h1>
          </div>
        </a>
        <div class="header-actions">
          <button id="btn-theme" class="btn-icon-round" title="เปลี่ยนธีม">
            ${this.theme === 'dark' ? 
              `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` : 
              `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`}
          </button>
        </div>
      </header>

      <!-- Main Tab Content -->
      <main class="app-content">
        ${this.renderActiveTabContent()}
      </main>

      <!-- Bottom Navigation -->
      <nav class="bottom-nav">
        <div class="nav-inner">
          <button class="nav-tab ${this.currentTab === 'translate' ? 'active' : ''}" data-tab="translate">
            <svg viewBox="0 0 24 24" fill="none"><path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/></svg>
            <span>แปลภาษา</span>
          </button>
          <button class="nav-tab ${this.currentTab === 'phrases' ? 'active' : ''}" data-tab="phrases">
            <svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>ประโยคใช้บ่อย</span>
          </button>
          <button class="nav-tab ${this.currentTab === 'saved' ? 'active' : ''}" data-tab="saved">
            <svg viewBox="0 0 24 24" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>บันทึก (${this.savedWords.length})</span>
          </button>
          <button class="nav-tab ${this.currentTab === 'history' ? 'active' : ''}" data-tab="history">
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>ประวัติ</span>
          </button>
        </div>
      </nav>
    `;

    this.bindEvents();
  }

  renderActiveTabContent() {
    switch (this.currentTab) {
      case 'translate':
        return this.renderTranslateTab();
      case 'phrases':
        return this.renderPhrasesTab();
      case 'saved':
        return this.renderSavedTab();
      case 'history':
        return this.renderHistoryTab();
      default:
        return this.renderTranslateTab();
    }
  }

  renderTranslateTab() {
    return `
      <!-- Language Selector Bar -->
      <div id="lang-selector-container">
        ${this.getLangBarHtml()}
      </div>

      <!-- Source Input Card -->
      <div class="card-box">
        <div class="input-header">
          <div class="lang-indicator">
            <span class="pulse-dot"></span>
            <span id="detected-indicator">${this.getSourceLangLabel()}</span>
          </div>
          ${this.sourceText ? `
            <button id="btn-clear" class="tool-btn" title="ล้างข้อความ">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          ` : ''}
        </div>

        <div id="recording-indicator-container"></div>

        <textarea
          id="source-input"
          class="source-textarea"
          placeholder="พิมพ์คำศัพท์หรือประโยคที่นี่..."
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >${this.sourceText}</textarea>

        <div class="input-toolbar">
          <div class="tools-left">
            <button id="btn-mic" class="tool-btn ${this.isRecording ? 'active' : ''}" title="สั่งงานด้วยเสียง">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            </button>
            <button id="btn-speak-source" class="tool-btn" title="ฟังการออกเสียง">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            </button>
            <span id="char-count" class="char-counter">${this.sourceText.length} ตัวอักษร</span>
          </div>

          <button id="btn-translate-manual" class="btn-translate-action">
            <span>แปลทันที</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>

      <!-- Result Card -->
      <div id="result-box-container">
        ${this.getResultBoxHtml()}
      </div>

      <!-- Word of the Day Section -->
      <div class="section-header">
        <span class="section-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          ศัพท์เด่นประจำวัน (Word of the Day)
        </span>
      </div>
      <div class="wod-card" id="wod-card-trigger">
        <div class="wod-info">
          <span class="wod-badge">★ DAILY VOCAB • ${this.wordOfDay.pos}</span>
          <div class="wod-word">
            ${this.wordOfDay.word}
            <span class="phonetic-transcription">${this.wordOfDay.ipa}</span>
          </div>
          <div class="wod-meaning">${this.wordOfDay.meaning}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">
            "${this.wordOfDay.example}"
          </div>
        </div>
        <button class="btn-icon-round" id="btn-wod-speak" title="ฟังเสียง">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
    `;
  }

  getLangBarHtml() {
    return `
      <div class="lang-selector-bar">
        <button class="lang-btn ${this.sourceLang === 'auto' ? 'active' : ''}" id="btn-lang-auto">
          <span>ตรวจจับอัตโนมัติ</span>
        </button>
        <button class="lang-btn ${this.sourceLang === 'en' ? 'active' : ''}" id="btn-lang-en">
          <span class="lang-flag">🇬🇧</span>
          <span>อังกฤษ</span>
        </button>
        <button id="btn-swap" class="btn-swap" title="สลับภาษา">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </button>
        <button class="lang-btn ${this.sourceLang === 'th' ? 'active' : ''}" id="btn-lang-th">
          <span class="lang-flag">🇹🇭</span>
          <span>ไทย</span>
        </button>
      </div>
    `;
  }

  getResultBoxHtml() {
    const isBookmarked = this.isSaved(this.sourceText);
    const targetLangCode = this.getTargetLangCode();

    return `
      <div class="result-card">
        <div class="result-header">
          <div class="result-target-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span>คำแปล (${targetLangCode === 'th' ? 'ภาษาไทย' : 'English'})</span>
          </div>
          ${this.isLoading ? '<span class="spinner"></span>' : ''}
        </div>

        <div class="result-body">
          ${this.translatedText ? `
            <div class="result-text">${this.escapeHtml(this.translatedText)}</div>
            ${this.phonetic ? `<span class="phonetic-transcription">${this.escapeHtml(this.phonetic)}</span>` : ''}
            
            ${this.dictBreakdown.length > 0 ? `
              <div class="dict-breakdown">
                ${this.dictBreakdown.map(item => `
                  <div class="dict-pos-group">
                    <span class="pos-tag">${item.pos}</span>
                    <div class="synonym-chips">
                      ${item.terms.slice(0, 8).map(term => `
                        <button class="chip" data-search="${this.escapeHtml(term)}">${this.escapeHtml(term)}</button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          ` : `
            <div class="result-text empty">ผลการแปลจะปรากฏที่นี่...</div>
          `}
        </div>

        ${this.translatedText ? `
          <div class="result-toolbar">
            <div class="tools-left">
              <button id="btn-speak-target" class="tool-btn" title="ฟังเสียงคำแปล">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
              <button id="btn-copy-result" class="tool-btn" title="คัดลอกคำแปล">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <button id="btn-bookmark" class="tool-btn ${isBookmarked ? 'active' : ''}" title="บันทึกคำศัพท์">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </button>
            </div>
            <span class="status-badge">
              <span>● Cloud Sync</span>
            </span>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderPhrasesTab() {
    const currentCategory = PHRASE_CATEGORIES[this.activePhraseCategory] || PHRASE_CATEGORIES.greetings;

    return `
      <div class="section-header">
        <span class="section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          คลังประโยคสำเร็จรูปในชีวิตประจำวัน
        </span>
      </div>

      <!-- Categories Pills -->
      <div class="phrase-categories">
        ${Object.keys(PHRASE_CATEGORIES).map(key => `
          <button class="category-tab ${this.activePhraseCategory === key ? 'active' : ''}" data-cat="${key}">
            ${PHRASE_CATEGORIES[key].name}
          </button>
        `).join('')}
      </div>

      <!-- Phrases Grid -->
      <div class="phrase-grid">
        ${currentCategory.items.map(item => `
          <div class="phrase-item" data-phrase="${this.escapeHtml(item.en)}">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <span class="phrase-en">${this.escapeHtml(item.en)}</span>
              <button class="tool-btn" style="width: 28px; height: 28px;" data-speak-phrase="${this.escapeHtml(item.en)}" title="ฟังเสียง">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
            </div>
            <span class="phrase-th">${this.escapeHtml(item.th)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderSavedTab() {
    return `
      <div class="section-header">
        <span class="section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          คำศัพท์ที่บันทึกไว้ (${this.savedWords.length})
        </span>
      </div>

      ${this.savedWords.length === 0 ? `
        <div class="list-empty-state">
          <svg viewBox="0 0 24 24" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <p>ยังไม่มีคำศัพท์ที่บันทึกไว้</p>
          <span style="font-size: 0.8rem;">กดไอคอนดาว ⭐ ที่หน้าผลการแปลเพื่อบันทึกคำศัพท์ไว้ท่องจำ</span>
        </div>
      ` : `
        <div class="list-container">
          ${this.savedWords.map(item => `
            <div class="list-item-card" data-use-word="${this.escapeHtml(item.query)}">
              <div class="list-item-content">
                <div class="list-item-query">
                  ${this.escapeHtml(item.query)}
                  ${item.phonetic ? `<span class="phonetic-transcription" style="font-size: 0.75rem; margin-left: 6px;">${this.escapeHtml(item.phonetic)}</span>` : ''}
                </div>
                <div class="list-item-translation">${this.escapeHtml(item.translation)}</div>
                <div class="list-item-meta">บันทึกเมื่อ: ${item.date || 'ล่าสุด'}</div>
              </div>
              <div class="list-item-actions">
                <button class="tool-btn" data-speak-item="${this.escapeHtml(item.query)}" title="ฟังเสียง">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                </button>
                <button class="tool-btn" data-delete-saved="${item.id}" title="ลบคำศัพท์นี้">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;
  }

  renderHistoryTab() {
    return `
      <div class="section-header">
        <span class="section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ประวัติการแปลล่าสุด
        </span>
        ${this.history.length > 0 ? `
          <button id="btn-clear-history" class="btn-dismiss" style="font-size: 0.8rem; color: var(--accent-rose); cursor: pointer;">
            ล้างประวัติทั้งหมด
          </button>
        ` : ''}
      </div>

      ${this.history.length === 0 ? `
        <div class="list-empty-state">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <p>ยังไม่มีประวัติการแปล</p>
          <span style="font-size: 0.8rem;">เมื่อคุณค้นหาหรือแปลคำศัพท์ ประวัติจะแสดงที่นี่โดยอัตโนมัติ</span>
        </div>
      ` : `
        <div class="list-container">
          ${this.history.map(item => `
            <div class="list-item-card" data-use-word="${this.escapeHtml(item.query)}">
              <div class="list-item-content">
                <div class="list-item-query">${this.escapeHtml(item.query)}</div>
                <div class="list-item-translation">${this.escapeHtml(item.translation)}</div>
                <div class="list-item-meta">${item.from.toUpperCase()} ➔ ${item.to.toUpperCase()} • ${item.timestamp}</div>
              </div>
              <div class="list-item-actions">
                <button class="tool-btn" data-delete-history="${item.id}" title="ลบรายการนี้">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;
  }

  renderLangBar() {
    const container = document.getElementById('lang-selector-container');
    if (container) {
      container.innerHTML = this.getLangBarHtml();
      this.bindLangBarEvents();
    }
  }

  renderResultBox() {
    const container = document.getElementById('result-box-container');
    if (container) {
      container.innerHTML = this.getResultBoxHtml();
      this.bindResultEvents();
    }
  }

  renderRecordingUI() {
    const container = document.getElementById('recording-indicator-container');
    const micBtn = document.getElementById('btn-mic');
    if (micBtn) {
      if (this.isRecording) {
        micBtn.classList.add('active');
      } else {
        micBtn.classList.remove('active');
      }
    }

    if (container) {
      if (this.isRecording) {
        container.innerHTML = `
          <div class="mic-recording-indicator">
            <div class="wave-bars">
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
              <span class="wave-bar"></span>
            </div>
            <span>กำลังฟังเสียงพูดของคุณ... (พูดใส่ไมค์ได้เลย)</span>
          </div>
        `;
      } else {
        container.innerHTML = '';
      }
    }
  }

  updateOfflineBanner() {
    const banner = document.getElementById('offline-banner');
    if (banner) {
      banner.style.display = this.isOnline ? 'none' : 'flex';
    }
  }

  // ==========================================
  // EVENT BINDINGS
  // ==========================================

  bindEvents() {
    // Theme Switch
    const themeBtn = document.getElementById('btn-theme');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());

    // PWA Install Button
    const installBtn = document.getElementById('btn-install-pwa');
    if (installBtn) installBtn.addEventListener('click', () => this.promptPwaInstall());

    const dismissBtn = document.getElementById('btn-dismiss-pwa');
    if (dismissBtn) dismissBtn.addEventListener('click', () => this.dismissInstallBanner());

    // Tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        this.switchTab(target);
      });
    });

    if (this.currentTab === 'translate') {
      this.bindTranslateEvents();
    } else if (this.currentTab === 'phrases') {
      this.bindPhrasesEvents();
    } else if (this.currentTab === 'saved') {
      this.bindSavedEvents();
    } else if (this.currentTab === 'history') {
      this.bindHistoryEvents();
    }
  }

  bindTranslateEvents() {
    this.bindLangBarEvents();
    this.bindResultEvents();

    const textarea = document.getElementById('source-input');
    if (textarea) {
      textarea.addEventListener('input', (e) => this.handleInputChange(e.target.value));
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.executeTranslation(this.sourceText);
        }
      });
    }

    const clearBtn = document.getElementById('btn-clear');
    if (clearBtn) clearBtn.addEventListener('click', () => this.clearInput());

    const manualBtn = document.getElementById('btn-translate-manual');
    if (manualBtn) manualBtn.addEventListener('click', () => this.executeTranslation(this.sourceText));

    const micBtn = document.getElementById('btn-mic');
    if (micBtn) micBtn.addEventListener('click', () => this.toggleSpeechRecognition());

    const speakSourceBtn = document.getElementById('btn-speak-source');
    if (speakSourceBtn) {
      speakSourceBtn.addEventListener('click', () => {
        if (this.sourceText) {
          const isThai = this.sourceLang === 'th' || (this.sourceLang === 'auto' && /[\u0E00-\u0E7F]/.test(this.sourceText));
          this.speak(this.sourceText, isThai ? 'th' : 'en');
        }
      });
    }

    // Word of Day
    const wodCard = document.getElementById('wod-card-trigger');
    if (wodCard) {
      wodCard.addEventListener('click', (e) => {
        if (e.target.closest('#btn-wod-speak')) return;
        this.usePhrase(this.wordOfDay.word);
      });
    }

    const wodSpeak = document.getElementById('btn-wod-speak');
    if (wodSpeak) {
      wodSpeak.addEventListener('click', () => {
        this.speak(this.wordOfDay.word, 'en');
      });
    }
  }

  bindLangBarEvents() {
    const autoBtn = document.getElementById('btn-lang-auto');
    if (autoBtn) autoBtn.addEventListener('click', () => this.setSourceLanguage('auto'));

    const enBtn = document.getElementById('btn-lang-en');
    if (enBtn) enBtn.addEventListener('click', () => this.setSourceLanguage('en'));

    const thBtn = document.getElementById('btn-lang-th');
    if (thBtn) thBtn.addEventListener('click', () => this.setSourceLanguage('th'));

    const swapBtn = document.getElementById('btn-swap');
    if (swapBtn) swapBtn.addEventListener('click', () => this.swapLanguages());
  }

  bindResultEvents() {
    const speakTargetBtn = document.getElementById('btn-speak-target');
    if (speakTargetBtn) {
      speakTargetBtn.addEventListener('click', () => {
        if (this.translatedText) {
          const targetCode = this.getTargetLangCode();
          this.speak(this.translatedText, targetCode);
        }
      });
    }

    const copyBtn = document.getElementById('btn-copy-result');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyToClipboard(this.translatedText));
    }

    const bookmarkBtn = document.getElementById('btn-bookmark');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => this.toggleFavorite());
    }

    // Chips click
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-search');
        if (query) this.usePhrase(query);
      });
    });
  }

  bindPhrasesEvents() {
    // Categories
    const catButtons = document.querySelectorAll('.category-tab');
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.activePhraseCategory = btn.getAttribute('data-cat');
        this.render();
      });
    });

    // Phrases
    const phraseItems = document.querySelectorAll('.phrase-item');
    phraseItems.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.closest('[data-speak-phrase]')) return;
        const phrase = item.getAttribute('data-phrase');
        if (phrase) this.usePhrase(phrase);
      });
    });

    // Speak Phrase Button
    const speakButtons = document.querySelectorAll('[data-speak-phrase]');
    speakButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const phrase = btn.getAttribute('data-speak-phrase');
        if (phrase) this.speak(phrase, 'en');
      });
    });
  }

  bindSavedEvents() {
    const cards = document.querySelectorAll('.list-item-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const word = card.getAttribute('data-use-word');
        if (word) this.usePhrase(word);
      });
    });

    const speakButtons = document.querySelectorAll('[data-speak-item]');
    speakButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.getAttribute('data-speak-item');
        if (word) {
          const isThai = /[\u0E00-\u0E7F]/.test(word);
          this.speak(word, isThai ? 'th' : 'en');
        }
      });
    });

    const deleteButtons = document.querySelectorAll('[data-delete-saved]');
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = Number(btn.getAttribute('data-delete-saved'));
        this.deleteSavedItem(id, e);
      });
    });
  }

  bindHistoryEvents() {
    const cards = document.querySelectorAll('.list-item-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        const word = card.getAttribute('data-use-word');
        if (word) this.usePhrase(word);
      });
    });

    const deleteButtons = document.querySelectorAll('[data-delete-history]');
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = Number(btn.getAttribute('data-delete-history'));
        this.deleteHistoryItem(id, e);
      });
    });

    const clearAllBtn = document.getElementById('btn-clear-history');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => this.clearAllHistory());
    }
  }

  // ==========================================
  // HELPERS
  // ==========================================

  getSourceLangLabel() {
    if (this.sourceLang === 'auto') {
      return this.detectedLang === 'th' ? 'ตรวจพบ: ไทย (TH)' : 'ตรวจพบ: อังกฤษ (EN)';
    }
    return this.sourceLang === 'th' ? 'ภาษาไทย (TH)' : 'ภาษาอังกฤษ (EN)';
  }

  getTargetLangCode() {
    if (this.sourceLang === 'auto') {
      const isThai = /[\u0E00-\u0E7F]/.test(this.sourceText);
      return isThai ? 'en' : 'th';
    }
    return this.targetLang;
  }

  escapeHtml(string) {
    if (!string) return '';
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  new MyDictApp();
});
