### Roster Details<br />
Team Name: Enterprise<br />
Roster: bajmi, Demho, ex1st, fr3nd, hotd0g <br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [81](../standings_global.md)<br />
Regional Rank: [57]( ../standings_europe.md)<br />
Final Rank Value:  960.1<br />
<br />
Final Rank Value (960.1) = Starting Rank Value (996.1) + Head To Head Adjustments (-36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.442[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 996.1
- 400 + ( ( 0.278 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 996.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       10 | 2024-07-17 | FORZE Reload      | L   | 1.000      | -            | -                | -                | -         |   -28.60 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           55 |      115 | 2024-07-15 | TNL               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.02 | bajmi, Demho, ex1st, fr3nd, hotd0g  |
|           54 |      152 | 2024-07-12 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -12.67 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           53 |      233 | 2024-07-08 | Revenant          | W   | 1.000      | 0.371        | 0.037 (0.014)    | -                | 0 (0.000) |    10.43 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           52 |      329 | 2024-06-16 | 3DMAX             | L   | 0.992      | -            | -                | -                | -         |    -5.69 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           51 |      416 | 2024-06-13 | PERA              | L   | 0.975      | -            | -                | -                | -         |   -13.28 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           50 |      433 | 2024-06-13 | Illuminar         | W   | 0.973      | 0.450        | -                | 0.354 (0.155)    | 0 (0.000) |    12.02 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           49 |      457 | 2024-06-12 | Sampi             | W   | 0.967      | 0.379        | 0.045 (0.016)    | 0.975 (0.357)    | 0 (0.000) |    11.58 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           48 |      500 | 2024-06-10 | SINNERS           | W   | 0.953      | 0.379        | 0.058 (0.021)    | 0.744 (0.269)    | 0 (0.000) |    17.20 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           47 |      514 | 2024-06-10 | Gaimin Gladiators | W   | 0.952      | 0.450        | 0.067 (0.029)    | 0.488 (0.209)    | 0 (0.000) |    19.26 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           46 |      556 | 2024-06-09 | ECLOT             | L   | 0.946      | -            | -                | -                | -         |    -6.69 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           45 |      600 | 2024-06-08 | Nexus             | W   | 0.941      | 0.450        | -                | 0.432 (0.183)    | 0 (0.000) |     8.06 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           44 |      680 | 2024-06-07 | Entropiq          | W   | 0.933      | -            | -                | -                | 0 (0.000) |     1.32 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           43 |      729 | 2024-06-06 | Illuminar         | L   | 0.927      | -            | -                | -                | -         |   -19.53 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           42 |      780 | 2024-06-05 | Verdant           | L   | 0.921      | -            | -                | -                | -         |   -19.15 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           41 |      792 | 2024-06-05 | Serbia            | L   | 0.920      | -            | -                | -                | -         |   -19.46 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           40 |      852 | 2024-06-04 | Johnny Speeds     | W   | 0.912      | 0.371        | 0.162 (0.055)    | 0.852 (0.288)    | 0 (0.000) |    24.93 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           39 |      875 | 2024-06-03 | UNiTY             | W   | 0.905      | 0.371        | 0.039 (0.013)    | -                | -         |    16.61 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           38 |      918 | 2024-06-01 | ARCRED            | L   | 0.894      | -            | -                | -                | -         |   -15.61 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           37 |      932 | 2024-06-01 | Permitta          | W   | 0.892      | 0.371        | -                | 0.794 (0.262)    | -         |    12.65 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           36 |      973 | 2024-05-30 | RUSTEC            | W   | 0.881      | -            | -                | -                | -         |     1.12 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           35 |      987 | 2024-05-30 | brazylijski luz   | L   | 0.878      | -            | -                | -                | -         |   -16.88 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           34 |      997 | 2024-05-29 | FLuffy Gangsters  | W   | 0.874      | -            | -                | -                | -         |     2.63 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           33 |     1025 | 2024-05-28 | Sampi             | W   | 0.867      | 0.379        | 0.045 (0.015)    | 0.975 (0.320)    | -         |    13.38 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           32 |     1106 | 2024-05-24 | Illuminar         | W   | 0.839      | -            | -                | -                | -         |    10.37 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           31 |     1153 | 2024-05-22 | Entropiq          | W   | 0.827      | -            | -                | -                | -         |     1.12 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           30 |     1241 | 2024-05-20 | ECSTATIC          | W   | 0.812      | -            | -                | -                | -         |     1.10 | bajmi, Demho, ex1st, fr3nd, Sobol   |
|           29 |     1570 | 2024-05-10 | BetBoom           | L   | 0.746      | -            | -                | -                | -         |    -0.97 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           28 |     1637 | 2024-05-07 | Permitta          | W   | 0.725      | 0.435        | -                | 0.794 (0.250)    | -         |    11.58 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           27 |     1651 | 2024-05-06 | B8                | L   | 0.719      | -            | -                | -                | -         |    -6.76 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           26 |     1679 | 2024-05-04 | MOUZ NXT          | W   | 0.708      | 0.435        | 0.150 (0.046)    | 1.000 (0.308)    | -         |    15.42 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           25 |     1738 | 2024-05-01 | ENCE Academy      | W   | 0.688      | -            | -                | -                | -         |     6.25 | bajmi, Demho, ex1st, fr3nd, kadziu  |
|           24 |     1767 | 2024-04-30 | EYEBALLERS        | L   | 0.681      | -            | -                | -                | -         |   -10.92 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           23 |     1804 | 2024-04-29 | Nexus             | L   | 0.672      | -            | -                | -                | -         |   -12.88 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           22 |     1845 | 2024-04-27 | Permitta          | L   | 0.659      | -            | -                | -                | -         |    -9.71 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           21 |     1864 | 2024-04-26 | Insilio           | L   | 0.653      | -            | -                | -                | -         |    -9.71 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           20 |     1937 | 2024-04-23 | ALTERNATE aTTaX   | L   | 0.632      | -            | -                | -                | -         |    -9.72 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           19 |     2003 | 2024-04-20 | ALTERNATE aTTaX   | L   | 0.612      | -            | -                | -                | -         |    -8.97 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           18 |     2077 | 2024-04-18 | MOUZ NXT          | L   | 0.600      | -            | -                | -                | -         |    -6.62 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           17 |     2100 | 2024-04-18 | Nexus             | W   | 0.599      | -            | -                | -                | -         |     7.10 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           16 |     2125 | 2024-04-17 | ENCE              | L   | 0.593      | -            | -                | -                | -         |    -1.57 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           15 |     2257 | 2024-04-11 | Sashi             | L   | 0.552      | -            | -                | -                | -         |    -5.69 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           14 |     2301 | 2024-04-10 | AMKAL             | W   | 0.545      | 0.384        | 0.134 (0.028)    | -                | -         |    11.40 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           13 |     2430 | 2024-04-06 | Sampi             | L   | 0.519      | -            | -                | -                | -         |    -8.34 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           12 |     2521 | 2024-04-03 | Permitta          | W   | 0.500      | -            | -                | -                | -         |     7.77 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           11 |     2581 | 2024-04-01 | BLEED             | W   | 0.486      | 0.384        | 0.156 (0.029)    | -                | -         |     9.99 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|           10 |     3018 | 2024-03-09 | kONO              | L   | 0.333      | -            | -                | -                | -         |    -7.00 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            9 |     3028 | 2024-03-09 | Sampi             | L   | 0.333      | -            | -                | -                | -         |    -5.83 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            8 |     3098 | 2024-03-06 | INGLORIOUS        | L   | 0.314      | -            | -                | -                | -         |    -9.14 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            7 |     3104 | 2024-03-06 | Permitta          | L   | 0.312      | -            | -                | -                | -         |    -5.29 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            6 |     3215 | 2024-03-02 | Sampi             | W   | 0.285      | -            | -                | -                | -         |     3.88 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            5 |     3528 | 2024-02-16 | SAW               | L   | 0.187      | -            | -                | -                | -         |    -1.13 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            4 |     3562 | 2024-02-15 | BetBoom           | L   | 0.179      | -            | -                | -                | -         |    -0.16 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            3 |     3589 | 2024-02-14 | Natus Vincere     | L   | 0.175      | -            | -                | -                | -         |    -0.04 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            2 |     3601 | 2024-02-14 | AMKAL             | W   | 0.173      | -            | -                | -                | 1 (0.173) |     3.62 | bajmi, Demho, ex1st, fr3nd, TOAO    |
|            1 |     4060 | 2024-01-20 | KOI               | W   | 0.007      | -            | -                | -                | -         |     0.17 | bajmi, Demho, ex1st, fr3nd, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,430.34)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.999 | $5,000.00      | $4,997.44       |
| 2024-06-13 |      0.975 | $5,447.00      | $5,308.93       |
| 2024-06-06 |      0.926 | $3,000.00      | $2,777.05       |
| 2024-05-02 |      0.694 | $500.00        | $346.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
