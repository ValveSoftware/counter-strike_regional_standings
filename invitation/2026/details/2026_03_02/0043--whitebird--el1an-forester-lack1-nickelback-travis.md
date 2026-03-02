### Roster Details<br />
Team Name: WHITEBIRD<br />
Roster: El1an, Forester, Lack1, NickelBack, TRAVIS<br />
Global Rank: [43](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [32]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1220.4<br />
<br />
Final Rank Value (1220.4) = Starting Rank Value (1171.1) + Head To Head Adjustments (49.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.493[<sup>1</sup>](#table2)
- Bounty Collected: 0.414[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 0.378[<sup>2</sup>](#table1)

The average of these factors is 0.408<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1171.1
- 400 + ( ( 0.408 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1171.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       64 | 2026-02-27 | TDK              | W   | 1.000      | 0.435        | 0.068 (0.029)    | 0.801 (0.348)    | 0 (0.000) |    13.34 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |       74 | 2026-02-27 | SINNERS          | W   | 1.000      | 0.435        | 0.248 (0.108)    | 0.891 (0.387)    | 0 (0.000) |    22.12 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |      136 | 2026-02-26 | Alliance         | W   | 1.000      | 0.435        | 0.124 (0.054)    | 0.943 (0.410)    | 0 (0.000) |    21.63 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |      208 | 2026-02-24 | magic            | W   | 1.000      | 0.435        | 0.136 (0.059)    | 0.869 (0.378)    | 0 (0.000) |    18.18 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |      269 | 2026-02-22 | los kogutos      | W   | 1.000      | 0.435        | 0.037 (0.016)    | 1.000 (0.435)    | 0 (0.000) |    14.52 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |      420 | 2026-02-19 | Omega            | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.650 (0.282)    | 0 (0.000) |    12.56 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |      437 | 2026-02-19 | los kogutos      | L   | 1.000      | -            | -                | -                | -         |   -16.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |      480 | 2026-02-18 | HAVU             | W   | 1.000      | -            | -                | -                | -         |     9.92 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |      533 | 2026-02-17 | ex-Zero Tenacity | W   | 1.000      | -            | -                | -                | -         |     2.95 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |      553 | 2026-02-17 | Inner Circle     | W   | 1.000      | 0.435        | 0.129 (0.056)    | -                | -         |    14.86 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |      598 | 2026-02-16 | Fuzos            | W   | 1.000      | -            | -                | -                | -         |     7.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |      608 | 2026-02-16 | ARCRED           | L   | 1.000      | -            | -                | -                | -         |   -17.16 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |      633 | 2026-02-15 | Lazer Cats       | W   | 1.000      | -            | -                | -                | -         |     7.66 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |      643 | 2026-02-15 | kONO             | L   | 1.000      | -            | -                | -                | -         |   -26.14 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |      664 | 2026-02-15 | MASONIC          | W   | 1.000      | -            | -                | -                | -         |     5.51 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |      711 | 2026-02-14 | Oxuji            | L   | 1.000      | -            | -                | -                | -         |   -24.43 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |      727 | 2026-02-14 | K27              | L   | 1.000      | -            | -                | -                | -         |    -7.79 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |      748 | 2026-02-13 | UNiTY            | L   | 1.000      | -            | -                | -                | -         |   -24.01 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |      809 | 2026-02-12 | Leo              | W   | 1.000      | -            | -                | -                | -         |     5.05 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |      876 | 2026-02-10 | GenOne           | W   | 1.000      | 0.435        | 0.030 (0.013)    | 0.692 (0.301)    | -         |    10.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |      911 | 2026-02-09 | Phantom          | L   | 1.000      | -            | -                | -                | -         |   -17.70 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |      959 | 2026-02-07 | Rebels           | W   | 1.000      | -            | -                | -                | -         |    11.27 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     1018 | 2026-02-05 | los kogutos      | W   | 1.000      | 0.384        | 0.037 (0.014)    | 1.000 (0.384)    | -         |    10.94 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     1039 | 2026-02-04 | Fuzos            | W   | 1.000      | -            | -                | -                | -         |     6.76 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     1080 | 2026-02-03 | Nuclear TigeRES  | L   | 1.000      | -            | -                | -                | -         |   -10.55 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     1104 | 2026-02-02 | RUSTEC           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.00 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     1117 | 2026-02-02 | ARCRED           | L   | 1.000      | -            | -                | -                | -         |   -20.26 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     1154 | 2026-01-31 | FORZE Reload     | W   | 1.000      | 0.333        | -                | 0.799 (0.266)    | 1 (1.000) |     7.32 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     1172 | 2026-01-31 | K27              | L   | 1.000      | -            | -                | -                | -         |    -8.11 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     1179 | 2026-01-31 | FORZE Reload     | W   | 0.999      | 0.333        | -                | 0.799 (0.266)    | 1 (0.999) |     7.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     1884 | 2025-12-21 | K27              | L   | 0.726      | -            | -                | -                | -         |    -5.42 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            4 |     1893 | 2025-12-21 | Oxuji            | W   | 0.725      | -            | -                | -                | 1 (0.725) |     5.54 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            3 |     2062 | 2025-12-09 | K27              | L   | 0.647      | -            | -                | -                | -         |    -4.93 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            2 |     2068 | 2025-12-09 | ALLINNERS        | W   | 0.646      | -            | -                | -                | -         |     4.12 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            1 |     2088 | 2025-12-08 | Nemiga           | W   | 0.639      | 0.377        | 0.091 (0.022)    | -                | -         |    11.35 | El1an, Forester, Lack1, NickelBack, sugaR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,180.20)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-27 |      1.000 | $22,000.00     | $22,000.00      |
| 2026-02-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-12-21 |      0.726 | $9,887.00      | $7,180.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
