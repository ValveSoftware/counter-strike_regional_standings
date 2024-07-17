### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [79]( ../standings_europe.md)<br />
Final Rank Value:  872.5<br />
<br />
Final Rank Value (872.5) = Starting Rank Value (784.5) + Head To Head Adjustments (88.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 784.5
- 400 + ( ( 0.179 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 784.5


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
|           22 |       13 | 2024-07-17 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -9.04 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           21 |       96 | 2024-07-15 | VP.Prodigy       | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.498 (0.217)    | 0 (0.000) |    17.56 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           20 |      111 | 2024-07-15 | BLEED            | L   | 1.000      | -            | -                | -                | -         |    -3.78 | bl1x1, bluewh1te, gr1ks, m1QUSE, VILBy |
|           19 |      330 | 2024-06-16 | Preasy           | W   | 0.992      | 0.143        | 0.013 (0.002)    | 0.171 (0.024)    | 0 (0.000) |    13.86 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           18 |      383 | 2024-06-14 | Verdant          | W   | 0.981      | 0.143        | 0.013 (0.002)    | 0.316 (0.044)    | 0 (0.000) |    16.36 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           17 |      420 | 2024-06-13 | Astralis Talent  | W   | 0.974      | 0.143        | 0.008 (0.001)    | 0.038 (0.005)    | 0 (0.000) |     6.79 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           16 |      436 | 2024-06-13 | BLEED            | L   | 0.972      | -            | -                | -                | -         |    -2.70 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           15 |      547 | 2024-06-09 | Sampi            | W   | 0.946      | 0.435        | 0.045 (0.018)    | 0.975 (0.401)    | 0 (0.000) |    19.20 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           14 |      661 | 2024-06-07 | Insilio          | L   | 0.934      | -            | -                | -                | -         |    -7.63 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |      689 | 2024-06-07 | Passion UA       | L   | 0.932      | -            | -                | -                | -         |    -6.02 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           12 |      721 | 2024-06-06 | Verdant          | W   | 0.927      | 0.372        | 0.013 (0.004)    | 0.316 (0.109)    | 0 (0.000) |    16.29 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           11 |      796 | 2024-06-05 | Zero Tenacity    | L   | 0.920      | -            | -                | -                | -         |    -3.54 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           10 |      804 | 2024-06-05 | Illuminar        | W   | 0.919      | 0.435        | 0.018 (0.007)    | 0.354 (0.142)    | 0 (0.000) |    15.45 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            9 |      842 | 2024-06-04 | Spirit Academy   | W   | 0.913      | 0.372        | 0.020 (0.007)    | 0.077 (0.026)    | 0 (0.000) |    13.57 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            8 |      854 | 2024-06-04 | MOUZ NXT         | L   | 0.911      | -            | -                | -                | -         |    -3.42 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            7 |      865 | 2024-06-03 | FLuffy Gangsters | W   | 0.907      | 0.372        | 0.000 (0.000)    | 0.160 (0.054)    | 0 (0.000) |     7.26 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            6 |      895 | 2024-06-02 | ThunderFlash     | W   | 0.899      | -            | -                | -                | 0 (0.000) |     2.98 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            5 |      922 | 2024-06-01 | LEON             | W   | 0.893      | 0.143        | 0.010 (0.001)    | 0.160 (0.020)    | -         |    12.48 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            4 |     1004 | 2024-05-29 | FAVBET           | L   | 0.874      | -            | -                | -                | -         |   -11.14 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|            3 |     2164 | 2024-04-16 | ALTERNATE aTTaX  | L   | 0.586      | -            | -                | -                | -         |    -3.71 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     2179 | 2024-04-15 | Sangal           | L   | 0.580      | -            | -                | -                | -         |    -2.40 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     2488 | 2024-04-04 | ENCE             | L   | 0.506      | -            | -                | -                | -         |    -0.39 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,193.32)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
