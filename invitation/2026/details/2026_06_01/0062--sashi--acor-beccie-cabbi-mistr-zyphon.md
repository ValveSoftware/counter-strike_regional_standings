### Roster Details<br />
Team Name: Sashi<br />
Roster: acoR, Beccie, Cabbi, MistR, Zyphon<br />
Global Rank: [62](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [45]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1196.4<br />
<br />
Final Rank Value (1196.4) = Starting Rank Value (1195.2) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.264[<sup>2</sup>](#table1)
- LAN Wins: 0.736[<sup>2</sup>](#table1)

The average of these factors is 0.417<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1195.2
- 400 + ( ( 0.417 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1195.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      297 | 2026-05-23 | Walczaki       | L   | 1.000      | -            | -                | -                | -         |   -11.25 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           56 |      344 | 2026-05-22 | EYEBALLERS     | L   | 1.000      | -            | -                | -                | -         |    -9.56 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           55 |      478 | 2026-05-19 | HOTU           | L   | 1.000      | -            | -                | -                | -         |    -8.35 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           54 |      583 | 2026-05-15 | Oxuji          | W   | 1.000      | 0.435        | 0.008 (0.003)    | 0.790 (0.343)    | -         |    12.10 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           53 |      662 | 2026-05-12 | TDK            | W   | 1.000      | 0.435        | 0.038 (0.016)    | 0.855 (0.372)    | -         |    15.65 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           52 |      751 | 2026-05-10 | ex-RUBY        | L   | 1.000      | -            | -                | -                | -         |   -20.32 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           51 |      797 | 2026-05-08 | Lavked         | W   | 1.000      | 0.435        | 0.019 (0.008)    | 1.000 (0.435)    | -         |    10.21 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           50 |     1450 | 2026-04-20 | SINNERS        | W   | 0.920      | 0.363        | 0.119 (0.040)    | 0.588 (0.196)    | -         |    22.33 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           49 |     1543 | 2026-04-15 | TNC            | W   | 0.887      | 0.363        | 0.022 (0.007)    | 1.000 (0.322)    | -         |     6.66 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           48 |     1600 | 2026-04-12 | fnatic         | W   | 0.867      | 0.363        | 0.016 (0.005)    | 0.656 (0.206)    | -         |    10.88 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           47 |     2170 | 2026-04-01 | Passion UA     | L   | 0.793      | -            | -                | -                | -         |    -8.58 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           46 |     2222 | 2026-03-31 | Liquid         | W   | 0.788      | 0.354        | 0.136 (0.038)    | -                | 1 (0.788) |    16.51 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           45 |     2241 | 2026-03-31 | Eternal Fire   | W   | 0.787      | 0.354        | -                | 0.775 (0.216)    | 1 (0.787) |    14.36 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           44 |     2277 | 2026-03-31 | Aurora         | L   | 0.786      | -            | -                | -                | -         |    -0.61 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           43 |     2333 | 2026-03-30 | fnatic         | W   | 0.780      | 0.354        | 0.016 (0.004)    | 0.656 (0.181)    | 1 (0.780) |    10.03 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           42 |     2425 | 2026-03-29 | HAVU           | W   | 0.772      | -            | -                | -                | 1 (0.772) |     5.77 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           41 |     2436 | 2026-03-29 | Strael Bora    | W   | 0.772      | -            | -                | -                | 1 (0.772) |     1.66 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           40 |     3169 | 2026-03-15 | Tricked        | L   | 0.680      | -            | -                | -                | -         |    -7.86 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           39 |     3180 | 2026-03-15 | EAC            | W   | 0.679      | 0.356        | -                | 0.768 (0.186)    | 1 (0.679) |    12.00 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           38 |     3204 | 2026-03-14 | MASONIC        | W   | 0.674      | -            | -                | -                | 1 (0.674) |     7.41 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           37 |     3217 | 2026-03-14 | Prestige       | W   | 0.673      | -            | -                | -                | 1 (0.673) |     1.76 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           36 |     3225 | 2026-03-14 | MASONIC        | L   | 0.672      | -            | -                | -                | -         |   -13.93 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           35 |     3392 | 2026-03-10 | Nemesis        | L   | 0.647      | -            | -                | -                | -         |    -6.54 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           34 |     3474 | 2026-03-09 | K27            | L   | 0.638      | -            | -                | -                | -         |    -4.45 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           33 |     3496 | 2026-03-08 | Johnny Speeds  | L   | 0.635      | -            | -                | -                | -         |    -7.79 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           32 |     3505 | 2026-03-08 | Evo Novo       | W   | 0.634      | -            | -                | -                | 1 (0.634) |     0.30 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           31 |     3521 | 2026-03-08 | MASONIC        | W   | 0.634      | -            | -                | -                | 1 (0.634) |     6.64 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           30 |     3531 | 2026-03-08 | 100 Thieves    | L   | 0.633      | -            | -                | -                | -         |    -4.88 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           29 |     3546 | 2026-03-08 | EAC            | L   | 0.632      | -            | -                | -                | -         |    -9.42 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           28 |     3594 | 2026-03-07 | Oxuji          | W   | 0.626      | 0.371        | -                | 0.790 (0.183)    | -         |    11.64 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           27 |     3731 | 2026-03-04 | ENCE           | W   | 0.606      | -            | -                | -                | -         |     3.55 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           26 |     3860 | 2026-03-01 | Lazer Cats     | L   | 0.587      | -            | -                | -                | -         |   -14.76 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           25 |     3888 | 2026-02-28 | Omega          | W   | 0.581      | 0.384        | 0.016 (0.004)    | -                | -         |     9.12 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           24 |     3965 | 2026-02-27 | VP.Prodigy     | W   | 0.572      | -            | -                | -                | -         |     1.22 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           23 |     4155 | 2026-02-23 | Phantom        | L   | 0.546      | -            | -                | -                | -         |    -9.45 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           22 |     4170 | 2026-02-23 | GamerLegion    | L   | 0.545      | -            | -                | -                | -         |    -0.80 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           21 |     4188 | 2026-02-22 | illwill        | L   | 0.541      | -            | -                | -                | -         |    -8.43 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           20 |     4196 | 2026-02-22 | MASONIC        | W   | 0.541      | -            | -                | -                | -         |     6.11 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           19 |     4204 | 2026-02-22 | 9INE           | L   | 0.540      | -            | -                | -                | -         |   -12.66 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           18 |     4210 | 2026-02-22 | BC.Game        | W   | 0.540      | 0.342        | 0.047 (0.009)    | -                | -         |     7.47 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           17 |     4226 | 2026-02-22 | BOSS           | W   | 0.539      | -            | -                | -                | -         |     3.04 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           16 |     4761 | 2026-02-12 | ECSTATIC       | L   | 0.473      | -            | -                | -                | -         |    -8.18 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           15 |     4771 | 2026-02-12 | KOLESIE        | L   | 0.472      | -            | -                | -                | -         |    -7.27 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           14 |     5023 | 2026-02-03 | AM             | L   | 0.414      | -            | -                | -                | -         |   -12.23 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           13 |     5093 | 2026-02-01 | DragonClaw     | L   | 0.399      | -            | -                | -                | -         |    -9.97 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           12 |     5170 | 2026-01-30 | MASONIC        | W   | 0.385      | -            | -                | -                | -         |     4.99 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           11 |     5580 | 2026-01-17 | Johnny Speeds  | L   | 0.299      | -            | -                | -                | -         |    -3.32 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           10 |     5601 | 2026-01-16 | SemperFi       | W   | 0.294      | -            | -                | -                | -         |     3.08 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            9 |     5609 | 2026-01-16 | Tricked        | L   | 0.294      | -            | -                | -                | -         |    -3.63 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            8 |     5625 | 2026-01-16 | HEROIC Academy | W   | 0.293      | -            | -                | -                | -         |     1.69 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            7 |     5631 | 2026-01-16 | megoshort      | W   | 0.292      | -            | -                | -                | -         |     1.45 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            6 |     5641 | 2026-01-16 | Hemmaplan      | W   | 0.292      | -            | -                | -                | -         |     0.11 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            5 |     6033 | 2025-12-10 | SIXSEVEN       | L   | 0.047      | -            | -                | -                | -         |    -1.42 | Beccie, Cabbi, Kristou, Lucky, MistR  |
|            4 |     6062 | 2025-12-08 | RUBY           | W   | 0.035      | -            | -                | -                | -         |     0.02 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            3 |     6111 | 2025-12-06 | Sangal         | L   | 0.020      | -            | -                | -                | -         |    -0.59 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            2 |     6146 | 2025-12-05 | Lavked         | L   | 0.012      | -            | -                | -                | -         |    -0.31 | Beccie, Cabbi, Kristou, MistR, Zyphon |
|            1 |     6180 | 2025-12-03 | FORZE Reload   | W   | 0.001      | -            | -                | -                | -         |     0.00 | Beccie, Cabbi, Kristou, MistR, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,830.91)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $1,166.00      | $1,166.00       |
| 2026-03-15 |      0.680 | $3,134.00      | $2,131.12       |
| 2026-03-11 |      0.652 | $1,000.00      | $652.42         |
| 2026-03-01 |      0.588 | $1,500.00      | $881.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
