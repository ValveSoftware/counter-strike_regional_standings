### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [5](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1804.7<br />
<br />
Final Rank Value (1804.7) = Starting Rank Value (1784.8) + Head To Head Adjustments (20.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.975[<sup>1</sup>](#table2)
- Bounty Collected: 0.594[<sup>2</sup>](#table1)
- Opponent Network: 0.303[<sup>2</sup>](#table1)
- LAN Wins: 0.916[<sup>2</sup>](#table1)

The average of these factors is 0.697<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1784.8
- 400 + ( ( 0.697 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1784.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |        1 | 2025-01-19 | Virtus.pro    | W   | 1.000      | -            | -                | -                | -         |     1.70 | apEX, flameZ, mezii, ropz, ZywOo  |
|           31 |       16 | 2025-01-15 | Metizport     | W   | 1.000      | -            | -                | -                | -         |     0.94 | apEX, flameZ, mezii, ropz, ZywOo  |
|           30 |      246 | 2024-12-13 | FaZe          | L   | 0.951      | -            | -                | -                | -         |   -13.78 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      377 | 2024-12-05 | MIBR          | W   | 0.902      | 1.000        | 0.210 (0.189)    | 0.610 (0.551)    | 1 (0.902) |     3.15 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      403 | 2024-12-05 | FURIA         | W   | 0.896      | 1.000        | 0.199 (0.178)    | 0.613 (0.550)    | 1 (0.896) |     6.52 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      413 | 2024-12-04 | GamerLegion   | W   | 0.895      | 1.000        | 0.157 (0.140)    | 0.460 (0.412)    | 1 (0.895) |     2.63 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |      732 | 2024-11-18 | FaZe          | W   | 0.783      | -            | -                | -                | 1 (0.783) |    14.13 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |      754 | 2024-11-17 | BetBoom       | W   | 0.777      | -            | -                | -                | 1 (0.777) |     0.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |      764 | 2024-11-16 | GamerLegion   | W   | 0.775      | -            | -                | -                | 1 (0.775) |     2.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1121 | 2024-11-02 | G2            | L   | 0.677      | -            | -                | -                | -         |    -5.64 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           22 |     1143 | 2024-11-01 | MOUZ          | W   | 0.670      | 1.000        | 0.673 (0.451)    | 0.481 (0.322)    | 1 (0.670) |    10.19 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           21 |     1157 | 2024-10-31 | Liquid        | W   | 0.664      | 1.000        | 0.381 (0.253)    | 0.514 (0.342)    | 1 (0.664) |     5.93 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           20 |     1177 | 2024-10-30 | Spirit        | L   | 0.658      | -            | -                | -                | -         |    -5.35 | apEX, flameZ, JACKZ, Spinx, ZywOo |
|           19 |     1525 | 2024-10-11 | MOUZ          | L   | 0.533      | -            | -                | -                | -         |    -8.54 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1575 | 2024-10-09 | Falcons       | L   | 0.519      | -            | -                | -                | -         |    -9.17 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1618 | 2024-10-08 | The MongolZ   | W   | 0.512      | 0.624        | 1.000 (0.319)    | 0.646 (0.206)    | 1 (0.512) |     9.33 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     1639 | 2024-10-07 | 9z            | W   | 0.505      | -            | -                | -                | 1 (0.505) |     0.18 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     1939 | 2024-09-28 | G2            | L   | 0.445      | -            | -                | -                | -         |    -3.64 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2015 | 2024-09-26 | Liquid        | W   | 0.433      | 0.729        | 0.381 (0.120)    | 0.514 (0.162)    | -         |     3.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2085 | 2024-09-25 | Astralis      | W   | 0.425      | -            | -                | -                | -         |     0.76 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2275 | 2024-09-19 | Eternal Fire  | L   | 0.386      | -            | -                | -                | -         |   -11.06 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2386 | 2024-09-15 | Liquid        | W   | 0.359      | 0.889        | 0.381 (0.122)    | 0.514 (0.164)    | -         |     3.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     2495 | 2024-09-12 | FURIA         | W   | 0.338      | 0.889        | -                | 0.613 (0.184)    | -         |     2.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     2535 | 2024-09-11 | ATOX          | W   | 0.331      | 0.889        | -                | 0.460 (0.135)    | -         |     0.36 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3351 | 2024-08-18 | Natus Vincere | W   | 0.173      | 1.000        | 1.000 (0.173)    | -                | -         |     2.36 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3386 | 2024-08-17 | SAW           | W   | 0.165      | -            | -                | -                | -         |     0.39 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3485 | 2024-08-13 | MOUZ          | W   | 0.139      | -            | -                | -                | -         |     2.36 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3539 | 2024-08-12 | FaZe          | W   | 0.132      | 1.000        | 1.000 (0.132)    | -                | -         |     2.82 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     3571 | 2024-08-11 | FURIA         | W   | 0.124      | -            | -                | -                | -         |     1.01 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     3823 | 2024-08-03 | Astralis      | W   | 0.072      | -            | -                | -                | -         |     0.14 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     3989 | 2024-07-30 | Astralis      | W   | 0.045      | -            | -                | -                | -         |     0.09 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4022 | 2024-07-29 | GamerLegion   | W   | 0.039      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($208,897.71)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.94) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.964 | $45,000.00     | $43,372.63      |
| 2024-11-03 |      0.684 | $85,000.00     | $58,116.28      |
| 2024-10-13 |      0.546 | $10,000.00     | $5,462.48       |
| 2024-09-29 |      0.452 | $40,000.00     | $18,085.78      |
| 2024-09-22 |      0.406 | $32,000.00     | $12,997.11      |
| 2024-08-18 |      0.173 | $400,000.00    | $69,101.20      |
| 2024-08-04 |      0.078 | $22,500.00     | $1,762.23       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
