// JEE Advanced extension experiments - quantitative/qualitative experiments beyond the school
// lab manual that JEE Advanced theory questions repeatedly draw on.
window.JEE = [
{
 id:'jee-bleaching-powder', tier:'jee', cat:'Iodometric titrations', tag:'jee', sim:'titration',
 title:'Available chlorine in bleaching powder (iodometric)',
 aim:'To determine the percentage of available chlorine in a given sample of bleaching powder.',
 theory:[
  'Bleaching powder CaOCl2 releases chlorine with acid. The chlorine liberates an equivalent amount of iodine from KI, and the iodine is titrated with standard Na2S2O3 using starch indicator (blue-black to colourless).',
  'Available chlorine % = (volume strength relation): each mole of I2 corresponds to one mole of Cl2. Good commercial bleaching powder gives 35-38 % available chlorine.'],
 eq:['CaOCl2 + 2CH3COOH -> Ca(CH3COO)2 + H2O + Cl2','Cl2 + 2KI -> 2KCl + I2','I2 + 2Na2S2O3 -> Na2S4O6 + 2NaI','1 mL of 0.1 M Na2S2O3 = 0.003546 g chlorine'],
 materials:['Bleaching powder (fresh)','10 % KI solution','Glacial acetic acid','0.1 M Na2S2O3 standard','1 % starch solution','Burette, pipette, conical flask'],
 procedure:[
  'Prepare a smooth paste of about 5 g bleaching powder and make it up to 250 mL in a volumetric flask (milky suspension - shake before each withdrawal).',
  'Pipette 25 mL of the suspension into the conical flask; add excess KI and acetic acid - the solution turns deep brown (liberated I2).',
  'Titrate with 0.1 M Na2S2O3 until the brown fades to pale straw yellow.',
  'Add 1 mL starch (turns blue-black) and continue dropwise to a colourless endpoint.',
  'Repeat for concordant readings.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Volume of 0.1 M Na2S2O3 (mL)','17.8','17.7','17.7'],
  ['Concordant volume','','17.7 mL','']]},
 result:'Available chlorine in the sample = 35.5 % (typical for good bleaching powder).',
 calc:['Chlorine in 25 mL = 17.7 x 0.003546 = 0.0628 g','Mass of sample in 25 mL = 5.0/10 = 0.500 g','Available chlorine = 0.0628 x 100 / 0.500 = 12.6 % (low - sample weathered)','For a fresh sample with titre 35.4 mL: 0.1255 g / 0.500 g = 25.1 %; a full-strength sample gives 35-38 %'],
 precautions:['Add starch only near the endpoint, or the starch-iodine complex forms early and releases iodine slowly, giving erratic endpoints.','Shake the bleaching-powder suspension before every pipetting - it settles fast.'],
 safety:['Chlorine fumes are toxic - work in ventilation and do not inhale over the flask.'],
 viva:[
  ['Why is starch added only near the endpoint?','Early addition forms a stable starch-iodine complex that holds iodine back and smears the endpoint.'],
  ['What is available chlorine?','The mass of chlorine liberated from 100 g of bleaching powder by acid - the measure of its bleaching strength.']],
 jee:['The stoichiometry Cl2 ~ I2 ~ 2Na2S2O3 and the starch-endpoint logic are standard JEE Advanced redox-titration material.']
},
{
 id:'jee-copper-iodometric', tier:'jee', cat:'Iodometric titrations', tag:'jee', sim:'titration',
 title:'Estimation of copper in copper sulphate (iodometric)',
 aim:'To estimate the amount of copper in a given copper sulphate solution iodometrically.',
 theory:[
  'Cu2+ oxidises iodide quantitatively: 2Cu2+ + 4I- -> Cu2I2 (white ppt) + I2. The liberated iodine is titrated with standard Na2S2O3 (starch indicator).',
  'Each mole of Na2S2O3 corresponds to one mole of Cu2+, so the titration directly measures copper.'],
 eq:['2CuSO4 + 4KI -> Cu2I2 + I2 + 2K2SO4','I2 + 2Na2S2O3 -> Na2S4O6 + 2NaI','1 mL 0.1 M Na2S2O3 = 0.006354 g Cu'],
 materials:['Given CuSO4 solution','10 % KI','Dilute acetic acid','0.1 M Na2S2O3','1 % starch','10 % NH4SCN solution'],
 procedure:[
  'Pipette 25 mL of the copper sulphate solution; add dilute acetic acid till slightly acidic.',
  'Add excess KI solution - brown I2 liberated with off-white Cu2I2 precipitate.',
  'Titrate with Na2S2O3 to pale straw colour; add starch, continue to pale blue.',
  'Add 1-2 mL NH4SCN, shake, and titrate to the sharp endpoint: blue disappears leaving a white-grey ppt.',
  'Repeat for concordance.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Volume of 0.1 M Na2S2O3 (mL)','19.6','19.5','19.5'],
  ['Concordant volume','','19.5 mL','']]},
 result:'Copper in the given solution: 19.5 x 0.006354 x 40 = 4.96 g/L (for 0.02 M Cu2+).',
 calc:['Cu per 25 mL = 19.5 x 0.006354 = 0.124 g','Concentration = 0.124 x 1000/25 = 4.96 g/L'],
 precautions:['NH4SCN addition near the endpoint frees iodine adsorbed on Cu2I2 - skipping it gives low results.','Keep the solution only mildly acidic; strong acid lets air oxidise I- and gives high results.'],
 safety:['Routine; iodine stains and copper salts are toxic.'],
 viva:[
  ['Why is NH4SCN added near the endpoint?','Cu2I2 adsorbs iodine; thiocyanate converts it to less-adsorbing CuSCN, releasing the trapped iodine for titration.'],
  ['Why can this titration not be done in strongly acidic medium?','Air oxidises I- to I2 rapidly in strong acid, inflating the titre.']],
 jee:['Cu2+/I-/thiosulphate stoichiometry (1:1:1) is a repeated JEE Advanced redox calculation.']
},
{
 id:'jee-dichromate', tier:'jee', cat:'Redox titrations', tag:'jee', sim:'titration',
 title:'Estimation of Fe2+ with standard potassium dichromate',
 aim:'To estimate Fe2+ in a given solution by titration against standard K2Cr2O7 using diphenylamine as internal indicator.',
 theory:[
  'In acid medium dichromate oxidises Fe2+ quantitatively (ratio 1:6). Diphenylamine changes from colourless to intense violet-blue at the endpoint; phosphoric acid is added to complex the Fe3+ formed and sharpen the endpoint.',
  'Unlike KMnO4, K2Cr2O7 is a primary standard and does not oxidise Cl- at these concentrations, so HCl medium is allowed.'],
 eq:['Cr2O7^2- + 6Fe2+ + 14H+ -> 2Cr3+ + 6Fe3+ + 7H2O','M(K2Cr2O7) = (1/6) x M(Fe2+) x V(Fe2+) / V(K2Cr2O7)'],
 materials:['0.02 M standard K2Cr2O7 (primary standard)','Given Fe2+ solution','Dilute H2SO4 + H3PO4 mixture','Diphenylamine indicator (1 % in conc. H2SO4)'],
 procedure:[
  'Pipette 25 mL of the Fe2+ solution; add 25 mL of the acid mixture and 3-4 drops of diphenylamine.',
  'Titrate with K2Cr2O7 slowly, swirling, till the green solution (Cr3+) flashes violet-blue permanently.',
  'Repeat for concordant readings.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Volume of 0.02 M K2Cr2O7 (mL)','24.5','24.4','24.4'],
  ['Concordant volume','','24.4 mL','']]},
 result:'Fe2+ in the given solution = 6 x 0.02 x 24.4 / 25 = 0.117 mol/L, i.e. 6.54 g/L as Fe.',
 calc:['M(Fe2+) = 6 x M(K2Cr2O7) x V / 25.0'],
 precautions:['Add phosphoric acid - without it the endpoint comes early and is indistinct.','Titrate slowly near the endpoint; the colour change is sharp but delayed by a few seconds.'],
 safety:['Dichromate is a carcinogen and strong oxidiser - avoid all skin contact and never pour residues into the bin; collect for disposal.'],
 viva:[
  ['What is the role of phosphoric acid?','It complexes Fe3+ (as colourless [Fe(HPO4)]+), lowering the Fe3+/Fe2+ potential and sharpening the endpoint colour.'],
  ['Why is K2Cr2O7 a primary standard while KMnO4 is not?','K2Cr2O7 is available pure, stable and non-hygroscopic; KMnO4 always contains MnO2 and decomposes in light.']],
 jee:['n-factor 6 for dichromate, and comparison of KMnO4 vs K2Cr2O7 as oxidants, are standard JEE questions.']
},
{
 id:'jee-double-indicator', tier:'jee', cat:'Acid-base titrations', tag:'jee', sim:'titration',
 title:'Na2CO3 and NaHCO3 in a mixture (double indicator titration)',
 aim:'To estimate sodium carbonate and sodium bicarbonate in their mixture by titration with standard HCl using phenolphthalein and methyl orange successively.',
 theory:[
  'Carbonate is neutralised in two stages: to NaHCO3 at pH ~8.3 (phenolphthalein endpoint, half neutralisation) and then to H2CO3 at pH ~4 (methyl orange endpoint, full neutralisation).',
  'If P mL is the phenolphthalein endpoint and M mL the total to methyl orange, then Na2CO3 corresponds to 2P mL and NaHCO3 to (M - 2P) mL of acid.'],
 eq:['Na2CO3 + HCl -> NaHCO3 + NaCl   (phenolphthalein endpoint)','NaHCO3 + HCl -> NaCl + H2O + CO2   (methyl orange endpoint)'],
 materials:['Mixture solution of Na2CO3 + NaHCO3','0.1 M standard HCl','Phenolphthalein','Methyl orange','Burette, pipette, flask'],
 procedure:[
  'Pipette 25 mL of the mixture; add phenolphthalein - pink.',
  'Titrate with 0.1 M HCl to colourless; record P mL.',
  'Add methyl orange to the same flask - yellow.',
  'Continue titrating to the first red-orange tinge; record the total M mL.',
  'Repeat for concordance.'],
 table:{caption:'Representative readings (simulated)',head:['Stage','HCl volume'],rows:[
  ['Phenolphthalein endpoint (P)','8.2 mL'],
  ['Methyl orange endpoint (total M)','24.6 mL'],
  ['For Na2CO3 (2P)','16.4 mL'],
  ['For NaHCO3 (M - 2P)','8.2 mL']]},
 result:'Na2CO3 = 0.1 x 16.4 x 106 / 25 = 6.95 g/L; NaHCO3 = 0.1 x 8.2 x 84 / 25 = 2.76 g/L.',
 calc:['Na2CO3 g/L = 2P x M(HCl) x 106 / (2 x 25)','NaHCO3 g/L = (M - 2P) x M(HCl) x 84 / 25'],
 precautions:['Do not shake vigorously at the phenolphthalein stage - escaping CO2 shifts the endpoint.'],
 safety:['Dilute acid precautions.'],
 viva:[
  ['Why does phenolphthalein change at half-neutralisation of carbonate?','At pH 8.3, carbonate has just been converted to bicarbonate; phenolphthalein changes exactly in this range.']],
 jee:['The P and 2P/M-2P volume algebra is a classic JEE Advanced volumetric-analysis question.']
},
{
 id:'jee-edta-hardness', tier:'jee', cat:'Complexometric titrations', tag:'jee', sim:'titration',
 title:'Hardness of water by EDTA titration',
 aim:'To estimate the total hardness of a water sample by complexometric titration with standard EDTA using Eriochrome Black T (EBT) indicator.',
 theory:[
  'At pH 10 (NH3-NH4Cl buffer), EBT forms a wine-red complex with Ca2+/Mg2+. EDTA, a stronger chelating agent, pulls the metal ions away; at the endpoint the free indicator shows its own steel-blue colour.',
  'Hardness is expressed as mg CaCO3 equivalent per litre; 1 mL of 0.01 M EDTA = 1.0 mg CaCO3.'],
 eq:['Ca2+/Mg2+ + EBT -> [M-EBT] (wine red)','[M-EBT] + EDTA^2- -> [M-EDTA] + EBT (steel blue)','1 mL 0.01 M EDTA = 1 mg CaCO3'],
 materials:['0.01 M EDTA (disodium salt)','NH3-NH4Cl buffer pH 10','EBT indicator','Water sample','Burette, pipette, flask'],
 procedure:[
  'Pipette 50 mL of the water sample; add 1-2 mL pH 10 buffer and 3-4 drops EBT - wine red.',
  'Titrate with 0.01 M EDTA slowly, swirling, till wine red changes to pure steel blue with no reddish tinge.',
  'Repeat for concordance; also titrate distilled water as a blank.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Volume of 0.01 M EDTA for 50 mL sample (mL)','15.2','15.1','15.1'],
  ['Concordant volume','','15.1 mL','']]},
 result:'Total hardness = 15.1 x 1.0 x 1000/50 = 302 mg/L as CaCO3 (hard water).',
 calc:['Hardness (mg/L) = V(EDTA) x 1.0 x 1000 / 50'],
 precautions:['The endpoint must be pure blue - any purple means under-titration.','Buffer first, then indicator, then titrate without delay.'],
 safety:['Ammonia buffer is pungent - use in ventilation.'],
 viva:[
  ['Why is pH 10 essential?','Below pH 10 the EDTA-metal complex formation is incomplete and EBT does not show its free blue form.'],
  ['What does "permanent hardness" mean?','Hardness due to chlorides and sulphates of Ca/Mg, not removed by boiling (unlike bicarbonate temporary hardness).']],
 jee:['Buffer logic, chelate stoichiometry (1:1) and hardness units all appear in JEE Advanced physical/inorganic questions.']
},
{
 id:'jee-gravimetric-ba', tier:'jee', cat:'Gravimetric analysis', tag:'jee', sim:null,
 title:'Gravimetric estimation of barium as barium sulphate',
 aim:'To estimate barium in a given solution gravimetrically by precipitating and weighing BaSO4.',
 theory:[
  'Ba2+ is precipitated quantitatively as BaSO4 with dilute H2SO4 in hot, dilute, slightly acidic solution. The precipitate is digested, filtered through ashless paper, ignited and weighed.',
  'Gravimetric factor: Ba = 137.33/233.38 = 0.5885 of the BaSO4 mass.'],
 eq:['BaCl2 + H2SO4 -> BaSO4 (white) + 2HCl','Ba = mass of BaSO4 x 137.33/233.38'],
 materials:['Given BaCl2 solution','Dilute H2SO4','Ashless filter paper','Silica crucible, burner/muffle furnace','Analytical balance, water bath'],
 procedure:[
  'Dilute the barium solution to ~200 mL, acidify slightly with HCl and heat to boiling.',
  'Add hot dilute H2SO4 slowly with constant stirring; digest on a water bath till the precipitate settles coarse.',
  'Test the supernatant for complete precipitation (one more drop of acid - no cloudiness).',
  'Filter through ashless paper, wash with hot water till free of chloride.',
  'Dry, char and ignite the paper in a weighed crucible to constant mass.'],
 table:{caption:'Representative data (simulated)',head:['Quantity','Value'],rows:[
  ['Mass of empty crucible','15.214 g'],
  ['Mass of crucible + BaSO4','15.915 g'],
  ['Mass of BaSO4','0.701 g'],
  ['Barium in the sample aliquot','0.701 x 0.5885 = 0.413 g']]},
 result:'Barium content of the given solution is found from the BaSO4 mass using the gravimetric factor 0.5885.',
 calc:['Ba = 0.701 x 137.33/233.38 = 0.413 g'],
 precautions:['Precipitate from hot, dilute solution for coarse, filterable crystals.','Ignite to constant mass - a single weighing is not proof of complete drying.'],
 safety:['Barium salts are poisonous - never pipette by mouth and wash hands thoroughly.'],
 viva:[
  ['What is digestion of a precipitate?','Standing the hot precipitate in contact with the mother liquor so small particles dissolve and reprecipitate on larger ones, giving pure, filterable crystals.'],
  ['Why is HCl added before precipitation?','It prevents co-precipitation of barium carbonate or phosphate.']],
 jee:['Gravimetric factor calculations and co-precipitation vs post-precipitation are standard JEE Advanced points.']
},
{
 id:'jee-mohr-cl', tier:'jee', cat:'Precipitation titrations', tag:'jee', sim:'titration',
 title:'Estimation of chloride by Mohr\u2019s method',
 aim:'To estimate Cl- in a given solution by titration with standard AgNO3 using K2CrO4 as indicator (Mohr\u2019s method).',
 theory:[
  'AgNO3 first precipitates all chloride as white AgCl (Ksp = 1.8 x 10^-10). Only after Cl- is exhausted does red-brown Ag2CrO4 (Ksp = 1.1 x 10^-12) appear - the endpoint.',
  'The titration must be done near neutral pH 7: in acid, chromate converts to dichromate (no red precipitate); in alkali, Ag2O precipitates.'],
 eq:['AgNO3 + Cl- -> AgCl (white) + NO3-','2Ag+ + CrO4^2- -> Ag2CrO4 (red-brown) at endpoint','1 mL 0.1 M AgNO3 = 0.003546 g Cl'],
 materials:['0.1 M standard AgNO3','Given chloride solution','K2CrO4 indicator (5 %)','Burette (amber/coloured), pipette, flask'],
 procedure:[
  'Pipette 25 mL of the chloride solution; add 1 mL K2CrO4 indicator (lemon yellow).',
  'Titrate with AgNO3, swirling, to the first permanent red-brown tinge.',
  'Repeat for concordance.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Volume of 0.1 M AgNO3 (mL)','21.3','21.2','21.2']]},
 result:'Chloride in the sample = 21.2 x 0.003546 x 40 = 3.01 g/L (for 25 mL aliquot).',
 calc:['Cl g/L = V(AgNO3) x 0.1 x 35.46 / 25'],
 precautions:['Keep pH 6.5-9; check with pH paper first.','Protect AgNO3 from light; it darkens by reduction.'],
 safety:['AgNO3 stains skin black and is corrosive; collect silver residues separately.'],
 viva:[
  ['Why does AgCl precipitate before Ag2CrO4 although both have small Ksp?','Their Ksp expressions differ; at the chromate concentration used, AgCl needs a lower [Ag+] to precipitate, so it forms first.']],
 jee:['Selective precipitation from Ksp comparison is a direct JEE Advanced equilibrium question.']
},
{
 id:'jee-weakacid-ka', tier:'jee', cat:'pH titration curves', tag:'jee', sim:'titration',
 title:'Titration curve of a weak acid and determination of Ka',
 aim:'To titrate a weak acid (0.1 M CH3COOH) with 0.1 M NaOH, plot the pH curve and determine Ka from the half-neutralisation point.',
 theory:[
  'The pH curve of a weak acid vs strong base starts higher (pH ~2.9), has a buffer region around pH = pKa, and its equivalence point is basic (~8.7) because the salt hydrolyses.',
  'At half-equivalence, [acid] = [salt], so pH = pKa and Ka = 10^-pH. For acetic acid, pKa = 4.74.'],
 eq:['pH = pKa + log([salt]/[acid])  |  at half-neutralisation pH = pKa = 4.74'],
 materials:['0.1 M CH3COOH','0.1 M NaOH','pH meter or universal indicator','Burette, pipette, beaker'],
 procedure:[
  'Pipette 25 mL of 0.1 M CH3COOH into a beaker with a pH electrode.',
  'Add NaOH in 1 mL portions (0.5 mL near the jump), recording pH after each addition.',
  'Plot pH vs volume; read the equivalence volume Ve at the steepest point.',
  'Read pH at Ve/2 - this is pKa.'],
 table:{caption:'Representative data points (calculated, 25 C)',head:['NaOH (mL)','0','5','12.5 (=Ve/2)','20','24','25 (=Ve)','26','30'],rows:[
  ['pH','2.87','4.27','4.74','5.22','5.70','8.72','11.29','11.96']]},
 result:'Ve = 25.0 mL; pH at 12.5 mL = 4.74 = pKa, giving Ka = 1.8 x 10^-5, matching the literature value.',
 calc:['Ka = 10^-4.74 = 1.8 x 10^-5'],
 precautions:['Standardise the pH meter with pH 4, 7 and 9.2 buffers first.','Keep temperature constant at 25 C.'],
 safety:['Routine dilute acid/alkali precautions.'],
 viva:[
  ['Why is the equivalence point of this titration above pH 7?','Sodium acetate hydrolyses: CH3COO- + H2O <=> CH3COOH + OH-, so the solution at equivalence is basic.'],
  ['Which indicator suits this titration?','Phenolphthalein (8.3-10), because the jump region is roughly pH 7.7-10; methyl orange would change far too early.']],
 jee:['Reading pKa off a titration curve and choosing indicators by jump region are exactly the skills JEE Advanced tests.']
},
{
 id:'jee-buffer', tier:'jee', cat:'Buffer solutions', tag:'jee', sim:'ph',
 title:'Preparation of a buffer and verification of Henderson-Hasselbalch',
 aim:'To prepare an acetate buffer of pH 5.0 and verify the Henderson-Hasselbalch equation experimentally.',
 theory:[
  'A buffer of acetic acid and sodium acetate resists pH change. Its pH follows pH = pKa + log([salt]/[acid]); choosing the right salt:acid ratio sets the pH.',
  'For pH 5.0 with pKa 4.74: [salt]/[acid] = 10^0.26 = 1.8.'],
 eq:['pH = pKa + log([salt]/[acid])','5.0 = 4.74 + log(ratio)  ->  ratio = 1.8'],
 materials:['0.1 M CH3COOH','0.1 M CH3COONa','pH meter / pH paper','Beakers, measuring cylinders','Dilute HCl and NaOH (for buffer-action test)'],
 procedure:[
  'Mix 36 mL of 0.1 M CH3COONa with 20 mL of 0.1 M CH3COOH (ratio 1.8).',
  'Measure the pH; compare with the calculated 5.0.',
  'Divide into two parts; add 1 mL 0.1 M HCl to one and 1 mL 0.1 M NaOH to the other; measure pH of each and of plain water treated the same way.'],
 table:{caption:'Representative results (simulated)',head:['Solution','pH after adding 1 mL 0.1 M HCl','pH after adding 1 mL 0.1 M NaOH'],rows:[
  ['Acetate buffer','4.94','5.06'],
  ['Plain water','about 3','about 11']]},
 result:'The buffer holds pH near 5 while plain water swings wildly - buffer action demonstrated and Henderson-Hasselbalch verified.',
 calc:['pH = 4.74 + log(36/20) = 4.74 + 0.255 = 5.0'],
 precautions:['Measure volumes accurately; the ratio, not the absolute amounts, sets the pH.'],
 safety:['Routine precautions.'],
 viva:[
  ['What is buffer capacity?','The amount of acid or base the buffer can absorb per unit pH change; maximum when [salt] = [acid].']],
 jee:['Buffer capacity maxima and dilution effect on buffer pH (pH unchanged on dilution) are classic JEE Advanced traps.']
},
{
 id:'jee-winkler', tier:'jee', cat:'Water analysis', tag:'jee', sim:null,
 title:'Dissolved oxygen in water by Winkler\u2019s method',
 aim:'To determine the dissolved oxygen (DO) content of a water sample by Winkler\u2019s iodometric method.',
 theory:[
  'MnSO4 + alkali precipitates Mn(OH)2, which dissolved oxygen oxidises to brown MnO(OH)2. On acidification with KI present, it liberates iodine equivalent to the oxygen; the iodine is titrated with Na2S2O3 (starch).',
  '1 mL of 0.025 M Na2S2O3 corresponds to 0.2 mg of O2. Normal clean water holds 6-10 mg/L DO; polluted water much less.'],
 eq:['MnSO4 + 2NaOH -> Mn(OH)2 + Na2SO4','2Mn(OH)2 + O2 -> 2MnO(OH)2 (brown)','MnO(OH)2 + 2H2SO4 + 2KI -> MnSO4 + K2SO4 + I2 + 3H2O'],
 materials:['Water sample (collected without air bubbles)','MnSO4 solution','Alkaline KI solution','Conc. H2SO4','0.025 M Na2S2O3','Starch solution','BOD bottle (250-300 mL, glass stopper)'],
 procedure:[
  'Fill the BOD bottle with the sample, avoiding bubbles; stopper under water.',
  'Add 2 mL MnSO4 and 2 mL alkaline KI below the surface; stopper and invert several times - brown floc forms if O2 is present.',
  'Let the floc settle, add 2 mL conc. H2SO4 and mix till the precipitate dissolves to a clear golden iodine solution.',
  'Titrate 100 mL (or the whole) with 0.025 M Na2S2O3 to the starch endpoint.'],
 table:{caption:'Representative data (simulated)',head:['Quantity','Value'],rows:[
  ['Volume of 0.025 M Na2S2O3 for 100 mL sample','4.1 mL'],
  ['DO = 4.1 x 0.2 x 10','8.2 mg/L (healthy water)']]},
 result:'The dissolved oxygen content is 8.2 mg/L - water fit for aquatic life.',
 calc:['DO (mg/L) = titre x 0.2 x 1000 / sample mL'],
 precautions:['No air bubbles at any stage - trapped air adds oxygen and inflates results.','Fix the oxygen (MnSO4 + alkali) immediately at the sampling site.'],
 safety:['Conc. H2SO4 addition is done by the teacher; Mn salts and acids need gloves.'],
 viva:[
  ['Why does DO fall in polluted water?','Microbes oxidising organic waste consume dissolved oxygen faster than it re-dissolves from air.'],
  ['Why is the precipitate brown?','Oxygen converts white Mn(OH)2 into brown hydrated MnO2 (Mn(III/IV) oxides).']],
 jee:['The 4-electron O2 accounting (1 mol O2 = 2 mol I2 = 4 mol Na2S2O3) is a favourite JEE Advanced equivalent-weight problem.']
}
];
