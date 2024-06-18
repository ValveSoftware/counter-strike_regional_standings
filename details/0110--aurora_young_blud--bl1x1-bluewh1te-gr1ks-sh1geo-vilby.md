### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: bl1x1, bluewh1te, gr1ks, sh1geo, VILBy<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [110](../standings_global.md)<br />
Regional Rank: [77]( ../standings_europe.md)<br />
Final Rank Value:  846.8<br />
<br />
Final Rank Value (846.8) = Starting Rank Value (751.3) + Head To Head Adjustments (95.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.087[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.3
- 400 + ( ( 0.173 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 751.3


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
|           29 |       30 | 2024-06-16 | Preasy           | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.169 (0.024)    | 0 (0.000) |    14.08 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           28 |       83 | 2024-06-14 | Verdant          | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.308 (0.044)    | 0 (0.000) |    16.66 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           27 |      120 | 2024-06-13 | Astralis Talent  | W   | 1.000      | 0.143        | 0.007 (0.001)    | -                | 0 (0.000) |     7.07 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           26 |      136 | 2024-06-13 | BLEED            | L   | 1.000      | -            | -                | -                | -         |    -2.10 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           25 |      247 | 2024-06-09 | Sampi            | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.837 (0.364)    | 0 (0.000) |    21.05 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           24 |      361 | 2024-06-07 | Insilio          | L   | 1.000      | -            | -                | -                | -         |    -6.92 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           23 |      389 | 2024-06-07 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -5.67 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           22 |      421 | 2024-06-06 | Verdant          | W   | 1.000      | 0.372        | 0.013 (0.005)    | 0.308 (0.115)    | 0 (0.000) |    18.06 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           21 |      496 | 2024-06-05 | Zero Tenacity    | L   | 1.000      | -            | -                | -                | -         |    -3.26 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           20 |      504 | 2024-06-05 | Illuminar        | W   | 1.000      | 0.435        | 0.015 (0.007)    | 0.399 (0.173)    | 0 (0.000) |    15.59 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           19 |      542 | 2024-06-04 | Spirit Academy   | W   | 1.000      | 0.372        | 0.017 (0.006)    | 0.071 (0.026)    | 0 (0.000) |    14.80 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           18 |      554 | 2024-06-04 | MOUZ NXT         | L   | 1.000      | -            | -                | -                | -         |    -3.04 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           17 |      565 | 2024-06-03 | FLuffy Gangsters | W   | 1.000      | 0.372        | -                | 0.071 (0.026)    | 0 (0.000) |     7.62 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           16 |      596 | 2024-06-02 | ThunderFlash     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.82 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           15 |      624 | 2024-06-01 | LEON             | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.165 (0.024)    | 0 (0.000) |    14.39 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           14 |      706 | 2024-05-29 | FAVBET           | L   | 1.000      | -            | -                | -                | -         |   -11.58 | bl1x1, bluewh1te, gr1ks, sh1geo, VILBy |
|           13 |     1866 | 2024-04-16 | ALTERNATE aTTaX  | L   | 0.781      | -            | -                | -                | -         |    -5.10 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           12 |     1881 | 2024-04-15 | Sangal           | L   | 0.775      | -            | -                | -                | -         |    -3.21 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           11 |     2190 | 2024-04-04 | ENCE             | L   | 0.701      | -            | -                | -                | -         |    -0.30 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|           10 |     3835 | 2024-01-19 | Permitta         | L   | 0.194      | -            | -                | -                | -         |    -1.53 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            9 |     3901 | 2024-01-18 | Zero Tenacity    | W   | 0.187      | 0.333        | 0.153 (0.010)    | 1.000 (0.062)    | -         |     5.21 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            8 |     3943 | 2024-01-17 | MOUZ NXT         | L   | 0.180      | -            | -                | -                | -         |    -0.68 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            7 |     3963 | 2024-01-16 | JANO             | L   | 0.177      | -            | -                | -                | -         |    -4.54 | Aerial, allu, doto, Jelo, Sm1llee      |
|            6 |     3979 | 2024-01-16 | esmagaB          | W   | 0.176      | -            | -                | -                | -         |     2.78 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            5 |     3993 | 2024-01-16 | Lemondogs        | W   | 0.176      | -            | -                | -                | -         |     0.68 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            4 |     4021 | 2024-01-15 | Spirit Academy   | W   | 0.168      | -            | -                | -                | -         |     2.02 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            3 |     4260 | 2023-12-29 | Metizport        | L   | 0.056      | -            | -                | -                | -         |    -0.40 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            2 |     4263 | 2023-12-28 | The Witchers     | L   | 0.049      | -            | -                | -                | -         |    -0.97 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |
|            1 |     4267 | 2023-12-27 | Metizport        | W   | 0.042      | 0.371        | 0.073 (0.001)    | 0.587 (0.009)    | -         |     1.02 | bl1x1, bluewh1te, easy, sh1geo, VILBy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,353.42)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-01-21 |      0.207 | $500.00        | $103.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
