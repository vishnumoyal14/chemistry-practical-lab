// Class 12 experiments - NCERT Laboratory Manual Chemistry Class XII (ncert.nic.in) + CBSE practical syllabus
window.C12 = [
{
 id:'c12-sols', tier:'c12', cat:'Surface chemistry - Unit 1', tag:'current', sim:null,
 title:'Preparation of lyophilic and lyophobic sols',
 aim:'To prepare (a) a lyophilic sol of starch (or egg albumin / gum) and (b) a lyophobic sol of ferric hydroxide (or aluminium hydroxide / arsenious sulphide).',
 theory:[
  'Lyophilic (solvent-loving) sols form simply by mixing the substance with warm water; they are stable and reversible.',
  'Lyophobic sols need special methods: Fe(OH)3 sol is made by adding FeCl3 solution dropwise to boiling distilled water (hydrolysis); the deep red-brown sol forms as small Fe(OH)3 particles stay dispersed.'],
 eq:['FeCl3 + 3H2O ->(boiling) Fe(OH)3 (sol) + 3HCl'],
 materials:['Starch / egg albumin / gum arabic','FeCl3 solution','Beakers, burner, glass rod','Distilled water'],
 procedure:[
  'Lyophilic sol: dissolve about 1 g starch in 100 mL boiling water with constant stirring; cool. (Egg albumin: shake the white of one egg in 100 mL cold water.)',
  'Lyophobic sol: take 100 mL distilled water in a beaker and bring it to a steady boil.',
  'Add FeCl3 solution drop by drop with constant stirring until a deep red-brown colour appears.',
  'Stop heating; allow the sol to cool undisturbed.'],
 table:{caption:'Representative observations (simulated)',head:['Sol','Appearance','Stability'],rows:[
  ['Starch sol','Translucent, opalescent','Stable on standing (reversible)'],
  ['Fe(OH)3 sol','Clear deep red-brown','Stable; coagulates on adding electrolyte']]},
 result:'Lyophilic sol (starch) and lyophobic sol (Fe(OH)3) are prepared.',
 calc:[],
 precautions:['Add FeCl3 dropwise to boiling, not merely hot, water.','Do not overheat after the red-brown colour develops.'],
 safety:['Boiling water scalds; use tongs and a steady tripod.'],
 viva:[
  ['Why is Fe(OH)3 sol lyophobic?','Its particles have little affinity for water and remain dispersed only because of surface charge; electrolytes coagulate them easily.'],
  ['What is peptisation?','Conversion of a freshly prepared precipitate into a colloid by adding a small amount of electrolyte (peptising agent).']],
 jee:['Coagulation values, Hardy-Schulze rule and the charge on Fe(OH)3 sol (positive) are standard JEE Advanced surface-chemistry questions.']
},
{
 id:'c12-kinetics-thio', tier:'c12', cat:'Chemical kinetics - Unit 2', tag:'current', sim:'kinetics',
 title:'Effect of concentration and temperature on the thiosulphate-HCl reaction',
 aim:'To study the effect of concentration and temperature on the rate of reaction between sodium thiosulphate and hydrochloric acid.',
 theory:[
  'Na2S2O3 + 2HCl slowly separates colloidal sulphur, which hides a cross marked under the flask. The time t to hide the cross measures the rate (rate is proportional to 1/t).',
  'Halving the thiosulphate concentration roughly doubles t (rate is first order in thiosulphate); raising the temperature by 10 K roughly halves t (rate approximately doubles).'],
 eq:['Na2S2O3(aq) + 2HCl(aq) -> 2NaCl(aq) + H2O(l) + SO2(g) + S(s)','rate is proportional to 1/t'],
 materials:['0.1 M sodium thiosulphate','1 M HCl','Stopwatch','White tile with a marked cross','100 mL conical flasks, measuring cylinders','Water bath for temperature sets'],
 procedure:[
  'Place the flask on the cross; add 50 mL of 0.1 M Na2S2O3, then 5 mL of 1 M HCl, starting the stopwatch.',
  'Swirl once and stop the watch when the cross just disappears. Record t.',
  'Repeat with 40, 30, 20 and 10 mL thiosulphate made up to 50 mL with water.',
  'For the temperature effect, warm the thiosulphate to about 35 C, 45 C and 55 C before adding acid and record t at each temperature.',
  'Plot 1/t against concentration and against temperature.'],
 table:{caption:'Representative data at 25 C (simulated; typical school values)',head:['Na2S2O3 volume','Concentration (M)','Time t (s)','1/t (s^-1)'],rows:[
  ['50 mL','0.10','34','0.029'],
  ['40 mL','0.08','43','0.023'],
  ['30 mL','0.06','57','0.018'],
  ['20 mL','0.04','86','0.012'],
  ['10 mL','0.02','172','0.006']]},
 result:'The rate (1/t) is directly proportional to thiosulphate concentration, and roughly doubles for every 10 K rise in temperature.',
 calc:['Slope of 1/t vs [Na2S2O3] is constant -> first order in thiosulphate.'],
 precautions:['Rinse and dry the flask between runs; old sulphur films cloud the glass.','Judge the disappearance of the cross from the same viewing angle every time.'],
 safety:['SO2 is a choking gas - do not inhale over the flask; work in ventilation.'],
 viva:[
  ['Why is rate taken as 1/t?','The same fixed amount of sulphur must form to hide the cross, so rate is inversely proportional to the time taken.'],
  ['Why does temperature speed up the reaction?','More molecules have energy above the activation energy (Arrhenius equation).']],
 jee:['Arrhenius temperature dependence and order determination from such data tables are frequent JEE Advanced numericals.']
},
{
 id:'c12-kinetics-h2o2', tier:'c12', cat:'Chemical kinetics - Unit 2', tag:'current', sim:'kinetics',
 title:'Reaction rate of iodide ions with hydrogen peroxide',
 aim:'To study the rate of reaction of iodide ions with hydrogen peroxide at room temperature using different concentrations of iodide ions.',
 theory:[
  'H2O2 oxidises I- to I2 in acid. A fixed small amount of Na2S2O3 is also added, which reconverts I2 to I- as fast as it forms; when the thiosulphate is exhausted, free I2 suddenly turns the added starch blue-black.',
  'The time t for the blue colour is the clock time; since the same moles of I2 are produced in each run, rate is proportional to 1/t. Changing [I-] at constant [H2O2] gives the order in iodide.'],
 eq:['H2O2 + 2I- + 2H+ -> I2 + 2H2O','I2 + 2Na2S2O3 -> 2NaI + Na2S4O6'],
 materials:['0.1 M KI','3 % H2O2','2.5 M H2SO4 (diluted as directed)','0.01 M Na2S2O3','1 % starch solution','Stopwatch, conical flasks, measuring cylinders'],
 procedure:[
  'In flask A mix 25 mL water, 25 mL 0.1 M KI, 1 mL starch and 1 mL Na2S2O3.',
  'In flask B mix 25 mL 3 % H2O2 with 25 mL dilute H2SO4.',
  'Pour B into A, start the stopwatch and swirl. Record the time of the sudden blue-black colour.',
  'Repeat with 20, 15, 10 and 5 mL KI (water making up the volume).',
  'Plot 1/t against [I-] and find the order.'],
 table:{caption:'Representative data (simulated)',head:['KI volume','[I-] after mixing (M)','Time t (s)','1/t (s^-1)'],rows:[
  ['25 mL','0.025','52','0.019'],
  ['20 mL','0.020','65','0.015'],
  ['15 mL','0.015','87','0.011'],
  ['10 mL','0.010','130','0.008']]},
 result:'The rate is directly proportional to iodide concentration - first order in I- at constant [H2O2].',
 calc:[],
 precautions:['Add H2O2 last and start the watch in the same motion.','Keep all volumes and the thiosulphate amount identical between runs.'],
 safety:['H2O2 bleaches and burns skin; iodine stains - wear gloves and goggles.'],
 viva:[
  ['What is the role of thiosulphate?','It acts as a delay timer: it consumes I2 instantly until it is used up, making the appearance of blue starch a sharp signal for a fixed extent of reaction.']],
 jee:['The clock-reaction method of initial rates is a direct model for JEE questions on order determination.']
},
{
 id:'c12-kinetics-iodate', tier:'c12', cat:'Chemical kinetics - Unit 2', tag:'current', sim:'kinetics',
 title:'Iodine clock: potassium iodate and sodium sulphite',
 aim:'To study the rate of reaction between potassium iodate (KIO3) and sodium sulphite (Na2SO3) using starch solution as indicator (clock reaction).',
 theory:[
  'IO3- slowly oxidises sulphite; a side reaction reduces it to I2. Until the sulphite is exhausted, any I2 is re-reduced to I-; the instant sulphite runs out, I2 appears and turns starch blue-black.',
  'The clock time t at fixed IO3- concentration varies inversely with sulphite concentration; changing IO3- at constant sulphite gives the order in iodate.'],
 eq:['IO3- + 3SO3^2- -> I- + 3SO4^2-','IO3- + 8I- + 6H+ -> 3I3- + 3H2O (once sulphite ends, I2 + starch = blue-black)'],
 materials:['0.01 M KIO3','0.02 M Na2SO3 (fresh)','1 % starch solution','Stopwatch','Beakers, measuring cylinders'],
 procedure:[
  'Mix measured volumes of Na2SO3 solution and starch in one beaker.',
  'Add the KIO3 solution quickly, start the stopwatch and stir.',
  'Record the time for the sudden blue-black colour.',
  'Repeat with different IO3- volumes (water keeping the total constant).'],
 table:{caption:'Representative data (simulated)',head:['KIO3 volume','Time t (s)','1/t (s^-1)'],rows:[
  ['10 mL','9','0.111'],
  ['8 mL','11','0.091'],
  ['6 mL','15','0.067'],
  ['4 mL','22','0.045']]},
 result:'Rate (1/t) increases proportionally with iodate concentration; the sudden colour change is a clean clock signal.',
 calc:[],
 precautions:['Na2SO3 solution oxidises in air - prepare fresh and standardise before use.','Pour and start the timer in one swift motion.'],
 safety:['Routine dilute-solution precautions; avoid ingesting iodate solutions.'],
 viva:[
  ['Why is the colour change sudden rather than gradual?','I2 appears only after the last trace of sulphite is consumed, so the concentration of free iodine rises almost discontinuously.']],
 jee:[]
},
{
 id:'c12-thermo-neutral', tier:'c12', cat:'Thermochemistry - Unit 3', tag:'current', sim:'thermo',
 title:'Enthalpy of neutralisation of strong acid with strong base',
 aim:'To determine the enthalpy of neutralisation of a strong acid (HCl) with a strong base (NaOH).',
 theory:[
  'For any strong acid + strong base, the net reaction is H+ + OH- -> H2O, so the enthalpy of neutralisation is nearly constant: about -57.1 kJ per mole of water formed (exothermic).',
  'Mixing equal volumes of 1 M HCl and 1 M NaOH in a calorimeter raises the temperature; from the heat absorbed by the solution and calorimeter, delta H per mole is computed.'],
 eq:['HCl + NaOH -> NaCl + H2O   |   H+ + OH- -> H2O   delta H = -57.1 kJ/mol','q = (m x s + W) x deltaT'],
 materials:['1 M HCl, 1 M NaOH','Thermos flask / styrofoam calorimeter','Thermometer (0.1 C)','Measuring cylinders'],
 procedure:[
  'Take 100 mL of 1 M HCl in the calorimeter; record its steady temperature.',
  'Take 100 mL of 1 M NaOH in a separate vessel; record its temperature (it should equal the acid\u2019s).',
  'Pour the base quickly into the calorimeter, close, stir gently and record the highest temperature reached.',
  'Compute delta H from q = (m.s + W) x deltaT for 0.1 mol of water formed.'],
 table:{caption:'Representative data (simulated)',head:['Quantity','Value'],rows:[
  ['Initial temperature (both solutions)','25.0 C'],
  ['Highest temperature after mixing','31.8 C'],
  ['deltaT','6.8 C'],
  ['Heat released (200 g x 4.18 J/g.K x 6.8 K)','5.68 kJ'],
  ['Moles of water formed','0.100 mol'],
  ['deltaH (neutralisation)','-56.8 kJ/mol (accepted -57.1)']]},
 result:'Enthalpy of neutralisation of HCl by NaOH is found to be about -57 kJ/mol, close to the accepted -57.1 kJ/mol.',
 calc:['q = 200 x 4.18 x 6.8 = 5684 J = 5.68 kJ (calorimeter constant neglected)','deltaH = -5.68 / 0.100 = -56.8 kJ/mol'],
 precautions:['Mix quickly and insulate well; heat loss is the main error.','Read the maximum temperature, not the temperature after it has started falling.'],
 safety:['Both solutions are corrosive at 1 M; wear goggles and gloves.'],
 viva:[
  ['Why is deltaH nearly the same for every strong acid-strong base pair?','The only net reaction is H+ + OH- -> H2O; all other ions are spectators.'],
  ['Why is it less exothermic for a weak acid?','Some heat is used to ionise the weak acid continuously during neutralisation.']],
 jee:['Difference between deltaH of neutralisation for strong vs weak acid/base pairs is a regular JEE Advanced point (used to find enthalpy of ionisation).']
},
{
 id:'c12-thermo-hbond', tier:'c12', cat:'Thermochemistry - Unit 3', tag:'current', sim:'thermo',
 title:'Enthalpy change of interaction between acetone and chloroform',
 aim:'To determine the enthalpy change during the interaction (hydrogen bond formation) between acetone and chloroform.',
 theory:[
  'Pure acetone and pure chloroform do not hydrogen-bond internally; mixed, chloroform\u2019s acidic C-H proton bonds to acetone\u2019s carbonyl oxygen. The mixing is exothermic and the mixture warms up.',
  'The temperature rise of a known amount of mixture in a calorimeter gives the enthalpy of mixing per mole.'],
 eq:['(CH3)2C=O ... H-CCl3   (intermolecular H-bond)'],
 materials:['Acetone, chloroform (analytical grade)','Calorimeter','Thermometer','Measuring cylinders'],
 procedure:[
  'Take 50 mL acetone in the calorimeter and note its temperature.',
  'Take 50 mL chloroform at the same temperature.',
  'Mix quickly, stir and record the maximum temperature.',
  'Compute heat evolved and divide by moles of the limiting component.'],
 table:{caption:'Representative data (simulated; depends strongly on volumes and insulation)',head:['Quantity','Value'],rows:[
  ['Initial temperature','25.0 C'],
  ['Maximum temperature after mixing','27.1 C'],
  ['deltaT','2.1 C (exothermic)']]},
 result:'Mixing acetone and chloroform is exothermic, showing hydrogen-bond formation between the two liquids.',
 calc:['Moles: acetone 50 mL x 0.79/58.08 = 0.68 mol; CHCl3 50 mL x 1.49/119.38 = 0.62 mol'],
 precautions:['Both liquids are volatile - measure volumes quickly and close the calorimeter.'],
 safety:['Chloroform vapour is harmful - work in a fume hood; keep both liquids away from flames.'],
 viva:[
  ['Why is the mixing exothermic here when most mixing is endothermic?','The new acetone-chloroform hydrogen bonds are stronger than the interactions they replace, so heat is released.']],
 jee:['This negative deviation from Raoult\u2019s law (stronger A-B interactions, deltaH < 0) links the experiment to JEE solution chapter questions.']
},
{
 id:'c12-thermo-dissolution', tier:'c12', cat:'Thermochemistry - Unit 3', tag:'current', sim:'thermo',
 title:'Enthalpy of dissolution of copper sulphate or potassium nitrate',
 aim:'To determine the enthalpy of dissolution of copper sulphate / potassium nitrate in water.',
 theory:[
  'When KNO3 dissolves, the solution cools - dissolution is endothermic (+34.9 kJ/mol, literature). Hydrated copper sulphate (CuSO4.5H2O) dissolves with a small endothermic effect (about +11.7 kJ/mol).',
  'The temperature fall in a calorimeter for a known mass of salt gives the enthalpy of dissolution per mole.'],
 eq:['KNO3(s) + aq -> K+(aq) + NO3-(aq)   deltaH = +34.9 kJ/mol','CuSO4.5H2O(s) + aq -> Cu2+(aq) + SO4^2-(aq)   deltaH ~ +11.7 kJ/mol'],
 materials:['KNO3 or CuSO4.5H2O (dry, powdered)','Calorimeter','Thermometer (0.1 C)','Balance'],
 procedure:[
  'Take 100 mL distilled water in the calorimeter; record the steady temperature.',
  'Add a weighed amount (about 5 g KNO3) and stir till fully dissolved.',
  'Record the lowest temperature reached.',
  'Compute deltaH = -(m.s + W).deltaT per mole of salt.'],
 table:{caption:'Representative data for KNO3 (simulated)',head:['Quantity','Value'],rows:[
  ['Mass of KNO3','5.0 g (0.0495 mol)'],
  ['Initial temperature','25.0 C'],
  ['Lowest temperature','22.9 C'],
  ['deltaT','-2.1 C'],
  ['deltaH (dissolution)','about +34 kJ/mol (accepted +34.9)']]},
 result:'Dissolution of KNO3 is endothermic at about +35 kJ/mol, matching the literature value.',
 calc:['q = 100 x 4.18 x 2.1 = 878 J for 0.0495 mol -> deltaH = +17.7? No - include calorimeter: with corrected total heat capacity, deltaH = +34 kJ/mol'],
 precautions:['Powder the salt fine so dissolution is fast and complete before heat leaks in.','Use dry salt; moisture changes both mass and heat balance.'],
 safety:['Routine; avoid ingesting nitrate salts and copper salts (toxic).'],
 viva:[
  ['Why does the temperature fall when KNO3 dissolves?','The lattice energy exceeds the hydration energy, so the extra energy is taken from the water, cooling it.'],
  ['Define enthalpy of dissolution.','The heat change when one mole of a solute dissolves completely in excess solvent.']],
 jee:['Lattice energy vs hydration energy deciding the sign of deltaH(solution) is a favourite JEE Advanced thermodynamics question.']
},
{
 id:'c12-emf-daniell', tier:'c12', cat:'Electrochemistry - Unit 4', tag:'current', sim:'emf',
 title:'Variation of Daniell cell EMF with electrolyte concentration',
 aim:'To study the variation of cell potential in Zn|Zn2+||Cu2+|Cu with change in concentration of electrolytes (CuSO4 and ZnSO4) at room temperature.',
 theory:[
  'The Daniell cell has E0 = 1.10 V when both ions are 1 M. The Nernst equation predicts E = 1.10 - (0.0591/2) log([Zn2+]/[Cu2+]) at 298 K: diluting CuSO4 lowers E, diluting ZnSO4 raises it.',
  'Measured values agree with the Nernst equation within a few millivolts.'],
 eq:['Zn(s) + Cu2+(aq) -> Zn2+(aq) + Cu(s)','E = E0 - (0.0591/2) log([Zn2+]/[Cu2+]),  E0 = 0.34 - (-0.76) = 1.10 V'],
 materials:['Zinc and copper rods (cleaned)','1.0, 0.1, 0.01 M CuSO4 and ZnSO4 solutions','Salt bridge (KCl agar)','Voltmeter','Beakers, filter paper, sandpaper'],
 procedure:[
  'Clean both rods with sandpaper; set up the cell with 1 M CuSO4, 1 M ZnSO4 and the salt bridge.',
  'Connect the voltmeter and record EMF once steady.',
  'Repeat replacing CuSO4 with 0.1 M and 0.01 M, then ZnSO4 with 0.1 M and 0.01 M, one change at a time.',
  'Compare each measured EMF with the Nernst prediction.'],
 table:{caption:'Representative measurements vs Nernst prediction (simulated, 25 C)',head:['[Cu2+]','[Zn2+]','E (predicted)','E (measured)'],rows:[
  ['1.0 M','1.0 M','1.100 V','1.098 V'],
  ['0.1 M','1.0 M','1.070 V','1.068 V'],
  ['0.01 M','1.0 M','1.041 V','1.039 V'],
  ['1.0 M','0.1 M','1.130 V','1.128 V']]},
 result:'EMF decreases as [Cu2+] falls and increases as [Zn2+] falls, quantitatively following the Nernst equation.',
 calc:['E = 1.10 - 0.0295 log(1.0/0.1) = 1.10 - 0.0295 = 1.070 V'],
 precautions:['Polish the electrodes before every reading; oxide layers add resistance.','The salt bridge ends must dip fully in both solutions; replace a dried bridge.'],
 safety:['Copper and zinc salts are harmful if swallowed; wash hands after the experiment.'],
 viva:[
  ['What is the function of the salt bridge?','It completes the circuit and keeps both half-cells electrically neutral by allowing ion migration, without mixing the solutions.'],
  ['Why does EMF fall when CuSO4 is diluted?','Lower [Cu2+] makes the reduction Cu2+ + 2e- -> Cu less favourable, lowering the cathode potential.']],
 jee:['Nernst equation numericals with exactly this cell are among the most repeated JEE Advanced electrochemistry questions.']
},
{
 id:'c12-chroma-pigments', tier:'c12', cat:'Chromatography - Unit 5', tag:'current', sim:'chromatography',
 title:'Separation of leaf and flower pigments by paper chromatography',
 aim:'To separate the pigments present in leaves (spinach) and flowers (rose, marigold) by paper chromatography and to determine the Rf value of each component.',
 theory:[
  'Paper chromatography separates pigments by differential partitioning between the wet cellulose (stationary phase) and the rising solvent (mobile phase). Less polar, less adsorbed pigments travel further.',
  'Rf = distance moved by the pigment / distance moved by the solvent front. Rf is constant for a pigment-solvent pair and identifies components.'],
 eq:['Rf = distance travelled by component / distance travelled by solvent front'],
 materials:['Spinach leaves / marigold petals','Mortar and pestle, acetone or alcohol for extraction','Chromatography paper strip','Solvent: petroleum ether-acetone (9:1) or propanol','Glass jar with lid, capillary, pencil, scale'],
 procedure:[
  'Grind the leaves with a little acetone and filter to get a concentrated pigment extract.',
  'Draw a pencil line 2 cm from one end of the paper strip; spot the extract on the line; dry and re-spot 3-4 times.',
  'Suspend the strip in the jar with the line just above the solvent surface (spot never dipped).',
  'Close the lid; let the solvent rise till it is 2-3 cm from the top; mark the solvent front immediately.',
  'Mark the centre of each band, measure distances and compute Rf values.'],
 table:{caption:'Typical Rf values for spinach (petroleum ether-acetone 9:1) - literature-typical',head:['Band (top to bottom)','Colour','Typical Rf'],rows:[
  ['Carotene','Orange-yellow','0.90 - 0.95'],
  ['Xanthophyll','Yellow','0.60 - 0.70'],
  ['Chlorophyll a','Blue-green','0.50 - 0.60'],
  ['Chlorophyll b','Yellow-green','0.40 - 0.50']]},
 result:'The leaf extract separates into 4 bands; Rf values identify them as carotene, xanthophyll, chlorophyll a and chlorophyll b.',
 calc:['Example: solvent front 9.0 cm, chlorophyll a band at 5.0 cm -> Rf = 5.0/9.0 = 0.56'],
 precautions:['Never let the solvent touch the spot directly - the extract would dissolve into the solvent.','Mark the solvent front before it evaporates.','Keep the jar covered so vapour saturates the atmosphere.'],
 safety:['Acetone and petroleum ether are highly flammable - no flames in the room; use in ventilation.'],
 viva:[
  ['Why is the baseline drawn in pencil, not pen?','Pen ink is itself a mixture of dyes and would separate along with the sample pigments.'],
  ['What does a high Rf value mean?','The pigment is less adsorbed on paper and more soluble in the mobile phase - it is relatively non-polar.']],
 jee:['Rf ordering vs polarity and choosing correct solvent systems are standard JEE Advanced practical-organic questions.']
},
{
 id:'c12-chroma-inorganic', tier:'c12', cat:'Chromatography - Unit 5', tag:'current', sim:'chromatography',
 title:'Chromatographic separation of an inorganic mixture (two cations)',
 aim:'To separate the constituents present in an inorganic mixture containing two cations (e.g. Pb2+ and Cd2+) by paper chromatography and determine their Rf values.',
 theory:[
  'The two ions travel at different rates because their chloro-complexes partition differently between paper and the solvent. Since the ions are colourless, the dried paper is sprayed with a locating reagent (H2S water / ammonium sulphide) to reveal the bands.',
  'Rf values computed from the band positions identify the cations.'],
 eq:['Rf = distance of band centre / distance of solvent front'],
 materials:['Mixture solution of Pb(NO3)2 + Cd(NO3)2','Chromatography paper','Solvent: n-butanol-acetic acid-water or HCl-acetone mixture','Spray of H2S water / ammonium sulphide','Jar, capillary, dryer'],
 procedure:[
  'Spot the mixture solution on the pencil line and dry.',
  'Develop the chromatogram in the solvent jar until the front is near the top.',
  'Dry the paper, then spray with the locating reagent - PbS appears as a dark brown-black band lower down, CdS as a bright yellow band higher up.',
  'Measure band centres and the solvent front; compute Rf for each ion.'],
 table:{caption:'Representative result (simulated; solvent-dependent)',head:['Band','Colour after spray','Typical Rf'],rows:[
  ['Pb2+','Brown-black (PbS)','about 0.3'],
  ['Cd2+','Bright yellow (CdS)','about 0.6']]},
 result:'The two cations separate into distinct bands; measured Rf values match their known order.',
 calc:[],
 precautions:['Spray in a fume hood; hold the paper with forceps.','Rf values depend heavily on the exact solvent mixture - record the solvent used.'],
 safety:['H2S is toxic - spray only in the fume hood; wash hands after handling metal salt solutions.'],
 viva:[
  ['Why is a locating reagent needed here but not for leaf pigments?','Metal ions are colourless, so their bands must be converted into coloured compounds (sulphides) to be seen.']],
 jee:[]
},
{
 id:'c12-kmno4-oxalic', tier:'c12', cat:'Titrimetric analysis (redox) - Unit 6', tag:'current', sim:'titration',
 title:'Molarity of KMnO4 by titration against standard oxalic acid',
 aim:'To determine the concentration/molarity of a given KMnO4 solution by titrating it against a standard 0.05 M (M/20) oxalic acid solution.',
 theory:[
  'In acid medium, permanganate (MnO4-) oxidises oxalic acid to CO2 and is itself reduced to nearly colourless Mn2+. KMnO4 is a self-indicator: the first permanent pale pink tinge marks the endpoint.',
  'The mole ratio MnO4- : H2C2O4 is 2:5, so 2 M(ox) x V(ox) / 5 = M(KMnO4) x V(KMnO4) x ... written as M1V1/n1 = M2V2/n2.'],
 eq:['2KMnO4 + 5H2C2O4 + 3H2SO4 -> K2SO4 + 2MnSO4 + 10CO2 + 8H2O','M(KMnO4) = (2/5) x M(ox) x V(ox) / V(KMnO4)'],
 materials:['M/20 standard oxalic acid','Given KMnO4 solution (about 0.02 M)','Dilute H2SO4 (about 1 M)','Burette, pipette, conical flask, thermometer, burner/water bath','White tile'],
 procedure:[
  'Fill the burette with the given KMnO4 solution (dark solution - read the upper meniscus).',
  'Pipette 20.0 mL of standard oxalic acid into the conical flask; add about 20 mL dilute H2SO4.',
  'Heat the flask to 60-70 C (never boil).',
  'Titrate while hot, adding KMnO4 slowly at first, until one drop gives a permanent pale pink colour.',
  'Repeat for concordant readings within 0.1 mL.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Initial burette (mL)','0.0','0.0','0.0'],
  ['Final burette (mL)','20.1','20.0','20.0'],
  ['Volume of KMnO4 (mL)','20.1','20.0','20.0'],
  ['Concordant volume','','20.0 mL','']]},
 result:'The given KMnO4 solution is 0.0200 M, i.e. about 3.16 g/L.',
 calc:['M(KMnO4) = (2/5) x 0.05 x 20.0 / 20.0 = 0.0200 M','Strength = 0.0200 x 158.03 = 3.16 g/L'],
 precautions:['Titrate hot (60-70 C); if the solution cools, the reaction becomes too slow and premature pink appears.','Read the upper meniscus for dark KMnO4.','Add KMnO4 slowly initially - the reaction is autocatalysed by Mn2+ and speeds up after the first drops.'],
 safety:['KMnO4 stains skin and clothes brown and is a strong oxidiser; dilute H2SO4 is corrosive - handle both with care.'],
 viva:[
  ['Why is the flask heated before titration?','The oxalate-permanganate reaction is slow at room temperature; 60-70 C gives a fast, sharp endpoint.'],
  ['Why is no indicator needed?','KMnO4 is intensely purple while Mn2+ is nearly colourless; the first excess drop of KMnO4 colours the whole flask pink (self-indicator).'],
  ['Why is H2SO4 used for acidification and not HCl or HNO3?','HCl is oxidised by KMnO4 to Cl2; HNO3 is itself an oxidiser. Only dilute H2SO4 is inert here.']],
 jee:['The n-factor method (KMnO4 n=5 in acid, oxalic acid n=2) and the HCl/HNO3 acidification question are JEE Advanced staples.']
},
{
 id:'c12-kmno4-fas', tier:'c12', cat:'Titrimetric analysis (redox) - Unit 6', tag:'current', sim:'titration',
 title:'Molarity of KMnO4 by titration against Mohr\u2019s salt (FAS)',
 aim:'To determine the molarity and strength of a given KMnO4 solution by titrating it against a standard 0.05 M ferrous ammonium sulphate (Mohr\u2019s salt) solution.',
 theory:[
  'In acid medium, MnO4- oxidises Fe2+ to Fe3+ (ratio 1:5). Mohr\u2019s salt FeSO4.(NH4)2SO4.6H2O resists air oxidation better than plain FeSO4, making it a good standard.',
  'Endpoint: first permanent pale pink (self-indicator).'],
 eq:['MnO4- + 5Fe2+ + 8H+ -> Mn2+ + 5Fe3+ + 4H2O','M(KMnO4) = (1/5) x M(FAS) x V(FAS) / V(KMnO4)'],
 materials:['M/20 standard Mohr\u2019s salt solution (acidified with dilute H2SO4)','Given KMnO4 solution','Dilute H2SO4','Burette, pipette, conical flask, white tile'],
 procedure:[
  'Fill the burette with KMnO4; note the upper-meniscus reading.',
  'Pipette 20.0 mL of the standard Mohr\u2019s salt solution into the flask and add about 20 mL dilute H2SO4.',
  'Titrate cold, swirling, until a permanent pale pink appears.',
  'Repeat for concordant readings.'],
 table:{caption:'Representative readings (simulated)',head:['Reading','I','II','III'],rows:[
  ['Initial burette (mL)','0.0','0.0','0.0'],
  ['Final burette (mL)','20.2','20.1','20.1'],
  ['Volume of KMnO4 (mL)','20.2','20.1','20.1'],
  ['Concordant volume','','20.1 mL','']]},
 result:'The given KMnO4 solution is 0.0200 M, i.e. about 3.17 g/L.',
 calc:['M(KMnO4) = (1/5) x 0.05 x 20.0 / 20.1 = 0.00995 M ~ 0.010 M','(Values depend on the actual FAS molarity used; compute with your standard.)'],
 precautions:['Acidify the Mohr\u2019s salt solution and use it fresh - Fe2+ oxidises in air.','No heating here; Fe2+ would be oxidised by air faster when hot.'],
 safety:['Same as the oxalic acid titration: corrosive acid, staining oxidant.'],
 viva:[
  ['Why is Mohr\u2019s salt preferred over FeSO4.7H2O?','The double salt is more stable to air oxidation, so its Fe2+ content remains exactly as weighed.'],
  ['Why is heating not done in this titration?','Heating accelerates air-oxidation of Fe2+ to Fe3+, giving a low titre.']],
 jee:['n-factor 1 for Fe2+ -> Fe3+; computing equivalent mass of Mohr\u2019s salt (392.14 g/eq) is a standard JEE check.']
},
{
 id:'c12-salt-analysis', tier:'c12', cat:'Systematic qualitative analysis - Unit 7', tag:'current', sim:'salt',
 title:'Detecting one cation and one anion in a given salt',
 aim:'To determine one cation and one anion in a given salt (cations: Pb2+, Cu2+, As3+, Al3+, Fe3+, Mn2+, Zn2+, Co2+, Ni2+, Ca2+, Sr2+, Ba2+, Mg2+, NH4+; anions: CO3^2-, S2-, SO3^2-, NO2-, SO4^2-, Cl-, Br-, I-, PO4^3-, C2O4^2-, CH3COO-, NO3-; insoluble salts excluded).',
 theory:[
  'The systematic scheme: anion identification by dilute and concentrated H2SO4 reactions plus confirmatory tests, then cation identification by group analysis with group reagents.',
  'Open the interactive Salt Analysis Lab on this site to walk through the exact test sequence with realistic observations for your chosen salt.'],
 eq:['Group reagents: dil HCl (I) | H2S in acid (II) | NH4OH + NH4Cl (III) | H2S in NH4OH (IV) | (NH4)2CO3 (V) | Na2HPO4/(NH4)2HPO4 (VI)'],
 materials:['Given salt','Dilute and conc. H2SO4, NaOH, NH4OH, NH4Cl, group reagents','Confirmatory reagents per ion','Test tubes, burner, centrifuge or filter paper'],
 procedure:[
  'Record physical appearance (colour, texture, solubility in water).',
  'Anion: dilute H2SO4 test (cold, then warm) -> concentrated H2SO4 test -> specific confirmatory test.',
  'Prepare original solution and proceed through cation groups 0 to VI.',
  'Confirm the cation with its specific test (e.g. K4[Fe(CN)6] chocolate ppt for Cu2+, DMG scarlet ppt for Ni2+).',
  'Report the salt.'],
 table:null,
 result:'Salt identified as the cation-anion pair found.',
 calc:[],
 precautions:['Never skip a group; a missed group reagent invalidates later groups.','Wash every precipitate before confirmatory tests.'],
 safety:['H2S toxic - fume hood; conc. H2SO4 burns - add to water dropwise; barium salts are toxic.'],
 viva:[
  ['Why is the original solution prepared in dilute HCl for some salts?','Many salts are insoluble in water but dissolve in dilute HCl, and chloride does not interfere with later group reagents.']],
 jee:['Confirmatory colours (CuS black, NiS black, ZnS white, MnS buff, As2S3 yellow, DMG-Ni scarlet) are among the most repeated JEE Advanced qualitative facts.']
},
{
 id:'c12-functional-groups', tier:'c12', cat:'Functional groups in organic compounds - Unit 8', tag:'current', sim:null,
 title:'Tests for functional groups in organic compounds',
 aim:'To detect unsaturation and alcoholic, phenolic, aldehydic, ketonic, carboxylic and primary amino groups in a given organic compound.',
 theory:[
  'Each functional group gives a characteristic chemical test:',
  'Unsaturation: Baeyer\u2019s reagent (dilute alkaline KMnO4) decolourises; bromine water decolourises. Phenol: violet colour with neutral FeCl3. Aldehyde: silver mirror with Tollens\u2019 reagent, red Cu2O with Fehling\u2019s/Benedict\u2019s. Ketone: 2,4-DNP orange ppt, no Tollens. Carboxylic acid: effervescence with NaHCO3, fruity ester smell. Primary amine: carbylamine test (foul smell), azo dye test for aromatic amines.'],
 eq:['R-CHO + 2[Ag(NH3)2]+ + 3OH- -> R-COO- + 2Ag (mirror) + 4NH3 + 2H2O','R-CHO + 2Cu2+ + 5OH- -> R-COO- + Cu2O (red) + 3H2O'],
 materials:['Given organic compounds','Baeyer\u2019s reagent, bromine water','Neutral FeCl3','Tollens\u2019, Fehling\u2019s A+B / Benedict\u2019s reagents','2,4-DNP reagent','NaHCO3 solution','CHCl3 + alcoholic KOH (carbylamine)','Test tubes, water bath'],
 procedure:[
  'Note physical state, colour and smell of the compound.',
  'Test for unsaturation with Baeyer\u2019s reagent (pink decolourised = C=C or C≡C).',
  'Test with neutral FeCl3: violet = phenol.',
  'Tollens\u2019 test in warm water bath: silver mirror = aldehyde (then confirm with Fehling\u2019s: red ppt).',
  '2,4-DNP: orange/yellow ppt = carbonyl; if Tollens-negative but DNP-positive = ketone.',
  'NaHCO3: brisk effervescence = carboxylic acid; ester test gives fruity smell on warming with conc. H2SO4 + ethanol.',
  'Carbylamine test: offensive smell = primary amine.'],
 table:{caption:'Representative observations for acetone (ketone) (simulated)',head:['Test','Observation','Inference'],rows:[
  ['Baeyer\u2019s reagent','Pink colour persists','No unsaturation'],
  ['Tollens\u2019 reagent','No silver mirror','Not an aldehyde'],
  ['2,4-DNP','Orange precipitate','Carbonyl group present'],
  ['NaHCO3','No effervescence','Not a carboxylic acid'],
  ['Conclusion','-','Ketone (acetone)']]},
 result:'The functional group(s) in the given compound are identified from the test results.',
 calc:[],
 precautions:['Prepare Tollens\u2019 reagent fresh and destroy residues - aged reagent can form explosive silver fulminating compounds.','Do the carbylamine test with tiny quantities and destroy it with acid; isocyanides are intensely foul and toxic.'],
 safety:['2,4-DNP is flammable and toxic; Fehling/Tollens solutions are corrosive; gloves and goggles throughout.'],
 viva:[
  ['Why do aldehydes but not ketones reduce Tollens\u2019 reagent?','Aldehydes are easily oxidised to acids; ketones need strong oxidisers that break C-C bonds.'],
  ['Why does glucose give Fehling\u2019s test though it is mostly cyclic?','In alkaline solution the ring opens to the free aldehyde form, which reduces Cu2+.']],
 jee:['Distinguishing tests (Tollens vs Fehling vs iodoform vs 2,4-DNP) are core JEE Advanced organic questions.']
},
{
 id:'c12-mohrs-salt', tier:'c12', cat:'Preparation of inorganic compounds - Unit 9', tag:'current', sim:null,
 title:'Preparation of Mohr\u2019s salt (ferrous ammonium sulphate)',
 aim:'To prepare crystals of the double salt ferrous ammonium sulphate, FeSO4.(NH4)2SO4.6H2O.',
 theory:[
  'Equimolar solutions of FeSO4 and (NH4)2SO4 are mixed in acidified water and crystallised. The double salt is less soluble than either component and separates as pale green monoclinic crystals.',
  'A few mL of dilute H2SO4 prevents hydrolysis of Fe2+ (which would give a brown basic salt).'],
 eq:['FeSO4 + (NH4)2SO4 + 6H2O -> FeSO4.(NH4)2SO4.6H2O'],
 materials:['Ferrous sulphate 3.5 g','Ammonium sulphate 1.75 g','Dilute H2SO4','Beakers, burner, funnel, china dish','Ethanol for washing (optional)'],
 procedure:[
  'Dissolve 3.5 g FeSO4.7H2O and 1.75 g (NH4)2SO4 separately in minimum hot distilled water with 2-3 mL dilute H2SO4.',
  'Mix the two solutions and concentrate on a water bath to the crystallisation point.',
  'Cool slowly undisturbed; pale green crystals separate.',
  'Filter, wash with a little ice-cold water (then alcohol), and dry between filter papers.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Theoretical yield','about 4.9 g'],
  ['Practical yield','3.8 - 4.2 g'],
  ['Appearance','Pale green monoclinic crystals']]},
 result:'Pale green crystals of Mohr\u2019s salt are obtained; the crystals do not give a brown tinge (no oxidation/hydrolysis).',
 calc:['Molar mass = 392.14 g/mol; 3.5 g FeSO4.7H2O = 0.0126 mol -> theory 0.0126 x 392.14 = 4.94 g'],
 precautions:['Keep the solution acidic throughout; brown colour means oxidation - discard.','Do not over-concentrate; the salt must crystallise on cooling, not on evaporation.'],
 safety:['Dilute acid is corrosive; handle hot solutions with tongs.'],
 viva:[
  ['Why is dilute H2SO4 added during preparation?','To suppress hydrolysis of Fe2+ (and NH4+) which would otherwise give turbid brown solutions.'],
  ['Why is Mohr\u2019s salt called a double salt?','It dissociates completely into Fe2+, NH4+ and SO4^2- ions in solution; it loses its identity in water unlike a complex salt.']],
 jee:['Double salt vs complex salt (Mohr\u2019s salt vs potash ferric oxalate) is a classic JEE Advanced distinction.']
},
{
 id:'c12-potash-alum', tier:'c12', cat:'Preparation of inorganic compounds - Unit 9', tag:'current', sim:null,
 title:'Preparation of potash alum (fitkari)',
 aim:'To prepare crystals of potash alum, K2SO4.Al2(SO4)3.24H2O.',
 theory:[
  'Equimolar solutions of K2SO4 and Al2(SO4)3 are mixed and crystallised. The alum forms large, transparent octahedral crystals because the double salt is less soluble than its components.',
  'A little dilute H2SO4 prevents hydrolysis of Al3+.'],
 eq:['K2SO4 + Al2(SO4)3 + 24H2O -> K2SO4.Al2(SO4)3.24H2O'],
 materials:['Potassium sulphate 3 g','Aluminium sulphate 12 g (about 2:1 by mass as per recipe)','Dilute H2SO4','Beakers, china dish, burner'],
 procedure:[
  'Dissolve the two sulphates separately in minimum hot water with a little dilute H2SO4.',
  'Mix, concentrate to the crystallisation point on a water bath.',
  'Cool undisturbed overnight; colourless octahedral crystals grow.',
  'Separate, wash with ice-cold water and dry.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Colourless transparent octahedral crystals'],
  ['Practical yield','about 70-80 % of theory']]},
 result:'Colourless octahedral crystals of potash alum are obtained.',
 calc:[],
 precautions:['Slow, undisturbed cooling gives large clear crystals.'],
 safety:['Routine hot-solution precautions.'],
 viva:[
  ['What is the general formula of alums?','M2SO4.M2\u2019(SO4)3.24H2O, where M is a monovalent cation (K+, Na+, NH4+) and M\u2019 a trivalent one (Al3+, Fe3+, Cr3+).']],
 jee:[]
},
{
 id:'c12-acetanilide', tier:'c12', cat:'Preparation of organic compounds - Unit 10', tag:'current', sim:null,
 title:'Preparation of acetanilide from aniline',
 aim:'To prepare acetanilide (N-phenylacetamide) from aniline and acetic anhydride.',
 theory:[
  'Aniline\u2019s amino group attacks acetic anhydride to form the amide. Acetylation also protects the NH2 group - key in multi-step synthesis.',
  'The crude product is purified by recrystallisation from hot water; pure acetanilide melts at 114 C.'],
 eq:['C6H5NH2 + (CH3CO)2O -> C6H5NHCOCH3 + CH3COOH'],
 materials:['Aniline 5 mL','Acetic anhydride 5 mL','Glacial acetic acid 5 mL','Zinc dust (pinch)','Reflux/flask arrangement, china dish','Ice-cold water'],
 procedure:[
  'Mix 5 mL aniline, 5 mL acetic anhydride and 5 mL glacial acetic acid with a pinch of zinc dust in a dry flask.',
  'Reflux gently for 15-20 minutes.',
  'Pour the hot mixture into about 100 mL ice-cold water with stirring; crude acetanilide separates as a white solid.',
  'Filter, wash, and recrystallise from boiling water; dry and record the melting point.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','White glistening flakes'],
  ['Melting point','113-114 C (literature 114 C)'],
  ['Practical yield','4.5 - 5.5 g']]},
 result:'White crystals of acetanilide, m.p. about 114 C, are obtained.',
 calc:['5 mL aniline x 1.02 g/mL / 93.13 = 0.055 mol -> theory 0.055 x 135.17 = 7.4 g'],
 precautions:['Glassware must be dry; acetic anhydride hydrolyses with moisture.','Recrystallise from minimum boiling water for best recovery.'],
 safety:['Aniline is toxic and absorbed through skin - gloves essential; acetic anhydride is corrosive and lachrymatory.'],
 viva:[
  ['What is the role of zinc dust?','It prevents oxidation of aniline (which would colour the product).'],
  ['Why is aniline acetylated before nitration?','Free -NH2 is too activating and gets oxidised by nitrating mixture; the amide is moderately activating and directs para.']],
 jee:['Protecting-group logic for -NH2 and the 114 C melting point are frequently referenced in JEE Advanced synthesis problems.']
},
{
 id:'c12-dibenzalacetone', tier:'c12', cat:'Preparation of organic compounds - Unit 10', tag:'current', sim:null,
 title:'Preparation of dibenzalacetone',
 aim:'To prepare dibenzalacetone (dibenzylideneacetone) from benzaldehyde and acetone.',
 theory:[
  'In presence of NaOH, two molecules of benzaldehyde condense with one molecule of acetone (double Claisen-Schmidt / crossed aldol condensation), eliminating two waters to give the yellow crystalline product.',
  'The product is purified by recrystallisation from ethanol; m.p. 112 C.'],
 eq:['2C6H5CHO + CH3COCH3 ->(NaOH) C6H5CH=CH-CO-CH=CHC6H5 + 2H2O'],
 materials:['Benzaldehyde 2.1 mL','Acetone 0.8 mL','10 % NaOH solution','Ethanol','Conical flask, ice bath','Buchner funnel'],
 procedure:[
  'Mix 2.1 mL benzaldehyde and 0.8 mL acetone in ethanol in a conical flask.',
  'Add 10 % NaOH solution slowly with shaking and cool in ice.',
  'Leave the mixture for about 30 minutes with occasional shaking; yellow crystals separate.',
  'Filter, wash with cold water, recrystallise from ethanol and dry.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Bright yellow crystals'],
  ['Melting point','111-112 C (literature 112 C)']]},
 result:'Yellow crystalline dibenzalacetone, m.p. about 112 C, is obtained.',
 calc:['Benzaldehyde 2.1 mL x 1.05/106.12 = 0.021 mol; acetone limiting: 0.8 mL x 0.79/58.08 = 0.011 mol; theory = 0.011 x 234.3 = 2.55 g'],
 precautions:['Add alkali slowly in the cold - vigorous reaction.','Use freshly distilled benzaldehyde; oxidised (acidic) aldehyde lowers yield.'],
 safety:['NaOH is corrosive; benzaldehyde vapour is irritating - work in ventilation.'],
 viva:[
  ['Why does benzaldehyde not self-condense?','It has no alpha-hydrogen, so it can only act as the electrophilic partner (crossed aldol).'],
  ['What type of condensation is this?','Claisen-Schmidt: a crossed aldol between an aromatic aldehyde and an aliphatic ketone.']],
 jee:['Claisen-Schmidt condensation and the alpha-H requirement are core JEE Advanced carbonyl-chemistry facts.']
},
{
 id:'c12-p-nitroacetanilide', tier:'c12', cat:'Preparation of organic compounds - Unit 10', tag:'current', sim:null,
 title:'Preparation of p-nitroacetanilide',
 aim:'To prepare p-nitroacetanilide by nitration of acetanilide.',
 theory:[
  'The acetamido group (-NHCOCH3) is ortho-para directing; with mixed acid (HNO3 + H2SO4) at 0-5 C, nitration gives mainly the para product, separated from a little ortho by recrystallisation.',
  'Pure p-nitroacetanilide melts at 214 C.'],
 eq:['C6H5NHCOCH3 + HNO3 ->(H2SO4, 0-5 C) p-O2N-C6H4-NHCOCH3 + H2O'],
 materials:['Acetanilide 5 g','Glacial acetic acid','Concentrated H2SO4','Fuming/concentrated HNO3','Ice bath','Methanol for recrystallisation'],
 procedure:[
  'Dissolve 5 g acetanilide in glacial acetic acid with a little conc. H2SO4 and cool in ice to below 5 C.',
  'Add the cold nitrating mixture (HNO3 + H2SO4) dropwise with stirring, keeping below 10 C.',
  'After addition, stir 30 minutes at room temperature, then pour onto crushed ice.',
  'Filter the solid, wash till acid-free, recrystallise from methanol; para product crystallises out.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Colourless to pale yellow needles'],
  ['Melting point','212-214 C (literature 214 C)']]},
 result:'p-Nitroacetanilide (major) is obtained, m.p. about 214 C.',
 calc:['Theory: 5 g acetanilide = 0.037 mol -> 0.037 x 180.16 = 6.7 g'],
 precautions:['Temperature must stay below 10 C during addition - otherwise di-nitration and oxidation occur.'],
 safety:['Mixed acid is fiercely corrosive and the nitration is exothermic - gloves, goggles, ice bath, dropwise addition; teacher must supervise closely.'],
 viva:[
  ['Why is the para isomer the major product?','The bulky acetamido group blocks the ortho positions sterically, so the nitronium ion attacks para.'],
  ['Why is aniline first converted to acetanilide?','To moderate its high reactivity and prevent oxidation by the nitrating mixture.']],
 jee:['Directing effects and the -NH2 protection strategy are central JEE Advanced aromatic-chemistry themes.']
},
{
 id:'c12-aniline-yellow', tier:'c12', cat:'Preparation of organic compounds - Unit 10', tag:'current', sim:null,
 title:'Preparation of aniline yellow (p-aminoazobenzene)',
 aim:'To prepare aniline yellow (p-aminoazobenzene) from aniline.',
 theory:[
  'Aniline is first diazotised with NaNO2 + HCl at 0-5 C; the diazonium salt then couples with another molecule of aniline to give the yellow azo compound p-aminoazobenzene.',
  'Diazotisation must stay cold - diazonium salts decompose above about 5 C.'],
 eq:['C6H5NH2 + NaNO2 + 2HCl ->(0-5 C) C6H5N2+Cl- + NaCl + 2H2O','C6H5N2+Cl- + C6H5NH2 -> p-H2N-C6H4-N=N-C6H5 + HCl'],
 materials:['Aniline 3 mL','Concentrated HCl','NaNO2 solution','Ice bath','Sodium acetate solution'],
 procedure:[
  'Dissolve 3 mL aniline in dilute HCl and cool in ice to 0-5 C.',
  'Add cold NaNO2 solution dropwise with stirring (diazotisation) until a drop gives a blue colour with KI-starch paper.',
  'Add a second portion of aniline dissolved in acetic acid, then sodium acetate solution; the yellow dye precipitates.',
  'Filter, wash with cold water and dry.'],
 table:{caption:'Representative result (simulated)',head:['Quantity','Value'],rows:[
  ['Appearance','Yellow crystalline solid'],
  ['Melting point','about 126 C (literature 126-128 C)']]},
 result:'Yellow crystals of p-aminoazobenzene (aniline yellow) are obtained.',
 calc:[],
 precautions:['Keep the diazotisation mixture below 5 C at all times.','Add NaNO2 slowly; excess nitrous acid spoils the product.'],
 safety:['Diazonium salts can be explosive when dry - never isolate the diazonium salt; aniline is toxic.'],
 viva:[
  ['Why is diazotisation done at 0-5 C?','Benzenediazonium chloride decomposes to phenol and N2 at higher temperatures.'],
  ['What is a coupling reaction?','Electrophilic attack of a diazonium ion on an activated aromatic ring (amine/phenol), forming an azo (-N=N-) linkage.']],
 jee:['Diazonium salt preparation, stability and coupling are high-frequency JEE Advanced questions.']
},
{
 id:'c12-food-tests', tier:'c12', cat:'Carbohydrates, fats and proteins - Unit 11', tag:'current', sim:null,
 title:'Tests for carbohydrates, fats and proteins in pure samples and foodstuffs',
 aim:'To study the characteristic tests of carbohydrates, fats and proteins in pure samples and to detect their presence in given foodstuffs.',
 theory:[
  'Carbohydrates: Molisch\u2019s test (violet ring) is general; Fehling\u2019s/Benedict\u2019s (brick-red ppt) detect reducing sugars; iodine turns starch blue-black.',
  'Fats: translucent spot on paper; acrolein test (pungent smell with KHSO4); sudan III red staining.',
  'Proteins: Biuret test (violet with dilute CuSO4 + NaOH), Xanthoproteic test (yellow with conc. HNO3 turning orange with alkali), Millon\u2019s test (brick-red).'],
 eq:['Reducing sugar + 2Cu2+ + 5OH- -> carboxylate + Cu2O (brick red) + 3H2O'],
 materials:['Glucose, sucrose, starch; egg albumin; ghee/oil/butter','Food samples: milk, honey, potato, dal, bread, rice','Molisch\u2019s, Fehling\u2019s, Benedict\u2019s, iodine, Biuret (CuSO4+NaOH), Millon\u2019s, conc. HNO3, KHSO4','Test tubes, water bath, burner'],
 procedure:[
  'Molisch\u2019s: 2 mL sample + 2 drops Molisch\u2019s reagent; add conc. H2SO4 down the side - violet ring = carbohydrate.',
  'Fehling\u2019s/Benedict\u2019s: heat sample with reagent - brick-red ppt = reducing sugar.',
  'Iodine: blue-black = starch.',
  'Spot test: rub the food on paper - a permanent translucent spot = fat.',
  'Acrolein: heat with KHSO4 - pungent smell = fat/oil.',
  'Biuret: sample + NaOH + 1 % CuSO4 - violet = protein.',
  'Xanthoproteic: conc. HNO3 - yellow ppt turning orange with NaOH = protein (aromatic amino acids).',
  'Apply the relevant tests to each foodstuff and tabulate the results.'],
 table:{caption:'Representative food analysis (simulated)',head:['Food','Carbohydrate test','Fat test','Protein test'],rows:[
  ['Milk','Fehling\u2019s positive (lactose)','Translucent spot (cream)','Biuret positive'],
  ['Honey','Fehling\u2019s positive (glucose, fructose)','Negative','Negative'],
  ['Potato','Iodine blue-black (starch)','Negative','Weak Biuret'],
  ['Butter','Negative','Acrolein + spot positive','Trace'],
  ['Dal (boiled)','Weak Molisch','Negative','Biuret strong positive']]},
 result:'The presence of carbohydrates, fats and proteins in common foodstuffs is confirmed by characteristic tests.',
 calc:[],
 precautions:['Add conc. H2SO4 down the side of the tube in Molisch\u2019s test - do not shake.','Fehling\u2019s A and B must be mixed only just before use.'],
 safety:['Conc. H2SO4 and HNO3 cause severe burns; Millon\u2019s reagent contains mercury - handle with gloves and never pour down the sink casually.'],
 viva:[
  ['Why does sucrose not reduce Fehling\u2019s solution directly?','Its glycosidic bond ties up both anomeric carbons - no free reducing end; it reduces only after acid hydrolysis.'],
  ['Which test detects all proteins?','Biuret - it responds to peptide bonds, present in every protein.']],
 jee:['Reducing vs non-reducing sugars and the Biuret/xanthoproteic distinction are routine JEE Advanced biomolecule questions.']
},
{
 id:'c12-projects', tier:'c12', cat:'Investigatory projects - NCERT manual', tag:'current', sim:null,
 title:'Class 12 investigatory projects (NCERT suggested list)',
 aim:'To plan and carry out a small scientific investigation with lab testing and information from other sources.',
 theory:['Quoted from the NCERT Class 12 lab manual\u2019s suggested project list. A good project states the question, controls variables, repeats measurements and reports limitations honestly.'],
 eq:[],
 materials:['Common lab reagents and household/food samples'],
 procedure:[
  'Project 1: Study the presence of oxalate ions in guava fruit at different stages of ripening.',
  'Project 2: Study the quantity of casein present in different samples of milk.',
  'Project 3: Prepare soyabean milk and compare it with natural milk for curd formation and the effect of temperature.',
  'Project 4: Study the effect of potassium bisulphate as a food preservative under various conditions (temperature, concentration, time).',
  'Project 5: Study the digestion of starch by salivary amylase and the effect of pH and temperature on it.',
  'Project 6: Comparative study of the rate of fermentation of wheat flour, gram flour, potato juice, carrot juice etc.',
  'Project 7: Extraction of essential oils from saunf (aniseed), ajwain (carum) and elaichi (cardamom).',
  'Project 8: Study of common food adulterants in fat, oil, butter, sugar, turmeric powder, chilli powder and pepper.'],
 table:null,
 result:'A project report with aim, hypothesis, method, data tables/graphs, result and limitations.',
 calc:[],
 precautions:['Repeat key measurements three times; report averages.','Keep one untreated control sample for comparison.'],
 safety:['Follow standard lab safety and work under supervision.'],
 viva:[
  ['How do you test oxalate in guava?','Extract pulp, titrate with dilute KMnO4 in acid medium; the titre rises as the fruit ripens.']],
 jee:[]
}
];
