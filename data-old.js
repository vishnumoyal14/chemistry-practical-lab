// Old-syllabus / pre-rationalisation extras - experiments from earlier CBSE practical lists
// (e.g. CBSE 2022-23 and older curricula) that no longer appear in the current NCERT lab manual.
// Dialysis, emulsions, potassium ferric oxalate and the azo dye moved to Class 12: they ARE in the current NCERT manual (Exp 1.2, 1.3, 9.2, 10.4).
window.OLD = [
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
