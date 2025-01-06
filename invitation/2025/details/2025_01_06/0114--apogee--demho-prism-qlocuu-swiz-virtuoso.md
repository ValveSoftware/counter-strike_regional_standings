### Roster Details<br />
Team Name: Apogee<br />
Roster: Demho, Prism, Qlocuu, swiz, virtuoso<br />
Global Rank: [114](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [83]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  817.5<br />
<br />
Final Rank Value (817.5) = Starting Rank Value (762.6) + Head To Head Adjustments (54.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.6
- 400 + ( ( 0.183 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 762.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1350 | 2024-10-18 | NewBALLS          | L   | 0.665      | -            | -                | -                | -         |   -17.48 | Demho, Prism, Qlocuu, swiz, virtuoso |
|           35 |     1434 | 2024-10-14 | ECLOT             | L   | 0.640      | -            | -                | -                | -         |    -1.93 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           34 |     1474 | 2024-10-11 | Insomnia          | L   | 0.620      | -            | -                | -                | -         |   -14.73 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           33 |     1486 | 2024-10-10 | 500 Rush          | L   | 0.613      | -            | -                | -                | -         |   -15.06 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           32 |     1689 | 2024-10-04 | TSM               | L   | 0.571      | -            | -                | -                | -         |    -6.82 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           31 |     1720 | 2024-10-03 | Passion UA        | L   | 0.566      | -            | -                | -                | -         |    -3.25 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           30 |     1745 | 2024-10-02 | Betera            | W   | 0.561      | -            | -                | -                | 0 (0.000) |     4.76 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           29 |     1795 | 2024-10-01 | Rebels            | W   | 0.554      | 0.500        | 0.035 (0.010)    | 0.322 (0.089)    | 0 (0.000) |     9.22 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           28 |     1811 | 2024-10-01 | TSM               | W   | 0.552      | 0.371        | 0.035 (0.007)    | 0.460 (0.094)    | 0 (0.000) |    11.28 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           27 |     1862 | 2024-09-29 | ALTERNATE aTTaX   | W   | 0.538      | 0.371        | 0.074 (0.015)    | 0.706 (0.141)    | 0 (0.000) |    13.26 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           26 |     1889 | 2024-09-28 | 9z                | L   | 0.533      | -            | -                | -                | -         |    -4.52 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           25 |     1920 | 2024-09-27 | OG                | W   | 0.528      | 0.143        | 0.164 (0.012)    | -                | 0 (0.000) |    11.11 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           24 |     1935 | 2024-09-27 | SAW               | L   | 0.526      | -            | -                | -                | -         |    -0.67 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     1942 | 2024-09-27 | Verdant           | W   | 0.525      | 0.371        | 0.045 (0.009)    | 0.410 (0.080)    | 0 (0.000) |    10.17 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     1970 | 2024-09-26 | ARCRED            | W   | 0.521      | 0.143        | 0.044 (0.003)    | -                | 0 (0.000) |     7.71 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     1978 | 2024-09-26 | Gaimin Gladiators | W   | 0.520      | 0.143        | 0.075 (0.006)    | 0.876 (0.065)    | 0 (0.000) |    11.95 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     2080 | 2024-09-24 | Monte             | L   | 0.507      | -            | -                | -                | -         |    -3.00 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     2114 | 2024-09-23 | Illuminar         | W   | 0.501      | -            | -                | -                | 0 (0.000) |    11.53 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     2128 | 2024-09-23 | Johnny Speeds     | L   | 0.499      | -            | -                | -                | -         |    -2.68 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     2239 | 2024-09-19 | Verdant           | W   | 0.472      | 0.371        | 0.045 (0.008)    | 0.410 (0.072)    | 0 (0.000) |    10.22 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     2325 | 2024-09-16 | NAVI Junior       | L   | 0.451      | -            | -                | -                | -         |    -2.51 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     2348 | 2024-09-15 | L&G               | L   | 0.446      | -            | -                | -                | -         |    -5.90 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     2360 | 2024-09-15 | Astralis Talent   | W   | 0.445      | 0.333        | -                | 0.442 (0.066)    | -         |     6.86 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     2392 | 2024-09-14 | ENCE Academy      | W   | 0.438      | 0.333        | 0.013 (0.002)    | 0.280 (0.041)    | -         |     6.63 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     2408 | 2024-09-13 | NAVI Junior       | L   | 0.434      | -            | -                | -                | -         |    -2.33 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     2417 | 2024-09-13 | UNiTY             | W   | 0.432      | 0.333        | 0.067 (0.010)    | 0.293 (0.042)    | -         |     9.84 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     2442 | 2024-09-12 | NAVI Junior       | L   | 0.426      | -            | -                | -                | -         |    -2.23 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     2479 | 2024-09-11 | JiJieHao          | W   | 0.419      | -            | -                | -                | -         |     5.20 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     2517 | 2024-09-10 | CPH Wolves        | W   | 0.411      | -            | -                | -                | -         |     6.12 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     2592 | 2024-09-06 | GUN5              | L   | 0.388      | -            | -                | -                | -         |    -1.73 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     2623 | 2024-09-05 | SovvyKiNG         | W   | 0.381      | 0.500        | -                | 0.203 (0.039)    | -         |     3.31 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     3675 | 2024-08-06 | SINNERS           | L   | 0.180      | -            | -                | -                | -         |    -0.71 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     3895 | 2024-07-31 | SAW               | L   | 0.140      | -            | -                | -                | -         |    -0.14 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     4165 | 2024-07-23 | Sangal            | L   | 0.087      | -            | -                | -                | -         |    -0.20 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     4396 | 2024-07-17 | RUSH B            | W   | 0.048      | -            | -                | -                | -         |     1.00 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     4512 | 2024-07-15 | Rebels            | W   | 0.033      | -            | -                | -                | -         |     0.62 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,872.98)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.680 | $1,000.00      | $679.95         |
| 2024-10-05 |      0.578 | $3,000.00      | $1,734.69       |
| 2024-09-17 |      0.458 | $1,000.00      | $458.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
