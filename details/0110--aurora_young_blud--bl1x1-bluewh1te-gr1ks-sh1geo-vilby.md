### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, sh1geo, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [75]( ../standings_europe.md)<br />
Final Rank Value:  846.7<br />
<br />
Final Rank Value (846.7) = Starting Rank Value (755.0) + Head To Head Adjustments (91.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.0
- 400 + ( ( 0.168 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 755.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      166 | 2024-06-16 | Preasy           | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.176 (0.025)    | 0 (0.000) |    14.68 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           25 |      219 | 2024-06-14 | Verdant          | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.327 (0.047)    | 0 (0.000) |    17.45 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           24 |      256 | 2024-06-13 | Astralis Talent  | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.040 (0.006)    | 0 (0.000) |     7.60 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           23 |      272 | 2024-06-13 | BLEED            | L   | 1.000      | -            | -                | -                | -         |    -1.97 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           22 |      383 | 2024-06-09 | Slovakia         | W   | 0.986      | 0.435        | 0.045 (0.019)    | 0.891 (0.382)    | 0 (0.000) |    20.77 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           21 |      497 | 2024-06-07 | Insilio          | L   | 0.974      | -            | -                | -                | -         |    -7.04 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           20 |      525 | 2024-06-07 | Passion UA       | L   | 0.971      | -            | -                | -                | -         |    -5.71 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           19 |      557 | 2024-06-06 | Verdant          | W   | 0.967      | 0.372        | 0.013 (0.005)    | 0.327 (0.118)    | 0 (0.000) |    17.95 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           18 |      632 | 2024-06-05 | Zero Tenacity    | L   | 0.959      | -            | -                | -                | -         |    -3.17 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           17 |      640 | 2024-06-05 | Illuminar        | W   | 0.959      | 0.435        | 0.008 (0.003)    | 0.144 (0.060)    | 0 (0.000) |    10.50 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           16 |      678 | 2024-06-04 | Spirit Academy   | W   | 0.953      | 0.372        | 0.019 (0.007)    | 0.078 (0.028)    | 0 (0.000) |    14.82 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           15 |      690 | 2024-06-04 | MOUZ NXT         | L   | 0.951      | -            | -                | -                | -         |    -3.04 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           14 |      701 | 2024-06-03 | FLuffy Gangsters | W   | 0.947      | 0.372        | -                | 0.160 (0.057)    | 0 (0.000) |     7.93 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |      731 | 2024-06-02 | ThunderFlash     | W   | 0.939      | -            | -                | -                | 0 (0.000) |     3.54 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           12 |      758 | 2024-06-01 | LEON             | W   | 0.933      | 0.143        | 0.010 (0.001)    | 0.167 (0.022)    | 0 (0.000) |    13.92 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           11 |      840 | 2024-05-29 | FAVBET           | L   | 0.913      | -            | -                | -                | -         |   -10.82 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           10 |     2000 | 2024-04-16 | ALTERNATE aTTaX  | L   | 0.625      | -            | -                | -                | -         |    -3.62 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            9 |     2015 | 2024-04-15 | Sangal           | L   | 0.619      | -            | -                | -                | -         |    -2.26 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            8 |     2324 | 2024-04-04 | ENCE             | L   | 0.545      | -            | -                | -                | -         |    -0.29 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            7 |     3968 | 2024-01-19 | Permitta         | L   | 0.038      | -            | -                | -                | -         |    -0.29 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            6 |     4034 | 2024-01-18 | Zero Tenacity    | W   | 0.031      | 0.333        | 0.153 (0.002)    | 1.000 (0.010)    | -         |     0.87 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            5 |     4076 | 2024-01-17 | MOUZ NXT         | L   | 0.025      | -            | -                | -                | -         |    -0.10 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            4 |     4096 | 2024-01-16 | JANO             | L   | 0.022      | -            | -                | -                | -         |    -0.56 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            3 |     4112 | 2024-01-16 | Portugal         | W   | 0.021      | 0.143        | 0.006 (0.000)    | -                | -         |     0.32 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     4126 | 2024-01-16 | Lemondogs        | W   | 0.020      | -            | -                | -                | -         |     0.08 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     4154 | 2024-01-15 | Spirit Academy   | W   | 0.012      | -            | -                | -                | -         |     0.09 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,268.41)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.994 | $1,250.00      | $1,242.83       |
| 2024-01-21 |      0.051 | $500.00        | $25.58          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
