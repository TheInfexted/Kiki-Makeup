export type Lang = 'zh' | 'en';

export type Bi = { zh: string; en: string };

export type Service = {
  id: string;
  name: Bi;
  price: number;
  note?: Bi;
  group: 'personal' | 'wedding' | 'special' | 'class';
};

export type Style = {
  id: string;
  name: Bi;
  subtitle: Bi;
  lookCount: number;
};

export type FAQ = {
  id: string;
  question: Bi;
  answer: Bi;
};

export const services: Service[] = [
  { id: 'personal-daily', name: { zh: '日常妆', en: 'Daily Makeup' }, price: 238, group: 'personal' },
  { id: 'personal-mummy', name: { zh: '妈咪妆', en: 'Mummy Makeup' }, price: 238, group: 'personal' },
  { id: 'personal-dinner', name: { zh: '晚宴妆', en: 'Dinner Makeup' }, price: 238, group: 'personal' },
  { id: 'personal-concert', name: { zh: '演唱会妆', en: 'Concert Makeup' }, price: 238, group: 'personal' },
  { id: 'personal-photoshoot', name: { zh: '拍摄妆', en: 'Photoshoot Makeup' }, price: 238, group: 'personal' },
  { id: 'personal-bridesmaid', name: { zh: '伴娘妆', en: 'Bridesmaid Makeup' }, price: 238, group: 'personal' },
  { id: 'personal-men', name: { zh: '男士妆', en: 'Men Makeup' }, price: 150, group: 'personal' },
  { id: 'personal-kids', name: { zh: '儿童妆', en: 'Kids Makeup' }, price: 150, group: 'personal' },
  { id: 'wedding-rom', name: { zh: '注册新娘妆', en: 'ROM Bridal' }, price: 288, group: 'wedding' },
  { id: 'wedding-single', name: { zh: '新娘妆 (白天或晚上)', en: 'Bridal Day or Night' }, price: 588, group: 'wedding' },
  { id: 'wedding-full', name: { zh: '新娘妆 (白天+晚上)', en: 'Bridal Day + Night' }, price: 1100, group: 'wedding' },
  { id: 'special-graduate', name: { zh: '毕业妆', en: 'Graduate Makeup' }, price: 218, note: { zh: '需出示学生证', en: 'Student ID required' }, group: 'special' },
  { id: 'special-birthday', name: { zh: '生日妆', en: 'Birthday Makeup' }, price: 218, note: { zh: '生日月份有效,需出示身份证', en: 'Valid in birthday month, IC required' }, group: 'special' },
  { id: 'class-korean', name: { zh: '韩系妆容课程', en: 'Korean Makeup Class' }, price: 288, group: 'class' }
];

export const styles: Style[] = [
  { id: 'natural', name: { zh: '自然轻透', en: 'Natural · Light' }, subtitle: { zh: '日常适合', en: 'Everyday-appropriate' }, lookCount: 10 },
  { id: 'korean', name: { zh: '韩系精致', en: 'Korean · Refined' }, subtitle: { zh: '她的招牌', en: 'Her signature' }, lookCount: 12 },
  { id: 'pure', name: { zh: '纯欲系', en: 'Pure Desire' }, subtitle: { zh: '柔和魅惑', en: 'Soft seductive' }, lookCount: 8 },
  { id: 'clean', name: { zh: '干净氛围感', en: 'Clean Atmosphere' }, subtitle: { zh: '极简氛围', en: 'Minimalist mood' }, lookCount: 7 },
  { id: 'sweet', name: { zh: '甜美可爱', en: 'Sweet · Cute' }, subtitle: { zh: '青春', en: 'Youthful' }, lookCount: 9 },
  { id: 'fairy', name: { zh: '仙气感', en: 'Fairy Vibe' }, subtitle: { zh: '飘渺', en: 'Ethereal' }, lookCount: 6 },
  { id: 'gentle', name: { zh: '温柔气质', en: 'Gentle Temperament' }, subtitle: { zh: '柔雅', en: 'Soft elegance' }, lookCount: 8 },
  { id: 'advanced-fairy', name: { zh: '高级仙气感', en: 'Advanced Fairy' }, subtitle: { zh: '高端飘渺', en: 'High-end ethereal' }, lookCount: 6 }
];

export const faqs: FAQ[] = [
  {
    id: 'book',
    question: { zh: '要怎么预约?', en: 'How do I book?' },
    answer: { zh: '在上方填写预约表单, 我会通过 WhatsApp 确认, 交付 RM100 订金锁定档期。', en: "Fill out the booking form above, I'll confirm via WhatsApp. Pay RM100 deposit to lock your slot." }
  },
  {
    id: 'included',
    question: { zh: '价钱包括什么?', en: "What's included in the price?" },
    answer: { zh: '全包: 妆前护肤、修眉、假睫毛、造型、身体提亮、演出水钻、头饰配件。无隐藏收费。', en: 'Everything: pre-makeup skincare, eyebrow trim, false lashes, hair styling, body whitening, concert gems, and hair accessories. No hidden fees.' }
  },
  {
    id: 'travel',
    question: { zh: '外出服务有交通费吗?', en: 'Are there travel fees for on-site service?' },
    answer: { zh: '是的, 视地区 RM30–80。工作室服务无需交通费。', en: 'Yes, RM30–80 depending on area. Studio service has no travel fee.' }
  },
  {
    id: 'beauty-filter',
    question: { zh: '拍妆会修图美颜吗?', en: 'Will you edit/beautify my photos during the session?' },
    answer: { zh: '所有照片皆原相, 只微调亮度。无重度滤镜, 所见即所得。', en: 'All photos are raw original-camera, only brightness adjusted. No heavy beauty filters. What you see is what you get.' }
  },
  {
    id: 'cancel',
    question: { zh: '可以取消吗?', en: 'What about cancellation?' },
    answer: { zh: '订金不退, 但可提前合理通知改期。', en: 'Deposit is non-refundable, but can be rescheduled with reasonable notice.' }
  }
];

export const ui = {
  site: {
    title: { zh: 'Kiki 化妆工作室', en: 'Kiki Makeup Studio' },
    metaDescription: { zh: '蕉赖韩系新娘 & 个人妆容 · 4 年经验', en: 'Korean-Style Bridal & Personal Makeup in Kepong, KL · 4 years' }
  },
  hero: {
    eyebrow: { zh: 'KIKI · 吉隆坡蕉赖', en: 'KIKI · KEPONG, KL' },
    headline: { zh: '让你的自然美闪耀。', en: 'Let your natural beauty speak.' },
    subhead: { zh: '4 年专注韩系新娘 & 个人妆。', en: '4 years specializing in Korean-style bridal & personal makeup.' },
    ctaPrimary: { zh: '立即预约', en: 'Book Your Slot' },
    ctaSecondary: { zh: '查看作品', en: 'View Portfolio' }
  },
  services: {
    eyebrow: { zh: '服务项目', en: 'SERVICES' },
    title: { zh: '每一款妆,都有它的价。', en: 'Every look, clearly priced.' },
    group: {
      personal: { zh: '个人妆容', en: 'Personal Makeup' },
      wedding: { zh: '新娘妆容', en: 'Wedding Makeup' },
      special: { zh: '特别优惠 (RM218)', en: 'Special Offer (RM218)' },
      class: { zh: '课程', en: 'Class' }
    },
    bookThis: { zh: '预约此项 →', en: 'Book this →' },
    eyeShape: {
      zh: '擅长调整各种眼型:单眼皮、一单一双、三眼皮。',
      en: 'Skilled at adjusting all eye shapes — single eyelid, asymmetric, triple eyelid.'
    },
    footnote: {
      zh: '所有价钱含护肤、假睫毛、造型、配饰。RM100 订金确认档期。外出服务另加交通费 (RM30–80,视地区而定)。',
      en: 'All prices include skincare, false lashes, hair styling, and accessories. RM100 deposit confirms your slot. On-site service has an additional travel fee (RM30–80 depending on area).'
    }
  },
  portfolio: {
    eyebrow: { zh: '作品集 · 8 种风格', en: 'PORTFOLIO · 8 STYLES' },
    title: { zh: '找到你的那一款。', en: 'Find your look.' },
    looksCount: { zh: '款', en: 'looks' },
    close: { zh: '关闭', en: 'Close' }
  },
  booking: {
    eyebrow: { zh: '预约', en: 'BOOK YOUR SLOT' },
    title: { zh: '四步锁定你的档期。', en: "Let's get you on the schedule." },
    progress: { zh: '步骤 {current} / {total}', en: 'Step {current} of {total}' },
    step1: {
      title: { zh: '你想预约哪一项?', en: 'What are you booking for?' }
    },
    step2: {
      title: { zh: '选择日期', en: 'Pick a date' },
      label: { zh: '日期 (最少 3 天后)', en: 'Date (minimum 3 days from today)' },
      error: { zh: '请选择最少 3 天后的日期。', en: 'Please pick a date at least 3 days from today.' }
    },
    step3: {
      title: { zh: '地点', en: 'Where?' },
      studio: { zh: '工作室 (蕉赖)', en: 'Studio (Kepong)' },
      onsite: { zh: '外出服务 (我提供地址)', en: "On-site (I'll provide address)" },
      areaLabel: { zh: '大致区域 / 邮编', en: 'Approximate area / postcode' },
      areaPlaceholder: { zh: '例如:八打灵再也 47301', en: 'e.g., Petaling Jaya 47301' }
    },
    step4: {
      title: { zh: '联络方式', en: 'Your details' },
      name: { zh: '姓名', en: 'Name' },
      phone: { zh: 'WhatsApp 电话 (+60 格式)', en: 'WhatsApp phone (+60 format)' },
      phoneError: { zh: '请输入有效的马来西亚 +60 电话号码。', en: 'Please enter a valid Malaysian +60 phone number.' },
      nameError: { zh: '请输入你的姓名。', en: 'Please enter your name.' }
    },
    back: { zh: '← 上一步', en: '← Back' },
    next: { zh: '下一步 →', en: 'Continue →' },
    submit: { zh: '通过 WhatsApp 发送 →', en: 'Send via WhatsApp →' },
    redirecting: { zh: '正在跳转到 WhatsApp… Kiki 会在 24 小时内回复。', en: 'Redirecting to WhatsApp… Kiki will confirm within 24 hours.' },
    manualLink: { zh: '如未自动跳转,请点击这里。', en: "If nothing happens, tap here."  },
    whatsappGreeting: { zh: 'Hi Kiki!我想预约:', en: "Hi Kiki! I'd like to book:" },
    whatsappFooter: { zh: '发送自 makeup.ninedsales.com', en: 'Sent from makeup.ninedsales.com' },
    labelService: { zh: '服务', en: 'Service' },
    labelDate: { zh: '日期', en: 'Date' },
    labelLocation: { zh: '地点', en: 'Location' },
    labelName: { zh: '姓名', en: 'Name' },
    labelPhone: { zh: '电话', en: 'Phone' }
  },
  faq: {
    eyebrow: { zh: '常见问题', en: 'FAQ' },
    title: { zh: '先来解答。', en: 'Answered before you ask.' }
  },
  location: {
    eyebrow: { zh: '地点 · 联络', en: 'LOCATION · CONTACT' },
    title: { zh: '来找我或发 WhatsApp。', en: 'Come by or message me.' },
    address: { zh: 'Sri Delima MRT 站附近, 蕉赖, 吉隆坡 (详细地址 WhatsApp 发送)', en: 'Near MRT Sri Delima, Kepong, KL (exact address sent via WhatsApp)' },
    whatsappCta: { zh: '发 WhatsApp', en: 'Message on WhatsApp' },
    instagramCta: { zh: '访问 Instagram', en: 'Visit Instagram' }
  },
  footer: {
    copy: { zh: '© 2026 Kiki 化妆工作室 · 吉隆坡蕉赖', en: '© 2026 Kiki Makeup Studio · Kepong, KL' }
  },
  language: {
    toggle: { zh: 'EN', en: '中文' },
    aria: { zh: '切换语言', en: 'Toggle language' }
  }
} as const;

export const contact = {
  whatsappNumber: '60179202880',
  whatsappDisplay: '+60 17-920 2880',
  instagramUrl: 'https://instagram.com/kiki.makeup___',
  instagramHandle: '@kiki.makeup___',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.0!2d101.624!3d3.207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTInMjUuMiJOIDEwMcKwMzcnMjYuNCJF!5e0!3m2!1sen!2smy!4v1700000000000'
};
