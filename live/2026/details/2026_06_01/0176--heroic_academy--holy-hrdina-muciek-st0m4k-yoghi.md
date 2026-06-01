### Roster Details<br />
Team Name: HEROIC Academy<br />
Roster: HOLY, Hrdina, Muciek, St0m4k, Yoghi<br />
Global Rank: [176](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  805.6<br />
<br />
Final Rank Value (805.6) = Starting Rank Value (925.2) + Head To Head Adjustments (-119.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.339[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 925.2
- 400 + ( ( 0.276 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 925.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |      222 | 2026-05-25 | Rune Eaters        | L   | 1.000      | -            | -                | -                | -         |   -11.67 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           53 |      369 | 2026-05-22 | Lavked             | L   | 1.000      | -            | -                | -                | -         |    -5.14 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           52 |      434 | 2026-05-20 | ALGO               | W   | 1.000      | 0.435        | 0.008 (0.004)    | 0.352 (0.153)    | 0 (0.000) |    17.15 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           51 |      475 | 2026-05-19 | PsychoFace         | L   | 1.000      | -            | -                | -                | -         |    -6.16 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           50 |      864 | 2026-05-04 | The Last Resort    | L   | 1.000      | -            | -                | -                | -         |   -10.52 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           49 |      904 | 2026-05-03 | SPARTA             | L   | 1.000      | -            | -                | -                | -         |    -3.69 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           48 |      983 | 2026-05-01 | ASTRAL             | L   | 0.994      | -            | -                | -                | -         |    -7.48 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           47 |      993 | 2026-05-01 | Bebop              | L   | 0.993      | -            | -                | -                | -         |   -23.90 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           46 |     1044 | 2026-04-30 | Oxuji              | L   | 0.986      | -            | -                | -                | -         |    -5.50 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           45 |     1126 | 2026-04-28 | HYPERSPIRIT        | W   | 0.973      | 0.435        | 0.005 (0.002)    | 0.550 (0.233)    | 0 (0.000) |    20.03 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           44 |     1132 | 2026-04-28 | Bebop              | L   | 0.972      | -            | -                | -                | -         |   -24.39 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           43 |     1167 | 2026-04-27 | Just Players       | L   | 0.966      | -            | -                | -                | -         |   -15.06 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           42 |     1456 | 2026-04-20 | aimclub            | L   | 0.919      | -            | -                | -                | -         |   -18.71 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           41 |     1502 | 2026-04-18 | The Last Resort    | L   | 0.906      | -            | -                | -                | -         |   -14.22 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           40 |     1587 | 2026-04-13 | Phantom            | L   | 0.871      | -            | -                | -                | -         |    -6.65 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           39 |     1659 | 2026-04-10 | GenOne             | W   | 0.852      | 0.371        | 0.011 (0.003)    | 0.916 (0.289)    | -         |    11.80 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           38 |     1832 | 2026-04-05 | Imperial Academy   | W   | 0.819      | -            | -                | -                | -         |     3.11 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           37 |     1875 | 2026-04-04 | MANA               | L   | 0.814      | -            | -                | -                | -         |   -11.32 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           36 |     1900 | 2026-04-04 | Hashiras           | L   | 0.813      | -            | -                | -                | -         |   -16.95 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           35 |     1959 | 2026-04-03 | NEW VISION         | W   | 0.808      | 0.384        | 0.009 (0.003)    | 0.395 (0.123)    | -         |     8.94 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           34 |     2064 | 2026-04-02 | Clutchain fe       | W   | 0.800      | 0.384        | 0.012 (0.004)    | -                | -         |     4.36 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           33 |     2140 | 2026-04-01 | TNC                | L   | 0.794      | -            | -                | -                | -         |   -10.77 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           32 |     2266 | 2026-03-31 | Persona Grata      | W   | 0.786      | 0.371        | -                | 0.348 (0.101)    | -         |     8.94 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           31 |     2328 | 2026-03-30 | Lilmix             | W   | 0.781      | -            | -                | -                | -         |     6.56 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           30 |     2508 | 2026-03-28 | EYEBALLERS         | L   | 0.766      | -            | -                | -                | -         |    -1.65 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           29 |     2553 | 2026-03-27 | M80                | W   | 0.761      | 0.396        | 0.068 (0.020)    | 0.543 (0.164)    | 1 (0.761) |    21.93 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           28 |     2639 | 2026-03-25 | Västerås           | W   | 0.747      | -            | -                | -                | 1 (0.747) |     3.41 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           27 |     2661 | 2026-03-25 | BC.Game            | W   | 0.746      | 0.396        | 0.047 (0.014)    | -                | 1 (0.746) |    16.88 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           26 |     2662 | 2026-03-25 | Betclic            | L   | 0.746      | -            | -                | -                | -         |    -2.57 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           25 |     3031 | 2026-03-18 | The Last Resort    | L   | 0.700      | -            | -                | -                | -         |   -10.78 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           24 |     3125 | 2026-03-16 | ex-Zero Tenacity   | L   | 0.687      | -            | -                | -                | -         |   -13.19 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           23 |     3168 | 2026-03-15 | The Last Resort    | L   | 0.680      | -            | -                | -                | -         |   -12.16 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           22 |     3266 | 2026-03-13 | KOLESIE            | L   | 0.666      | -            | -                | -                | -         |    -4.52 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           21 |     3364 | 2026-03-11 | EC BANGA           | W   | 0.652      | -            | -                | -                | -         |     5.17 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           20 |     3399 | 2026-03-10 | ex-Zero Tenacity   | W   | 0.646      | 0.384        | -                | 0.815 (0.202)    | -         |     7.24 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           19 |     3403 | 2026-03-10 | PsychoFace         | L   | 0.646      | -            | -                | -                | -         |    -5.27 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           18 |     3463 | 2026-03-09 | EC BANGA           | W   | 0.639      | -            | -                | -                | -         |     5.23 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           17 |     3509 | 2026-03-08 | cirahvi            | W   | 0.634      | 0.384        | -                | 0.560 (0.137)    | -         |     6.82 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           16 |     3611 | 2026-03-06 | ex-Fingers Crossed | L   | 0.621      | -            | -                | -                | -         |   -15.92 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           15 |     3615 | 2026-03-06 | cirahvi            | L   | 0.620      | -            | -                | -                | -         |   -12.98 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           14 |     3692 | 2026-03-05 | Famalicão          | W   | 0.612      | 0.384        | -                | 0.277 (0.065)    | -         |     6.12 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           13 |     3710 | 2026-03-04 | WW                 | W   | 0.608      | 0.384        | 0.025 (0.006)    | 0.689 (0.161)    | -         |    14.82 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           12 |     3737 | 2026-03-04 | QUAZAR             | L   | 0.605      | -            | -                | -                | -         |   -16.27 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           11 |     3806 | 2026-03-02 | NOVAQ              | L   | 0.594      | -            | -                | -                | -         |    -9.64 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           10 |     5582 | 2026-01-17 | STATE              | L   | 0.298      | -            | -                | -                | -         |    -2.02 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            9 |     5611 | 2026-01-16 | megoshort          | W   | 0.294      | -            | -                | -                | 1 (0.294) |     4.10 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            8 |     5616 | 2026-01-16 | SemperFi           | W   | 0.293      | 0.338        | 0.011 (0.001)    | -                | 1 (0.293) |     6.43 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            7 |     5625 | 2026-01-16 | Sashi              | L   | 0.293      | -            | -                | -                | -         |    -1.69 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            6 |     5633 | 2026-01-16 | Hemmaplan          | W   | 0.292      | -            | -                | -                | 1 (0.292) |     0.46 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            5 |     5638 | 2026-01-16 | Tricked            | L   | 0.292      | -            | -                | -                | -         |    -1.14 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            4 |     5932 | 2025-12-18 | The Huns           | L   | 0.101      | -            | -                | -                | -         |    -0.58 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            3 |     5941 | 2025-12-18 | Walczaki           | L   | 0.099      | -            | -                | -                | -         |    -0.62 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            2 |     5956 | 2025-12-17 | The Huns           | W   | 0.093      | 0.339        | 0.045 (0.001)    | -                | 1 (0.093) |     2.40 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            1 |     5967 | 2025-12-17 | HYPERSPIRIT        | W   | 0.092      | -            | -                | -                | 1 (0.092) |     1.60 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,301.99)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-28 |      0.767 | $3,000.00      | $2,301.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
