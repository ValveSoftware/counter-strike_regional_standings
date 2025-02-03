### Roster Details<br />
Team Name: GameAgents<br />
Roster: nestee, POLO, Qlocuu, swiz, virtuoso<br />
Global Rank: [146](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  735.7<br />
<br />
Final Rank Value (735.7) = Starting Rank Value (732.2) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.2
- 400 + ( ( 0.171 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 732.2


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
|           34 |       78 | 2025-01-28 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -11.63 | nestee, POLO, Qlocuu, swiz, virtuoso |
|           33 |      162 | 2025-01-24 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |    -8.51 | nestee, POLO, Qlocuu, swiz, virtuoso |
|           32 |      263 | 2025-01-22 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -8.53 | nestee, POLO, Qlocuu, swiz, virtuoso |
|           31 |     1725 | 2024-10-18 | NewBALLS          | L   | 0.478      | -            | -                | -                | -         |   -11.99 | Demho, Prism, Qlocuu, swiz, virtuoso |
|           30 |     1809 | 2024-10-14 | ECLOT             | L   | 0.453      | -            | -                | -                | -         |    -1.21 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           29 |     1849 | 2024-10-11 | Insomnia          | L   | 0.433      | -            | -                | -                | -         |    -9.49 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           28 |     1861 | 2024-10-10 | 500 Rush          | L   | 0.426      | -            | -                | -                | -         |    -9.64 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           27 |     2064 | 2024-10-04 | TSM               | L   | 0.384      | -            | -                | -                | -         |    -5.07 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           26 |     2095 | 2024-10-03 | Passion UA        | L   | 0.379      | -            | -                | -                | -         |    -2.03 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           25 |     2120 | 2024-10-02 | Betera            | W   | 0.374      | -            | -                | -                | 0 (0.000) |     2.15 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           24 |     2170 | 2024-10-01 | Rebels            | W   | 0.367      | 0.500        | 0.031 (0.006)    | 0.382 (0.070)    | 0 (0.000) |     6.77 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     2186 | 2024-10-01 | TSM               | W   | 0.365      | 0.371        | 0.030 (0.004)    | 0.329 (0.045)    | 0 (0.000) |     6.88 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     2237 | 2024-09-29 | ALTERNATE aTTaX   | W   | 0.351      | 0.371        | 0.066 (0.009)    | 0.643 (0.084)    | 0 (0.000) |     8.86 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     2264 | 2024-09-28 | 9z                | L   | 0.346      | -            | -                | -                | -         |    -3.45 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     2295 | 2024-09-27 | OG                | W   | 0.341      | 0.143        | 0.166 (0.008)    | -                | 0 (0.000) |     7.37 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     2310 | 2024-09-27 | SAW               | L   | 0.339      | -            | -                | -                | -         |    -0.88 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     2317 | 2024-09-27 | ALASKA            | W   | 0.338      | 0.371        | 0.052 (0.007)    | 0.494 (0.062)    | 0 (0.000) |     7.14 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     2345 | 2024-09-26 | ARCRED            | W   | 0.333      | 0.143        | 0.046 (0.002)    | -                | 0 (0.000) |     5.46 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     2353 | 2024-09-26 | Gaimin Gladiators | W   | 0.333      | 0.143        | 0.082 (0.004)    | 0.864 (0.041)    | 0 (0.000) |     7.50 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     2455 | 2024-09-24 | Monte             | L   | 0.320      | -            | -                | -                | -         |    -1.89 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     2489 | 2024-09-23 | Illuminar         | W   | 0.314      | 0.143        | -                | 0.486 (0.022)    | 0 (0.000) |     7.03 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     2503 | 2024-09-23 | Johnny Speeds     | L   | 0.312      | -            | -                | -                | -         |    -1.80 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     2614 | 2024-09-19 | ALASKA            | W   | 0.285      | 0.371        | 0.052 (0.006)    | 0.494 (0.052)    | 0 (0.000) |     6.41 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     2700 | 2024-09-16 | NAVI Junior       | L   | 0.264      | -            | -                | -                | -         |    -1.32 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     2723 | 2024-09-15 | L&G               | L   | 0.259      | -            | -                | -                | -         |    -3.19 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     2735 | 2024-09-15 | Astralis Talent   | W   | 0.258      | 0.333        | -                | 0.499 (0.043)    | -         |     4.24 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     2767 | 2024-09-14 | ENCE Academy      | W   | 0.251      | 0.333        | 0.014 (0.001)    | 0.283 (0.024)    | -         |     4.06 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     2783 | 2024-09-13 | NAVI Junior       | L   | 0.246      | -            | -                | -                | -         |    -1.20 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     2792 | 2024-09-13 | UNiTY             | W   | 0.245      | 0.333        | 0.069 (0.006)    | -                | -         |     5.39 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     2817 | 2024-09-12 | NAVI Junior       | L   | 0.239      | -            | -                | -                | -         |    -1.15 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     2854 | 2024-09-11 | JiJieHao          | W   | 0.232      | -            | -                | -                | -         |     2.93 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     2892 | 2024-09-10 | CPH Wolves        | W   | 0.224      | 0.333        | -                | 0.297 (0.022)    | -         |     3.55 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     2967 | 2024-09-06 | GUN5              | L   | 0.201      | -            | -                | -                | -         |    -0.93 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     2998 | 2024-09-05 | SovvyKiNG         | W   | 0.194      | -            | -                | -                | -         |     1.64 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,937.29)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.493 | $1,000.00      | $492.81         |
| 2024-10-05 |      0.391 | $3,000.00      | $1,173.28       |
| 2024-09-17 |      0.271 | $1,000.00      | $271.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
