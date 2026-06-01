### Roster Details<br />
Team Name: GameHunters<br />
Roster: abr, bnc, bsd, f4stzin, nyezin<br />
Global Rank: [192](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [44]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  766.7<br />
<br />
Final Rank Value (766.7) = Starting Rank Value (813.5) + Head To Head Adjustments (-46.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.184[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.5
- 400 + ( ( 0.217 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 813.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       69 | 2026-05-29 | LP                 | L   | 1.000      | -            | -                | -                | -         |    -3.28 | abr, Bruninho, bsd, fokiu, nyezin |
|           45 |      108 | 2026-05-28 | Fluxo              | L   | 1.000      | -            | -                | -                | -         |    -4.03 | abr, Bruninho, bsd, fokiu, nyezin |
|           44 |      148 | 2026-05-27 | Bounty Hunters     | W   | 1.000      | 0.354        | 0.034 (0.012)    | 0.653 (0.231)    | 1 (1.000) |    27.70 | abr, Bruninho, bsd, fokiu, nyezin |
|           43 |      932 | 2026-05-02 | METANOIA Wolves    | L   | 1.000      | -            | -                | -                | -         |   -13.02 | abr, bnc, bsd, f4stzin, nyezin    |
|           42 |      949 | 2026-05-02 | DAMAJUANA          | L   | 0.999      | -            | -                | -                | -         |   -26.04 | abr, bnc, bsd, f4stzin, nyezin    |
|           41 |     1053 | 2026-04-30 | ALZON              | L   | 0.985      | -            | -                | -                | -         |   -26.05 | abr, bnc, bsd, f4stzin, nyezin    |
|           40 |     1109 | 2026-04-28 | ShindeN            | L   | 0.975      | -            | -                | -                | -         |    -3.21 | abr, bnc, bsd, f4stzin, nyezin    |
|           39 |     1136 | 2026-04-28 | ELITES             | L   | 0.971      | -            | -                | -                | -         |   -26.74 | abr, bnc, bsd, f4stzin, nyezin    |
|           38 |     1155 | 2026-04-27 | RED Canids         | W   | 0.968      | 0.363        | 0.042 (0.015)    | 0.340 (0.119)    | 0 (0.000) |    26.58 | abr, bnc, bsd, f4stzin, nyezin    |
|           37 |     1197 | 2026-04-26 | Imperial           | L   | 0.962      | -            | -                | -                | -         |    -4.34 | abr, bnc, bsd, f4stzin, nyezin    |
|           36 |     1289 | 2026-04-25 | Bounty Hunters     | L   | 0.954      | -            | -                | -                | -         |    -5.72 | abr, bnc, bsd, f4stzin, nyezin    |
|           35 |     1332 | 2026-04-24 | Crashers           | W   | 0.948      | 0.362        | 0.002 (0.001)    | 0.431 (0.148)    | 0 (0.000) |    12.20 | abr, bnc, bsd, f4stzin, nyezin    |
|           34 |     1337 | 2026-04-24 | Yawara             | L   | 0.948      | -            | -                | -                | -         |   -10.05 | abr, bnc, bsd, f4stzin, nyezin    |
|           33 |     1860 | 2026-04-04 | Keyd Stars         | L   | 0.815      | -            | -                | -                | -         |    -9.42 | abr, bnc, bsd, nyezin, prt        |
|           32 |     1932 | 2026-04-03 | Gaimin Gladiators  | L   | 0.809      | -            | -                | -                | -         |    -2.28 | abr, bnc, bsd, nyezin, prt        |
|           31 |     2026 | 2026-04-02 | Yawara             | W   | 0.802      | 0.435        | 0.037 (0.013)    | 0.518 (0.181)    | 1 (0.802) |    16.73 | abr, bnc, bsd, nyezin, prt        |
|           30 |     2031 | 2026-04-02 | FOLHA AMARELA      | W   | 0.802      | 0.363        | 0.002 (0.001)    | 0.225 (0.065)    | 0 (0.000) |     9.49 | abr, bnc, bsd, nyezin, prt        |
|           29 |     2037 | 2026-04-02 | Turma do Pagode    | L   | 0.802      | -            | -                | -                | -         |    -2.23 | abr, bnc, bsd, nyezin, prt        |
|           28 |     2042 | 2026-04-02 | R2                 | L   | 0.801      | -            | -                | -                | -         |   -16.61 | abr, bnc, bsd, nyezin, prt        |
|           27 |     2084 | 2026-04-02 | Keyd Stars         | L   | 0.799      | -            | -                | -                | -         |    -9.21 | abr, bnc, bsd, nyezin, prt        |
|           26 |     2149 | 2026-04-01 | RED Canids Academy | W   | 0.794      | -            | -                | -                | 0 (0.000) |     4.42 | abr, bnc, bsd, nyezin, prt        |
|           25 |     2217 | 2026-03-31 | Fake do Biru       | L   | 0.788      | -            | -                | -                | -         |    -7.66 | abr, bnc, bsd, nyezin, prt        |
|           24 |     2471 | 2026-03-28 | Turma do Pagode    | L   | 0.768      | -            | -                | -                | -         |    -2.69 | abr, bnc, bsd, nyezin, prt        |
|           23 |     2580 | 2026-03-26 | 9z                 | L   | 0.755      | -            | -                | -                | -         |    -0.33 | abr, bnc, bsd, nyezin, prt        |
|           22 |     2620 | 2026-03-25 | Back to Back       | W   | 0.749      | 0.624        | 0.002 (0.001)    | -                | 0 (0.000) |     9.44 | abr, bnc, bsd, nyezin, prt        |
|           21 |     2681 | 2026-03-24 | Fake do Biru       | L   | 0.741      | -            | -                | -                | -         |    -8.07 | abr, bnc, bsd, nyezin, prt        |
|           20 |     2739 | 2026-03-23 | Bounty Hunters     | L   | 0.735      | -            | -                | -                | -         |    -4.41 | abr, bnc, bsd, nyezin, prt        |
|           19 |     2745 | 2026-03-23 | Keyd Stars         | L   | 0.735      | -            | -                | -                | -         |    -8.83 | abr, bnc, bsd, nyezin, prt        |
|           18 |     2813 | 2026-03-22 | VEXA               | W   | 0.729      | -            | -                | -                | 0 (0.000) |     4.18 | abr, bnc, bsd, nyezin, prt        |
|           17 |     2820 | 2026-03-22 | Procyon            | W   | 0.728      | 0.371        | 0.006 (0.002)    | 0.269 (0.073)    | 0 (0.000) |     9.93 | abr, bnc, bsd, nyezin, prt        |
|           16 |     2857 | 2026-03-21 | ShindeN            | L   | 0.722      | -            | -                | -                | -         |    -2.79 | abr, bnc, bsd, nyezin, prt        |
|           15 |     2942 | 2026-03-20 | Vasco              | W   | 0.714      | 0.363        | 0.011 (0.003)    | 0.368 (0.095)    | 0 (0.000) |    11.78 | abr, bnc, bsd, nyezin, prt        |
|           14 |     3019 | 2026-03-18 | Players            | W   | 0.701      | -            | -                | -                | -         |     6.21 | abr, bnc, bsd, nyezin, prt        |
|           13 |     3110 | 2026-03-16 | paiN Academy       | W   | 0.689      | 0.371        | 0.003 (0.001)    | 0.484 (0.124)    | -         |     8.84 | abr, bnc, bsd, nyezin, prt        |
|           12 |     3205 | 2026-03-14 | MAGICOS            | W   | 0.674      | -            | -                | -                | -         |     3.72 | abr, bnc, bsd, nyezin, prt        |
|           11 |     3644 | 2026-03-05 | Galorys            | L   | 0.616      | -            | -                | -                | -         |    -2.92 | abr, bnc, bsd, nyezin, prt        |
|           10 |     3650 | 2026-03-05 | RED Canids         | L   | 0.615      | -            | -                | -                | -         |    -2.00 | abr, bnc, bsd, nyezin, prt        |
|            9 |     3776 | 2026-03-03 | ex-KRÜ             | L   | 0.600      | -            | -                | -                | -         |   -10.58 | abr, bnc, bsd, nyezin, prt        |
|            8 |     4201 | 2026-02-22 | paiN Academy       | W   | 0.540      | 0.371        | -                | 0.484 (0.097)    | -         |     6.04 | abr, bnc, bsd, nyezin, prt        |
|            7 |     4629 | 2026-02-14 | LP                 | L   | 0.488      | -            | -                | -                | -         |    -1.79 | abr, bnc, bsd, nyezin, prt        |
|            6 |     4709 | 2026-02-13 | Fluxo              | W   | 0.480      | 0.371        | 0.014 (0.003)    | 0.365 (0.065)    | -         |    13.41 | abr, bnc, bsd, nyezin, prt        |
|            5 |     4787 | 2026-02-11 | Bad Luck           | W   | 0.468      | -            | -                | -                | -         |     2.18 | abr, bnc, bsd, nyezin, prt        |
|            4 |     4859 | 2026-02-09 | Players            | W   | 0.453      | -            | -                | -                | -         |     2.50 | abr, bnc, bsd, nyezin, prt        |
|            3 |     4906 | 2026-02-07 | ShindeN            | L   | 0.441      | -            | -                | -                | -         |    -1.19 | abr, bnc, bsd, nyezin, prt        |
|            2 |     4967 | 2026-02-05 | Curralzinho        | W   | 0.429      | -            | -                | -                | -         |     1.26 | abr, bnc, bsd, nyezin, prt        |
|            1 |     4993 | 2026-02-04 | FOLHA AMARELA      | L   | 0.421      | -            | -                | -                | -         |    -7.93 | abr, bnc, bsd, nyezin, prt        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($932.75)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-25 |      0.748 | $750.00        | $561.37         |
| 2026-02-15 |      0.495 | $750.00        | $371.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
