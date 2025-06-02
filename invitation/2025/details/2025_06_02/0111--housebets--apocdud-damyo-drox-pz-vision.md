### Roster Details<br />
Team Name: Housebets<br />
Roster: apocdud, damyo, Drox, pz, vision<br />
Global Rank: [111](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  758.4<br />
<br />
Final Rank Value (758.4) = Starting Rank Value (761.7) + Head To Head Adjustments (-3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.150[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 761.7
- 400 + ( ( 0.197 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 761.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      574 | 2025-05-03 | Mindfreak            | L   | 1.000      | -            | -                | -                | -         |   -16.69 | apocdud, damyo, Drox, pz, vision       |
|           31 |      592 | 2025-05-02 | Rooster              | L   | 0.996      | -            | -                | -                | -         |   -15.31 | apocdud, damyo, Drox, pz, vision       |
|           30 |      615 | 2025-05-01 | Mindfreak            | W   | 0.989      | 0.333        | 0.009 (0.003)    | 0.211 (0.070)    | 0 (0.000) |    13.25 | apocdud, damyo, Drox, pz, vision       |
|           29 |     1068 | 2025-04-09 | MANTRA               | W   | 0.843      | 0.333        | 0.002 (0.001)    | 0.221 (0.062)    | 0 (0.000) |     9.43 | apocdud, damyo, Drox, pz, vision       |
|           28 |     1074 | 2025-04-09 | MANTRA               | L   | 0.842      | -            | -                | -                | -         |   -17.53 | apocdud, damyo, Drox, pz, yourwombat   |
|           27 |     1301 | 2025-04-02 | Only One Word        | W   | 0.796      | 0.333        | 0.002 (0.001)    | 0.225 (0.060)    | 0 (0.000) |    10.35 | apocdud, damyo, Drox, pz, yourwombat   |
|           26 |     1306 | 2025-04-02 | Only One Word        | W   | 0.796      | 0.333        | 0.002 (0.001)    | 0.225 (0.060)    | 0 (0.000) |    11.09 | apocdud, damyo, Drox, pz, yourwombat   |
|           25 |     1464 | 2025-03-28 | ex-TALON             | L   | 0.768      | -            | -                | -                | -         |    -9.99 | alecc, apocdud, damyo, gump, pz        |
|           24 |     1521 | 2025-03-28 | Rooster              | L   | 0.763      | -            | -                | -                | -         |   -11.56 | alecc, apocdud, damyo, gump, pz        |
|           23 |     1601 | 2025-03-27 | MANTRA               | W   | 0.755      | -            | -                | -                | 0 (0.000) |     7.48 | alecc, apocdud, damyo, pz, yourwombat  |
|           22 |     1649 | 2025-03-26 | KZG                  | W   | 0.750      | 0.333        | 0.001 (0.000)    | 0.124 (0.031)    | 0 (0.000) |     6.57 | apocdud, damyo, pz, vision, yourwombat |
|           21 |     1651 | 2025-03-26 | KZG                  | W   | 0.749      | 0.333        | 0.001 (0.000)    | 0.124 (0.031)    | 0 (0.000) |     6.93 | apocdud, damyo, pz, vision, yourwombat |
|           20 |     1730 | 2025-03-22 | SemperFi             | L   | 0.727      | -            | -                | -                | -         |    -8.15 | apocdud, BRACE, damyo, pz, yourwombat  |
|           19 |     1760 | 2025-03-21 | Rooster              | L   | 0.721      | -            | -                | -                | -         |   -10.83 | apocdud, BRACE, damyo, pz, yourwombat  |
|           18 |     1776 | 2025-03-21 | ex-TALON             | W   | 0.715      | 0.345        | 0.005 (0.001)    | 0.221 (0.054)    | 1 (0.715) |    12.53 | apocdud, BRACE, damyo, pz, yourwombat  |
|           17 |     1777 | 2025-03-20 | Mindfreak            | W   | 0.714      | 0.345        | 0.009 (0.002)    | 0.211 (0.052)    | 1 (0.714) |     9.02 | apocdud, BRACE, damyo, pz, yourwombat  |
|           16 |     1911 | 2025-03-17 | Rooster              | W   | 0.689      | 0.333        | 0.010 (0.002)    | 0.317 (0.073)    | 0 (0.000) |    12.01 | apocdud, BRACE, damyo, pz, yourwombat  |
|           15 |     1912 | 2025-03-17 | Rooster              | L   | 0.689      | -            | -                | -                | -         |    -9.84 | apocdud, BRACE, damyo, pz, yourwombat  |
|           14 |     2397 | 2025-03-03 | Lynn Vision          | L   | 0.596      | -            | -                | -                | -         |    -2.01 | apocdud, BRACE, damyo, pz, yourwombat  |
|           13 |     2412 | 2025-03-02 | HEROIC               | L   | 0.590      | -            | -                | -                | -         |    -0.22 | apocdud, BRACE, damyo, pz, yourwombat  |
|           12 |     2435 | 2025-03-01 | paiN                 | L   | 0.585      | -            | -                | -                | -         |    -0.83 | apocdud, BRACE, damyo, pz, yourwombat  |
|           11 |     2740 | 2025-02-19 | Justice For Tomorrow | W   | 0.516      | -            | -                | -                | -         |     4.94 | apocdud, BRACE, damyo, pz, yourwombat  |
|           10 |     2743 | 2025-02-19 | Justice For Tomorrow | W   | 0.516      | -            | -                | -                | -         |     5.13 | apocdud, BRACE, damyo, pz, yourwombat  |
|            9 |     2774 | 2025-02-18 | Mindfreak            | W   | 0.509      | 0.333        | 0.009 (0.001)    | 0.211 (0.036)    | -         |     7.42 | apocdud, BRACE, damyo, pz, yourwombat  |
|            8 |     2775 | 2025-02-18 | Mindfreak            | L   | 0.509      | -            | -                | -                | -         |    -8.83 | apocdud, BRACE, damyo, pz, yourwombat  |
|            7 |     2821 | 2025-02-15 | KZG                  | W   | 0.494      | -            | -                | -                | -         |     4.96 | apocdud, BRACE, damyo, pz, yourwombat  |
|            6 |     2856 | 2025-02-14 | Vantage              | L   | 0.488      | -            | -                | -                | -         |   -12.26 | apocdud, BRACE, damyo, pz, yourwombat  |
|            5 |     2861 | 2025-02-14 | BBBMBCBS             | W   | 0.487      | -            | -                | -                | -         |     1.80 | apocdud, BRACE, damyo, pz, yourwombat  |
|            4 |     3024 | 2025-02-08 | DogEvil              | L   | 0.448      | -            | -                | -                | -         |    -7.87 | apocdud, BRACE, damyo, pz, SkulL       |
|            3 |     3089 | 2025-02-07 | JiJieHao             | L   | 0.441      | -            | -                | -                | -         |    -1.50 | apocdud, BRACE, damyo, pz, yourwombat  |
|            2 |     3287 | 2025-01-28 | Underground          | W   | 0.370      | -            | -                | -                | -         |     3.56 | apocdud, damyo, Falcon, pz, yourwombat |
|            1 |     3291 | 2025-01-28 | Underground          | W   | 0.369      | -            | -                | -                | -         |     3.65 | apocdud, damyo, Falcon, pz, yourwombat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,152.03)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $1,400.00      | $1,400.00       |
| 2025-03-23 |      0.729 | $1,254.00      | $914.51         |
| 2025-03-05 |      0.613 | $3,000.00      | $1,837.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
