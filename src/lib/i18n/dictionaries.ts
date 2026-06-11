import type { Locale } from "./config";

export interface Dictionary {
  nav: {
    home: string;
    courts: string;
    booking: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    bookCta: string;
    exploreCta: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  quickBook: {
    title: string;
    courtLabel: string;
    dateLabel: string;
    timeLabel: string;
    cta: string;
  };
  trust: {
    rated: string;
    courts: string;
    indoor: string;
    location: string;
  };
  common: {
    sar: string;
    perSession: string;
    from: string;
  };
  transformation: {
    eyebrow: string;
    title: string;
    body: string;
    point1Title: string;
    point1Body: string;
    point2Title: string;
    point2Body: string;
    point3Title: string;
    point3Body: string;
    cta: string;
  };
  facilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
    indoorTitle: string;
    indoorDesc: string;
    outdoorTitle: string;
    outdoorDesc: string;
    cafeTitle: string;
    cafeDesc: string;
    shopTitle: string;
    shopDesc: string;
    changingTitle: string;
    changingDesc: string;
    hospitalityTitle: string;
    hospitalityDesc: string;
  };
  whyBook: {
    eyebrow: string;
    title: string;
    subtitle: string;
    item1Title: string;
    item1Body: string;
    item2Title: string;
    item2Body: string;
    item3Title: string;
    item3Body: string;
    item4Title: string;
    item4Body: string;
    cta: string;
  };
  bookingCta: {
    title: string;
    subtitle: string;
    button: string;
    note: string;
  };
  courtsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    availableNow: string;
    comingSoon: string;
    premium: string;
    outdoorCountLabel: string;
    indoorCountLabel: string;
    availabilityLabel: string;
    slotsOpen: string;
    fullyBooked: string;
    bookCta: string;
    compareEyebrow: string;
    compareTitle: string;
    compareSubtitle: string;
    currentTitle: string;
    currentTag: string;
    currentFeatures: string[];
    currentCta: string;
    futureTitle: string;
    futureTag: string;
    futureFeatures: string[];
    futureCta: string;
  };
  booking: {
    title: string;
    subtitle: string;
    stepCourt: string;
    stepDate: string;
    stepTime: string;
    stepInfo: string;
    stepReview: string;
    stepConfirm: string;
    indoor: string;
    outdoor: string;
    back: string;
    next: string;
    selectCourtTitle: string;
    selectCourtSubtitle: string;
    selectDateTitle: string;
    selectDateSubtitle: string;
    today: string;
    tomorrow: string;
    selectTimeTitle: string;
    selectTimeSubtitle: string;
    available: string;
    booked: string;
    duration90: string;
    noCourtFirst: string;
    infoTitle: string;
    infoSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    errRequired: string;
    errPhone: string;
    errEmail: string;
    reviewTitle: string;
    reviewSubtitle: string;
    labelCourt: string;
    labelDate: string;
    labelTime: string;
    labelDuration: string;
    labelPlayer: string;
    labelTotal: string;
    edit: string;
    confirmBooking: string;
    confirmedTitle: string;
    confirmedSubtitle: string;
    teamContact: string;
    referenceLabel: string;
    whatsappCta: string;
    bookAnother: string;
    backHome: string;
    minutes: string;
    summaryTitle: string;
    summaryEmpty: string;
    summaryTotal: string;
    summaryStep: string;
  };
  footer: {
    tagline: string;
    location: string;
    explore: string;
    contact: string;
    followUs: string;
    rights: string;
    certified: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      courts: "Courts",
      booking: "Booking",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      badge: "A-Rated by Saudi Padel · Abhur, Jeddah",
      title: "Jeddah's home of premium padel",
      subtitle:
        "Five A-rated courts in Abhur Al Janoubia — including a fully climate-controlled indoor court open today. Book directly with PW Padel World in seconds, no third party.",
      bookCta: "Book a Court Now",
      exploreCta: "Explore Courts",
      stat1Value: "5",
      stat1Label: "Pro Courts",
      stat2Value: "A",
      stat2Label: "Federation Rating",
      stat3Value: "90 min",
      stat3Label: "Per Session",
    },
    quickBook: {
      title: "Find your court at PW Padel World",
      courtLabel: "Court",
      dateLabel: "Date",
      timeLabel: "Time",
      cta: "Check Availability",
    },
    trust: {
      rated: "Saudi Padel A-Rated",
      courts: "4 Outdoor Courts",
      indoor: "Indoor Court Available Now",
      location: "Abhur Al Janoubia, Jeddah",
    },
    common: {
      sar: "SAR",
      perSession: "/ 90 min",
      from: "From",
    },
    transformation: {
      eyebrow: "The Club Is Growing",
      title: "PW is going fully indoor — court by court.",
      body: "Our climate-controlled indoor court in Abhur is open and bookable today. And we're just getting started: one by one, our four outdoor courts are being transformed into indoor courts, so every game at PW Padel World can be played in cool, perfect comfort — even through a Jeddah summer.",
      point1Title: "Indoor Court Open Now",
      point1Body: "Play in our fully air-conditioned indoor court today — book it in seconds.",
      point2Title: "Four More on the Way",
      point2Body: "Each outdoor court is being upgraded to a true indoor court, one at a time.",
      point3Title: "Built for Jeddah",
      point3Body: "Beat the heat and humidity — climate-controlled play in any season, day or night.",
      cta: "Book a Court Today",
    },
    facilities: {
      eyebrow: "The Club",
      title: "More than courts — a padel destination in Abhur",
      subtitle:
        "Come early, stay late. Everything at PW Padel World is built around your game and the time you spend between matches.",
      indoorTitle: "Climate-Controlled Indoor Court",
      indoorDesc: "Fully air-conditioned, with premium lighting and acoustics for year-round play.",
      outdoorTitle: "Four Outdoor Courts",
      outdoorDesc: "Pro-grade panoramic courts under floodlights — built to tournament standard.",
      cafeTitle: "Véro Café & Lounge",
      cafeDesc: "Specialty coffee and a relaxed lounge overlooking the courts, indoors and out.",
      shopTitle: "Pro Shop",
      shopDesc: "Rackets, balls and sportswear on hand — gear up or grab what you forgot.",
      changingTitle: "Changing Rooms",
      changingDesc: "Clean, fully equipped changing facilities so you arrive and play with ease.",
      hospitalityTitle: "Warm Hospitality",
      hospitalityDesc: "A welcoming team and refreshments that make every visit feel effortless.",
    },
    whyBook: {
      eyebrow: "Book Direct",
      title: "Why book direct with PW Padel World",
      subtitle: "Reserve straight with the club — no middleman between you and your court.",
      item1Title: "Fast Confirmation",
      item1Body: "Send your request and our team confirms your court right away.",
      item2Title: "Best Prices",
      item2Body: "Book direct and skip the third-party fees and markups of other platforms.",
      item3Title: "Real-Time Availability",
      item3Body: "See exactly which courts and times are open today — always up to date.",
      item4Title: "A Team That Knows You",
      item4Body: "Reach our Abhur team directly on WhatsApp for any change or special request.",
      cta: "Book your court now",
    },
    bookingCta: {
      title: "Ready for the new PW experience?",
      subtitle: "Book our climate-controlled indoor court or a pro-grade outdoor court today — and enjoy even more indoor play as the club keeps growing.",
      button: "Book a Court Now",
      note: "Indoor & outdoor courts available now · More indoor coming soon.",
    },
    courtsPage: {
      eyebrow: "Our Courts",
      title: "Premium padel courts in Jeddah",
      subtitle:
        "Book our climate-controlled indoor court or one of four pro-grade outdoor courts — all available today. And there's more to come: we're gradually transforming the outdoor courts into indoor courts too.",
      availableNow: "Available now",
      comingSoon: "Coming soon",
      premium: "Premium",
      outdoorCountLabel: "4 Outdoor Courts",
      indoorCountLabel: "1 Indoor Court",
      availabilityLabel: "Today's availability",
      slotsOpen: "slots open today",
      fullyBooked: "Fully booked today",
      bookCta: "Book this court",
      compareEyebrow: "Available now · More to come",
      compareTitle: "Indoor today, even more indoor tomorrow",
      compareSubtitle:
        "Play in our climate-controlled indoor court right now — and watch the club grow as our outdoor courts go fully indoor.",
      currentTitle: "Indoor Court",
      currentTag: "Available now",
      currentFeatures: [
        "Fully air-conditioned",
        "Premium lighting & acoustics",
        "Play comfortably year-round",
        "Book online in seconds",
      ],
      currentCta: "Book the indoor court",
      futureTitle: "Indoor Expansion",
      futureTag: "Coming soon",
      futureFeatures: [
        "Four outdoor courts open today",
        "Being upgraded to indoor, court by court",
        "Same pro-grade, tournament surface",
        "More climate-controlled play ahead",
      ],
      futureCta: "Book an outdoor court now",
    },
    booking: {
      title: "Book your court",
      subtitle: "Choose your court and time in under a minute — our team confirms the rest.",
      stepCourt: "Court",
      stepDate: "Date",
      stepTime: "Time",
      stepInfo: "Details",
      stepReview: "Review",
      stepConfirm: "Done",
      indoor: "Indoor",
      outdoor: "Outdoor",
      back: "Back",
      next: "Continue",
      selectCourtTitle: "Choose your court",
      selectCourtSubtitle: "Pick the court that suits your game.",
      selectDateTitle: "Choose a date",
      selectDateSubtitle: "Select the day you want to play.",
      today: "Today",
      tomorrow: "Tomorrow",
      selectTimeTitle: "Choose a time",
      selectTimeSubtitle: "Each session is 90 minutes.",
      available: "Available",
      booked: "Booked",
      duration90: "90 min",
      noCourtFirst: "Select a court and date first.",
      infoTitle: "Your details",
      infoSubtitle: "We'll use these to confirm your booking.",
      nameLabel: "Full name",
      namePlaceholder: "e.g. Faisal Al-Habib",
      phoneLabel: "Phone number",
      phonePlaceholder: "05X XXX XXXX",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      errRequired: "This field is required.",
      errPhone: "Enter a valid phone number.",
      errEmail: "Enter a valid email address.",
      reviewTitle: "Review your booking",
      reviewSubtitle: "Make sure everything looks right.",
      labelCourt: "Court",
      labelDate: "Date",
      labelTime: "Time",
      labelDuration: "Duration",
      labelPlayer: "Player",
      labelTotal: "Total",
      edit: "Edit",
      confirmBooking: "Confirm booking",
      confirmedTitle: "Your booking request has been received!",
      confirmedSubtitle: "Save your reference below. Our team will contact you shortly to confirm your court and finalize the details.",
      teamContact: "Our team will be in touch soon",
      referenceLabel: "Booking reference",
      whatsappCta: "Follow up on WhatsApp",
      bookAnother: "Book another court",
      backHome: "Back to home",
      minutes: "min",
      summaryTitle: "Booking summary",
      summaryEmpty: "Start by choosing a court.",
      summaryTotal: "Total",
      summaryStep: "Step",
    },
    footer: {
      tagline: "The best place for padel in Jeddah.",
      location: "Abhur Al Janoubia, Jeddah",
      explore: "Explore",
      contact: "Contact",
      followUs: "Follow us",
      rights: "All rights reserved.",
      certified: "Saudi Padel A-Rated Club",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      courts: "الملاعب",
      booking: "الحجز",
      about: "عن النادي",
      contact: "تواصل",
      bookNow: "احجز الآن",
    },
    hero: {
      badge: "مصنّف A من بادل السعودية · أبحر، جدة",
      title: "بيت البادل الفاخر في جدة",
      subtitle:
        "خمسة ملاعب مصنّفة A في أبحر الجنوبية — منها ملعب داخلي مكيّف بالكامل ومتاح اليوم. احجز مباشرة مع PW Padel World في ثوانٍ، بدون وسيط.",
      bookCta: "احجز ملعبًا الآن",
      exploreCta: "استكشف الملاعب",
      stat1Value: "٥",
      stat1Label: "ملاعب احترافية",
      stat2Value: "A",
      stat2Label: "تصنيف الاتحاد",
      stat3Value: "٩٠ دقيقة",
      stat3Label: "لكل جلسة",
    },
    quickBook: {
      title: "اعثر على ملعبك في PW Padel World",
      courtLabel: "الملعب",
      dateLabel: "التاريخ",
      timeLabel: "الوقت",
      cta: "اعرض الأوقات المتاحة",
    },
    trust: {
      rated: "نادي مصنّف A من بادل السعودية",
      courts: "٤ ملاعب خارجية",
      indoor: "ملعب داخلي متاح الآن",
      location: "أبحر الجنوبية، جدة",
    },
    common: {
      sar: "ريال",
      perSession: "/ ٩٠ دقيقة",
      from: "ابتداءً من",
    },
    transformation: {
      eyebrow: "النادي يكبر",
      title: "PW يتحوّل بالكامل إلى داخلي — ملعبًا تلو الآخر.",
      body: "ملعبنا الداخلي المكيّف في أبحر متاح للحجز اليوم. وهذه مجرد البداية: نحوّل ملاعبنا الخارجية الأربعة واحدًا تلو الآخر إلى ملاعب داخلية، لتُلعب كل مباراة في PW Padel World براحة وأجواء مثالية — حتى في عزّ صيف جدة.",
      point1Title: "ملعب داخلي متاح الآن",
      point1Body: "العب في ملعبنا الداخلي المكيّف بالكامل اليوم — واحجزه في ثوانٍ.",
      point2Title: "وأربعة في الطريق",
      point2Body: "كل ملعب خارجي يتحوّل إلى ملعب داخلي حقيقي، واحدًا تلو الآخر.",
      point3Title: "مصمّم لجدة",
      point3Body: "تغلّب على الحرّ والرطوبة — لعب مكيّف في كل فصل، ليلًا أو نهارًا.",
      cta: "احجز ملعبًا اليوم",
    },
    facilities: {
      eyebrow: "النادي",
      title: "أكثر من ملاعب — وجهة بادل في أبحر",
      subtitle:
        "تعال مبكرًا وابقَ لوقت أطول. كل شيء في PW Padel World مصمّم حول لعبتك واللحظات بين المباريات.",
      indoorTitle: "ملعب داخلي مكيّف",
      indoorDesc: "مكيّف بالكامل، بإضاءة وصوتيات فاخرة للعب طوال العام.",
      outdoorTitle: "أربعة ملاعب خارجية",
      outdoorDesc: "ملاعب بانورامية احترافية تحت الإضاءة — بمعايير البطولات.",
      cafeTitle: "مقهى وصالة Véro",
      cafeDesc: "قهوة مختصة وصالة مريحة تطلّ على الملاعب، داخل النادي وخارجه.",
      shopTitle: "متجر المعدات",
      shopDesc: "مضارب وكرات وملابس رياضية في متناولك — جهّز نفسك أو عوّض ما نسيته.",
      changingTitle: "غرف تبديل الملابس",
      changingDesc: "غرف نظيفة ومجهّزة بالكامل لتصل وتلعب بكل سهولة.",
      hospitalityTitle: "ضيافة دافئة",
      hospitalityDesc: "فريق مرحّب ومشروبات تجعل كل زيارة تجربة سلسة.",
    },
    whyBook: {
      eyebrow: "احجز مباشرة",
      title: "ليش تحجز مباشرة مع PW Padel World",
      subtitle: "احجز مباشرة مع النادي — بدون وسيط بينك وبين ملعبك.",
      item1Title: "تأكيد سريع",
      item1Body: "أرسل طلبك وفريقنا يأكد ملعبك على طول.",
      item2Title: "أفضل الأسعار",
      item2Body: "احجز مباشرة بدون رسوم وزيادات منصّات الوسطاء.",
      item3Title: "توفر لحظي",
      item3Body: "شاهد بالضبط أي ملاعب وأوقات متاحة اليوم — محدّث دائمًا.",
      item4Title: "فريق يعرفك",
      item4Body: "تواصل مع فريقنا في أبحر مباشرة عبر واتساب لأي تعديل أو طلب خاص.",
      cta: "احجز ملعبك الآن",
    },
    bookingCta: {
      title: "جاهز لتجربة PW الجديدة؟",
      subtitle: "احجز ملعبنا الداخلي المكيّف أو ملعبًا خارجيًا احترافيًا اليوم — واستمتع بمزيد من اللعب الداخلي مع نمو النادي.",
      button: "احجز ملعبًا الآن",
      note: "ملاعب داخلية وخارجية متاحة الآن · والمزيد من الداخلي قريبًا.",
    },
    courtsPage: {
      eyebrow: "ملاعبنا",
      title: "ملاعب بادل فاخرة في جدة",
      subtitle:
        "احجز ملعبنا الداخلي المكيّف أو أحد الملاعب الخارجية الأربعة الاحترافية — كلها متاحة اليوم. والقادم أجمل: نحوّل ملاعبنا الخارجية تدريجيًا إلى ملاعب داخلية أيضًا.",
      availableNow: "متاح الآن",
      comingSoon: "قريبًا",
      premium: "فاخر",
      outdoorCountLabel: "٤ ملاعب خارجية",
      indoorCountLabel: "ملعب داخلي واحد",
      availabilityLabel: "توفر اليوم",
      slotsOpen: "أوقات متاحة اليوم",
      fullyBooked: "محجوز بالكامل اليوم",
      bookCta: "احجز هذا الملعب",
      compareEyebrow: "متاح الآن · والمزيد قادم",
      compareTitle: "داخلي اليوم، والمزيد من الداخلي غدًا",
      compareSubtitle:
        "العب الآن في ملعبنا الداخلي المكيّف — وتابع نمو النادي مع تحويل ملاعبنا الخارجية إلى داخلية بالكامل.",
      currentTitle: "الملعب الداخلي",
      currentTag: "متاح الآن",
      currentFeatures: [
        "مكيّف بالكامل",
        "إضاءة وصوتيات فاخرة",
        "لعب مريح طوال العام",
        "احجز أونلاين في ثوانٍ",
      ],
      currentCta: "احجز الملعب الداخلي",
      futureTitle: "التوسّع الداخلي",
      futureTag: "قريبًا",
      futureFeatures: [
        "أربعة ملاعب خارجية متاحة اليوم",
        "نطوّرها إلى داخلية ملعبًا تلو الآخر",
        "نفس الأرضية الاحترافية بمعايير البطولات",
        "المزيد من اللعب المكيّف قادم",
      ],
      futureCta: "احجز ملعبًا خارجيًا الآن",
    },
    booking: {
      title: "احجز ملعبك",
      subtitle: "اختر ملعبك ووقتك في أقل من دقيقة — وفريقنا يتكفّل بالباقي.",
      stepCourt: "الملعب",
      stepDate: "التاريخ",
      stepTime: "الوقت",
      stepInfo: "البيانات",
      stepReview: "المراجعة",
      stepConfirm: "تم",
      indoor: "داخلي",
      outdoor: "خارجي",
      back: "رجوع",
      next: "متابعة",
      selectCourtTitle: "اختر ملعبك",
      selectCourtSubtitle: "اختر الملعب المناسب للعبك.",
      selectDateTitle: "اختر التاريخ",
      selectDateSubtitle: "حدّد اليوم الذي تريد اللعب فيه.",
      today: "اليوم",
      tomorrow: "غدًا",
      selectTimeTitle: "اختر الوقت",
      selectTimeSubtitle: "كل جلسة مدتها ٩٠ دقيقة.",
      available: "متاح",
      booked: "محجوز",
      duration90: "٩٠ دقيقة",
      noCourtFirst: "اختر ملعبًا وتاريخًا أولًا.",
      infoTitle: "بياناتك",
      infoSubtitle: "سنستخدمها لتأكيد حجزك.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: فيصل الحبيب",
      phoneLabel: "رقم الجوال",
      phonePlaceholder: "05X XXX XXXX",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      errRequired: "هذا الحقل مطلوب.",
      errPhone: "أدخل رقم جوال صحيح.",
      errEmail: "أدخل بريدًا إلكترونيًا صحيحًا.",
      reviewTitle: "راجع حجزك",
      reviewSubtitle: "تأكد من صحة جميع التفاصيل.",
      labelCourt: "الملعب",
      labelDate: "التاريخ",
      labelTime: "الوقت",
      labelDuration: "المدة",
      labelPlayer: "اللاعب",
      labelTotal: "الإجمالي",
      edit: "تعديل",
      confirmBooking: "تأكيد الحجز",
      confirmedTitle: "وصلنا طلب حجزك!",
      confirmedSubtitle: "احتفظ برقم الحجز بالأسفل. سيتواصل معك فريقنا قريبًا لتأكيد الملعب وإكمال التفاصيل.",
      teamContact: "فريقنا بيتواصل معك قريبًا",
      referenceLabel: "رقم الحجز",
      whatsappCta: "تابع عبر واتساب",
      bookAnother: "احجز ملعبًا آخر",
      backHome: "العودة للرئيسية",
      minutes: "دقيقة",
      summaryTitle: "ملخص الحجز",
      summaryEmpty: "ابدأ باختيار ملعب.",
      summaryTotal: "الإجمالي",
      summaryStep: "الخطوة",
    },
    footer: {
      tagline: "أفضل مكان للبادل في جدة.",
      location: "أبحر الجنوبية، جدة",
      explore: "استكشف",
      contact: "تواصل معنا",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
      certified: "نادي مصنّف A من بادل السعودية",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
