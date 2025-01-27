### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dpr, sliimey, TjP<br />
Global Rank: [143](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_27.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_01_27.md)<br />
<br />
Final Rank Value:  743.2<br />
<br />
Final Rank Value (743.2) = Starting Rank Value (691.7) + Head To Head Adjustments (51.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.7
- 400 + ( ( 0.149 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 691.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      118 | 2025-01-23 | MANTRA         | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.055 (0.018)    | 0 (0.000) |     8.62 | asap, chelleos, dpr, sliimey, TjP    |
|           28 |      121 | 2025-01-23 | MANTRA         | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.055 (0.018)    | 0 (0.000) |     9.26 | asap, chelleos, dpr, sliimey, TjP    |
|           27 |      162 | 2025-01-22 | Mindfreak      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.147 (0.049)    | 0 (0.000) |    13.70 | asap, chelleos, dpr, sliimey, TjP    |
|           26 |      165 | 2025-01-22 | Mindfreak      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.147 (0.049)    | 0 (0.000) |    14.95 | asap, chelleos, dpr, sliimey, TjP    |
|           25 |     1749 | 2024-10-10 | MANTRA         | W   | 0.471      | 0.333        | 0.001 (0.000)    | 0.055 (0.009)    | 0 (0.000) |     5.74 | asap, chelleos, Rackem, sliimey, TjP |
|           24 |     1751 | 2024-10-10 | MANTRA         | L   | 0.471      | -            | -                | -                | -         |    -9.33 | asap, chelleos, Rackem, sliimey, TjP |
|           23 |     1781 | 2024-10-09 | KZG            | L   | 0.465      | -            | -                | -                | -         |    -8.94 | asap, chelleos, Rackem, sliimey, TjP |
|           22 |     1784 | 2024-10-09 | KZG            | W   | 0.465      | 0.333        | 0.002 (0.000)    | 0.128 (0.020)    | 0 (0.000) |     5.79 | asap, chelleos, Rackem, sliimey, TjP |
|           21 |     1898 | 2024-10-05 | BetBoom        | L   | 0.440      | -            | -                | -                | -         |    -1.07 | asap, chelleos, jhd, sliimey, TjP    |
|           20 |     1935 | 2024-10-04 | SAW            | L   | 0.433      | -            | -                | -                | -         |    -0.49 | asap, chelleos, jhd, sliimey, TjP    |
|           19 |     2092 | 2024-09-30 | FlyQuest       | L   | 0.405      | -            | -                | -                | -         |    -0.49 | asap, chelleos, Rackem, sliimey, TjP |
|           18 |     2095 | 2024-09-30 | FlyQuest       | L   | 0.404      | -            | -                | -                | -         |    -0.50 | asap, chelleos, Rackem, sliimey, TjP |
|           17 |     2298 | 2024-09-25 | Housebets      | W   | 0.371      | 0.333        | 0.004 (0.000)    | 0.077 (0.009)    | 0 (0.000) |     4.82 | asap, chelleos, Rackem, sliimey, TjP |
|           16 |     2307 | 2024-09-25 | Housebets      | W   | 0.371      | 0.333        | 0.004 (0.000)    | 0.077 (0.009)    | 0 (0.000) |     4.97 | asap, chelleos, Rackem, sliimey, TjP |
|           15 |     2667 | 2024-09-13 | Astralis       | L   | 0.293      | -            | -                | -                | -         |    -0.37 | asap, chelleos, dangeR, sliimey, TjP |
|           14 |     2733 | 2024-09-11 | BIG            | L   | 0.279      | -            | -                | -                | -         |    -0.21 | asap, chelleos, dangeR, sliimey, TjP |
|           13 |     2763 | 2024-09-10 | MOUZ           | L   | 0.272      | -            | -                | -                | -         |    -0.02 | asap, chelleos, dangeR, sliimey, TjP |
|           12 |     3102 | 2024-08-29 | TALON          | L   | 0.192      | -            | -                | -                | -         |    -3.86 | asap, chelleos, dangeR, sliimey, TjP |
|           11 |     3165 | 2024-08-28 | TALON          | W   | 0.184      | -            | -                | -                | 0 (0.000) |     2.08 | asap, chelleos, dangeR, sliimey, TjP |
|           10 |     3217 | 2024-08-27 | The Art of War | W   | 0.178      | 0.143        | -                | 0.183 (0.005)    | 0 (0.000) |     2.46 | asap, chelleos, dangeR, sliimey, TjP |
|            9 |     3226 | 2024-08-27 | Vantage        | W   | 0.177      | -            | -                | -                | -         |     1.36 | asap, chelleos, dangeR, sliimey, TjP |
|            8 |     3400 | 2024-08-22 | The Art of War | W   | 0.145      | 0.143        | -                | 0.183 (0.004)    | -         |     2.00 | asap, chelleos, dangeR, sliimey, TjP |
|            7 |     3416 | 2024-08-22 | Mindfreak      | W   | 0.144      | 0.143        | 0.005 (0.000)    | -                | -         |     2.41 | asap, chelleos, dangeR, sliimey, TjP |
|            6 |     3466 | 2024-08-21 | Housebets      | W   | 0.139      | 0.143        | 0.004 (0.000)    | -                | -         |     1.95 | asap, chelleos, dangeR, sliimey, TjP |
|            5 |     3493 | 2024-08-21 | Mindfreak      | L   | 0.137      | -            | -                | -                | -         |    -2.02 | asap, chelleos, dangeR, sliimey, TjP |
|            4 |     3710 | 2024-08-13 | Arcade         | W   | 0.085      | -            | -                | -                | -         |     1.05 | asap, chelleos, dangeR, sliimey, TjP |
|            3 |     3713 | 2024-08-13 | Arcade         | L   | 0.084      | -            | -                | -                | -         |    -1.62 | asap, chelleos, dangeR, sliimey, TjP |
|            2 |     3900 | 2024-08-07 | Vantage        | W   | 0.045      | -            | -                | -                | -         |     0.35 | asap, chelleos, dangeR, sliimey, TjP |
|            1 |     3908 | 2024-08-07 | Vantage        | L   | 0.044      | -            | -                | -                | -         |    -1.05 | asap, chelleos, dangeR, sliimey, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,458.25)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.537 | $600.00        | $322.25         |
| 2024-10-06 |      0.448 | $2,000.00      | $896.81         |
| 2024-09-22 |      0.354 | $3,500.00      | $1,239.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
