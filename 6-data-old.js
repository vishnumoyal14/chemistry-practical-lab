// Old-syllabus / pre-rationalisation extras - experiments from earlier CBSE practical lists
// (e.g. CBSE 2022-23 and older curricula) that no longer appear in the current NCERT lab manual.
window.OLD = [
{
 id:'old-dialysis', tier:'old', cat:'Surface chemistry (old list)', tag:'old', sim:null,
 title:'Dialysis of a prepared sol',
 aim:'To purify the ferric hydroxide (or starch) sol prepared earlier by dialysis.',
 theory:[
  'Colloidal particles cannot pass through a parchment/cellophane membrane, but true-solution ions (H+, Cl- from the hydrolysis) can. Suspending the sol in a parchment bag in flowing distilled water removes the electrolyte impurities.',
  'The process is called dialysis; it is the same principle as an artificial kidney.'],
 eq:[],
 materials:['Prepared Fe(OH)3 sol','Parchment paper / cellophane bag','Large beaker','Running or frequently changed distilled water'],
 procedure:[
  'Tie the sol in a parchment bag, leaving space for swelling.',
  'Suspend the bag in a beaker of distilled water so the sol is fully immersed.',
  'Change the water every 30-60 minutes (or run a slow continuous flow).',
  'Continue until the outside water gives no precipitate with AgNO3 (no Cl- left).'],
 table:{caption:'Representative observations (simulated)',head:['Test on outside water','Early','After dialysis'],rows:[
  ['AgNO3 test for Cl-','White precipitate','No precipitate'],
  ['Sol inside bag','Red-brown, slightly turbid','Clear deep red-brown']]},
 result:'The sol is freed from electrolyte impurities; pure sols coagulate much less readily.',
 calc:[],
 precautions:['Do not let the bag touch the beaker bottom.','Test the outside water, not the sol, for chloride.'],
 safety:['Routine wet-lab precautions.'],
 viva:[
  ['Why can\u2019t a sol be purified by ordinary filtration?','Colloidal particles pass through filter paper; only a semipermeable membrane holds them back while letting ions through.']],
 jee:['Dialysis vs ultrafiltration vs electrodialysis is a JEE surface-chemistry distinction.']
},
{
 id:'old-emulsion', tier:'old', cat:'Surface chemistry (old list)', tag:'old', sim:null,
 title:'Role of emulsifying agents in stabilising emulsions of different oils',
 aim:'To study the role of emulsifying agents in stabilising the emulsions of different oils.',
 theory:[
  'Oil and water alone separate within minutes. An emulsifying agent (soap, gum, detergent) coats the droplets and stops them coalescing, giving a stable emulsion.',
  'Two types: oil-in-water (o/w, e.g. milk) and water-in-oil (w/o, e.g. butter).'],
 eq:[],
 materials:['Castor oil / mustard oil / coconut oil','Water','Soap solution, gum arabic solution','Test tubes with stoppers, stopwatch'],
 procedure:[
  'Take 2 mL oil + 5 mL water in a tube, shake vigorously for one minute and note the time for layers to separate.',
  'Repeat with 5-6 drops of soap solution added; note the separation time again.',
  'Repeat with gum arabic and with a second oil.',
  'Compare separation times with and without emulsifier.'],
 table:{caption:'Representative data (simulated)',head:['System','Time for visible separation'],rows:[
  ['Oil + water only','2 - 4 minutes'],
  ['Oil + water + soap','stable for hours'],
  ['Oil + water + gum','stable for more than a day']]},
 result:'Emulsifying agents greatly increase emulsion stability; different oils and agents give different stabilities.',
 calc:[],
 precautions:['Shake every tube for the same time with the same vigour.'],
 safety:['Routine precautions; clean oily glassware with soap.'],
 viva:[
  ['How does soap stabilise an emulsion?','Its molecules have a hydrophilic head in water and a hydrophobic tail in oil, forming a protective film around droplets.']],
 jee:[]
},
{
 id:'old-kferriox', tier:'old', cat:'Preparation of inorganic compounds (old list)', tag:'old', sim:null,
 title:'Preparation of potassium ferric oxalate',
 aim:'To prepare crystals of potassium ferric oxalate, K3[Fe(C2O4)3].3H2O.',
 theory:[
  'Ferrous ammonium sulphate is first converted to ferrous oxalate, which is then oxidised by H2O2 in the presence of potassium oxalate and oxalic acid to the green complex salt.',
  'Unlike Mohr\u2019s salt (a double salt), this is a complex salt: it gives no free Fe3+ test in solution.'],
 eq:['FeSO4 + H2C2O4 -> FeC2O4 + H2SO4','2FeC2O4 + H2O2 + 3K2C2O4 + H2C2O4 -> 2K3[Fe(C2O4)3].3H2O'],
 materials:['Mohr\u2019s salt 5 g','Oxalic acid solution','H2O2 (20 volume)','Potassium oxalate / oxalic acid','Ethanol','Beakers, water bath, ice'],
 procedure:[
  'Dissolve 5 g Mohr\u2019s salt in warm water with dilute H2SO4; add oxalic acid solution.',
  'Heat to precipitate yellow ferrous oxalate; let it settle and decant.',
  'Add potassium oxalate solution and oxidise with H2O2 dropwise at about 40 C (solution turns brown, then green with a little oxalic acid).',
  'Concentrate on a water bath, cool in ice and add ethanol; emerald-green crystals separate.',
  'Filter, wash with alcohol and dry in the dark (the complex is photosensitive).'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Emerald-green monoclinic crystals'],
  ['Practical yield','about 60-70 % of theory']]},
 result:'Green crystals of potassium ferric oxalate are obtained; solution gives no free Fe3+ test with KSCN.',
 calc:['Molar mass K3[Fe(C2O4)3].3H2O = 491.24 g/mol'],
 precautions:['Add H2O2 dropwise with stirring - violent frothing if rushed.','Dry in the dark; light reduces the complex.'],
 safety:['H2O2 (20 vol) burns skin and bleaches - gloves and goggles.'],
 viva:[
  ['Why does its solution not respond to KSCN?','All the iron is locked in the stable [Fe(C2O4)3]3- complex anion; free Fe3+ is not available.']],
 jee:['Double salt vs complex salt, and the photochemistry of ferrioxalate (actinometer), are JEE Advanced favourites.']
},
{
 id:'old-dye', tier:'old', cat:'Preparation of organic compounds (old list)', tag:'old', sim:null,
 title:'Preparation of 2-naphthol aniline dye',
 aim:'To prepare the azo dye 1-phenylazo-2-naphthol from aniline and 2-naphthol.',
 theory:[
  'Aniline is diazotised at 0-5 C and the diazonium salt is coupled with alkaline 2-naphthol. The orange-red azo dye precipitates at once.',
  'This was the older CBSE alternative to aniline yellow; the coupling partner is a phenol instead of an amine.'],
 eq:['C6H5NH2 + NaNO2 + 2HCl ->(0-5 C) C6H5N2+Cl- + NaCl + 2H2O','C6H5N2+Cl- + C10H7ONa -> C6H5-N=N-C10H6OH + NaCl (orange-red dye)'],
 materials:['Aniline 2 mL','Concentrated HCl','NaNO2 solution','2-Naphthol in NaOH','Ice bath','Glacial acetic acid'],
 procedure:[
  'Diazotise 2 mL aniline in dilute HCl with cold NaNO2 at 0-5 C.',
  'Separately dissolve 2-naphthol in cold dilute NaOH.',
  'Add the diazonium solution slowly to the alkaline naphthol with stirring, keeping cold.',
  'The orange-red dye separates; filter, wash with water and dry.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Orange-red solid'],
  ['Melting point','about 131 C (literature 131-133 C)']]},
 result:'Orange-red 1-phenylazo-2-naphthol is obtained.',
 calc:[],
 precautions:['Keep both solutions cold; couple slowly with stirring.'],
 safety:['Aniline toxic, diazonium salts unstable - never let the diazonium solution dry out.'],
 viva:[
  ['Why is 2-naphthol dissolved in NaOH?','The naphthoxide ion is much more reactive towards electrophilic coupling than neutral naphthol.']],
 jee:['Phenoxide activation and azo coupling position (ortho to -OH in 2-naphthol) are standard JEE Advanced points.']
},
{
 id:'old-iodoform', tier:'old', cat:'Preparation of organic compounds (old list)', tag:'old', sim:null,
 title:'Preparation of iodoform from acetone (or ethanol)',
 aim:'To prepare iodoform (CHI3) from acetone using iodine and alkali.',
 theory:[
  'Acetone\u2019s methyl ketone group undergoes exhaustive iodination and then cleavage by alkali (haloform reaction), giving yellow iodoform.',
  'Ethanol and secondary alcohols with the CH3-CH(OH)- unit also respond, since iodine first oxidises them to the carbonyl.'],
 eq:['CH3COCH3 + 3I2 + 4NaOH -> CHI3 (yellow) + CH3COONa + 3NaI + 3H2O'],
 materials:['Acetone 1 mL','Iodine solution (I2 in KI)','Dilute NaOH','Water bath','Filter paper'],
 procedure:[
  'Dissolve 1 mL acetone in 10 mL water in a flask.',
  'Add iodine solution dropwise with shaking until a faint iodine colour persists.',
  'Add dilute NaOH dropwise till the iodine colour just disappears; warm at 50-60 C for a few minutes.',
  'Cool; yellow iodoform crystals separate. Filter, wash and dry; check m.p. (119 C).'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Yellow crystals with characteristic antiseptic smell'],
  ['Melting point','118-119 C (literature 119 C)']]},
 result:'Yellow iodoform, m.p. about 119 C, is obtained - confirming the CH3CO- (or oxidisable CH3CHOH-) group.',
 calc:[],
 precautions:['Add NaOH only till the iodine colour vanishes; excess alkali decomposes iodoform.'],
 safety:['Iodine vapours irritate; avoid skin contact with the iodine solution.'],
 viva:[
  ['Which compounds give the iodoform test?','Methyl ketones (CH3CO-), acetaldehyde, ethanol and CH3CHOH-R alcohols.'],
  ['Why does propan-2-ol respond but tert-butanol not?','Propan-2-ol oxidises to acetone (a methyl ketone); tert-butanol has no alpha-H and cannot be oxidised to a carbonyl.']],
 jee:['The haloform reaction scope is a classic JEE Advanced identification question.']
},
{
 id:'old-hardness-soap', tier:'old', cat:'Water analysis (old list)', tag:'old', sim:null,
 title:'Hardness of water by the soap-solution method',
 aim:'To estimate the total hardness of a water sample by titration with standard soap solution.',
 theory:[
  'Ca2+ and Mg2+ ions consume soap to form scum before any lather can form. The volume of standard soap solution needed to produce a stable lather (lasting 1 minute) measures the hardness.',
  'This older method was later replaced by the sharper EDTA titration (see the JEE extension experiments).'],
 eq:['2C17H35COONa + Ca2+ -> (C17H35COO)2Ca (scum) + 2Na+'],
 materials:['Standard soap solution','Hard water sample','Distilled water (blank)','Burette, stoppered flask, stopwatch'],
 procedure:[
  'Take 50 mL of the water sample in a stoppered flask.',
  'Add soap solution 1 mL at a time, shaking well after each addition.',
  'The endpoint is a stable lather persisting for at least one minute.',
  'Repeat with distilled water as a blank and subtract.'],
 table:{caption:'Representative data (simulated)',head:['Sample','Soap solution for stable lather'],rows:[
  ['Distilled water (blank)','0.5 mL'],
  ['Hand-pump water','12.5 mL'],
  ['Estimated hardness','about 600 mg/L as CaCO3 (hard water)']]},
 result:'The water sample\u2019s hardness is estimated from the soap consumption after blank correction.',
 calc:['Hardness (mg/L as CaCO3) = (titre - blank) x soap factor x 1000 / sample volume'],
 precautions:['Shake each addition identically; lather judgement must be consistent.'],
 safety:['Routine precautions.'],
 viva:[
  ['Why is a blank with distilled water necessary?','Even soap solution alone needs a small volume to lather; subtracting it isolates the hardness effect.']],
 jee:[]
}
];
