### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, dpr, sliimey, TjP<br />
Global Rank: [143](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_03.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_02_03.md)<br />
<br />
Final Rank Value:  742.3<br />
<br />
Final Rank Value (742.3) = Starting Rank Value (691.1) + Head To Head Adjustments (51.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.1
- 400 + ( ( 0.150 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 691.1


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
|           27 |      236 | 2025-01-23 | MANTRA         | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.112 (0.037)    | 0 (0.000) |     8.96 | asap, chelleos, dpr, sliimey, TjP    |
|           26 |      239 | 2025-01-23 | MANTRA         | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.112 (0.037)    | 0 (0.000) |     9.64 | asap, chelleos, dpr, sliimey, TjP    |
|           25 |      280 | 2025-01-22 | Mindfreak      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.175 (0.058)    | 0 (0.000) |    13.69 | asap, chelleos, dpr, sliimey, TjP    |
|           24 |      283 | 2025-01-22 | Mindfreak      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.175 (0.058)    | 0 (0.000) |    14.94 | asap, chelleos, dpr, sliimey, TjP    |
|           23 |     1867 | 2024-10-10 | MANTRA         | W   | 0.425      | 0.333        | 0.001 (0.000)    | 0.112 (0.016)    | 0 (0.000) |     5.37 | asap, chelleos, Rackem, sliimey, TjP |
|           22 |     1869 | 2024-10-10 | MANTRA         | L   | 0.424      | -            | -                | -                | -         |    -8.19 | asap, chelleos, Rackem, sliimey, TjP |
|           21 |     1899 | 2024-10-09 | KZG            | L   | 0.418      | -            | -                | -                | -         |    -7.98 | asap, chelleos, Rackem, sliimey, TjP |
|           20 |     1902 | 2024-10-09 | KZG            | W   | 0.418      | 0.333        | 0.002 (0.000)    | 0.127 (0.018)    | 0 (0.000) |     5.28 | asap, chelleos, Rackem, sliimey, TjP |
|           19 |     2016 | 2024-10-05 | BetBoom        | L   | 0.393      | -            | -                | -                | -         |    -1.08 | asap, chelleos, jhd, sliimey, TjP    |
|           18 |     2053 | 2024-10-04 | SAW            | L   | 0.386      | -            | -                | -                | -         |    -0.64 | asap, chelleos, jhd, sliimey, TjP    |
|           17 |     2210 | 2024-09-30 | FlyQuest       | L   | 0.358      | -            | -                | -                | -         |    -0.56 | asap, chelleos, Rackem, sliimey, TjP |
|           16 |     2213 | 2024-09-30 | FlyQuest       | L   | 0.358      | -            | -                | -                | -         |    -0.57 | asap, chelleos, Rackem, sliimey, TjP |
|           15 |     2416 | 2024-09-25 | Housebets      | W   | 0.325      | 0.333        | 0.004 (0.000)    | 0.138 (0.015)    | 0 (0.000) |     4.29 | asap, chelleos, Rackem, sliimey, TjP |
|           14 |     2425 | 2024-09-25 | Housebets      | W   | 0.324      | 0.333        | 0.004 (0.000)    | 0.138 (0.015)    | 0 (0.000) |     4.41 | asap, chelleos, Rackem, sliimey, TjP |
|           13 |     2785 | 2024-09-13 | Astralis       | L   | 0.246      | -            | -                | -                | -         |    -0.11 | asap, chelleos, dangeR, sliimey, TjP |
|           12 |     2851 | 2024-09-11 | BIG            | L   | 0.233      | -            | -                | -                | -         |    -0.13 | asap, chelleos, dangeR, sliimey, TjP |
|           11 |     2881 | 2024-09-10 | MOUZ           | L   | 0.226      | -            | -                | -                | -         |    -0.02 | asap, chelleos, dangeR, sliimey, TjP |
|           10 |     3220 | 2024-08-29 | TALON          | L   | 0.145      | -            | -                | -                | -         |    -2.98 | asap, chelleos, dangeR, sliimey, TjP |
|            9 |     3283 | 2024-08-28 | TALON          | W   | 0.138      | -            | -                | -                | 0 (0.000) |     1.50 | asap, chelleos, dangeR, sliimey, TjP |
|            8 |     3335 | 2024-08-27 | The Art of War | W   | 0.131      | 0.143        | 0.003 (0.000)    | 0.170 (0.003)    | 0 (0.000) |     1.80 | asap, chelleos, dangeR, sliimey, TjP |
|            7 |     3344 | 2024-08-27 | Vantage        | W   | 0.130      | -            | -                | -                | -         |     0.96 | asap, chelleos, dangeR, sliimey, TjP |
|            6 |     3518 | 2024-08-22 | The Art of War | W   | 0.099      | -            | -                | -                | -         |     1.35 | asap, chelleos, dangeR, sliimey, TjP |
|            5 |     3534 | 2024-08-22 | Mindfreak      | W   | 0.097      | 0.143        | 0.005 (0.000)    | 0.175 (0.002)    | -         |     1.62 | asap, chelleos, dangeR, sliimey, TjP |
|            4 |     3584 | 2024-08-21 | Housebets      | W   | 0.092      | -            | -                | -                | -         |     1.29 | asap, chelleos, dangeR, sliimey, TjP |
|            3 |     3611 | 2024-08-21 | Mindfreak      | L   | 0.090      | -            | -                | -                | -         |    -1.34 | asap, chelleos, dangeR, sliimey, TjP |
|            2 |     3828 | 2024-08-13 | Arcade         | W   | 0.038      | -            | -                | -                | -         |     0.45 | asap, chelleos, dangeR, sliimey, TjP |
|            1 |     3831 | 2024-08-13 | Arcade         | L   | 0.038      | -            | -                | -                | -         |    -0.73 | asap, chelleos, dangeR, sliimey, TjP |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,172.99)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.490 | $600.00        | $294.19         |
| 2024-10-06 |      0.402 | $2,000.00      | $803.28         |
| 2024-09-22 |      0.307 | $3,500.00      | $1,075.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
