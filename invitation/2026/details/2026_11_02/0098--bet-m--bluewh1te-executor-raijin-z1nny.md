### Roster Details<br />
Team Name: BET-M<br />
Roster: bluewh1te, executor, Raijin, z1Nny<br />
Global Rank: [98](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [69]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  1048.5<br />
<br />
Final Rank Value (1048.5) = Starting Rank Value (982.3) + Head To Head Adjustments (66.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.311<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 982.3
- 400 + ( ( 0.311 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 982.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      317 | 2026-10-22 | mellren           | L   | 1.000      | -            | -                | -                | -         |   -20.98 | bluewh1te, executor, kurosse, Raijin, z1Nny  |
|           51 |      360 | 2026-10-21 | Butterfly         | W   | 1.000      | 0.396        | 0.023 (0.009)    | 0.550 (0.218)    | 0 (0.000) |    13.05 | bluewh1te, executor, kurosse, Raijin, z1Nny  |
|           50 |      512 | 2026-10-18 | BRUTE             | L   | 1.000      | -            | -                | -                | -         |   -14.15 | bluewh1te, executor, Patsi, Raijin, z1Nny    |
|           49 |      565 | 2026-10-17 | Just Players      | W   | 1.000      | 0.396        | -                | 0.825 (0.327)    | 0 (0.000) |    12.83 | bluewh1te, executor, Patsi, Raijin, z1Nny    |
|           48 |      681 | 2026-10-14 | FORZE Reload      | L   | 1.000      | -            | -                | -                | -         |   -15.44 | bluewh1te, executor, Patsi, Raijin, z1Nny    |
|           47 |      766 | 2026-10-11 | PRIVATE           | L   | 1.000      | -            | -                | -                | -         |    -6.97 | bluewh1te, executor, kurosse, Raijin, z1Nny  |
|           46 |      938 | 2026-10-08 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -4.16 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           45 |     1372 | 2026-09-28 | Nemiga            | L   | 0.967      | -            | -                | -                | -         |    -1.70 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           44 |     1384 | 2026-09-28 | SINNERS           | W   | 0.965      | 0.396        | 0.083 (0.032)    | 0.682 (0.261)    | 0 (0.000) |    25.98 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           43 |     1423 | 2026-09-27 | Acend             | W   | 0.959      | 0.396        | 0.053 (0.020)    | -                | 0 (0.000) |    18.43 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           42 |     1485 | 2026-09-26 | Walczaki          | W   | 0.952      | 0.396        | 0.019 (0.007)    | -                | 0 (0.000) |     7.64 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           41 |     1829 | 2026-09-20 | KAMUI             | L   | 0.914      | -            | -                | -                | -         |   -25.11 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           40 |     1836 | 2026-09-20 | BRUTE             | W   | 0.913      | 0.396        | 0.019 (0.007)    | 0.600 (0.217)    | -         |    18.24 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           39 |     1913 | 2026-09-18 | Just Players      | W   | 0.900      | 0.396        | -                | 0.825 (0.294)    | -         |    10.28 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           38 |     2033 | 2026-09-15 | Nemiga            | L   | 0.881      | -            | -                | -                | -         |    -1.11 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           37 |     2044 | 2026-09-15 | Leo               | W   | 0.880      | 0.396        | 0.017 (0.006)    | 0.735 (0.256)    | -         |    11.65 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           36 |     2079 | 2026-09-14 | Butterfly         | W   | 0.873      | 0.417        | 0.023 (0.008)    | -                | 1 (0.873) |    13.54 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           35 |     2088 | 2026-09-14 | HyperSpace        | W   | 0.871      | -            | -                | -                | 1 (0.871) |     0.88 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           34 |     2089 | 2026-09-14 | Nemesis           | L   | 0.871      | -            | -                | -                | -         |    -2.46 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           33 |     2297 | 2026-09-10 | Nuclear TigeRES   | L   | 0.845      | -            | -                | -                | -         |    -3.89 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           32 |     2353 | 2026-09-09 | B8                | L   | 0.839      | -            | -                | -                | -         |    -1.64 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           31 |     2547 | 2026-09-04 | FOKUS             | W   | 0.808      | 0.624        | 0.090 (0.045)    | 0.776 (0.391)    | -         |    21.86 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           30 |     2560 | 2026-09-04 | NT                | W   | 0.807      | -            | -                | -                | -         |     1.76 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           29 |     2569 | 2026-09-04 | JiJieHao          | W   | 0.806      | 0.624        | 0.055 (0.028)    | 0.615 (0.310)    | -         |    23.74 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           28 |     2709 | 2026-08-31 | Walczaki          | L   | 0.781      | -            | -                | -                | -         |   -16.11 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           27 |     2965 | 2026-08-26 | UPGRADE           | W   | 0.748      | 0.435        | 0.020 (0.007)    | 0.653 (0.212)    | -         |    18.11 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           26 |     2986 | 2026-08-26 | Nuclear TigeRES   | L   | 0.746      | -            | -                | -                | -         |    -4.41 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           25 |     3019 | 2026-08-25 | PRIVATE           | L   | 0.740      | -            | -                | -                | -         |    -3.60 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           24 |     3071 | 2026-08-24 | HYPERSPIRIT       | W   | 0.731      | -            | -                | -                | -         |    10.32 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           23 |     3109 | 2026-08-22 | 1win              | L   | 0.720      | -            | -                | -                | -         |    -0.80 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           22 |     3141 | 2026-08-21 | Nordic Partners   | W   | 0.712      | -            | -                | -                | -         |     8.79 | bluewh1te, executor, Raijin, synyx, z1Nny    |
|           21 |     3460 | 2026-08-08 | Butterfly         | L   | 0.626      | -            | -                | -                | -         |    -8.74 | bluewh1te, executor, kinqie, saizius, z1Nny  |
|           20 |     3505 | 2026-08-07 | ex-RUSTEC         | W   | 0.620      | 0.384        | -                | 1.000 (0.238)    | -         |     9.23 | bluewh1te, executor, kinqie, saizius, z1Nny  |
|           19 |     3556 | 2026-08-06 | SPARTA            | W   | 0.613      | -            | -                | -                | -         |     7.37 | bluewh1te, executor, kinqie, saizius, z1Nny  |
|           18 |     3798 | 2026-07-29 | Vexar             | L   | 0.558      | -            | -                | -                | -         |   -12.94 | bluewh1te, executor, kinqie, Wierd_1k, z1Nny |
|           17 |     3807 | 2026-07-28 | 1win              | L   | 0.554      | -            | -                | -                | -         |    -0.51 | bluewh1te, executor, fluffy, kinqie, z1Nny   |
|           16 |     3813 | 2026-07-28 | BAKS              | L   | 0.554      | -            | -                | -                | -         |    -5.58 | bluewh1te, executor, fluffy, kinqie, z1Nny   |
|           15 |     3823 | 2026-07-28 | HyperSpace        | W   | 0.553      | -            | -                | -                | 1 (0.553) |     0.71 | bluewh1te, executor, fluffy, kinqie, z1Nny   |
|           14 |     3833 | 2026-07-28 | Honvéd            | W   | 0.552      | -            | -                | -                | -         |     1.65 | bluewh1te, executor, kinqie, Wierd_1k, z1Nny |
|           13 |     3918 | 2026-07-25 | GenOne            | L   | 0.533      | -            | -                | -                | -         |    -4.12 | bluewh1te, executor, kinqie, la3euka, z1Nny  |
|           12 |     3991 | 2026-07-23 | SPARTA            | L   | 0.520      | -            | -                | -                | -         |   -11.10 | bluewh1te, executor, kinqie, sugaR, z1Nny    |
|           11 |     4044 | 2026-07-21 | CYBERSHOKE        | L   | 0.505      | -            | -                | -                | -         |    -8.26 | bluewh1te, executor, kinqie, shalfey, z1Nny  |
|           10 |     4089 | 2026-07-19 | BASEMENT BOYS     | W   | 0.492      | -            | -                | -                | -         |    12.36 | bluewh1te, executor, kinqie, sugaR, z1Nny    |
|            9 |     4623 | 2026-06-19 | Acend             | L   | 0.294      | -            | -                | -                | -         |    -3.12 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            8 |     5213 | 2026-05-27 | Virtus.pro        | L   | 0.141      | -            | -                | -                | -         |    -0.39 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            7 |     5266 | 2026-05-26 | Aurora Young Blud | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.27 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            6 |     5276 | 2026-05-26 | 163NEWS           | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.16 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            5 |     5280 | 2026-05-26 | Aurora Young Blud | L   | 0.131      | -            | -                | -                | -         |    -3.87 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            4 |     5568 | 2026-05-18 | BBL               | L   | 0.080      | -            | -                | -                | -         |    -0.24 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            3 |     5746 | 2026-05-12 | Walczaki          | L   | 0.040      | -            | -                | -                | -         |    -0.88 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            2 |     5859 | 2026-05-09 | Walczaki          | L   | 0.019      | -            | -                | -                | -         |    -0.42 | bluewh1te, executor, kinqie, KIRO, z1Nny     |
|            1 |     5878 | 2026-05-08 | SPARTA            | W   | 0.013      | -            | -                | -                | -         |     0.12 | bluewh1te, executor, kinqie, KIRO, z1Nny     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,200.27)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-28 |      0.967 | $6,000.00      | $5,799.62       |
| 2026-09-16 |      0.888 | $750.00        | $665.97         |
| 2026-08-08 |      0.627 | $2,500.00      | $1,568.52       |
| 2026-05-28 |      0.148 | $750.00        | $110.90         |
| 2026-05-10 |      0.028 | $2,000.00      | $55.26          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
