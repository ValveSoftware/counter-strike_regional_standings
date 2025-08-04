### Roster Details<br />
Team Name: Wildcard<br />
Roster: fr3nd, JBa, Peeping, Sonic, stanislaw<br />
Global Rank: [49](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  1002.3<br />
<br />
Final Rank Value (1002.3) = Starting Rank Value (956.8) + Head To Head Adjustments (45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.458[<sup>1</sup>](#table2)
- Bounty Collected: 0.371[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.244[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.8
- 400 + ( ( 0.294 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 956.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       15 | 2025-08-01 | M80            | L   | 1.000      | -            | -                | -                | -         |    -8.02 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           37 |       24 | 2025-08-01 | Marsborne      | L   | 1.000      | -            | -                | -                | -         |   -19.35 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           36 |       34 | 2025-07-31 | NRG            | W   | 1.000      | 0.384        | 0.059 (0.023)    | 0.686 (0.264)    | 0 (0.000) |    20.90 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           35 |       37 | 2025-07-30 | LAG            | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.485 (0.186)    | 0 (0.000) |     7.12 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           34 |       69 | 2025-07-27 | BLUEJAYS       | L   | 1.000      | -            | -                | -                | -         |   -17.29 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           33 |      102 | 2025-07-26 | MIGHT          | W   | 1.000      | 0.303        | -                | 0.279 (0.085)    | 0 (0.000) |     2.87 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           32 |      289 | 2025-07-16 | FURIA          | L   | 1.000      | -            | -                | -                | -         |    -0.82 | fr3nd, JBa, Peeping, Sonic, susp      |
|           31 |      307 | 2025-07-15 | GamerLegion    | L   | 1.000      | -            | -                | -                | -         |    -1.25 | fr3nd, JBa, Peeping, Sonic, susp      |
|           30 |      895 | 2025-06-06 | Legacy         | L   | 0.808      | -            | -                | -                | -         |    -5.53 | JBa, phzy, Sonic, stanislaw, susp     |
|           29 |      904 | 2025-06-05 | BetBoom        | L   | 0.801      | -            | -                | -                | -         |    -4.55 | JBa, phzy, Sonic, stanislaw, susp     |
|           28 |      919 | 2025-06-04 | B8             | L   | 0.794      | -            | -                | -                | -         |    -4.79 | JBa, phzy, Sonic, stanislaw, susp     |
|           27 |      933 | 2025-06-03 | Lynn Vision    | W   | 0.788      | 0.143        | 0.274 (0.031)    | 0.639 (0.072)    | 1 (0.788) |    23.10 | JBa, phzy, Sonic, stanislaw, susp     |
|           26 |      939 | 2025-06-03 | Metizport      | W   | 0.787      | 0.143        | 0.027 (0.003)    | 0.487 (0.055)    | 1 (0.787) |     9.47 | JBa, phzy, Sonic, stanislaw, susp     |
|           25 |     1216 | 2025-05-15 | Legacy         | L   | 0.663      | -            | -                | -                | -         |    -4.28 | JBa, phzy, Sonic, stanislaw, susp     |
|           24 |     1239 | 2025-05-14 | anything else  | W   | 0.656      | 0.384        | 0.003 (0.001)    | 0.123 (0.031)    | 0 (0.000) |     2.66 | JBa, phzy, Sonic, stanislaw, susp     |
|           23 |     1578 | 2025-05-02 | Spirit         | L   | 0.574      | -            | -                | -                | -         |    -0.09 | JBa, phzy, Sonic, stanislaw, susp     |
|           22 |     1613 | 2025-05-01 | paiN           | W   | 0.565      | 0.687        | 0.299 (0.116)    | 0.368 (0.143)    | 1 (0.565) |    16.92 | JBa, phzy, Sonic, stanislaw, susp     |
|           21 |     1626 | 2025-04-30 | Vitality       | L   | 0.560      | -            | -                | -                | -         |    -0.05 | JBa, phzy, Sonic, stanislaw, susp     |
|           20 |     1740 | 2025-04-26 | HEROIC         | L   | 0.532      | -            | -                | -                | -         |    -0.97 | JBa, phzy, Sonic, stanislaw, susp     |
|           19 |     1756 | 2025-04-25 | 500            | W   | 0.526      | 0.548        | 0.025 (0.007)    | 0.348 (0.100)    | 0 (0.000) |     5.09 | JBa, phzy, Sonic, stanislaw, susp     |
|           18 |     1770 | 2025-04-24 | BetBoom        | L   | 0.520      | -            | -                | -                | -         |    -1.98 | JBa, phzy, Sonic, stanislaw, susp     |
|           17 |     1904 | 2025-04-16 | NRG            | W   | 0.469      | 0.143        | 0.059 (0.004)    | 0.686 (0.046)    | 0 (0.000) |    10.22 | JBa, phzy, Sonic, stanislaw, susp     |
|           16 |     1931 | 2025-04-15 | Marsborne      | W   | 0.462      | 0.143        | -                | 0.608 (0.040)    | -         |     5.68 | JBa, phzy, Sonic, stanislaw, susp     |
|           15 |     2358 | 2025-03-31 | M80            | L   | 0.362      | -            | -                | -                | -         |    -2.47 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           14 |     2371 | 2025-03-30 | MIGHT          | W   | 0.356      | -            | -                | -                | -         |     1.82 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           13 |     2417 | 2025-03-29 | MIGHT          | W   | 0.349      | -            | -                | -                | -         |     1.77 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           12 |     2475 | 2025-03-28 | Chicken Coop   | W   | 0.343      | -            | -                | -                | -         |     1.72 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           11 |     2550 | 2025-03-27 | Daaku          | W   | 0.336      | -            | -                | -                | -         |     0.72 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           10 |     3035 | 2025-03-10 | Complexity     | L   | 0.223      | -            | -                | -                | -         |    -0.74 | JBa, phzy, Sonic, stanislaw, susp     |
|            9 |     3076 | 2025-03-09 | BLUEJAYS       | W   | 0.216      | 0.143        | 0.036 (0.001)    | -                | -         |     3.57 | JBa, phzy, Sonic, stanislaw, susp     |
|            8 |     3141 | 2025-03-08 | Fisher College | W   | 0.209      | -            | -                | -                | -         |     0.49 | JBa, phzy, Sonic, stanislaw, susp     |
|            7 |     3221 | 2025-03-07 | LAG            | W   | 0.202      | -            | -                | -                | -         |     1.88 | JBa, phzy, Sonic, stanislaw, susp     |
|            6 |     3291 | 2025-03-06 | MCS            | W   | 0.195      | -            | -                | -                | -         |     0.38 | JBa, phzy, Sonic, stanislaw, susp     |
|            5 |     3347 | 2025-03-05 | Davai Napadai  | W   | 0.187      | -            | -                | -                | -         |     0.25 | JBa, phzy, Sonic, stanislaw, susp     |
|            4 |     3806 | 2025-02-17 | BIG            | L   | 0.079      | -            | -                | -                | -         |    -0.46 | JBa, phzy, Sonic, stanislaw, susp     |
|            3 |     3819 | 2025-02-16 | Virtus.pro     | L   | 0.072      | -            | -                | -                | -         |    -0.11 | JBa, phzy, Sonic, stanislaw, susp     |
|            2 |     3854 | 2025-02-15 | The MongolZ    | L   | 0.066      | -            | -                | -                | -         |    -0.01 | JBa, phzy, Sonic, stanislaw, susp     |
|            1 |     3878 | 2025-02-14 | MIBR           | W   | 0.060      | 1.000        | 0.196 (0.012)    | -                | 1 (0.060) |     1.60 | JBa, phzy, Sonic, stanislaw, susp     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,852.63)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-01 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-05-04 |      0.587 | $25,000.00     | $14,685.30      |
| 2025-04-27 |      0.540 | $3,500.00      | $1,890.76       |
| 2025-02-23 |      0.121 | $18,750.00     | $2,276.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
