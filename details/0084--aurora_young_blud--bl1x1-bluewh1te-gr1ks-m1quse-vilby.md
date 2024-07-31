### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy<br />
Global Rank: [84](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [61]( ../standings_europe.md)<br />
<br />
Final Rank Value:  922.8<br />
<br />
Final Rank Value (922.8) = Starting Rank Value (817.3) + Head To Head Adjustments (105.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.3
- 400 + ( ( 0.202 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 817.3


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
|           29 |        7 | 2024-07-31 | Sampi            | W   | 1.000      | 0.435        | 0.028 (0.012)    | 1.000 (0.435)    | 0 (0.000) |    15.17 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           28 |       90 | 2024-07-29 | EYEBALLERS       | W   | 1.000      | 0.435        | 0.006 (0.002)    | 0.513 (0.223)    | 0 (0.000) |    11.82 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           27 |      153 | 2024-07-27 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -12.19 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           26 |      219 | 2024-07-25 | MOUZ NXT         | L   | 1.000      | -            | -                | -                | -         |    -7.71 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           25 |      238 | 2024-07-24 | Astralis Talent  | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.162 (0.070)    | 0 (0.000) |     8.54 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           24 |      362 | 2024-07-20 | BC.Game          | W   | 1.000      | 0.435        | -                | 0.153 (0.067)    | 0 (0.000) |     7.06 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           23 |      455 | 2024-07-18 | Sampi            | W   | 1.000      | 0.435        | 0.028 (0.012)    | 1.000 (0.435)    | 0 (0.000) |    16.34 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           22 |      543 | 2024-07-17 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -9.81 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           21 |      626 | 2024-07-15 | VP.Prodigy       | W   | 1.000      | 0.435        | 0.026 (0.011)    | 0.406 (0.176)    | 0 (0.000) |    15.79 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           20 |      641 | 2024-07-15 | BLEED            | L   | 1.000      | -            | -                | -                | -         |    -2.29 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           19 |      860 | 2024-06-16 | Preasy           | W   | 0.897      | -            | -                | -                | 0 (0.000) |    11.12 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           18 |      913 | 2024-06-14 | Verdant          | W   | 0.886      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |    15.40 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           17 |      950 | 2024-06-13 | Astralis Talent  | W   | 0.880      | -            | -                | -                | 0 (0.000) |     9.76 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           16 |      966 | 2024-06-13 | BLEED            | L   | 0.878      | -            | -                | -                | -         |    -1.44 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           15 |     1077 | 2024-06-09 | Sampi            | W   | 0.852      | 0.435        | 0.028 (0.010)    | 1.000 (0.370)    | 0 (0.000) |    15.48 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           14 |     1191 | 2024-06-07 | Insilio          | L   | 0.839      | -            | -                | -                | -         |    -9.16 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |     1219 | 2024-06-07 | Passion UA       | L   | 0.837      | -            | -                | -                | -         |    -6.02 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           12 |     1251 | 2024-06-06 | Verdant          | W   | 0.833      | 0.372        | 0.015 (0.005)    | 0.300 (0.093)    | -         |    15.57 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           11 |     1326 | 2024-06-05 | Zero Tenacity    | L   | 0.825      | -            | -                | -                | -         |    -3.87 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           10 |     1334 | 2024-06-05 | Illuminar        | W   | 0.825      | 0.435        | 0.012 (0.004)    | 0.348 (0.125)    | -         |    12.76 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            9 |     1372 | 2024-06-04 | Spirit Academy   | W   | 0.819      | 0.372        | 0.014 (0.004)    | -                | -         |    10.19 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            8 |     1384 | 2024-06-04 | MOUZ NXT         | L   | 0.817      | -            | -                | -                | -         |    -4.16 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            7 |     1395 | 2024-06-03 | FLuffy Gangsters | W   | 0.813      | 0.372        | -                | 0.218 (0.066)    | -         |     5.49 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            6 |     1425 | 2024-06-02 | ThunderFlash     | W   | 0.805      | -            | -                | -                | -         |     2.33 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            5 |     1452 | 2024-06-01 | LEON             | W   | 0.798      | -            | -                | -                | -         |     9.12 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            4 |     1534 | 2024-05-29 | FAVBET           | L   | 0.779      | -            | -                | -                | -         |   -12.59 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            3 |     2694 | 2024-04-16 | ALTERNATE aTTaX  | L   | 0.491      | -            | -                | -                | -         |    -4.44 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     2709 | 2024-04-15 | Sangal           | L   | 0.485      | -            | -                | -                | -         |    -2.43 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     3018 | 2024-04-04 | ENCE             | L   | 0.411      | -            | -                | -                | -         |    -0.33 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,075.18)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
