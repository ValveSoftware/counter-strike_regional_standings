### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [92](../standings_global.md)<br />
Regional Rank: [66]( ../standings_europe.md)<br />
Final Rank Value:  890.9<br />
<br />
Final Rank Value (890.9) = Starting Rank Value (785.6) + Head To Head Adjustments (105.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.6
- 400 + ( ( 0.190 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 785.6


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
|           24 |      120 | 2024-07-20 | BC.Game          | W   | 1.000      | 0.435        | -                | 0.122 (0.053)    | 0 (0.000) |     6.69 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           23 |      213 | 2024-07-18 | Sampi            | W   | 1.000      | 0.435        | 0.037 (0.016)    | 0.994 (0.432)    | 0 (0.000) |    17.20 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           22 |      301 | 2024-07-17 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -9.40 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           21 |      384 | 2024-07-15 | VP.Prodigy       | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.462 (0.201)    | 0 (0.000) |    16.16 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           20 |      399 | 2024-07-15 | BLEED            | L   | 1.000      | -            | -                | -                | -         |    -3.79 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           19 |      618 | 2024-06-16 | Preasy           | W   | 0.944      | 0.143        | 0.015 (0.002)    | 0.243 (0.033)    | 0 (0.000) |    12.70 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           18 |      671 | 2024-06-14 | Verdant          | W   | 0.934      | 0.143        | 0.019 (0.002)    | 0.336 (0.045)    | 0 (0.000) |    16.99 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           17 |      708 | 2024-06-13 | Astralis Talent  | W   | 0.927      | 0.143        | 0.012 (0.002)    | 0.180 (0.024)    | 0 (0.000) |    11.34 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           16 |      724 | 2024-06-13 | BLEED            | L   | 0.925      | -            | -                | -                | -         |    -2.51 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           15 |      835 | 2024-06-09 | Sampi            | W   | 0.899      | 0.435        | 0.037 (0.014)    | 0.994 (0.388)    | 0 (0.000) |    17.21 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           14 |      949 | 2024-06-07 | Insilio          | L   | 0.887      | -            | -                | -                | -         |    -8.44 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |      977 | 2024-06-07 | Passion UA       | L   | 0.884      | -            | -                | -                | -         |    -5.78 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           12 |     1009 | 2024-06-06 | Verdant          | W   | 0.880      | 0.372        | 0.019 (0.006)    | 0.336 (0.110)    | 0 (0.000) |    17.44 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           11 |     1084 | 2024-06-05 | Zero Tenacity    | L   | 0.873      | -            | -                | -                | -         |    -3.77 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           10 |     1092 | 2024-06-05 | Illuminar        | W   | 0.872      | 0.435        | 0.015 (0.006)    | 0.378 (0.143)    | 0 (0.000) |    14.11 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            9 |     1130 | 2024-06-04 | Spirit Academy   | W   | 0.866      | 0.372        | 0.017 (0.006)    | -                | 0 (0.000) |    11.88 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            8 |     1142 | 2024-06-04 | MOUZ NXT         | L   | 0.864      | -            | -                | -                | -         |    -3.89 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            7 |     1153 | 2024-06-03 | FLuffy Gangsters | W   | 0.860      | 0.372        | -                | 0.235 (0.075)    | -         |     6.63 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            6 |     1183 | 2024-06-02 | ThunderFlash     | W   | 0.852      | -            | -                | -                | -         |     2.85 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            5 |     1210 | 2024-06-01 | LEON             | W   | 0.846      | 0.143        | 0.009 (0.001)    | -                | -         |    10.87 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            4 |     1292 | 2024-05-29 | FAVBET           | L   | 0.826      | -            | -                | -                | -         |   -11.81 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            3 |     2452 | 2024-04-16 | ALTERNATE aTTaX  | L   | 0.539      | -            | -                | -                | -         |    -4.10 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     2467 | 2024-04-15 | Sangal           | L   | 0.533      | -            | -                | -                | -         |    -2.80 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     2776 | 2024-04-04 | ENCE             | L   | 0.459      | -            | -                | -                | -         |    -0.45 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,134.28)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
