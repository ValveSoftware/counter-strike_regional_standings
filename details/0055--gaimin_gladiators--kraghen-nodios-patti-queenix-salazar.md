### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [55](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  1074.6<br />
<br />
Final Rank Value (1074.6) = Starting Rank Value (1193.1) + Head To Head Adjustments (-118.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.472[<sup>1</sup>](#table2)
- Bounty Collected: 0.465[<sup>2</sup>](#table1)
- Opponent Network: 0.248[<sup>2</sup>](#table1)
- LAN Wins: 0.377[<sup>2</sup>](#table1)

The average of these factors is 0.390<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1193.1
- 400 + ( ( 0.390 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1193.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |       87 | 2024-06-14 | GUN5             | L   | 1.000      | -            | -                | -                | -         |   -18.09 | kraghen, Nodios, Patti, Queenix, salazar    |
|           71 |      214 | 2024-06-10 | Enterprise       | L   | 1.000      | -            | -                | -                | -         |   -22.05 | kraghen, Nodios, Patti, Queenix, salazar    |
|           70 |      269 | 2024-06-09 | 5W               | L   | 1.000      | -            | -                | -                | -         |   -21.32 | kraghen, Nodios, Patti, Queenix, salazar    |
|           69 |      312 | 2024-06-08 | EYEBALLERS       | W   | 1.000      | 0.450        | -                | 0.653 (0.294)    | 0 (0.000) |     8.48 | kraghen, Nodios, Patti, Queenix, salazar    |
|           68 |      369 | 2024-06-07 | 3DMAX            | L   | 1.000      | -            | -                | -                | -         |   -12.53 | kraghen, Nodios, Patti, Queenix, salazar    |
|           67 |      433 | 2024-06-06 | Astralis Talent  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.54 | kraghen, Nodios, Patti, Queenix, salazar    |
|           66 |      688 | 2024-05-30 | Lynn Vision      | L   | 1.000      | -            | -                | -                | -         |   -15.86 | kraghen, Nodios, Patti, Queenix, salazar    |
|           65 |      732 | 2024-05-28 | The MongolZ      | L   | 1.000      | -            | -                | -                | -         |    -0.65 | kraghen, Nodios, Patti, Queenix, salazar    |
|           64 |     1017 | 2024-05-17 | ENCE             | L   | 0.990      | -            | -                | -                | -         |    -6.23 | kraghen, Nodios, Patti, Queenix, salazar    |
|           63 |     1023 | 2024-05-17 | GamerLegion      | L   | 0.989      | -            | -                | -                | -         |   -10.26 | kraghen, Nodios, Patti, Queenix, salazar    |
|           62 |     1033 | 2024-05-17 | Rebels           | L   | 0.988      | -            | -                | -                | -         |   -18.35 | kraghen, Nodios, Patti, Queenix, salazar    |
|           61 |     1116 | 2024-05-15 | BLEED            | W   | 0.975      | 0.384        | 0.347 (0.130)    | 0.946 (0.354)    | 0 (0.000) |    20.20 | kraghen, Nodios, Patti, Queenix, salazar    |
|           60 |     1341 | 2024-05-07 | Grannys Knockers | L   | 0.920      | -            | -                | -                | -         |   -25.22 | kraghen, Nodios, Patti, Queenix, salazar    |
|           59 |     1351 | 2024-05-06 | 500              | W   | 0.915      | -            | -                | -                | -         |     2.93 | kraghen, Nodios, Patti, Queenix, salazar    |
|           58 |     1363 | 2024-05-05 | Sashi            | W   | 0.909      | 0.143        | 0.200 (0.026)    | 1.000 (0.130)    | -         |    18.14 | kraghen, Nodios, Patti, Queenix, salazar    |
|           57 |     1369 | 2024-05-05 | Kronjyllands     | W   | 0.908      | -            | -                | -                | -         |     0.36 | kraghen, Nodios, Patti, Queenix, salazar    |
|           56 |     1399 | 2024-05-03 | AMKAL            | L   | 0.896      | -            | -                | -                | -         |   -12.02 | kraghen, Nodios, Patti, Queenix, salazar    |
|           55 |     1428 | 2024-05-02 | HAVU             | W   | 0.889      | -            | -                | -                | -         |     2.46 | kraghen, Nodios, Patti, Queenix, salazar    |
|           54 |     1435 | 2024-05-02 | SINNERS          | W   | 0.888      | 0.435        | -                | 0.782 (0.302)    | -         |     8.77 | kraghen, Nodios, Patti, Queenix, salazar    |
|           53 |     1470 | 2024-04-30 | AMKAL            | L   | 0.876      | -            | -                | -                | -         |   -12.81 | kraghen, Nodios, Patti, Queenix, salazar    |
|           52 |     1497 | 2024-04-29 | kONO             | L   | 0.868      | -            | -                | -                | -         |   -23.88 | kraghen, Nodios, Patti, Queenix, salazar    |
|           51 |     1522 | 2024-04-28 | 9 Pandas         | L   | 0.861      | -            | -                | -                | -         |   -18.55 | kraghen, Nodios, Patti, Queenix, salazar    |
|           50 |     1571 | 2024-04-26 | ALTERNATE aTTaX  | L   | 0.847      | -            | -                | -                | -         |   -21.91 | kraghen, Nodios, Patti, Queenix, salazar    |
|           49 |     1632 | 2024-04-23 | Sashi            | L   | 0.828      | -            | -                | -                | -         |   -14.61 | kraghen, Nodios, Patti, Queenix, salazar    |
|           48 |     1647 | 2024-04-22 | BLEED            | L   | 0.821      | -            | -                | -                | -         |    -8.99 | kraghen, Nodios, Patti, Queenix, salazar    |
|           47 |     1665 | 2024-04-21 | AMKAL            | W   | 0.815      | 0.384        | 0.139 (0.043)    | 0.613 (0.192)    | -         |    10.29 | kraghen, Nodios, Patti, Queenix, salazar    |
|           46 |     1702 | 2024-04-20 | Nemiga           | W   | 0.807      | 0.384        | 0.486 (0.151)    | 0.694 (0.215)    | -         |    13.48 | kraghen, Nodios, Patti, Queenix, salazar    |
|           45 |     1837 | 2024-04-17 | SINNERS          | W   | 0.787      | 0.384        | -                | 0.782 (0.237)    | -         |     9.28 | kraghen, Nodios, Patti, Queenix, salazar    |
|           44 |     1865 | 2024-04-16 | Permitta         | W   | 0.781      | 0.384        | -                | 0.885 (0.266)    | -         |     5.20 | kraghen, Nodios, Patti, Queenix, salazar    |
|           43 |     2193 | 2024-04-04 | JANO             | W   | 0.700      | -            | -                | -                | -         |     1.00 | allu, doto, Jerppa, juho, Sm1llee           |
|           42 |     2289 | 2024-03-31 | Denmark          | L   | 0.675      | -            | -                | -                | -         |   -20.81 | Altekz, cadiaN, Chr1zN, Kjaerbye, Sukker    |
|           41 |     2409 | 2024-03-23 | G2               | L   | 0.622      | -            | -                | -                | -         |    -0.49 | HooXi, huNter-, m0NESY, nexa, NiKo          |
|           40 |     2418 | 2024-03-22 | FURIA            | W   | 0.617      | 1.000        | 0.245 (0.151)    | 0.521 (0.321)    | 1 (0.617) |    17.27 | arT, chelo, FalleN, KSCERATO, yuurih        |
|           39 |     2439 | 2024-03-21 | Cloud9           | L   | 0.610      | -            | -                | -                | -         |    -6.47 | kraghen, Nodios, Patti, Queenix, salazar    |
|           38 |     2454 | 2024-03-21 | MOUZ             | L   | 0.608      | -            | -                | -                | -         |    -0.28 | kraghen, Nodios, Patti, Queenix, salazar    |
|           37 |     2485 | 2024-03-19 | Imperial         | W   | 0.596      | 0.143        | 0.406 (0.035)    | -                | 1 (0.596) |    15.73 | decenty, felps, HEN1, noway, VINI           |
|           36 |     2499 | 2024-03-18 | Lynn Vision      | W   | 0.588      | -            | -                | -                | 1 (0.588) |     8.24 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr     |
|           35 |     2520 | 2024-03-17 | The MongolZ      | W   | 0.582      | 0.143        | 0.986 (0.082)    | -                | 1 (0.582) |    18.01 | 910, bLitz, mzinho, Senzu, Techno           |
|           34 |     2531 | 2024-03-17 | Cloud9           | L   | 0.581      | -            | -                | -                | -         |    -5.80 | kraghen, Nodios, Patti, Queenix, salazar    |
|           33 |     2866 | 2024-03-04 | BetBoom          | L   | 0.494      | -            | -                | -                | -         |    -1.55 | kraghen, Nodios, Patti, Queenix, salazar    |
|           32 |     2872 | 2024-03-03 | ex-Preasy        | L   | 0.490      | -            | -                | -                | -         |   -12.64 | kraghen, Nodios, Patti, Queenix, salazar    |
|           31 |     2878 | 2024-03-03 | fnatic           | W   | 0.489      | 0.143        | 0.290 (0.020)    | -                | -         |    13.03 | afro, bodyy, KRIMZ, kyuubii, MATYS          |
|           30 |     2890 | 2024-03-03 | SINNERS          | W   | 0.489      | -            | -                | -                | -         |     5.33 | AJTT, beastik, NEOFRAG, oskar, SHOCK        |
|           29 |     2895 | 2024-03-03 | Monte            | W   | 0.487      | 0.500        | 0.189 (0.046)    | 0.674 (0.164)    | -         |     9.96 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k         |
|           28 |     2912 | 2024-03-02 | PARIVISION       | W   | 0.481      | -            | -                | -                | -         |     3.52 | kraghen, Nodios, Patti, Queenix, salazar    |
|           27 |     2937 | 2024-02-29 | 3DMAX            | L   | 0.470      | -            | -                | -                | -         |    -7.09 | kraghen, Nodios, Patti, Queenix, salazar    |
|           26 |     3082 | 2024-02-22 | ex-Guild Eagles  | W   | 0.422      | -            | -                | -                | 1 (0.422) |     2.55 | gxx-, juanflatroo, rigoN, SENER1, sinnopsyy |
|           25 |     3109 | 2024-02-21 | Apeks            | L   | 0.415      | -            | -                | -                | -         |    -7.75 | kraghen, Nodios, Patti, Queenix, salazar    |
|           24 |     3140 | 2024-02-20 | OG               | W   | 0.407      | -            | -                | -                | 1 (0.407) |     6.14 | F1KU, HeavyGod, k1to, Nexius, regali        |
|           23 |     3155 | 2024-02-19 | MOUZ             | L   | 0.403      | -            | -                | -                | -         |    -0.15 | kraghen, Nodios, Patti, Queenix, salazar    |
|           22 |     3166 | 2024-02-19 | Monte            | W   | 0.401      | -            | -                | -                | 1 (0.401) |     8.71 | kraghen, Nodios, Patti, Queenix, salazar    |
|           21 |     3381 | 2024-02-09 | ex-Preasy        | L   | 0.335      | -            | -                | -                | -         |    -8.76 | Altekz, dupreeh, refrezh, roeJ, TMB         |
|           20 |     3401 | 2024-02-07 | TSM              | W   | 0.321      | -            | -                | -                | -         |     0.75 | joel, KWERTZZ, MoDo, valde, Zyphon          |
|           19 |     3423 | 2024-02-05 | ex-Preasy        | W   | 0.307      | -            | -                | -                | -         |     1.53 | kraghen, Nodios, Patti, Queenix, salazar    |
|           18 |     3461 | 2024-02-03 | Sashi            | L   | 0.296      | -            | -                | -                | -         |    -5.46 | Cabbi, IceBerg, kwezz, Lucky, MistR         |
|           17 |     3505 | 2024-02-02 | Into the Breach  | W   | 0.288      | -            | -                | -                | -         |     0.53 | Bymas, CRUC1AL, misutaaa, rallen, Thomas    |
|           16 |     3588 | 2024-01-28 | Sangal           | W   | 0.254      | 0.371        | 0.216 (0.020)    | -                | -         |     3.70 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr     |
|           15 |     3658 | 2024-01-24 | Alliance         | W   | 0.227      | -            | -                | -                | -         |     1.14 | avid, b0denmaster, PlesseN, robiin, twist   |
|           14 |     3731 | 2024-01-21 | PERA             | W   | 0.208      | -            | -                | -                | -         |     1.51 | Aaron, DGL, Kamion, msN, Porya              |
|           13 |     3757 | 2024-01-20 | fnatic           | L   | 0.203      | -            | -                | -                | -         |    -0.64 | afro, bodyy, KRIMZ, kyuubii, MATYS          |
|           12 |     3775 | 2024-01-20 | Permitta         | W   | 0.201      | -            | -                | -                | -         |     1.28 | bnox, maaryy, mASKED, morelz, Vegi          |
|           11 |     3825 | 2024-01-19 | 9 Pandas         | L   | 0.195      | -            | -                | -                | -         |    -3.54 | kraghen, Nodios, Patti, Queenix, salazar    |
|           10 |     3866 | 2024-01-18 | Nexus            | W   | 0.189      | -            | -                | -                | -         |     0.87 | BTN, ERSIN, ragga, s0und, XELLOW            |
|            9 |     3891 | 2024-01-18 | Natus Vincere    | L   | 0.188      | -            | -                | -                | -         |    -0.10 | kraghen, Nodios, Patti, Queenix, salazar    |
|            8 |     4073 | 2024-01-13 | OG               | W   | 0.157      | -            | -                | -                | -         |     2.45 | kraghen, Nodios, Patti, Queenix, salazar    |
|            7 |     4074 | 2024-01-13 | ex-sYnck         | W   | 0.157      | -            | -                | -                | -         |     0.11 | kraghen, Nodios, Patti, Queenix, salazar    |
|            6 |     4075 | 2024-01-13 | 500              | W   | 0.156      | -            | -                | -                | -         |     0.37 | kraghen, Nodios, Patti, Queenix, salazar    |
|            5 |     4080 | 2024-01-13 | UNiTY            | W   | 0.155      | -            | -                | -                | -         |     1.28 | kraghen, Nodios, Patti, Queenix, salazar    |
|            4 |     4120 | 2024-01-12 | The Witchers     | W   | 0.150      | -            | -                | -                | -         |     0.23 | Dragon, fear, Sdaim, smooya, synyx          |
|            3 |     4214 | 2024-01-09 | fnatic           | L   | 0.130      | -            | -                | -                | -         |    -0.39 | kraghen, Nodios, Patti, Queenix, salazar    |
|            2 |     4224 | 2024-01-09 | brazylijski luz  | W   | 0.129      | -            | -                | -                | -         |     0.40 | Furlan, phr, POLO, Prism, Qlocuu            |
|            1 |     4251 | 2024-01-09 | Untouchables     | W   | 0.129      | -            | -                | -                | -         |     0.05 | datyx, Kjuk, Kokaina, MahaR, onStyle        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,994.79)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-18 |      0.996 | $1,000.00      | $995.98         |
| 2024-05-04 |      0.902 | $2,000.00      | $1,804.47       |
| 2024-05-02 |      0.889 | $1,000.00      | $889.13         |
| 2024-04-22 |      0.821 | $5,000.00      | $4,106.31       |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-02-09 |      0.335 | $5,000.00      | $1,672.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
