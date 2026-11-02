### Roster Details<br />
Team Name: AM<br />
Roster: Altekz, k1to, L00m1, Marix, myltsi<br />
Global Rank: [205](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [143]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  702.1<br />
<br />
Final Rank Value (702.1) = Starting Rank Value (689.4) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.4
- 400 + ( ( 0.154 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 689.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     4548 | 2026-06-25 | Sashi           | L   | 0.332      | -            | -                | -                | -         |    -5.42 | 7Kick, Altekz, k1to, Marix, myltsi   |
|           25 |     4567 | 2026-06-24 | Eternal Fire    | W   | 0.326      | 0.548        | 0.109 (0.019)    | 0.938 (0.168)    | 1 (0.326) |    10.13 | 7Kick, Altekz, k1to, Marix, myltsi   |
|           24 |     4584 | 2026-06-23 | Inner Circle    | L   | 0.318      | -            | -                | -                | -         |    -0.18 | 7Kick, Altekz, k1to, Marix, myltsi   |
|           23 |     4809 | 2026-06-11 | CYBERSHOKE      | L   | 0.239      | -            | -                | -                | -         |    -4.19 | Altekz, k1to, L00m1, Marix, myltsi   |
|           22 |     4839 | 2026-06-09 | Betclic         | L   | 0.226      | -            | -                | -                | -         |    -4.10 | Altekz, k1to, L00m1, Marix, myltsi   |
|           21 |     4892 | 2026-06-07 | SPARTA          | W   | 0.212      | 0.435        | 0.003 (0.000)    | 0.522 (0.048)    | 0 (0.000) |     4.42 | Altekz, k1to, L00m1, Marix, myltsi   |
|           20 |     4905 | 2026-06-06 | Nuclear TigeRES | L   | 0.207      | -            | -                | -                | -         |    -0.32 | Altekz, k1to, L00m1, Marix, myltsi   |
|           19 |     4959 | 2026-06-04 | ex-RUBY         | L   | 0.194      | -            | -                | -                | -         |    -2.85 | Altekz, k1to, L00m1, Marix, myltsi   |
|           18 |     4993 | 2026-06-03 | ex-RUBY         | W   | 0.186      | 0.435        | 0.004 (0.000)    | 0.111 (0.009)    | 0 (0.000) |     3.16 | Altekz, k1to, L00m1, Marix, myltsi   |
|           17 |     5121 | 2026-05-29 | BBL             | L   | 0.154      | -            | -                | -                | -         |    -0.10 | Altekz, k1to, L00m1, Marix, myltsi   |
|           16 |     5146 | 2026-05-29 | Johnny Speeds   | L   | 0.152      | -            | -                | -                | -         |    -2.66 | Altekz, k1to, L00m1, Marix, myltsi   |
|           15 |     5176 | 2026-05-28 | Color           | W   | 0.147      | 0.384        | 0.033 (0.002)    | 0.543 (0.031)    | 0 (0.000) |     3.41 | Altekz, k1to, L00m1, Marix, myltsi   |
|           14 |     5258 | 2026-05-26 | Lazer Cats      | W   | 0.133      | 0.384        | 0.008 (0.000)    | 0.315 (0.016)    | 0 (0.000) |     3.80 | Altekz, k1to, L00m1, Marix, myltsi   |
|           13 |     5346 | 2026-05-24 | Banda Chuya     | W   | 0.119      | 0.384        | 0.010 (0.000)    | 0.647 (0.030)    | 0 (0.000) |     2.37 | Altekz, k1to, L00m1, Marix, myltsi   |
|           12 |     5394 | 2026-05-23 | Just Players    | L   | 0.112      | -            | -                | -                | -         |    -0.92 | Altekz, k1to, L00m1, Marix, myltsi   |
|           11 |     5441 | 2026-05-22 | PsychoFace      | W   | 0.106      | 0.435        | -                | 0.095 (0.004)    | 0 (0.000) |     1.93 | Altekz, k1to, L00m1, Marix, myltsi   |
|           10 |     5471 | 2026-05-21 | GenOne          | W   | 0.100      | 0.435        | 0.037 (0.002)    | 0.709 (0.031)    | 0 (0.000) |     3.00 | Altekz, k1to, L00m1, Marix, myltsi   |
|            9 |     5534 | 2026-05-20 | Falcons Force   | W   | 0.091      | 0.384        | 0.002 (0.000)    | 0.479 (0.017)    | 0 (0.000) |     2.34 | Altekz, k1to, L00m1, Marix, myltsi   |
|            8 |     5556 | 2026-05-19 | BRUTE           | L   | 0.085      | -            | -                | -                | -         |    -1.70 | Altekz, k1to, L00m1, Marix, myltsi   |
|            7 |     5575 | 2026-05-18 | megoshort       | W   | 0.079      | 0.435        | 0.002 (0.000)    | 0.379 (0.013)    | 0 (0.000) |     1.41 | Altekz, k1to, L00m1, Marix, myltsi   |
|            6 |     5659 | 2026-05-15 | SPARTA          | L   | 0.059      | -            | -                | -                | -         |    -0.59 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            5 |     5705 | 2026-05-13 | Betclic         | W   | 0.046      | -            | -                | -                | -         |     0.63 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            4 |     5785 | 2026-05-11 | Walczaki        | L   | 0.033      | -            | -                | -                | -         |    -0.33 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            3 |     5851 | 2026-05-09 | CYBERSHOKE      | L   | 0.020      | -            | -                | -                | -         |    -0.35 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            2 |     5886 | 2026-05-08 | MOUZ NXT        | L   | 0.012      | -            | -                | -                | -         |    -0.29 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            1 |     5902 | 2026-05-07 | BBL             | W   | 0.006      | 0.435        | 0.032 (0.000)    | -                | -         |     0.18 | Altekz, k1to, kyuubii, L00m1, myltsi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,142.77)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      0.355 | $2,500.00      | $887.07         |
| 2026-05-30 |      0.160 | $1,250.00      | $200.45         |
| 2026-05-10 |      0.028 | $2,000.00      | $55.26          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
