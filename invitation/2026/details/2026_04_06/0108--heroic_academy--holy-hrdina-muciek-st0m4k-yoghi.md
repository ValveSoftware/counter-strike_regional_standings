### Roster Details<br />
Team Name: HEROIC Academy<br />
Roster: HOLY, Hrdina, Muciek, St0m4k, Yoghi<br />
Global Rank: [108](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [73]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1027.8<br />
<br />
Final Rank Value (1027.8) = Starting Rank Value (1079.1) + Head To Head Adjustments (-51.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.593[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1079.1
- 400 + ( ( 0.347 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1079.1


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
|           30 |      453 | 2026-03-28 | EYEBALLERS         | L   | 1.000      | -            | -                | -                | -         |    -4.03 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           29 |      493 | 2026-03-27 | M80                | W   | 1.000      | 0.396        | 0.087 (0.035)    | 0.582 (0.231)    | 1 (1.000) |    28.15 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           28 |      568 | 2026-03-25 | Västerås           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.36 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           27 |      589 | 2026-03-25 | BC.Game            | W   | 1.000      | 0.396        | 0.077 (0.031)    | 0.310 (0.123)    | 1 (1.000) |    24.60 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           26 |      590 | 2026-03-25 | Betclic            | L   | 1.000      | -            | -                | -                | -         |    -4.25 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           25 |      949 | 2026-03-18 | The Last Resort    | L   | 1.000      | -            | -                | -                | -         |   -17.56 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           24 |     1043 | 2026-03-16 | ex-Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -17.60 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           23 |     1086 | 2026-03-15 | The Last Resort    | L   | 1.000      | -            | -                | -                | -         |   -21.25 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           22 |     1184 | 2026-03-13 | KOLESIE            | L   | 1.000      | -            | -                | -                | -         |    -9.54 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           21 |     1282 | 2026-03-11 | EC BANGA           | W   | 1.000      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |     7.51 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           20 |     1317 | 2026-03-10 | ex-Zero Tenacity   | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.547 (0.210)    | 0 (0.000) |    11.32 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           19 |     1321 | 2026-03-10 | QWENTRY            | L   | 1.000      | -            | -                | -                | -         |   -11.52 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           18 |     1381 | 2026-03-09 | EC BANGA           | W   | 1.000      | 0.384        | 0.004 (0.001)    | -                | -         |     7.70 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           17 |     1427 | 2026-03-08 | CSDIILIT           | W   | 1.000      | 0.384        | -                | 0.654 (0.251)    | -         |     6.97 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           16 |     1529 | 2026-03-06 | ex-Fingers Crossed | L   | 0.994      | -            | -                | -                | -         |   -19.82 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           15 |     1533 | 2026-03-06 | CSDIILIT           | L   | 0.994      | -            | -                | -                | -         |   -24.30 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           14 |     1610 | 2026-03-05 | Famalicão          | W   | 0.985      | 0.384        | 0.002 (0.001)    | 0.182 (0.069)    | -         |     9.21 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           13 |     1628 | 2026-03-04 | WW                 | W   | 0.981      | 0.384        | 0.034 (0.013)    | 0.864 (0.326)    | -         |    20.35 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           12 |     1655 | 2026-03-04 | QUAZAR             | L   | 0.979      | -            | -                | -                | -         |   -28.34 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           11 |     1724 | 2026-03-02 | NOVAQ              | L   | 0.968      | -            | -                | -                | -         |   -15.98 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           10 |     3499 | 2026-01-17 | STATE              | L   | 0.672      | -            | -                | -                | -         |   -13.28 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            9 |     3528 | 2026-01-16 | megoshort          | W   | 0.667      | 0.338        | 0.004 (0.001)    | 0.335 (0.076)    | 1 (0.667) |     8.12 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            8 |     3533 | 2026-01-16 | SemperFi           | W   | 0.667      | 0.338        | 0.023 (0.005)    | 0.443 (0.100)    | 1 (0.667) |    14.20 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            7 |     3542 | 2026-01-16 | Sashi              | L   | 0.666      | -            | -                | -                | -         |    -4.54 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            6 |     3550 | 2026-01-16 | Hemmaplan          | W   | 0.666      | -            | -                | -                | 1 (0.666) |     0.46 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            5 |     3555 | 2026-01-16 | Tricked            | L   | 0.666      | -            | -                | -                | -         |    -3.84 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            4 |     3849 | 2025-12-18 | The Huns           | L   | 0.474      | -            | -                | -                | -         |    -5.18 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            3 |     3858 | 2025-12-18 | ESC                | L   | 0.472      | -            | -                | -                | -         |    -6.57 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            2 |     3873 | 2025-12-17 | The Huns           | W   | 0.466      | 0.339        | 0.011 (0.002)    | 0.487 (0.077)    | 1 (0.466) |     9.84 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            1 |     3884 | 2025-12-17 | HYPERSPIRIT        | W   | 0.465      | 0.339        | -                | 0.479 (0.075)    | 1 (0.465) |     4.48 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-28 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
