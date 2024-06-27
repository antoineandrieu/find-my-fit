interface I18N {
    [language: string]: translations;
}

interface translations {
    currentLanguageCode: string;
    buttonTextContinue: string;
    buttonTextFindMyFit: string;
    exploreFullGuide: string;
    bust: string;
    bustInstruction: string;
    waist: string;
    waistInstruction: string;
    hips: string;
    hipsInstruction: string;
    thigh: string;
    thighInsruction: string;
    inseam: string;
    inseamInsruction: string;
    centimetres: string;
    inches: string;
    productHeaderTitle: string;
    privacy: string;
    create: string;
    scirculaProfile: string;
    noFitExplanation: string;
    recommendedFitTitle: string;
    recommendedFitSubtitle: string;
    recommendedFitSizeTitle: string;
    recommendedFitChangeMeasurement: string;
    signUpTitle: string;
    signInTitle: string;
    signUpEmailAdress: string;
    signUpUseEmailAddress: string;
    signUpPhoneNumber: string;
    signUpUsePhoneNumber: string;
    signUpCreatePassword: string;
    signUpPolicyAccept: string;
    termsOfUse: string;
    privacyPolicy: string;
    andAcknowledging: string;
    signUpOrSeparator: string;
    signUpLoginInvitation: string;
    signIn: string;
    signInEnterPassword: string;
    signUpAdvantageDescriptionTitle: string;
    signUpAdvantageDescriptionText: string;
    signInLoginUpInvitationPart1: string;
    signInLoginUpInvitationPart2: string;
    signInDescriptionTitle: string;
    signInDescriptionText: string;
    signInForgotPassword: string;
    signUpWithFacebook: string;
    signUpWithGoogle: string;
    signInWithFacebook: string;
    signInWithGoogle: string;
    signInValidationButton: string;
    signUpValidationButton: string;
    errorPasswordTooShort: string;
    errorPrivacyNotChecked: string;
    errorSignInMissingPassword: string;
    errorBustSizeNotInRangeCm: string;
    errorWaistSizeNotInRangeCm: string;
    errorHipsSizeNotInRangeCm: string;
    errorThighSizeNotInRangeCm: string;
    errorInseamSizeNotInRangeCm: string;
    errorBustSizeNotInRangeInches: string;
    errorWaistSizeNotInRangeInches: string;
    errorHipsSizeNotInRangeInches: string;
    errorThighSizeNotInRangeInches: string;
    errorInseamSizeNotInRangeInches: string;
    step15Bust: string;
    step25Waist: string;
    step35Hips: string;
    step45Thigh: string;
    step55Inseam: string;
    yourBust: string;
    yourWaist: string;
    yourHips: string;
    yourThigh: string;
    yourInseam: string;
    bustTitleGuide: string;
    bustSubtitleGuide: string;
    waistTitleGuide: string;
    waistSubtitleGuide: string;
    hipsTitleGuide: string;
    hipsSubtitleGuide: string;
    thighTitleGuide: string;
    thighSubtitleGuide: string;
    inseamTitleGuide: string;
    inseamSubtitleGuide: string;
    guideQuestion: string;
    guideLifeEasier: string;
    guideUnlike: string;
    guideData: string;
    guideApproach: string;
    closeFullGuide: string;
    thirdPartyCookieTitle: string;
    thirdPartyCookieText: string;
    addToCart: string;
    about: string;
    man: string;
    woman: string;
}

const i18n: I18N = {
    en: {
        currentLanguageCode: 'en',
        buttonTextContinue: 'Continue',
        buttonTextFindMyFit: 'Find My Fit',
        exploreFullGuide: 'Explore full guide',
        bust: 'Bust',
        bustInstruction:
            'Wrap the tape around your back, under your arms and over the fullest part of your bust',
        waist: 'Waist',
        waistInstruction:
            'Wrap the tape around the narrowest part of your waist. A slight bend sideways will highlight this',
        hips: 'Hips',
        hipsInstruction:
            'Wrap the tape around the fullest part of your hips and buttocks',
        thigh: 'Thigh',
        thighInsruction: 'Wrap the tape around the widest part of your thigh',
        inseam: 'Inseam',
        inseamInsruction:
            'Measure from the inside of the top of your thigh to your ankle',
        centimetres: 'cm',
        inches: 'in',
        productHeaderTitle: 'You are browsing',
        privacy: 'Privacy',
        create: 'Create',
        scirculaProfile: 'SCIRCULA profile',
        noFitExplanation:
            'Unfortunately we were unable to find a size based on your best fit in this garment',
        recommendedFitTitle: 'Recommended Size',
        recommendedFitSubtitle: 'Based on your best fit in this garment',
        recommendedFitSizeTitle: 'Size for your best fit',
        recommendedFitChangeMeasurement: 'Change measurements',
        signUpTitle: 'Create SCIRCULA profile',
        signInTitle: 'Sign In to SCIRCULA',
        signUpEmailAdress: 'Email address',
        signUpPhoneNumber: 'Phone number',
        signUpUsePhoneNumber: 'Use phone number',
        signUpUseEmailAddress: 'Use email address',
        signUpCreatePassword: 'Create password',
        signUpPolicyAccept: 'By creating a profile you are agreeing to the',
        termsOfUse: 'terms of use',
        privacyPolicy: 'privacy policy',
        andAcknowledging: 'and acknowledging the',
        signUpOrSeparator: 'or',
        signUpLoginInvitation: 'Already have a profile?',
        signIn: 'Sign in',
        signInEnterPassword: 'Enter password',
        signUpAdvantageDescriptionTitle: 'Make life easier',
        signUpAdvantageDescriptionText:
            'Enjoy the most personalised experiences that help you save time, money and our planet.',
        signInLoginUpInvitationPart1: 'Create',
        signInLoginUpInvitationPart2: 'SCIRCULA profile',
        signInDescriptionTitle: 'Welcome back',
        signInDescriptionText:
            'To your personalised experiences which make your life easier and are better for our planet.',
        signInForgotPassword: 'Forgot password?',
        signUpWithFacebook: 'Create with Facebook',
        signUpWithGoogle: 'Create with Google',
        signInWithFacebook: 'Sign In with Facebook',
        signInWithGoogle: 'Sign In with Google',
        signInValidationButton: 'Sign In',
        signUpValidationButton: 'Create',
        errorPasswordTooShort:
            'Password must have length greater than or equal to 8',
        errorPrivacyNotChecked: 'You need to agree to the terms of use',
        errorSignInMissingPassword: 'Invalid password',
        errorBustSizeNotInRangeCm: 'Bust size must be between 60 and 135 cm',
        errorWaistSizeNotInRangeCm: 'Waist size must be between 70 and 130 cm',
        errorHipsSizeNotInRangeCm: 'Hips size must be between 60 and 135 cm',
        errorThighSizeNotInRangeCm: 'Thigh size must be between 30 and 85 cm',
        errorInseamSizeNotInRangeCm:
            'Inseam size must be between 40 and 120 cm',
        errorBustSizeNotInRangeInches: 'Bust size must be between 20 and 55 in',
        errorWaistSizeNotInRangeInches:
            'Waist size must be between 15 and 55 in',
        errorHipsSizeNotInRangeInches: 'Hips size must be between 20 and 55 in',
        errorThighSizeNotInRangeInches:
            'Thigh size must be between 10 and 35 in',
        errorInseamSizeNotInRangeInches:
            'Inseam size must be between 15 and 50 in',
        step15Bust: 'Step 1 of 5. Bust',
        step25Waist: 'Step 2 of 5. Waist',
        step35Hips: 'Step 3 of 5. Hips',
        step45Thigh: 'Step 4 of 5. Thigh',
        step55Inseam: 'Step 5 of 5. Inseam',
        yourBust: 'Your Bust',
        yourWaist: 'Your Waist',
        yourHips: 'Your Hips',
        yourThigh: 'Your Thigh',
        yourInseam: 'Your Inseam',
        bustTitleGuide: 'Bust Measurement',
        bustSubtitleGuide:
            'Wrap the tape around your back, under your arms and over the fullest part of your bust.',
        waistTitleGuide: 'Waist Measurement',
        waistSubtitleGuide:
            'Wrap the tape around the narrowest part of your waist. A slight bend sideways will highlight this.',
        hipsTitleGuide: 'Hips Measurement',
        hipsSubtitleGuide:
            'Wrap the tape around the fullest part of your hips and buttocks.',
        thighTitleGuide: 'Thigh Measurement',
        thighSubtitleGuide:
            'Wrap the tape around the widest part of your thigh.',
        inseamTitleGuide: 'Inseam Measurement',
        inseamSubtitleGuide:
            'Measure from the inside of the top of your thigh to your ankle.',
        guideQuestion:
            'How using your body measurements helps us give you a 97% fit guarantee',
        guideLifeEasier:
            'Making your life easier with the most personalised experiences that help you save time, money and our planet.',
        guideUnlike:
            'Unlike other solutions that use generic data to predict a size that may fit, SCIRCULA uses your true body measurements to know your unique body shape and size.',
        guideData:
            'We match this data to the individual garments data taking important fit characteristics of each garment into account; how it’s intended to fit, where it stretches or does not and how fit changes with wear over time.',
        guideApproach:
            'Our approach gives you the most accurate size recommendations for your best fit by garment.',
        closeFullGuide: 'Close full guide',
        thirdPartyCookieTitle:
            'The SCIRCULA fit solution requires third party cookies to work.',
        thirdPartyCookieText:
            'Please update your browser settings to disable third party cookies/blockers and refresh this page. Thank you.',
        addToCart: 'Add to cart',
        about: 'About',
        man: 'man',
        woman: 'woman',
    },
    fr: {
        currentLanguageCode: 'fr',
        buttonTextContinue: 'Continuer',
        buttonTextFindMyFit: 'Trouver ma taille',
        exploreFullGuide: 'Afficher le guide complet',
        bust: 'Buste',
        bustInstruction:
            'Wrap the tape around your back, under your arms and over the fullest part of your bust',
        waist: 'Taille',
        waistInstruction:
            'Wrap the tape around the narrowest part of your waist. A slight bend sideways will highlight this',
        hips: 'Hanches',
        hipsInstruction:
            'Wrap the tape around the fullest part of your hips and buttocks',
        thigh: 'Cuisses',
        thighInsruction: 'Wrap the tape around the widest part of your thigh',
        inseam: 'Longueur Jambe',
        inseamInsruction:
            'Measure from the inside of the top of your thigh to your ankle',
        centimetres: 'cm',
        inches: 'in',
        productHeaderTitle: 'Vous regardez',
        privacy: 'Vie privée',
        create: 'Créer',
        scirculaProfile: 'mon profile SCIRCULA',
        noFitExplanation:
            'Unfortunately we were unable to find a size based on your best fit in this garment',
        recommendedFitTitle: 'Recommended Fit',
        recommendedFitSubtitle: 'Based on your best fit in this garment',
        recommendedFitSizeTitle: 'Size for your best fit',
        recommendedFitChangeMeasurement: 'Change measurements',
        signUpTitle: 'Create SCIRCULA profile',
        signInTitle: 'Sign In to SCIRCULA',
        signUpEmailAdress: 'Email address',
        signUpPhoneNumber: 'Phone number',
        signUpUsePhoneNumber: 'Use phone number',
        signUpUseEmailAddress: 'Use email address',
        signUpCreatePassword: 'Create password',
        signUpPolicyAccept: 'By creating a profile you are agreeing to the',
        termsOfUse: 'terms of use',
        privacyPolicy: 'privacy policy',
        andAcknowledging: 'and acknowledging the',
        signUpOrSeparator: 'or',
        signUpLoginInvitation: 'Already have a profile?',
        signIn: 'Sign in',
        signInEnterPassword: 'Enter password',
        signUpAdvantageDescriptionTitle: 'Make life easier',
        signUpAdvantageDescriptionText:
            'Enjoy the most personalised experiences that help you save time, money and our planet.',
        signInLoginUpInvitationPart1: 'Create',
        signInLoginUpInvitationPart2: 'SCIRCULA profile',
        signInDescriptionTitle: 'Welcome back',
        signInDescriptionText:
            'To your personalised experiences which make your life easier and are better for our planet.',
        signInForgotPassword: 'Forgot password?',
        signUpWithFacebook: 'Create with Facebook',
        signUpWithGoogle: 'Create with Google',
        signInWithFacebook: 'Sign In with Facebook',
        signInWithGoogle: 'Sign In with Google',
        signInValidationButton: 'Sign In',
        signUpValidationButton: 'Create',
        errorPasswordTooShort:
            'Password must have length greater than or equal to 8',
        errorPrivacyNotChecked: 'You need to agree to the terms of use',
        errorSignInMissingPassword: 'Invalid password',
        errorBustSizeNotInRangeCm: 'Bust size must be between 80 and 135 cm',
        errorWaistSizeNotInRangeCm: 'Waist size must be between 50 and 130 cm',
        errorHipsSizeNotInRangeCm: 'Hips size must be between 60 and 135 cm',
        errorThighSizeNotInRangeCm: 'Thigh size must be between 30 and 85 cm',
        errorInseamSizeNotInRangeCm:
            'Inseam size must be between 40 and 120 cm',
        errorBustSizeNotInRangeInches: 'Bust size must be between 20 and 55 in',
        errorWaistSizeNotInRangeInches:
            'Waist size must be between 15 and 55 in',
        errorHipsSizeNotInRangeInches: 'Hips size must be between 20 and 55 in',
        errorThighSizeNotInRangeInches:
            'Thigh size must be between 10 and 35 in',
        errorInseamSizeNotInRangeInches:
            'Inseam size must be between 25 and 50 in',
        step15Bust: 'Étape 1 sur 5. Poitrine',
        step25Waist: 'Étape 2 sur 5. Taille',
        step35Hips: 'Étape 3 sur 5. Hanche',
        step45Thigh: 'Étape 4 sur 5. Cuisse',
        step55Inseam: 'Étape 5 sur 5. Entrejambe',
        yourBust: 'Votre Poitrine',
        yourWaist: 'Votre Taille',
        yourHips: 'Vos Hanches',
        yourThigh: 'Vos Cuisses',
        yourInseam: 'Votre Entrejambe',
        bustTitleGuide: 'Bust Measurement',
        bustSubtitleGuide:
            'Wrap the tape around your back, under your arms and over the fullest part of your bust.',
        waistTitleGuide: 'Waist Measurement',
        waistSubtitleGuide:
            'Wrap the tape around the narrowest part of your waist. A slight bend sideways will highlight this.',
        hipsTitleGuide: 'Hips Measurement',
        hipsSubtitleGuide:
            'Wrap the tape around the fullest part of your hips and buttocks.',
        thighTitleGuide: 'Thigh Measurement',
        thighSubtitleGuide:
            'Wrap the tape around the widest part of your thigh.',
        inseamTitleGuide: 'Inseam Measurement',
        inseamSubtitleGuide:
            'Measure from the inside of the top of your thigh to your ankle.',
        guideQuestion:
            'How using your body measurements helps us give you a 97% fit guarantee',
        guideLifeEasier:
            'Making your life easier with the most personalised experiences that help you save time, money and our planet.',
        guideUnlike:
            'Unlike other solutions that use generic data to predict a size that may fit, SCIRCULA uses your true body measurements to know your unique body shape and size.',
        guideData:
            'We match this data to the individual garments data taking important fit characteristics of each garment into account; how it’s intended to fit, where it stretches or does not and how fit changes with wear over time.',
        guideApproach:
            'Our approach gives you the most accurate size recommendations for your best fit by garment.',
        closeFullGuide: 'Close full guide',
        thirdPartyCookieTitle:
            'The SCIRCULA fit solution requires third party cookies to work.',
        thirdPartyCookieText:
            'Please update your browser settings to disable third party cookies/blockers and refresh this page. Thank you.',
        addToCart: 'Ajouter au panier',
        about: 'About',
        man: 'homme',
        woman: 'femme',
    },
    nl: {
        currentLanguageCode: 'nl',
        buttonTextContinue: 'Verdergaan',
        buttonTextFindMyFit: 'Vind je maat',
        exploreFullGuide: 'Ontdek volledige gids',
        bust: 'Borst',
        bustInstruction:
            'Wikkel het meetlint horizontaal om je rug over het volste gedeelte van de borst',
        waist: 'Taille',
        waistInstruction:
            'Meet het smalste gedeelte van je taille met het meetlint',
        hips: 'Heupen',
        hipsInstruction: 'Meet het breedste gedeelte van je heupen',
        thigh: 'Dij',
        thighInsruction: 'Meet het breedste deel van je bovenbeen',
        inseam: 'Binnenbeenlengte',
        inseamInsruction: 'Meet de binnenkant van je been tot aan je enkel',
        centimetres: 'cm',
        inches: 'in',
        productHeaderTitle: 'Je bent aan het browsen',
        privacy: 'Privacy',
        create: 'Creëer',
        scirculaProfile: 'een SCIRCULA profiel',
        noFitExplanation:
            'Helaas konden we niet de juiste maat voor je vinden voor een goede pasvorm van dit kledingstuk',
        recommendedFitTitle: 'Aanbevolen maat',
        recommendedFitSubtitle:
            'Gebaseerd op de beste pasvorm van dit kledingstuk',
        recommendedFitSizeTitle: 'Je aanbevolen maat',
        recommendedFitChangeMeasurement: 'Verander de afmetingen',
        signUpTitle: 'Creëer een SCIRCULA profiel',
        signInTitle: 'Meld je aan bij SCIRCULA',
        signUpEmailAdress: 'E-mailadres',
        signUpPhoneNumber: 'Telefoonnummer',
        signUpUsePhoneNumber: 'Gebruik telefoonnummer',
        signUpUseEmailAddress: 'Gebruik e-mailadres',
        signUpCreatePassword: 'Maak een wachtwoord aan',
        signUpPolicyAccept:
            'Door een profiel aan te maken ga je akkoord met de',
        termsOfUse: 'gebruiksvoorwaarden',
        privacyPolicy: 'privacybeleid',
        andAcknowledging: 'en erken je het',
        signUpOrSeparator: 'of',
        signUpLoginInvitation: 'Heb je al een profiel?',
        signIn: 'Aanmelden',
        signInEnterPassword: 'Voer wachtwoord in',
        signUpAdvantageDescriptionTitle: 'Maak het leven gemakkelijker',
        signUpAdvantageDescriptionText:
            'Geniet van de meest gepersonaliseerde ervaring die je zal helpen tijd, geld en onze planeet te sparen',
        signInLoginUpInvitationPart1: 'Creëer',
        signInLoginUpInvitationPart2: 'een SCIRCULA profiel',
        signInDescriptionTitle: 'Welkom terug',
        signInDescriptionText:
            'Bij jouw gepersonaliseerde ervaring die je het leven gemakkelijker maakt en beter is voor de planeet.',
        signInForgotPassword: 'Wachtwoord vergeten?',
        signUpWithFacebook: 'Creëer met Facebook',
        signUpWithGoogle: 'Creëer met Google',
        signInWithFacebook: 'Aanmelden met Facebook',
        signInWithGoogle: 'Aanmelden met Google',
        signInValidationButton: 'Aanmelden',
        signUpValidationButton: 'Creëer',
        errorPasswordTooShort: 'Wachtwoord moet 8 of meer karakters hebben',
        errorPrivacyNotChecked:
            'Je moet akkoord gaan met de gebruiksvoorwaarden',
        errorSignInMissingPassword: 'Ongeldig wachtwoord',
        errorBustSizeNotInRangeCm:
            'De borstmaat moet tussen de 60 en 135 cm zijn',
        errorWaistSizeNotInRangeCm:
            'De taillemaat moet tussen de 50 en 130 cm zijn',
        errorHipsSizeNotInRangeCm:
            'De heupmaat moet tussen de 60 en 135 cm zijn',
        errorThighSizeNotInRangeCm:
            'De dijmaat moet tussen de 30 en 85 cm zijn',
        errorInseamSizeNotInRangeCm:
            'De bovenbeenlengte moet tussen de 40 en 120 cm zijn',
        errorBustSizeNotInRangeInches:
            'De borstmaat moet tussen de 20 en 55 in zijn',
        errorWaistSizeNotInRangeInches:
            'De taillemaat moet tussen de 15 en 55 in zijn',
        errorHipsSizeNotInRangeInches:
            'De heupmaat moet tussen de 20 en 55 in zijn',
        errorThighSizeNotInRangeInches:
            'De dijmaat moet tussen de 10 en 35 in zijn',
        errorInseamSizeNotInRangeInches:
            'De bovenbeenlengte moet tussen de 15 en 50 in zijn',
        step15Bust: 'Stap 1 van de 5. Borsten',
        step25Waist: 'Stap 2 van de 5. Taille',
        step35Hips: 'Stap 3 van de 5. Heupen',
        step45Thigh: 'Stap 4 van de 5. Dij',
        step55Inseam: 'Stap 5 van de 5. Binnenbeenlengte',
        yourBust: 'Je borst',
        yourWaist: 'Je taille',
        yourHips: 'Je heupen',
        yourThigh: 'Je dijen',
        yourInseam: 'Je bovenbeenlengte',
        bustTitleGuide: 'Borst afmetingen',
        bustSubtitleGuide:
            'Wikkel het meetlint horizontaal om je rug over het volste gedeelte van de borst.',
        waistTitleGuide: 'Taille afmetingen',
        waistSubtitleGuide:
            'Meet het smalste gedeelte van je taille met het meetlint.',
        hipsTitleGuide: 'Heupen afmetingen',
        hipsSubtitleGuide:
            'Meet het breedste gedeelte van je heupen en billen.',
        thighTitleGuide: 'Dij afmetingen',
        thighSubtitleGuide: 'Meet het breedste gedeelte van je bovenbeen.',
        inseamTitleGuide: 'Binnenbeenlengte afmetingen',
        inseamSubtitleGuide:
            'Meet vanaf de binnenkant van je bovenbeen tot aan je enkel.',
        guideQuestion:
            'Hoe het gebruik van lichaamsafmetingen ons helpt om je een 97% gegarandeerd goede pasvorm te geven',
        guideLifeEasier:
            'Maakt je leven gemakkelijker met de meest gepersonaliseerde ervaring die je zal helpen tijd, geld en onze planeet te sparen.',
        guideUnlike:
            'In tegenstelling tot andere oplossingen die algemene gegevens gebruiken om een maat te voorspellen die je mogelijk past, baseert SCIRCULA zich op je werkelijke lichaamsafmetingen: jouw unieke lichaamsvormen en maten.',
        guideData:
            'We matchen deze gegevens met die van individuele kledingstukken, waarbij we rekening houden met belangrijke pasvormeigenschappen: hoe de fit is bedoeld, waar het strecht of niet en hoe de pasvorm verandert na verloop van tijd.',
        guideApproach:
            'Onze aanpak geeft je het nauwkeurigste maatadvies voor de beste pasvorm van elk kledingstuk.',
        closeFullGuide: 'Sluit volledige gids',
        thirdPartyCookieTitle:
            'Om goed te werken, vereist de SCIRCULA pasvormoplossing third-party cookies.',
        thirdPartyCookieText:
            'Wijzig alsjeblieft je browserinstellingen die de cookies/blockers van derden uitschakelen en ververs dan de pagina. Dankjewel.',
        addToCart: 'In winkelmand',
        about: 'About',
        man: 'heren',
        woman: 'dames',
    },
    de: {
        currentLanguageCode: 'de',
        buttonTextContinue: 'Weiter',
        buttonTextFindMyFit: 'Finden Sie Ihre Größe',
        exploreFullGuide: 'Massanleitung',
        bust: 'Brustweite',
        bustInstruction:
            'Legen Sie das Massband um Ihren Rücken, unter Ihre Arme und über den weitesten Teil Ihrer Brust',
        waist: 'Taillenweite',
        waistInstruction:
            'Legen Sie das Massband um den engsten Teil Ihrer Taille. Eine kurze Seitbeuge wird diese noch erkennbarer machen',
        hips: 'Hüftweite',
        hipsInstruction:
            'Wickeln Sie das Massband um den weitesten Teil Ihrer Hüfte ',
        thigh: 'Oberschenkelweite',
        thighInsruction:
            'Wickeln Sie das Massband am obersten Teil Ihres Oberschenkels im Schritt',
        inseam: 'Innenbeinlänge',
        inseamInsruction:
            'Messen Sie vom Schritt an der Innenseite Ihres Oberschenkels, bis zum unteren Knöchelpunkt',
        centimetres: 'cm',
        inches: 'in',
        productHeaderTitle: 'Sie browsen',
        privacy: 'Privatsphäre',
        create: 'Erstellen',
        scirculaProfile: 'Sie Ihr SCIRCULA-Profil',
        noFitExplanation:
            'Leider konnten wir keine Größe finden, die eine für Sie optimalen Passform für dieses Model',
        recommendedFitTitle: 'Empfohlene Größe',
        recommendedFitSubtitle:
            'Basierend auf der für Sie optimalen Passform in diesem Kleidungsstück',
        recommendedFitSizeTitle: 'Die richtige Größe für Ihre Passform',
        recommendedFitChangeMeasurement: 'Masse ändern',
        signUpTitle: 'Erstellen Sie Ihr SCIRCULA-Profil',
        signInTitle: 'Melden Sie sich bei SCIRCULA an',
        signUpEmailAdress: 'E-Mail-Addresse',
        signUpPhoneNumber: 'Telefonnummer',
        signUpUsePhoneNumber: 'Verwenden Sie die Telefonnummer',
        signUpUseEmailAddress: 'Verwenden Sie die E-Mail-Addresse',
        signUpCreatePassword: 'Passwort erstellen',
        signUpPolicyAccept: 'Durch das Erstellen eines Profils stimmen Sie den',
        termsOfUse: 'Nutzungsbedingungen',
        privacyPolicy: 'Datenschutzbestimmungen an',
        andAcknowledging: 'zu und erkennen die',
        signUpOrSeparator: 'oder',
        signUpLoginInvitation: 'Hast du schon ein Profil?',
        signIn: 'Anmelden',
        signInEnterPassword: 'Passwort eingeben',
        signUpAdvantageDescriptionTitle: 'Machen Sie sich das Leben leichter',
        signUpAdvantageDescriptionText:
            'Genießen Sie personalisiertes Knowhow Ihrer Masse, mit der Sie Zeit, Ihre finanziellen und die Resourcen unseres Planeten sparen können.',
        signInLoginUpInvitationPart1: 'Erstellen',
        signInLoginUpInvitationPart2: 'Sie Ihr SCIRCULA-Profil',
        signInDescriptionTitle: 'Willkommen zurück',
        signInDescriptionText:
            'Zu Ihrem personalisiertem Wissen Ihrer Masse, mit der Sie Zeit, Ihre finanziellen und die Resourcen unseres Planeten sparen können.',
        signInForgotPassword: 'Passwort vergessen?',
        signUpWithFacebook: 'Creëer met Facebook',
        signUpWithGoogle: 'Creëer met Google',
        signInWithFacebook: 'Aanmelden met Facebook',
        signInWithGoogle: 'Aanmelden met Google',
        signInValidationButton: 'Anmelden',
        signUpValidationButton: 'Erstellen',
        errorPasswordTooShort:
            'Das Passwort muss eine Länge von mindestens 8 Zeichen haben',
        errorPrivacyNotChecked: 'Bitte stimmen Sie den Nutzungsbedingungen zu',
        errorSignInMissingPassword: 'Ungültiges Passwort',
        errorBustSizeNotInRangeCm:
            'Brustweite muss zwischen 60 und 130 cm liegen',
        errorWaistSizeNotInRangeCm:
            'Taillenweite muss zwischen 50 und 130 cm liegen',
        errorHipsSizeNotInRangeCm:
            'Hüftweite muss zwischen 60 und 135 cm liegen',
        errorThighSizeNotInRangeCm:
            'Oberschenkelweite muss zwischen 30 und 85 cm liegen',
        errorInseamSizeNotInRangeCm:
            'Innenbeinlänge muss zwischen 40 und 135 cm liegen',
        errorBustSizeNotInRangeInches:
            'Brustweite muss zwischen 20 und 55 in liegen',
        errorWaistSizeNotInRangeInches:
            'Taillenweite muss zwischen 15 und 55 in liegen',
        errorHipsSizeNotInRangeInches:
            'Hüftweite muss zwischen 20 und 55 in liegen',
        errorThighSizeNotInRangeInches:
            'Oberschenkelweite muss zwischen 10 und 35 in liegen',
        errorInseamSizeNotInRangeInches:
            'Innenbeinlänge muss zwischen 15 und 50 in liegen',
        step15Bust: 'Schritt 1 von 5. Brustweite',
        step25Waist: 'Schritt 2 von 5. Taillenweite',
        step35Hips: 'Schritt 3 von 5. Hüftweite',
        step45Thigh: 'Schritt 4 von 5. Oberschenkelweite',
        step55Inseam: 'Schritt 5 von 5. Innenbeinlänge',
        yourBust: 'Ihre Brustweite',
        yourWaist: 'Ihre Taillenweite',
        yourHips: 'Ihre Hüftweite',
        yourThigh: 'Ihre Oberschenkelweite',
        yourInseam: 'Ihre innenbeinlänge',
        bustTitleGuide: 'Brustweite',
        bustSubtitleGuide:
            'Legen Sie das Massband um Ihren Rücken, unter Ihre Arme und über den weitesten Teil Ihrer Brust.',
        waistTitleGuide: 'Taillenweite',
        waistSubtitleGuide:
            'Legen Sie das Massband um den engsten Teil Ihrer Taille. Eine kurze Seitbeuge wird diese noch erkennbarer machen.',
        hipsTitleGuide: 'Hüftweite',
        hipsSubtitleGuide:
            'Wickeln Sie das Massband um den weitesten Teil Ihrer Hüfte.',
        thighTitleGuide: 'Oberschenkelweite',
        thighSubtitleGuide:
            'Wickeln Sie das Massband am obersten Teil Ihres Oberschenkels im Schritt.',
        inseamTitleGuide: 'Innenbeinlänge',
        inseamSubtitleGuide:
            'Messen Sie vom Schritt an der Innenseite Ihres Oberschenkels, bis zum unteren Knöchelpunkt.',
        guideQuestion:
            'Die Verwendung Ihrer Körpermaße hilft uns, Ihnen eine 97%ige Passformgarantie zu geben',
        guideLifeEasier:
            'Erleichtern Sie Ihr Leben durch personalisiertes Knowhow Ihrer Masse, mit der Sie Zeit, Geld und die Resourcen unseres Planeten sparen können.',
        guideUnlike:
            'Im Gegensatz zu anderen Passform-Apps, die allgemeine Daten verwenden, um eine Größe vorherzusagen, verwendet SCIRCULA Ihre tatsächlichen Körpermaße, um Ihre einzigartige Körperform und die entsprechende Größe zu ermitteln.',
        guideData:
            'Wir passen Ihre Körpermasse an die Daten der einzelnen Kleidungsstücke an. Dabei werden wichtige Passformmerkmale jedes Kleidungsstücks berücksichtigt, wie es passen soll, wo es sich dehnt oder nicht und wie sich die Passform mit dem Tragen im Laufe der Zeit verändert.',
        guideApproach:
            'Unser Ansatz gibt Ihnen die genauesten Größenempfehlungen für Ihre optimale Passform je nach Kleidungsstück.',
        closeFullGuide: 'Schließen Sie die Anleitung',
        thirdPartyCookieTitle:
            'Für die SCIRCULA-Fit-Lösung sind Cookies von Drittanbietern erforderlich.',
        thirdPartyCookieText:
            'Bitte aktualisieren Sie Ihre Browsereinstellungen, um Cookies / Blocker von Drittanbietern zu deaktivieren und diese Seite zu aktualisieren. Vielen Dank.',
        addToCart: 'In den Warenkorb legen',
        about: 'About',
        man: 'mann',
        woman: 'frau',
    },
};

export default i18n;
