### Roster Details<br />
Team Name: Legacy<br />
Roster: dumau, latto, lux, n1ssim, saadzin<br />
Global Rank: [47](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  967.0<br />
<br />
Final Rank Value (967.0) = Starting Rank Value (904.2) + Head To Head Adjustments (62.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.454[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.113[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 904.2
- 400 + ( ( 0.278 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 904.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      234 | 2025-04-17 | BESTIA             | L   | 1.000      | -            | -                | -                | -         |   -22.10 | dumau, latto, lux, n1ssim, saadzin   |
|           32 |      236 | 2025-04-17 | ODDIK              | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.742 (0.106)    | 0 (0.000) |     8.03 | dumau, latto, lux, n1ssim, saadzin   |
|           31 |      269 | 2025-04-16 | Fluxo              | L   | 1.000      | -            | -                | -                | -         |   -20.05 | dumau, latto, lux, n1ssim, saadzin   |
|           30 |      294 | 2025-04-15 | RED Canids         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.24 | dumau, latto, lux, n1ssim, saadzin   |
|           29 |      413 | 2025-04-09 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -1.74 | dumau, latto, lux, n1ssim, saadzin   |
|           28 |      448 | 2025-04-08 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |    -0.52 | dumau, latto, lux, n1ssim, saadzin   |
|           27 |      462 | 2025-04-07 | Aurora             | L   | 1.000      | -            | -                | -                | -         |    -0.35 | dumau, latto, lux, n1ssim, saadzin   |
|           26 |      474 | 2025-04-06 | Liquid             | W   | 1.000      | 1.000        | 0.467 (0.467)    | 0.470 (0.470)    | 1 (1.000) |    30.52 | dumau, latto, lux, n1ssim, saadzin   |
|           25 |     1120 | 2025-03-12 | 9z                 | W   | 0.842      | 0.143        | 0.083 (0.010)    | 0.463 (0.056)    | 0 (0.000) |     8.47 | dumau, latto, lux, n1ssim, saadzin   |
|           24 |     1139 | 2025-03-11 | Flamengo           | W   | 0.835      | -            | -                | -                | 0 (0.000) |     3.83 | dumau, latto, lux, n1ssim, saadzin   |
|           23 |     1171 | 2025-03-10 | RED Canids         | W   | 0.828      | -            | -                | -                | 0 (0.000) |     5.72 | dumau, latto, lux, n1ssim, saadzin   |
|           22 |     1205 | 2025-03-09 | RED Canids         | W   | 0.822      | -            | -                | -                | 0 (0.000) |     5.42 | dumau, latto, lux, n1ssim, saadzin   |
|           21 |     1263 | 2025-03-08 | Elevate            | W   | 0.816      | -            | -                | -                | 0 (0.000) |     3.41 | dumau, latto, lux, n1ssim, saadzin   |
|           20 |     1344 | 2025-03-07 | Galorys            | W   | 0.808      | -            | -                | -                | 0 (0.000) |     1.86 | dumau, latto, lux, n1ssim, saadzin   |
|           19 |     1733 | 2025-02-21 | Imperial           | L   | 0.716      | -            | -                | -                | -         |    -8.18 | dumau, latto, lux, n1ssim, saadzin   |
|           18 |     1766 | 2025-02-20 | UNO MILLE          | W   | 0.709      | 0.371        | -                | 0.311 (0.082)    | -         |     2.19 | dumau, latto, lux, n1ssim, saadzin   |
|           17 |     1943 | 2025-02-12 | Fluxo              | W   | 0.656      | 0.143        | 0.035 (0.003)    | 0.629 (0.059)    | -         |     6.98 | dumau, latto, lux, n1ssim, saadzin   |
|           16 |     1964 | 2025-02-11 | Fluxo              | W   | 0.649      | 0.143        | 0.035 (0.003)    | 0.629 (0.058)    | -         |     6.89 | dumau, latto, lux, n1ssim, saadzin   |
|           15 |     1969 | 2025-02-11 | Sharks             | W   | 0.648      | 0.143        | 0.051 (0.005)    | 0.811 (0.075)    | -         |    11.53 | dumau, latto, lux, n1ssim, saadzin   |
|           14 |     2069 | 2025-02-08 | BESTIA             | W   | 0.629      | 0.143        | 0.045 (0.004)    | 0.560 (0.050)    | -         |     6.77 | dumau, latto, lux, n1ssim, saadzin   |
|           13 |     2077 | 2025-02-08 | Prasso             | W   | 0.628      | -            | -                | -                | -         |     2.00 | dumau, latto, lux, n1ssim, saadzin   |
|           12 |     2087 | 2025-02-08 | MIBR               | L   | 0.628      | -            | -                | -                | -         |    -3.66 | dumau, latto, lux, n1ssim, saadzin   |
|           11 |     2133 | 2025-02-07 | UNO MILLE          | W   | 0.622      | -            | -                | -                | -         |     1.95 | dumau, latto, lux, n1ssim, saadzin   |
|           10 |     2135 | 2025-02-07 | Solid              | W   | 0.621      | 0.143        | 0.007 (0.001)    | -                | -         |     4.89 | dumau, latto, lux, n1ssim, saadzin   |
|            9 |     2180 | 2025-02-05 | Solid              | W   | 0.608      | -            | -                | -                | -         |     4.82 | dumau, latto, lux, n1ssim, saadzin   |
|            8 |     2191 | 2025-02-05 | Familia Maquininha | W   | 0.607      | -            | -                | -                | -         |     1.60 | dumau, latto, lux, n1ssim, saadzin   |
|            7 |     2404 | 2025-01-12 | BESTIA             | L   | 0.449      | -            | -                | -                | -         |    -9.53 | dumau, latto, lux, n1ssim, saadzin   |
|            6 |     2406 | 2025-01-11 | Dusty Roots        | W   | 0.442      | 0.384        | -                | 0.528 (0.090)    | -         |     2.94 | dumau, latto, lux, n1ssim, saadzin   |
|            5 |     2410 | 2025-01-10 | ShindeN            | W   | 0.436      | 0.384        | 0.009 (0.002)    | 0.520 (0.087)    | -         |     3.57 | dumau, latto, lux, n1ssim, saadzin   |
|            4 |     3241 | 2024-11-14 | RED Canids         | L   | 0.052      | -            | -                | -                | -         |    -1.25 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            3 |     3280 | 2024-11-12 | M80                | L   | 0.043      | -            | -                | -                | -         |    -0.66 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            2 |     3308 | 2024-11-12 | 9z                 | L   | 0.038      | -            | -                | -                | -         |    -0.71 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            1 |     3317 | 2024-11-11 | FURIA              | W   | 0.037      | 0.143        | 0.146 (0.001)    | -                | 1 (0.037) |     0.98 | b4rtiN, dumau, latto, NEKIZ, saadzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,658.63)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-13 |      1.000 | $18,750.00     | $18,750.00      |
| 2025-02-22 |      0.723 | $750.00        | $542.44         |
| 2025-01-12 |      0.449 | $7,500.00      | $3,366.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
