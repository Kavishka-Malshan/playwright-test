import { test, expect } from '@playwright/test';

test.describe('ITPM Assignment 1 - Singlish to Sinhala Automation', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(60000);

    await page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'domcontentloaded',
    });

    const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
    const sinhalaOutput = page.locator('div.flex-grow.bg-slate-50');

    await expect(singlishInput).toBeVisible();
    await expect(sinhalaOutput).toBeVisible();
  });

  const getInputs = (page: any) => ({
    singlishInput: page.locator('textarea[placeholder="Input Your Singlish Text Here."]'),
    sinhalaOutput: page.locator('div.flex-grow.bg-slate-50'),
  });

  // ===========================================================================
  // 1. POSITIVE FUNCTIONAL TESTS (24)
  // ===========================================================================

  const positiveTests = [
    { id: 'Pos_Fun_0001', input: 'api paan kanavaa.', expected: 'අපි පාන් කනවා.' },
    { id: 'Pos_Fun_0002', input: 'mama naala ivara velaa heta havasata yannam.', expected: 'මම නාල ඉවර වෙලා හෙට හවසට යන්නම්.' },
    { id: 'Pos_Fun_0003', input: 'oyaata heta enna puluvandha?', expected: 'ඔයාට හෙට එන්න පුලුවන්ද?' },
    { id: 'Pos_Fun_0004', input: 'vahaama havasata yanna.', expected: 'වහාම හවසට යන්න.' },
    { id: 'Pos_Fun_0005', input: 'oyaa aappa geenavanam api havasata kanna eliyata yamu.', expected: 'ඔයා ආප්ප ගේනවනම් අපි හවසට කන්න එලියට යමු.' },
    { id: 'Pos_Fun_0006', input: 'mama eeka kalee naehae.', expected: 'මම ඒක කලේ නැහැ.' },
    { id: 'Pos_Fun_0007', input: 'iiyea havasa mama application eka fill kalaa.', expected: 'ඊයේ හවස මම application එක fill කලා.' },
    { id: 'Pos_Fun_0008', input: 'api anidhdhaa havasata enavaa.', expected: 'අපි අනිද්දා හවසට එනවා.' },
    { id: 'Pos_Fun_0009', input: 'oyaalaa adha yanavadha?', expected: 'ඔයාලා අද යනවද?' },
    { id: 'Pos_Fun_0010', input: 'mama computer eka heta geenavaa.', expected: 'මම computer එක හෙට ගේනවා.' },
    { id: 'Pos_Fun_0011', input: 'adha port city eka vahalaa.', expected: 'අද port city එක වහලා.' },
    { id: 'Pos_Fun_0012', input: 'suba naththalak veevaa!', expected: 'සුබ නත්තලක් වේවා!' },
    { id: 'Pos_Fun_0013', input: 'mata bae adoo ehe yanna.', expected: 'මට බැ අඩෝ එහෙ යන්න.' },
    { id: 'Pos_Fun_0014', input: 'heta enavanam Rs.25000 k aran enna.', expected: 'හෙට එනවනම් Rs.25000 ක් අරන් එන්න.' },
    { id: 'Pos_Fun_0015', input: 'dhaen velaava 1.00PM ta lagayi.', expected: 'දැන් වෙලාව 1.00PM ට ලගයි.' },
    { id: 'Pos_Fun_0016', input: 'eka eka adu venakota mata kiyanna.', expected: 'එක එක අඩු වෙනකොට මට කියන්න.' },
    { id: 'Pos_Fun_0017', input: 'thathpara 2k 3k inna.', expected: 'තත්පර 2ක් 3ක් ඉන්න.' },
    { id: 'Pos_Fun_0018', input: 'mama gihin aavee.\ndhaen naanna oonee.', expected: 'මම ගිහින් ආවේ.\nදැන් නාන්න ඕනේ.' },
    { id: 'Pos_Fun_0019', input: 'adoo     mata    eeka amathaka unaanee.', expected: 'අඩෝ     මට    ඒක අමතක උනානේ.' },
    { id: 'Pos_Fun_0020', input: 'unta adha inna baee kivvaa.', expected: 'උන්ට අද ඉන්න බෑ කිව්වා.' },
    { id: 'Pos_Fun_0021', input: 'oyaa(samitha) heta udhee yanavadha?', expected: 'ඔයා(සමිත) හෙට උදේ යනවද?' },
    { id: 'Pos_Fun_0022', input: 'heta SMS ekak dhaanna oyaa.', expected: 'හෙට SMS එකක් දාන්න ඔයා.' },
    { id: 'Pos_Fun_0023', input: 'mee dhaenma araheta yanna.', expected: 'මේ දැන්ම අරහෙට යන්න.' },
    { id: 'Pos_Fun_0024', input: 'shrii lQQkaava indhiyan saagarayee pihiti ithaa sundhara dhuupath raajYAyaki. eya "indhiyan saagarayee muthu aetaya" lesadha prachalithaya. nil paehathi muhudhen saha sashriika haritha vanantharavalin vata vuu mema ratee, vasara dhahas gananaka ithihasayak aetha. shrii jayavarDhanapura koottee paripaalana aganuvara vee. theevagaavata shrii lQQkaava lookaya puraa prasidhDhiyak usulayi.', expected: 'ශ්‍රී ලංකාව ඉන්දියන් සාගරයේ පිහිටි ඉතා සුන්දර දූපත් රාජ්‍යයකි. එය "ඉන්දියන් සාගරයේ මුතු ඇටය" ලෙසද ප්‍රචලිතය. නිල් පැහති මුහුදෙන් සහ සශ්‍රීක හරිත වනන්තරවලින් වට වූ මෙම රටේ, වසර දහස් ගනනක ඉතිහසයක් ඇත. ශ්‍රී ජයවර්ධනපුර කෝට්ටේ පරිපාලන අගනුවර වේ. තේවගාවට ශ්‍රී ලංකාව ලෝකය පුරා ප්‍රසිද්ධියක් උසුලයි.' },
  ];

  for (const data of positiveTests) {
    test(data.id, async ({ page }) => {
      const { singlishInput, sinhalaOutput } = getInputs(page);

      await singlishInput.fill('');
      await singlishInput.type(data.input, { delay: 20 });
      await expect(sinhalaOutput).toContainText(data.expected, { timeout: 5000 });
    });
  }

  // ===========================================================================
  // 2. NEGATIVE FUNCTIONAL TESTS (EXPECTED FAILURES)
  // ===========================================================================

  const negativeTests = [
    { id: 'Neg_Fun_0001', input: 'lQQkaawa', expected: 'ලංකාව' },
    { id: 'Neg_Fun_0002', input: 'aBA gediya (BA)', expected: 'අඹ ගෙඩිය (ඹ)' },
    { id: 'Neg_Fun_0003', input: 'https://www.swifttranslator.com/', expected: 'https://www.swifttranslator.com/' },
    { id: 'Neg_Fun_0004', input: 'samsung/ prolink/ asus', expected: 'samsung/ prolink/ asus' },
    { id: 'Neg_Fun_0005', input: 'guruthumaa aBhyaasa karanna kiyuvaa.', expected: 'ගුරුතුමා අභ්‍යාස කරන්න කියුවා.' },
    { id: 'Neg_Fun_0006', input: 'iita passe Ctrl + V press karanna.', expected: 'ඊට පස්සෙ Ctrl + V press කරන්න.' },
    { id: 'Neg_Fun_0007', input: '5x + y = 125, meeka sulu karanna', expected: '5x + y = 125, මේක සුලු කරන්න' },
    { id: 'Neg_Fun_0008', input: '"npm start dhenna.', expected: '"npm start දෙන්න.' },
    { id: 'Neg_Fun_0009', input: 'England vs england', expected: 'England vs england' },
    { id: 'Neg_Fun_0010', input: 'apee ammaA heta enavaa.', expected: 'අපේ අම්මා හෙට එනවා.' },
  ];

  for (const data of negativeTests) {
    test(data.id, async ({ page }) => {
      test.fail();

      const { singlishInput, sinhalaOutput } = getInputs(page);

      await singlishInput.fill('');
      await singlishInput.type(data.input, { delay: 20 });
      await expect(sinhalaOutput).toHaveText(data.expected, { timeout: 5000 });
    });
  }

  // ===========================================================================
  // 3. POSITIVE UI TEST
  // ===========================================================================

  test('Pos_UI_0001: Real-time synchronization', async ({ page }) => {
    const { singlishInput, sinhalaOutput } = getInputs(page);

    await singlishInput.type('dhavasa', { delay: 150 });
    await expect(sinhalaOutput).toHaveText(/දවස/);
  });
});