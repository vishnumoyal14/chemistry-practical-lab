// Class 11 experiments - NCERT Laboratory Manual Chemistry Class XI (ncert.nic.in, 2025-26 ed.)
window.C11 = [
{
 id:'c11-std-oxalic', tier:'c11', cat:'Basic laboratory techniques - Unit 2', tag:'current', sim:'mass',
 title:'Preparing a standard solution of oxalic acid',
 aim:'To prepare 250 mL of 0.1 M (M/10) standard solution of oxalic acid.',
 theory:[
  'A standard solution is one whose concentration is known exactly. Oxalic acid (H2C2O4.2H2O) is a primary standard: it is stable, pure, does not absorb moisture, and its mass directly gives the molarity.',
  'Mass needed = molarity x volume (L) x molar mass. For 0.1 M in 250 mL: 0.1 x 0.250 x 126.07 = 3.15 g of oxalic acid dihydrate.'],
 eq:['mass = M x V(L) x molar mass  =  0.1 x 0.250 x 126.07 = 3.15 g'],
 materials:['Analytical balance (0.001 g)','Weighing bottle / watch glass','Oxalic acid crystals','250 mL volumetric flask','Funnel, glass rod, wash bottle, distilled water'],
 procedure:[
  'Dry the weighing bottle and weigh it empty, then with about 3.15 g oxalic acid.',
  'Transfer the crystals to a beaker, add ~50 mL distilled water and dissolve with stirring.',
  'Pour into the 250 mL volumetric flask through a funnel; rinse the beaker and rod 3 times, adding washings.',
  'Make up to the mark with distilled water; the bottom of the meniscus must touch the calibration mark.',
  'Stopper and invert 15-20 times for uniform mixing.'],
 table:{caption:'Representative weighing record (simulated)',head:['Item','Reading'],rows:[
  ['Mass of empty weighing bottle','11.874 g'],
  ['Mass of bottle + oxalic acid','15.026 g'],
  ['Mass of oxalic acid taken','3.152 g'],
  ['Moles weighed','3.152 / 126.07 = 0.02500 mol'],
  ['Molarity of solution','0.02500 / 0.250 = 0.1000 M']]},
 result:'250 mL of exactly 0.100 M oxalic acid solution is obtained.',
 calc:['Molar mass H2C2O4.2H2O = 90.03 + 2 x 18.02 = 126.07 g/mol','Moles = 3.152 / 126.07 = 0.02500 mol','Molarity = 0.02500 mol / 0.250 L = 0.1000 M'],
 precautions:['Use a funnel and rinse every trace of solution into the flask.','Never add water above the mark; use a dropper for the last drops.','Weigh by difference - do not handle crystals with fingers.'],
 safety:['Oxalic acid is toxic and irritant. Wash hands after handling; do not taste or inhale dust.'],
 viva:[
  ['What is a primary standard?','A substance available in pure, stable, non-hygroscopic form of known molar mass, so its solution concentration is known directly from weighing.'],
  ['Why is oxalic acid dihydrate weighed as 126.07 and not 90.03?','The crystals contain 2 molecules of water of crystallisation, which stay in the weighed mass and must be counted.'],
  ['Why is the flask inverted many times after making up?','To make the concentration uniform throughout; otherwise the top layer is more dilute.']],
 jee:['Molarity of a standard solution changes with temperature because volume changes; molality and mole fraction do not.'],
 simProps:{defaults:[
   {name:'Oxalic acid (H2C2O4.2H2O)',mm:126.07},
   {name:'Anhydrous sodium carbonate (Na2CO3)',mm:105.99},
   {name:"Mohr's salt FeSO4.(NH4)2SO4.6H2O",mm:392.14},
   {name:'Potassium dichromate (K2Cr2O7)',mm:294.19}]}
},
{
 id:'c11-crystallisation', tier:'c11', cat:'Purification and criteria of purity - Unit 3', tag:'current', sim:null,
 title:'Purification of an impure sample by crystallisation',
 aim:'To purify an impure sample of alum (or copper sulphate / benzoic acid) by crystallisation.',
 theory:[
  'Crystallisation separates a soluble solid from soluble and insoluble impurities. The impure sample is dissolved in the minimum hot solvent, filtered hot to remove insoluble matter, then cooled slowly so pure crystals grow while soluble impurities stay in the mother liquor.',
  'Alum and copper sulphate are crystallised from water; benzoic acid is crystallised from hot water because its solubility rises steeply with temperature.'],
 eq:['K2SO4.Al2(SO4)3.24H2O  (potash alum) - recrystallised from hot water'],
 materials:['Impure alum sample','Beaker, tripod, wire gauze','Burner','Glass rod','Funnel and fluted filter paper','China dish'],
 procedure:[
  'Dissolve about 5 g impure alum in ~30 mL warm distilled water with constant stirring.',
  'Add 1 mL dilute H2SO4 (prevents hydrolysis), heat till a clear saturated solution forms.',
  'Filter the hot solution quickly through fluted filter paper into a clean china dish.',
  'Cover and leave undisturbed to cool slowly for several hours / overnight.',
  'Decant the mother liquor, wash crystals with a little ice-cold water, dry between filter papers.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Impure alum taken','5.0 g'],
  ['Pure octahedral crystals recovered','3.9 - 4.2 g'],
  ['Typical recovery','about 80 %']]},
 result:'Colourless, transparent octahedral crystals of pure potash alum are obtained; impurities remain in the mother liquor.',
 calc:[],
 precautions:['Do not evaporate to dryness - only to the crystallisation point.','Cool slowly and undisturbed for large, well-formed crystals.','Use minimum hot water; excess solvent reduces recovery.'],
 safety:['Hot solutions can scald; handle with tongs and keep the flame low.'],
 viva:[
  ['Why is dilute H2SO4 added while dissolving alum?','It prevents hydrolysis of Al3+ ions, which would make the solution turbid.'],
  ['What is mother liquor?','The solution left after crystals separate, containing the soluble impurities.'],
  ['Why is the solution filtered hot?','So the salt does not crystallise inside the filter paper during filtration.']],
 jee:[]
},
{
 id:'c11-melting-point', tier:'c11', cat:'Purification and criteria of purity - Unit 3', tag:'current', sim:'melt',
 title:'Determination of melting point of an organic compound',
 aim:'To determine the melting point of a given solid organic compound (e.g. naphthalene, urea, benzoic acid, cinnamic acid).',
 theory:[
  'A pure crystalline solid melts sharply over 0.5-1 C; impurities depress and widen the melting range, so melting point is a quick purity test.',
  'The compound is packed in a capillary tube and heated slowly in a liquid paraffin bath (Thiele tube). The temperature at which the solid just starts to melt and the temperature at which it becomes fully liquid give the melting range.'],
 eq:['Literature values: naphthalene 80 C, urea 132-133 C, benzoic acid 122 C, cinnamic acid 133 C, acetanilide 114 C'],
 materials:['Thiele tube / oil bath','Thermometer (0-250 C)','Capillary tubes','Liquid paraffin','Sample compound','Burner, thread/rubber band'],
 procedure:[
  'Seal one end of a capillary tube in the flame.',
  'Crush the dry sample, fill the capillary to 3-4 mm by tapping it down.',
  'Attach the capillary to the thermometer so the sample lies beside the bulb.',
  'Heat the paraffin bath gently with constant stirring; watch the sample closely near the expected melting point.',
  'Note the temperature when melting starts and when the last crystal disappears. Repeat with a fresh sample, heating slowly (1-2 C per minute near melting).'],
 table:{caption:'Representative readings for pure naphthalene (simulated)',head:['Reading','Value'],rows:[
  ['Melting starts','79.5 C'],
  ['Completely liquid','80.5 C'],
  ['Melting range','79.5 - 80.5 C (literature 80 C)']]},
 result:'The melting point of the given compound is found; a sharp range near the literature value indicates a pure sample.',
 calc:[],
 precautions:['Pack the capillary tightly and uniformly.','Heat very slowly near the melting point, otherwise the thermometer lags behind the true bath temperature.','Use a dry sample - moisture lowers the melting point.'],
 safety:['Liquid paraffin is hot and can cause burns; never add water to the hot bath.'],
 viva:[
  ['Why does an impurity lower the melting point?','Impurities weaken the crystal lattice (a colligative effect), so melting begins below the pure value and spreads over a range.'],
  ['What is a mixed melting point test?','The unknown is mixed with an authentic sample; if the melting point is unchanged, both are the same compound.']],
 jee:['Mixed melting point depression is a favourite JEE concept question for identity confirmation.']
},
{
 id:'c11-boiling-point', tier:'c11', cat:'Purification and criteria of purity - Unit 3', tag:'current', sim:null,
 title:'Determination of boiling point of a liquid organic compound',
 aim:'To determine the boiling point of a given liquid organic compound (e.g. acetone, ethanol, benzene).',
 theory:[
  'The boiling point is the temperature at which the vapour pressure of the liquid equals the external pressure. A pure liquid boils at a constant temperature; impurities usually raise the boiling point.',
  'In the capillary method, an inverted sealed capillary stands in the heated liquid. At the boiling point, vapour pushes out in a rapid, continuous stream of bubbles; on cooling, the boiling point is the temperature at which the liquid just re-enters the capillary.'],
 eq:['Literature values: acetone 56 C, ethanol 78 C, benzene 80 C, propan-2-ol 82 C, water 100 C (at 1 atm)'],
 materials:['Boiling tube','Thermometer','Small capillary tube (sealed at one end)','Liquid paraffin bath','Sample liquid','Burner'],
 procedure:[
  'Take 2-3 mL of the liquid in a small boiling tube and drop in an inverted capillary tube.',
  'Clamp the tube in a paraffin bath with the thermometer bulb immersed in the liquid.',
  'Heat gently until a brisk, continuous stream of bubbles escapes the capillary; note the temperature.',
  'Stop heating and note the temperature at which bubbling stops and liquid just enters the capillary. Average the two readings.'],
 table:{caption:'Representative readings for ethanol (simulated)',head:['Reading','Value'],rows:[
  ['Brisk bubbling begins','78.5 C'],
  ['Liquid re-enters capillary on cooling','77.5 C'],
  ['Boiling point (average)','78.0 C (literature 78 C)']]},
 result:'The boiling point of the given liquid is determined and compared with the literature value.',
 calc:[],
 precautions:['The thermometer bulb must dip in the liquid, not touch the tube walls.','Heat slowly so the vapour and liquid stay in equilibrium.'],
 safety:['Organic liquids are flammable - use a water/paraffin bath, never a naked flame directly; no open flame near acetone or ethanol vapours.'],
 viva:[
  ['Why do we note a second temperature while cooling?','It corrects for thermometer lag; the mean of the heating and cooling readings gives a more accurate boiling point.'],
  ['What is the effect of pressure on boiling point?','Lower external pressure lowers the boiling point; at hill stations water boils below 100 C.']],
 jee:[]
},
{
 id:'c11-eq-fescn', tier:'c11', cat:'Chemical equilibrium - Unit 4', tag:'current', sim:'equilibrium',
 title:'Shift in equilibrium: Fe3+ and thiocyanate ions',
 aim:'To study the shift in equilibrium in the reaction between ferric ions and thiocyanate ions by increasing or decreasing the concentration of either ion.',
 theory:[
  'Fe3+ (pale yellow) reacts with SCN- (colourless) to form the deep blood-red complex [Fe(SCN)]2+. The reaction is reversible and reaches equilibrium quickly.',
  'By Le Chatelier\u2019s principle, adding Fe3+ or SCN- shifts equilibrium right and deepens the red colour; adding Na2HPO4 (phosphate binds Fe3+) or AgNO3 (removes SCN-) shifts it left and the colour fades.'],
 eq:['Fe3+(aq) + SCN-(aq)  <=>  [Fe(SCN)]2+(aq)   (blood red)'],
 materials:['0.1 M ferric chloride solution','0.1 M potassium thiocyanate solution','1 M Na2HPO4 solution','4 test tubes, droppers, test-tube stand'],
 procedure:[
  'Mix 5 mL of 0.1 M FeCl3 with 5 mL of 0.1 M KSCN and dilute with ~50 mL water till a moderate blood-red colour is obtained.',
  'Divide equally into 4 test tubes labelled A, B, C, D. Keep A as reference.',
  'To B add a few drops of FeCl3 solution; to C add a few drops of KSCN solution; to D add Na2HPO4 solution. Compare colours with A.'],
 table:{caption:'Representative observations (simulated)',head:['Tube','Added','Colour change','Shift'],rows:[
  ['A (reference)','-','Blood red (unchanged)','-'],
  ['B','FeCl3','Red colour deepens','Right (forward)'],
  ['C','KSCN','Red colour deepens','Right (forward)'],
  ['D','Na2HPO4','Colour fades towards yellow','Left (backward)']]},
 result:'Increasing the concentration of either reactant deepens the red colour (forward shift); removing Fe3+ or SCN- fades it (backward shift), verifying Le Chatelier\u2019s principle.',
 calc:[],
 precautions:['Dilute the stock mixture enough that colour changes are easy to see.','Add reagents dropwise and compare against the reference tube immediately.'],
 safety:['FeCl3 and KSCN are irritants; avoid skin contact and wash spills with plenty of water.'],
 viva:[
  ['Why is the mixture diluted before the experiment?','At low concentration the colour intensity is visibly sensitive to small equilibrium shifts.'],
  ['Why does Na2HPO4 decolourise the solution?','Phosphate ions complex with free Fe3+, lowering its concentration, so the equilibrium shifts left.']],
 jee:['JEE favourite: colour intensity here is proportional to [Fe(SCN)]2+, so the experiment directly demonstrates Kc staying constant while Q shifts.']
},
{
 id:'c11-eq-cocl', tier:'c11', cat:'Chemical equilibrium - Unit 4', tag:'current', sim:'equilibrium',
 title:'Shift in equilibrium: [Co(H2O)6]2+ and chloride ions',
 aim:'To study the shift in equilibrium in the reaction between [Co(H2O)6]2+ and chloride ions by changing the concentration of either species.',
 theory:[
  'In aqueous solution, pink [Co(H2O)6]2+ and blue [CoCl4]2- exist in equilibrium. Adding concentrated HCl (a source of Cl-) turns the solution blue; diluting with water turns it pink again.',
  'This is a direct visual demonstration of Le Chatelier\u2019s principle applied to a complexation equilibrium.'],
 eq:['[Co(H2O)6]2+(aq) + 4Cl-(aq)  <=>  [CoCl4]2-(aq) + 6H2O(l)   (pink <=> blue)'],
 materials:['Cobalt(II) chloride solution (or hydrated CoCl2)','Concentrated HCl','Test tubes, droppers','Distilled water'],
 procedure:[
  'Take 5 mL of cobalt chloride solution in a test tube; note the pink colour of [Co(H2O)6]2+.',
  'Add concentrated HCl dropwise with shaking until the colour changes to blue.',
  'Note the blue colour of [CoCl4]2-, then add distilled water slowly and note the return to pink.',
  'Repeat the addition of acid and water to confirm the reversibility.'],
 table:{caption:'Representative observations (simulated)',head:['Step','Reagent','Colour','Shift'],rows:[
  ['1','CoCl2 solution','Pink','-'],
  ['2','+ conc. HCl','Pink turns blue','Right'],
  ['3','+ water','Blue turns pink','Left']]},
 result:'The equilibrium shifts right on adding Cl- (blue) and left on adding water (pink), as predicted by Le Chatelier\u2019s principle.',
 calc:[],
 precautions:['Add conc. HCl dropwise with constant shaking; large excess is unnecessary.'],
 safety:['Concentrated HCl is corrosive and fuming - handle in a ventilated area, wear gloves and goggles, and never add water to the acid; add acid to solution dropwise.'],
 viva:[
  ['Which species is pink and which is blue?','[Co(H2O)6]2+ is pink (octahedral); [CoCl4]2- is blue (tetrahedral).'],
  ['Why does adding water reverse the change?','Dilution lowers the concentration of all dissolved species; with more particles on the right (5 vs 5 but water effectively constant), the position shifts towards the aquo complex as Cl- falls.']],
 jee:['Co(II) complexes switch geometry (octahedral pink to tetrahedral blue) - links equilibrium to coordination chemistry and CFSE, both JEE Advanced topics.']
},
{
 id:'c11-ph-juices', tier:'c11', cat:'pH and pH change - Unit 5', tag:'current', sim:'ph',
 title:'Determination of pH of fruit juices',
 aim:'To determine the pH of some fruit juices (lemon, orange, apple, tomato, mango, banana) using pH paper or universal indicator.',
 theory:[
  'pH measures the acidity of an aqueous solution on a 0-14 scale: below 7 acidic, 7 neutral, above 7 basic. Fruit juices are mildly acidic because of organic acids (citric, malic, ascorbic).',
  'A drop of juice on pH paper changes its colour; matching with the standard chart gives the pH to the nearest unit or half unit.'],
 eq:['pH = -log[H3O+]'],
 materials:['Fresh fruit juices','pH paper strips / universal indicator','Standard pH colour chart','Droppers, watch glasses'],
 procedure:[
  'Squeeze and strain each juice into a clean watch glass.',
  'Put a drop of juice on a strip of pH paper with a clean dropper.',
  'Match the colour immediately with the standard chart and record the pH.',
  'Rinse the dropper between juices to avoid mixing.'],
 table:{caption:'Typical pH values (literature ranges)',head:['Juice','Typical pH','Acid present'],rows:[
  ['Lemon','2.2 - 2.4','Citric acid, ascorbic acid'],
  ['Orange','3.3 - 4.2','Citric acid'],
  ['Apple','3.4 - 4.0','Malic acid'],
  ['Tomato','4.1 - 4.6','Citric and malic acids'],
  ['Mango (ripe)','3.4 - 4.8','Citric, malic, tartaric'],
  ['Banana','4.5 - 5.2','Malic acid']]},
 result:'All common fruit juices are acidic, lemon being the most acidic of the set.',
 calc:[],
 precautions:['Read the colour immediately; juice pigments can stain the paper if left long.','Use fresh juices - fermentation changes the pH.'],
 safety:['Do not taste laboratory samples; taste only food kept separate from glassware.'],
 viva:[
  ['Why is lemon juice more acidic than orange juice?','It has a higher concentration of citric acid (about 5-6 %) than orange juice (about 1 %).'],
  ['Can pH paper give exact pH?','No, it gives pH to about 0.5-1 unit; a pH meter gives 0.01.']],
 jee:[]
},
{
 id:'c11-ph-dilution', tier:'c11', cat:'pH and pH change - Unit 5', tag:'current', sim:'ph',
 title:'Variation of pH with dilution of acids and bases',
 aim:'To observe the variation in pH of 0.1 M HCl, 0.1 M CH3COOH and 0.1 M NaOH on tenfold dilution.',
 theory:[
  'For a strong acid like HCl, each tenfold dilution raises pH by exactly 1 unit because [H+] falls by a factor of 10.',
  'For a weak acid like acetic acid, dilution increases the degree of ionisation (Ostwald\u2019s dilution law), so pH rises by only about half a unit per tenfold dilution.'],
 eq:['pH = -log[H+]   |   strong acid: [H+] = c   |   weak acid: [H+] = sqrt(Ka x c), Ka(CH3COOH) = 1.8 x 10^-5'],
 materials:['0.1 M HCl, 0.1 M CH3COOH, 0.1 M NaOH','pH paper or pH meter','100 mL volumetric flasks / measuring cylinders','Distilled water'],
 procedure:[
  'Prepare 0.01 M and 0.001 M solutions of each by successive tenfold dilution.',
  'Measure the pH of each solution with pH paper (and a pH meter if available).',
  'Record and compare the pH change per dilution for the strong and the weak acid.'],
 table:{caption:'Expected values (calculated, 25 C)',head:['Solution','0.1 M','0.01 M','0.001 M'],rows:[
  ['HCl (strong acid)','pH 1.00','pH 2.00','pH 3.00'],
  ['CH3COOH (weak acid)','pH 2.87','pH 3.37','pH 3.87'],
  ['NaOH (strong base)','pH 13.00','pH 12.00','pH 11.00']]},
 result:'Strong acid and base change by 1 pH unit per tenfold dilution; the weak acid changes by only about 0.5 unit.',
 calc:['0.1 M CH3COOH: [H+] = sqrt(1.8 x 10^-5 x 0.1) = 1.34 x 10^-3, pH = 2.87'],
 precautions:['Use freshly boiled distilled water; dissolved CO2 lowers the pH of dilute solutions.','Standardise the pH meter with buffer solutions before use.'],
 safety:['Even dilute acids and bases are irritants; wear goggles and wipe spills immediately.'],
 viva:[
  ['Why does the pH of acetic acid change less than that of HCl on dilution?','Dilution shifts the ionisation equilibrium of the weak acid forward (more ionisation), partly compensating for the concentration fall.'],
  ['Can the pH of 10^-8 M HCl be 8?','No. Below 10^-7 M the H+ from water matters; the true pH of 10^-8 M HCl is about 6.98, still below 7.']],
 jee:['The 10^-8 M HCl question (pH = 6.98, not 8) is a classic JEE trap - this experiment is exactly where it comes from.']
},
{
 id:'c11-ph-common-ion', tier:'c11', cat:'pH and pH change - Unit 5', tag:'current', sim:'ph',
 title:'Common ion effect on the pH of weak acids and bases',
 aim:'To study the variation in pH by the common ion effect in the case of weak acids (CH3COOH + CH3COONa) and weak bases (NH4OH + NH4Cl).',
 theory:[
  'Adding the salt of a weak acid (its own conjugate base) suppresses its ionisation - the common ion effect. The pH then follows the Henderson-Hasselbalch equation.',
  'For equimolar acid and salt, pH = pKa; this is the basis of buffer solutions.'],
 eq:['pH = pKa + log([salt]/[acid])   |   pOH = pKb + log([salt]/[base])','Ka(CH3COOH) = 1.8 x 10^-5 (pKa 4.74);  Kb(NH4OH) = 1.8 x 10^-5 (pKb 4.74)'],
 materials:['0.1 M CH3COOH, 0.1 M CH3COONa','0.1 M NH4OH, 0.1 M NH4Cl','pH paper / pH meter','Beakers, measuring cylinders'],
 procedure:[
  'Measure the pH of 20 mL of 0.1 M CH3COOH alone.',
  'Dissolve the corresponding amount of CH3COONa (or add 20 mL of 0.1 M CH3COONa solution) and measure the pH again.',
  'Repeat with NH4OH and NH4Cl, recording pH at each stage.'],
 table:{caption:'Expected values (calculated, 25 C)',head:['System','pH (alone)','pH after adding salt'],rows:[
  ['0.1 M CH3COOH + 0.1 M CH3COONa','2.87','4.74 (= pKa)'],
  ['0.1 M NH4OH + 0.1 M NH4Cl','11.13','9.26 (= 14 - pKb)']]},
 result:'Adding the common ion salt raises the pH of the weak acid and lowers the pH of the weak base, exactly as Henderson-Hasselbalch predicts.',
 calc:['Acetic buffer: pH = 4.74 + log(0.05/0.05) = 4.74'],
 precautions:['Use equal volumes of equal molarity for the clean pH = pKa result.','Keep temperature constant; Ka and Kb change with temperature.'],
 safety:['Ammonia solution is pungent and irritant - use in a ventilated area.'],
 viva:[
  ['What is a buffer solution?','A solution of a weak acid and its salt (or weak base and its salt) whose pH resists change on adding small amounts of acid or base.'],
  ['Why does pH equal pKa at half-neutralisation?','Because [salt] = [acid], so log([salt]/[acid]) = 0.']],
 jee:['Buffer capacity, pH = pKa at half-equivalence, and common-ion suppression are all directly asked in JEE Advanced.']
},
{
 id:'c11-ph-titration', tier:'c11', cat:'pH and pH change - Unit 5', tag:'current', sim:'titration',
 title:'Change in pH during titration of strong acid with strong base',
 aim:'To study the change in pH during the titration of a strong acid (0.1 M HCl) with a strong base (0.1 M NaOH) using universal indicator.',
 theory:[
  'As NaOH is added to HCl, the pH rises slowly at first, jumps sharply through about 4-10 near the equivalence point (25.0 mL here), then levels off again.',
  'The universal indicator shows the full rainbow through the neutralisation: red to orange to yellow to green (neutral) to blue and finally violet.'],
 eq:['HCl + NaOH -> NaCl + H2O','At equivalence (25 C): pH = 7.00 exactly'],
 materials:['0.1 M HCl','0.1 M NaOH','Universal indicator + colour chart','Burette, pipette, conical flask','White tile'],
 procedure:[
  'Pipette 25.0 mL of 0.1 M HCl into a conical flask; add 2-3 drops of universal indicator (solution turns red).',
  'Fill the burette with 0.1 M NaOH; note the initial reading.',
  'Add NaOH in small portions, swirling, and record the colour and corresponding pH after each addition.',
  'Near the endpoint add dropwise; note the volume at which the green (neutral) colour appears.'],
 table:{caption:'Representative run (calculated pH, 25 C)',head:['NaOH added (mL)','0.0','10.0','24.0','24.9','25.0','25.1','35.0'],rows:[
  ['pH','1.00','1.37','2.69','3.70','7.00','10.30','12.37'],
  ['Universal indicator colour','Red','Red','Orange-red','Orange','Green','Blue','Violet']]},
 result:'The pH jumps from about 4 to 10 within half a millilitre at the equivalence point - the basis of indicator-based titrations.',
 calc:['Equivalence volume = 25.0 mL x (0.1/0.1) = 25.0 mL'],
 precautions:['Stir after every addition and read colour immediately.','Add dropwise within 1 mL of the endpoint.'],
 safety:['NaOH and HCl are corrosive; rinse any skin contact under running water for several minutes.'],
 viva:[
  ['Why is the pH jump at equivalence so sharp?','Near equivalence one drop changes [H+] by orders of magnitude because both ions are present in tiny amounts.'],
  ['Which indicators suit this titration?','Any indicator changing between pH 4 and 10: methyl orange, phenolphthalein, or bromothymol blue.']],
 jee:['Sketching pH curves and choosing indicators by the vertical jump region is a recurring JEE Advanced question.']
},
{
 id:'c11-ph-salts', tier:'c11', cat:'pH and pH change - Unit 5', tag:'current', sim:'ph',
 title:'pH of solutions of NaCl, FeCl3 and Na2CO3 (salt hydrolysis)',
 aim:'To study the pH of solutions of sodium chloride, ferric chloride and sodium carbonate.',
 theory:[
  'Salt solutions are not always neutral. A salt of strong acid + strong base (NaCl) stays neutral; strong acid + weak base (FeCl3) hydrolyses to give an acidic solution; weak acid + strong base (Na2CO3) gives a basic solution.',
  'Hydrolysis: Fe3+ + 3H2O <=> Fe(OH)3 + 3H+ (acidic);  CO3^2- + H2O <=> HCO3- + OH- (basic).'],
 eq:['Fe3+ + 3H2O <=> Fe(OH)3 + 3H+','CO3^2- + H2O <=> HCO3- + OH-'],
 materials:['0.1 M NaCl','0.1 M FeCl3','0.1 M Na2CO3','pH paper / pH meter','Test tubes, droppers'],
 procedure:[
  'Take about 2 mL of each salt solution in separate clean test tubes.',
  'Test each with pH paper and record the pH.',
  'Compare the results with the acid-base strengths of the parent acid and base.'],
 table:{caption:'Expected values (calculated / typical, 25 C)',head:['Salt (0.1 M)','Parent acid / base','Expected pH'],rows:[
  ['NaCl','HCl (strong) / NaOH (strong)','7.0 (neutral)'],
  ['FeCl3','HCl (strong) / Fe(OH)3 (weak)','about 2 (acidic)'],
  ['Na2CO3','H2CO3 (weak) / NaOH (strong)','about 11.6 (basic)']]},
 result:'NaCl is neutral, FeCl3 acidic and Na2CO3 basic in solution, confirming the rules of salt hydrolysis.',
 calc:['0.1 M Na2CO3: [OH-] approx sqrt(Kh x c), Kh = Kw/Ka2 = 10^-14/4.7 x 10^-11 = 2.1 x 10^-4; [OH-] = 4.6 x 10^-3, pOH 2.4, pH 11.6'],
 precautions:['Use freshly prepared solutions; Na2CO3 absorbs CO2 and changes on standing.'],
 safety:['FeCl3 solution stains skin and clothes; handle carefully.'],
 viva:[
  ['Why is an FeCl3 solution acidic?','Fe3+ is a small, highly charged cation that polarises coordinated water and releases H+ (cationic hydrolysis).'],
  ['What is the pH of NH4Cl solution likely to be?','Below 7, because NH4+ is the conjugate acid of a weak base.']],
 jee:['Qualitative pH ordering of salt solutions is a standard JEE Advanced assertion-reason topic.']
},
{
 id:'c11-naoh-oxalic', tier:'c11', cat:'Titrimetric analysis - Unit 6', tag:'current', sim:'titration',
 title:'Strength of NaOH by titration against standard oxalic acid',
 aim:'To determine the concentration (strength) of a given sodium hydroxide solution by titrating it against a standard (M/20 = 0.05 M) oxalic acid solution.',
 theory:[
  'Oxalic acid (weak diprotic acid) neutralises NaOH in a 1:2 mole ratio. Phenolphthalein is the indicator: it stays pink in the basic flask and turns colourless the moment the last trace of base is neutralised.',
  'M1V1 (acid, n=1) and M2V2 (base, n=2) are related by M(ox) x V(ox) / 1 = M(NaOH) x V(NaOH) / 2.'],
 eq:['H2C2O4 + 2NaOH -> Na2C2O4 + 2H2O','M(ox).V(ox)      M(NaOH).V(NaOH)\n-----------   =   ---------------\n     1                    2'],
 materials:['M/20 oxalic acid standard solution','Given NaOH solution','Phenolphthalein indicator','Burette, 20 mL pipette, conical flask, white tile, funnel'],
 procedure:[
  'Rinse and fill the burette with standard oxalic acid; remove the air gap and note the initial reading.',
  'Pipette 20.0 mL of the NaOH solution into a clean conical flask.',
  'Add 1-2 drops of phenolphthalein; the solution turns pink.',
  'Run in oxalic acid slowly with constant swirling till the pink colour just disappears.',
  'Repeat until three concordant readings (within 0.1 mL) are obtained.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Initial burette (mL)','0.0','0.0','0.0'],
  ['Final burette (mL)','19.9','19.8','19.8'],
  ['Volume of oxalic acid (mL)','19.9','19.8','19.8'],
  ['Concordant volume','','19.8 mL','']]},
 result:'The given NaOH solution is 0.099 M, i.e. about 3.96 g/L.',
 calc:['M(NaOH) = 2 x M(ox) x V(ox) / V(NaOH)','= 2 x 0.05 x 19.8 / 20.0 = 0.099 M','Strength = 0.099 x 40.00 = 3.96 g/L'],
 precautions:['Use only 1-2 drops of phenolphthalein.','The endpoint is the first permanent disappearance of pink; over-titration gives low results.','Pipette with the meniscus exactly on the mark and drain against the wall.'],
 safety:['NaOH is corrosive - pipette with a filler, never by mouth; rinse spills with plenty of water.'],
 viva:[
  ['Why is phenolphthalein used here?','The salt formed (sodium oxalate) is basic, so the equivalence point lies above pH 7, inside phenolphthalein\u2019s 8.3-10 range.'],
  ['Why can NaOH not be a primary standard?','It is hygroscopic and absorbs CO2 from air, so its exact mass and concentration are not known by weighing.']],
 jee:['Choice of indicator from the nature of the salt formed (weak acid + strong base -> basic equivalence) is core JEE logic.']
},
{
 id:'c11-std-na2co3', tier:'c11', cat:'Titrimetric analysis - Unit 6', tag:'current', sim:'mass',
 title:'Preparing a standard solution of sodium carbonate',
 aim:'To prepare 250 mL of M/20 (0.05 M) standard solution of sodium carbonate.',
 theory:[
  'Anhydrous Na2CO3 is a primary standard for acid-base titrations. The required mass is molarity x volume x molar mass: 0.05 x 0.250 x 105.99 = 1.325 g.',
  'The crystals must be dry and pure; washing soda (Na2CO3.10H2O) cannot be used directly because it effloresces and its composition is uncertain.'],
 eq:['mass = 0.05 x 0.250 x 105.99 = 1.325 g'],
 materials:['Anhydrous sodium carbonate','Analytical balance','250 mL volumetric flask','Funnel, beaker, glass rod, wash bottle'],
 procedure:[
  'Weigh exactly 1.325 g of dry anhydrous Na2CO3 by difference.',
  'Dissolve in ~50 mL distilled water in a beaker with gentle stirring (slight warming if needed, then cool).',
  'Transfer quantitatively to the 250 mL volumetric flask with washings.',
  'Make up to the mark, stopper and invert 15-20 times.'],
 table:{caption:'Representative weighing record (simulated)',head:['Item','Reading'],rows:[
  ['Mass of Na2CO3 taken','1.326 g'],
  ['Moles','1.326 / 105.99 = 0.01251 mol'],
  ['Molarity','0.01251 / 0.250 = 0.0500 M']]},
 result:'250 mL of 0.050 M standard sodium carbonate solution is obtained.',
 calc:['Molar mass Na2CO3 = 105.99 g/mol'],
 precautions:['The solid must be anhydrous and dry; heat-wet bottles give high mass of moisture.','Cool any warmed solution to room temperature before making up to the mark.'],
 safety:['Sodium carbonate solution is alkaline and irritant to eyes; wear goggles.'],
 viva:[
  ['Why is anhydrous Na2CO3 preferred over the decahydrate?','The decahydrate loses water of crystallisation in air (efflorescence), so its mass does not correspond to a known formula.']],
 jee:[]
},
{
 id:'c11-hcl-na2co3', tier:'c11', cat:'Titrimetric analysis - Unit 6', tag:'current', sim:'titration',
 title:'Strength of HCl by titration against standard sodium carbonate',
 aim:'To determine the strength of a given dilute hydrochloric acid solution by titrating it against a standard M/20 (0.05 M) sodium carbonate solution using methyl orange.',
 theory:[
  'Na2CO3 neutralises HCl in a 1:2 mole ratio, liberating CO2. Methyl orange is red in the acidic flask and turns yellow at the endpoint (pH jump through 3.1-4.4 at the second equivalence point).',
  'M(Na2CO3) x V / 1 = M(HCl) x V / 2.'],
 eq:['Na2CO3 + 2HCl -> 2NaCl + H2O + CO2','M(HCl) = 2 x M(Na2CO3) x V(Na2CO3) / V(HCl)'],
 materials:['M/20 standard Na2CO3 solution','Given dilute HCl','Methyl orange indicator','Burette, pipette, conical flask, white tile'],
 procedure:[
  'Fill the burette with standard Na2CO3 solution.',
  'Pipette 20.0 mL of the given HCl into the conical flask.',
  'Add 2-3 drops of methyl orange - the solution turns red/pink.',
  'Titrate until one drop changes the colour from red to yellow (persisting 30 s).',
  'Repeat for concordant readings within 0.1 mL.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Initial burette (mL)','0.0','19.6','0.0'],
  ['Final burette (mL)','19.6','39.2','19.6'],
  ['Volume of Na2CO3 (mL)','19.6','19.6','19.6'],
  ['Concordant volume','','19.6 mL','']]},
 result:'The given HCl is 0.098 M, i.e. about 3.58 g/L.',
 calc:['M(HCl) = 2 x 0.05 x 19.6 / 20.0 = 0.098 M','Strength = 0.098 x 36.46 = 3.57 g/L'],
 precautions:['Add the base slowly near the endpoint; CO2 effervescence can hide the colour change - swirl and wait.','Methyl orange must be fresh; the endpoint is red to yellow, not to orange.'],
 safety:['HCl is corrosive and its fumes irritate; work in a ventilated space.'],
 viva:[
  ['Why is methyl orange and not phenolphthalein used?','The solution at full neutralisation contains dissolved CO2 (weakly acidic), so the endpoint falls near pH 4 - methyl orange\u2019s range, not phenolphthalein\u2019s.'],
  ['What is the role of the white tile?','It makes the faint colour change at the endpoint easy to see against a neutral background.']],
 jee:['Two endpoints exist (half-neutralisation to NaHCO3 at pH ~8.3, full to H2CO3 at pH ~4) - the double-indicator idea extended in the JEE-level experiment.']
},
{
 id:'c11-salt-analysis', tier:'c11', cat:'Systematic qualitative analysis - Unit 7', tag:'current', sim:'salt',
 title:'Detecting one cation and one anion in a given salt',
 aim:'To detect one cation and one anion in a given inorganic salt by systematic qualitative analysis.',
 theory:[
  'Anions are detected first by gas evolution with dilute and concentrated H2SO4, then by confirmatory tests. Cations are separated into groups by selective precipitation (group reagents), then confirmed by specific tests.',
  'The full scheme with realistic observations for 25 common salts is built into the interactive Salt Analysis Lab on this site - open it from here.'],
 eq:['Groups: 0 (NH4+) | I (Pb2+) | II (Cu2+, As3+) | III (Fe3+, Al3+) | IV (Zn2+, Mn2+, Co2+, Ni2+) | V (Ba2+, Sr2+, Ca2+) | VI (Mg2+)'],
 materials:['Given salt (about 1 g)','Dilute and concentrated H2SO4','NaOH solution','Group reagents: dil HCl, H2S gas/water, NH4Cl + NH4OH, (NH4)2CO3','Test tubes, burner, glass rod, filter paper'],
 procedure:[
  'Note the physical appearance: colour, crystalline form, smell, solubility.',
  'Anion analysis: warm a little salt with dilute H2SO4 (look for effervescence/gases), then with concentrated H2SO4; do confirmatory tests.',
  'Prepare the original solution (water or dilute HCl extract).',
  'Cation analysis: proceed group by group with the group reagents; confirm the cation with specific tests.',
  'Cross-check: the identified cation and anion must together match the observed appearance and solubility.'],
 table:null,
 result:'The salt is reported as the identified cation + anion pair.',
 calc:[],
 precautions:['Use small quantities and clean apparatus; contamination spoils group separation.','Never smell a gas directly - waft it towards the nose.','Add group reagents in order; skipping a group invalidates later groups.'],
 safety:['H2S is toxic - generate it only in a fume hood or well-ventilated lab. Concentrated H2SO4 causes severe burns; always add acid to water, never the reverse.'],
 viva:[
  ['Why are anions tested before cations?','Anion tests use the solid salt directly, and knowing the anion helps interpret later cation results (e.g. carbonate interferes with group V).'],
  ['Why is NH4Cl added before NH4OH in group III?','It suppresses NH4OH ionisation by the common ion effect, so only the low-Ksp hydroxides of group III precipitate, not Mg(OH)2.']],
 jee:['Group-wise Ksp logic and the role of the common ion effect in group separation are frequent JEE Advanced questions.']
},
{
 id:'c11-lassaigne', tier:'c11', cat:'Systematic qualitative analysis - Unit 7', tag:'current', sim:null,
 title:'Detection of nitrogen, sulphur and halogens in an organic compound (Lassaigne\u2019s test)',
 aim:'To detect nitrogen, sulphur and halogens present in a given organic compound.',
 theory:[
  'The organic compound is fused with sodium metal, which converts covalently bound N, S and X into water-soluble ionic forms: NaCN, Na2S and NaX.',
  'The filtered extract (Lassaigne\u2019s extract) is then tested: FeSO4 + FeCl3 gives Prussian blue (nitrogen); sodium nitroprusside gives violet (sulphur); AgNO3 gives white/pale-yellow/yellow precipitates (Cl, Br, I).'],
 eq:['Na + C + N -> NaCN','2Na + S -> Na2S','Na + X -> NaX (X = Cl, Br, I)','6NaCN + FeSO4 -> Na4[Fe(CN)6];  then with Fe3+ -> Fe4[Fe(CN)6]3 (Prussian blue)'],
 materials:['Organic sample (e.g. urea, aniline, chloroform, thiourea)','Sodium metal pieces','Ignition tube, tongs','Distilled water','FeSO4 solution, FeCl3, dilute H2SO4','Sodium nitroprusside','AgNO3, dilute HNO3, NH4OH, CS2/CCl4, chlorine water'],
 procedure:[
  'Place a small piece of freshly cut sodium in a dry ignition tube, heat till it melts, then add a little of the compound.',
  'Heat strongly to red heat, then plunge the hot tube into ~10 mL distilled water in a china dish (it shatters).',
  'Boil, filter; the filtrate is the sodium extract. Divide it into three parts.',
  'N test: to one part add FeSO4 solution, boil, cool, acidify with dilute H2SO4 and add FeCl3 - Prussian blue or green colour confirms nitrogen.',
  'S test: to the second part add sodium nitroprusside - deep violet confirms sulphur.',
  'X test: boil the third part with dilute HNO3 (expels HCN/H2S), add AgNO3 - white ppt soluble in NH4OH = Cl; pale yellow, partly soluble = Br; yellow, insoluble = I. Confirm Br/I with layer test using chlorine water and CCl4 (orange = Br, violet = I).'],
 table:{caption:'Representative observations (simulated) for a sample containing N and Cl (e.g. aniline hydrochloride)',head:['Test','Observation','Inference'],rows:[
  ['FeSO4 + FeCl3 test','Prussian blue colouration','Nitrogen present'],
  ['Sodium nitroprusside','No violet colour','Sulphur absent'],
  ['AgNO3 after HNO3 boiling','White curdy ppt, soluble in NH4OH','Chlorine present'],
  ['Layer test with CCl4','No orange/violet layer','Br, I absent']]},
 result:'The given organic compound contains nitrogen and chlorine.',
 calc:[],
 precautions:['Use tiny, dry sodium pieces and hold the tube away from the face while plunging.','Boil off HCN and H2S completely before the halogen test, or they also give precipitates with AgNO3.','If both N and S are present, NaSCN forms - it gives a blood-red colour with Fe3+, not Prussian blue.'],
 safety:['Sodium metal reacts violently with water and skin moisture - handle with forceps, dry hands, and keep kerosene nearby for storage. The fusion step must be done by or under close watch of the teacher.'],
 viva:[
  ['Why is the extract acidified with HNO3 before AgNO3?','To destroy CN- and S2- (as HCN and H2S), which otherwise give their own silver precipitates and mask the halide test.'],
  ['Why does fusion with sodium fail for very volatile compounds?','The compound vapourises before reacting; such compounds are mixed with soda lime instead.']],
 jee:['Lassaigne chemistry (NaSCN red colour, Prussian blue formula Fe4[Fe(CN)6]3) appears repeatedly in JEE Advanced organic qualitative questions.']
},
{
 id:'c11-projects', tier:'c11', cat:'Investigatory projects - NCERT manual', tag:'current', sim:null,
 title:'Class 11 investigatory projects (NCERT suggested list)',
 aim:'To carry out a small open-ended investigation that builds real lab skills beyond prescribed experiments.',
 theory:['NCERT suggests choosing a question, planning measurements, recording data methodically and drawing conclusions with an honest statement of limitations. The eight suggested projects below are quoted from the NCERT Class 11 lab manual.'],
 eq:[],
 materials:['Depends on the project - most need only common lab reagents and household samples'],
 procedure:[
  'Project 1: Test contamination of water by checking sulphide ion concentration and find the cause.',
  'Project 2: Study methods of purification of water.',
  'Project 3: Test hardness and presence of iron, fluoride and chloride in drinking water from different regions; relate to permissible limits.',
  'Project 4: Compare the foaming capacity of different washing soaps and the effect of adding sodium carbonate.',
  'Project 5: Study the acidity of different tea-leaf samples and the variation in colour of tea prepared from them.',
  'Project 6: Study the rates of evaporation of different liquids.',
  'Project 7: Study the effect of acids and alkalies on the tensile strength of fibres.',
  'Project 8: Study the acids and mineral contents of vegetables and fruits.'],
 table:null,
 result:'A written project report with aim, method, data table, graph where possible, conclusion and limitations.',
 calc:[],
 precautions:['Plan control samples (e.g. distilled water) so comparisons are meaningful.','Repeat each measurement at least three times and average.'],
 safety:['Same laboratory safety rules apply as for prescribed experiments; teacher supervision is required.'],
 viva:[
  ['What makes a good investigatory project?','A testable question, controlled variables, repeated measurements and conclusions that match the data.']],
 jee:[]
}
];
