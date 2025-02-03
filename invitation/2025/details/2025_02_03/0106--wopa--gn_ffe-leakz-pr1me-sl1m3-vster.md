### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, PR1mE, sL1m3, Vster<br />
Global Rank: [106](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  833.3<br />
<br />
Final Rank Value (833.3) = Starting Rank Value (888.5) + Head To Head Adjustments (-55.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.457[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.090[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.5
- 400 + ( ( 0.252 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 888.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      376 | 2025-01-06 | BadGuys          | L   | 1.000      | -            | -                | -                | -         |   -26.35 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           29 |      380 | 2025-01-05 | Wu-Tang          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.15 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           28 |      392 | 2024-12-29 | CS2News          | L   | 0.959      | -            | -                | -                | -         |   -26.02 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           27 |      398 | 2024-12-28 | EYEBALLERS       | L   | 0.952      | -            | -                | -                | -         |   -19.16 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           26 |      413 | 2024-12-25 | kONO             | L   | 0.932      | -            | -                | -                | -         |   -16.49 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           25 |      416 | 2024-12-24 | ENCE Academy     | W   | 0.925      | 0.333        | 0.014 (0.004)    | 0.283 (0.087)    | 0 (0.000) |     9.17 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           24 |      417 | 2024-12-24 | ALASKA           | L   | 0.925      | -            | -                | -                | -         |   -16.64 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           23 |      419 | 2024-12-23 | los kogutos      | W   | 0.918      | 0.333        | 0.070 (0.021)    | 0.779 (0.238)    | 0 (0.000) |    16.60 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           22 |      421 | 2024-12-23 | Heimo            | W   | 0.918      | 0.333        | 0.006 (0.002)    | 0.210 (0.064)    | 0 (0.000) |     8.14 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           21 |      428 | 2024-12-22 | ADEPTS           | W   | 0.913      | -            | -                | -                | 0 (0.000) |     3.07 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           20 |      435 | 2024-12-22 | Astralis Talent  | W   | 0.912      | 0.333        | 0.005 (0.002)    | 0.499 (0.152)    | 0 (0.000) |     8.69 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           19 |      439 | 2024-12-21 | ALASKA           | W   | 0.907      | 0.333        | 0.052 (0.016)    | 0.494 (0.149)    | 0 (0.000) |    13.25 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           18 |      445 | 2024-12-21 | kONO             | W   | 0.905      | 0.333        | 0.048 (0.014)    | 0.600 (0.181)    | 0 (0.000) |    12.99 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           17 |      455 | 2024-12-20 | Heimo            | L   | 0.899      | -            | -                | -                | -         |   -19.19 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           16 |      476 | 2024-12-18 | Viperio          | W   | 0.886      | 0.333        | 0.004 (0.001)    | -                | 0 (0.000) |     5.69 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           15 |      479 | 2024-12-18 | los kogutos      | L   | 0.885      | -            | -                | -                | -         |    -9.95 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           14 |      851 | 2024-11-29 | Apogee           | L   | 0.761      | -            | -                | -                | -         |   -11.11 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           13 |      891 | 2024-11-26 | Insilio          | W   | 0.741      | 0.354        | -                | 0.591 (0.155)    | -         |     5.77 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           12 |      898 | 2024-11-26 | 9INE             | W   | 0.740      | 0.354        | 0.044 (0.012)    | 0.490 (0.128)    | -         |    10.57 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           11 |      912 | 2024-11-25 | NAVI Junior      | L   | 0.733      | -            | -                | -                | -         |    -5.81 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|           10 |      946 | 2024-11-23 | Astralis Talent  | W   | 0.720      | 0.340        | 0.005 (0.001)    | 0.499 (0.122)    | 1 (0.720) |     7.45 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            9 |     1133 | 2024-11-15 | HOTU             | L   | 0.665      | -            | -                | -                | -         |   -14.36 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            8 |     1143 | 2024-11-14 | Astralis Talent  | W   | 0.661      | -            | -                | -                | -         |     6.78 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            7 |     1155 | 2024-11-14 | Denial           | W   | 0.660      | -            | -                | -                | -         |     2.55 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            6 |     1203 | 2024-11-13 | HOTU             | W   | 0.651      | -            | -                | -                | -         |     6.46 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            5 |     1616 | 2024-10-24 | L&G              | L   | 0.518      | -            | -                | -                | -         |    -9.39 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            4 |     1624 | 2024-10-23 | NAVI Junior      | L   | 0.513      | -            | -                | -                | -         |    -4.99 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            3 |     1667 | 2024-10-20 | ALASKA           | W   | 0.492      | 0.333        | 0.052 (0.009)    | 0.494 (0.081)    | -         |     7.78 | Gnøffe, leakz, PR1mE, sL1m3, Vster |
|            2 |     3630 | 2024-08-20 | Grannys Knockers | L   | 0.084      | -            | -                | -                | -         |    -2.17 | Gnøffe, leakz, sL1m3, Vster, zEden |
|            1 |     3665 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.078      | -            | -                | -                | -         |    -0.70 | Gnøffe, leakz, sL1m3, Vster, zEden |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,256.54)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-25 |      0.932 | $3,000.00      | $2,796.07       |
| 2024-12-24 |      0.925 | $3,000.00      | $2,773.71       |
| 2024-11-23 |      0.720 | $9,283.00      | $6,686.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
