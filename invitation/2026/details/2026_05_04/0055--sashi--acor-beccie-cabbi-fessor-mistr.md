### Roster Details<br />
Team Name: Sashi<br />
Roster: acoR, Beccie, Cabbi, Fessor, MistR<br />
Global Rank: [55](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [37]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1224.6<br />
<br />
Final Rank Value (1224.6) = Starting Rank Value (1230.3) + Head To Head Adjustments (-5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.917[<sup>2</sup>](#table1)

The average of these factors is 0.447<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1230.3
- 400 + ( ( 0.447 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1230.3


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
|           62 |      464 | 2026-04-20 | SINNERS        | W   | 1.000      | 0.143        | 0.160 (0.023)    | -                | -         |    24.02 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           61 |      557 | 2026-04-15 | TNC            | W   | 1.000      | 0.143        | 0.027 (0.004)    | 1.000 (0.143)    | -         |     7.48 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           60 |      614 | 2026-04-12 | fnatic         | W   | 1.000      | -            | -                | -                | -         |    13.18 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           59 |     1184 | 2026-04-01 | Passion UA     | L   | 0.979      | -            | -                | -                | -         |    -9.49 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           58 |     1236 | 2026-03-31 | Liquid         | W   | 0.974      | 0.354        | 0.164 (0.057)    | -                | 1 (0.974) |    19.72 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           57 |     1255 | 2026-03-31 | Eternal Fire   | W   | 0.973      | 0.354        | -                | 0.716 (0.247)    | 1 (0.973) |    17.85 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           56 |     1291 | 2026-03-31 | Aurora         | L   | 0.972      | -            | -                | -                | -         |    -0.74 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           55 |     1347 | 2026-03-30 | fnatic         | W   | 0.967      | 0.354        | 0.019 (0.007)    | 0.499 (0.171)    | 1 (0.967) |    13.29 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           54 |     1439 | 2026-03-29 | HAVU           | W   | 0.959      | 0.354        | -                | 0.499 (0.169)    | 1 (0.959) |     7.39 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           53 |     1450 | 2026-03-29 | Strael Bora    | W   | 0.958      | -            | -                | -                | 1 (0.958) |     0.63 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           52 |     2183 | 2026-03-15 | Tricked        | L   | 0.867      | -            | -                | -                | -         |    -9.71 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           51 |     2194 | 2026-03-15 | AaB            | W   | 0.866      | 0.356        | 0.014 (0.004)    | 0.847 (0.261)    | 1 (0.866) |    14.85 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           50 |     2218 | 2026-03-14 | MASONIC        | W   | 0.860      | 0.356        | -                | 0.549 (0.168)    | 1 (0.860) |     8.05 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           49 |     2231 | 2026-03-14 | Prestige       | W   | 0.859      | -            | -                | -                | 1 (0.859) |     2.81 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           48 |     2239 | 2026-03-14 | MASONIC        | L   | 0.858      | -            | -                | -                | -         |   -19.26 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           47 |     2406 | 2026-03-10 | Nemesis        | L   | 0.834      | -            | -                | -                | -         |    -7.87 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           46 |     2488 | 2026-03-09 | K27            | L   | 0.825      | -            | -                | -                | -         |    -5.72 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           45 |     2510 | 2026-03-08 | Johnny Speeds  | L   | 0.821      | -            | -                | -                | -         |   -10.95 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           44 |     2519 | 2026-03-08 | Evo Novo       | W   | 0.821      | -            | -                | -                | 1 (0.821) |     0.36 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           43 |     2535 | 2026-03-08 | MASONIC        | W   | 0.820      | 0.433        | -                | 0.549 (0.195)    | 1 (0.820) |     6.84 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           42 |     2545 | 2026-03-08 | 100 Thieves    | L   | 0.820      | -            | -                | -                | -         |    -8.68 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           41 |     2560 | 2026-03-08 | AaB            | L   | 0.819      | -            | -                | -                | -         |   -12.72 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           40 |     2608 | 2026-03-07 | Oxuji          | W   | 0.812      | 0.371        | -                | 0.514 (0.155)    | -         |     8.33 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           39 |     2745 | 2026-03-04 | ENCE           | W   | 0.793      | 0.371        | -                | 0.659 (0.194)    | -         |     4.77 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           38 |     2874 | 2026-03-01 | Lazer Cats     | L   | 0.773      | -            | -                | -                | -         |   -18.43 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           37 |     2902 | 2026-02-28 | Omega          | W   | 0.768      | 0.384        | 0.021 (0.006)    | 0.616 (0.182)    | -         |    10.00 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           36 |     2979 | 2026-02-27 | VP.Prodigy     | W   | 0.758      | -            | -                | -                | -         |     1.87 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           35 |     3169 | 2026-02-23 | Phantom        | L   | 0.733      | -            | -                | -                | -         |   -12.35 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           34 |     3184 | 2026-02-23 | GamerLegion    | L   | 0.732      | -            | -                | -                | -         |    -2.80 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           33 |     3202 | 2026-02-22 | illwill        | L   | 0.728      | -            | -                | -                | -         |    -9.11 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           32 |     3210 | 2026-02-22 | MASONIC        | W   | 0.727      | -            | -                | -                | -         |     6.71 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           31 |     3218 | 2026-02-22 | 9INE           | L   | 0.727      | -            | -                | -                | -         |    -9.53 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           30 |     3224 | 2026-02-22 | BC.Game        | W   | 0.727      | 0.342        | 0.057 (0.014)    | -                | -         |    13.40 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           29 |     3240 | 2026-02-22 | BOSS           | W   | 0.726      | -            | -                | -                | -         |     4.97 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           28 |     3775 | 2026-02-12 | ECSTATIC       | L   | 0.659      | -            | -                | -                | -         |    -8.92 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           27 |     3785 | 2026-02-12 | KOLESIE        | L   | 0.658      | -            | -                | -                | -         |   -13.54 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           26 |     4037 | 2026-02-03 | AM             | L   | 0.600      | -            | -                | -                | -         |    -8.71 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           25 |     4107 | 2026-02-01 | Oramond        | L   | 0.586      | -            | -                | -                | -         |   -15.38 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           24 |     4184 | 2026-01-30 | MASONIC        | W   | 0.572      | -            | -                | -                | -         |     6.07 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           23 |     4594 | 2026-01-17 | Johnny Speeds  | L   | 0.485      | -            | -                | -                | -         |    -5.46 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           22 |     4615 | 2026-01-16 | SemperFi       | W   | 0.481      | 0.338        | 0.019 (0.003)    | -                | -         |     5.45 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           21 |     4623 | 2026-01-16 | Tricked        | L   | 0.480      | -            | -                | -                | -         |    -6.17 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           20 |     4639 | 2026-01-16 | HEROIC Academy | W   | 0.479      | -            | -                | -                | -         |     3.53 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           19 |     4645 | 2026-01-16 | megoshort      | W   | 0.479      | -            | -                | -                | -         |     2.82 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           18 |     4655 | 2026-01-16 | Hemmaplan      | W   | 0.479      | -            | -                | -                | -         |     0.15 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           17 |     5047 | 2025-12-10 | SIXSEVEN       | L   | 0.234      | -            | -                | -                | -         |    -7.01 | Beccie, Cabbi, Kristou, Lucky, MistR  |
|           16 |     5076 | 2025-12-08 | ex-RUBY        | W   | 0.221      | 0.435        | 0.052 (0.005)    | -                | -         |     1.34 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           15 |     5125 | 2025-12-06 | Sangal         | L   | 0.207      | -            | -                | -                | -         |    -6.04 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           14 |     5160 | 2025-12-05 | Lavked         | L   | 0.198      | -            | -                | -                | -         |    -5.42 | Beccie, Cabbi, Kristou, MistR, Zyphon |
|           13 |     5194 | 2025-12-03 | FORZE Reload   | W   | 0.188      | -            | -                | -                | -         |     0.34 | Beccie, Cabbi, Kristou, MistR, Zyphon |
|           12 |     5278 | 2025-11-29 | Inner Circle   | L   | 0.161      | -            | -                | -                | -         |    -2.23 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           11 |     5302 | 2025-11-29 | Nemesis        | W   | 0.159      | 0.333        | 0.168 (0.009)    | -                | -         |     3.45 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           10 |     5441 | 2025-11-23 | AMKAL          | W   | 0.120      | -            | -                | -                | -         |     0.09 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            9 |     5471 | 2025-11-22 | Fuzos          | W   | 0.113      | -            | -                | -                | -         |     0.33 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            8 |     5865 | 2025-11-08 | BetBoom        | L   | 0.019      | -            | -                | -                | -         |    -0.14 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            7 |     5877 | 2025-11-08 | Alliance       | W   | 0.018      | -            | -                | -                | -         |     0.42 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            6 |     5892 | 2025-11-07 | BC.Game        | W   | 0.015      | -            | -                | -                | -         |     0.01 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            5 |     5912 | 2025-11-07 | BetBoom        | L   | 0.013      | -            | -                | -                | -         |    -0.10 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            4 |     5933 | 2025-11-07 | 777            | W   | 0.013      | -            | -                | -                | -         |     0.01 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            3 |     5944 | 2025-11-07 | Boys N Da HUD  | W   | 0.013      | -            | -                | -                | -         |     0.00 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            2 |     5952 | 2025-11-07 | Betclic        | W   | 0.012      | -            | -                | -                | -         |     0.20 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|            1 |     5962 | 2025-11-07 | Lilmix         | W   | 0.012      | -            | -                | -                | -         |     0.01 | Beccie, Cabbi, MistR, smooya, Zyphon  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,058.58)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.867 | $3,134.00      | $2,715.84       |
| 2026-03-11 |      0.839 | $1,000.00      | $838.99         |
| 2026-03-01 |      0.774 | $1,500.00      | $1,161.22       |
| 2025-11-23 |      0.120 | $2,610.00      | $314.38         |
| 2025-11-08 |      0.022 | $1,305.00      | $28.16          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
