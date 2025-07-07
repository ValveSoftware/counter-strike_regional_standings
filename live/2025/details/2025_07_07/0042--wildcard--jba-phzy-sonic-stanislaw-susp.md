### Roster Details<br />
Team Name: Wildcard<br />
Roster: JBa, phzy, Sonic, stanislaw, susp<br />
Global Rank: [42](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  1047.4<br />
<br />
Final Rank Value (1047.4) = Starting Rank Value (984.2) + Head To Head Adjustments (63.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.447[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.080[<sup>2</sup>](#table1)
- LAN Wins: 0.341[<sup>2</sup>](#table1)

The average of these factors is 0.313<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 984.2
- 400 + ( ( 0.313 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 984.2


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
|           37 |      368 | 2025-06-06 | Legacy         | L   | 0.994      | -            | -                | -                | -         |    -7.92 | JBa, phzy, Sonic, stanislaw, susp     |
|           36 |      377 | 2025-06-05 | BetBoom        | L   | 0.988      | -            | -                | -                | -         |   -11.36 | JBa, phzy, Sonic, stanislaw, susp     |
|           35 |      392 | 2025-06-04 | B8             | L   | 0.980      | -            | -                | -                | -         |    -5.28 | JBa, phzy, Sonic, stanislaw, susp     |
|           34 |      406 | 2025-06-03 | Lynn Vision    | W   | 0.975      | 0.143        | 0.176 (0.025)    | 0.660 (0.092)    | 1 (0.975) |    25.90 | JBa, phzy, Sonic, stanislaw, susp     |
|           33 |      412 | 2025-06-03 | Metizport      | W   | 0.974      | 0.143        | 0.027 (0.004)    | 0.504 (0.070)    | 1 (0.974) |    11.89 | JBa, phzy, Sonic, stanislaw, susp     |
|           32 |      689 | 2025-05-15 | Legacy         | L   | 0.849      | -            | -                | -                | -         |    -6.29 | JBa, phzy, Sonic, stanislaw, susp     |
|           31 |      712 | 2025-05-14 | anything else  | W   | 0.842      | 0.384        | 0.004 (0.001)    | 0.099 (0.032)    | 0 (0.000) |     3.15 | JBa, phzy, Sonic, stanislaw, susp     |
|           30 |     1051 | 2025-05-02 | Spirit         | L   | 0.760      | -            | -                | -                | -         |    -0.26 | JBa, phzy, Sonic, stanislaw, susp     |
|           29 |     1086 | 2025-05-01 | paiN           | W   | 0.751      | 0.687        | 0.292 (0.150)    | 0.325 (0.168)    | 1 (0.751) |    21.95 | JBa, phzy, Sonic, stanislaw, susp     |
|           28 |     1099 | 2025-04-30 | Vitality       | L   | 0.746      | -            | -                | -                | -         |    -0.07 | JBa, phzy, Sonic, stanislaw, susp     |
|           27 |     1213 | 2025-04-26 | HEROIC         | L   | 0.718      | -            | -                | -                | -         |    -1.17 | JBa, phzy, Sonic, stanislaw, susp     |
|           26 |     1229 | 2025-04-25 | 500            | W   | 0.712      | 0.548        | 0.036 (0.014)    | 0.516 (0.201)    | 0 (0.000) |     8.38 | JBa, phzy, Sonic, stanislaw, susp     |
|           25 |     1243 | 2025-04-24 | BetBoom        | L   | 0.706      | -            | -                | -                | -         |    -6.83 | JBa, phzy, Sonic, stanislaw, susp     |
|           24 |     1377 | 2025-04-16 | NRG            | W   | 0.655      | 0.143        | 0.068 (0.006)    | 0.595 (0.056)    | 0 (0.000) |    12.01 | JBa, phzy, Sonic, stanislaw, susp     |
|           23 |     1404 | 2025-04-15 | Marsborne      | W   | 0.648      | 0.143        | 0.013 (0.001)    | 0.486 (0.045)    | 0 (0.000) |     5.44 | JBa, phzy, Sonic, stanislaw, susp     |
|           22 |     1831 | 2025-03-31 | M80            | L   | 0.549      | -            | -                | -                | -         |    -9.35 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           21 |     1844 | 2025-03-30 | MIGHT          | W   | 0.543      | -            | -                | -                | 0 (0.000) |     2.52 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           20 |     1890 | 2025-03-29 | MIGHT          | W   | 0.535      | -            | -                | -                | -         |     2.45 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           19 |     1948 | 2025-03-28 | Chicken Coop   | W   | 0.529      | -            | -                | -                | -         |     2.28 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           18 |     2023 | 2025-03-27 | Daaku          | W   | 0.522      | -            | -                | -                | -         |     0.95 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           17 |     2508 | 2025-03-10 | Complexity     | L   | 0.409      | -            | -                | -                | -         |    -2.50 | JBa, phzy, Sonic, stanislaw, susp     |
|           16 |     2549 | 2025-03-09 | BLUEJAYS       | W   | 0.402      | 0.143        | 0.031 (0.002)    | 0.600 (0.034)    | -         |     3.57 | JBa, phzy, Sonic, stanislaw, susp     |
|           15 |     2614 | 2025-03-08 | Fisher College | W   | 0.395      | -            | -                | -                | -         |     2.00 | JBa, phzy, Sonic, stanislaw, susp     |
|           14 |     2694 | 2025-03-07 | LAG            | W   | 0.388      | 0.143        | -                | 0.456 (0.025)    | -         |     2.84 | JBa, phzy, Sonic, stanislaw, susp     |
|           13 |     2764 | 2025-03-06 | MCS            | W   | 0.381      | -            | -                | -                | -         |     0.69 | JBa, phzy, Sonic, stanislaw, susp     |
|           12 |     2820 | 2025-03-05 | Davai Napadai  | W   | 0.374      | -            | -                | -                | -         |     0.41 | JBa, phzy, Sonic, stanislaw, susp     |
|           11 |     3279 | 2025-02-17 | BIG            | L   | 0.265      | -            | -                | -                | -         |    -1.80 | JBa, phzy, Sonic, stanislaw, susp     |
|           10 |     3292 | 2025-02-16 | Virtus.pro     | L   | 0.258      | -            | -                | -                | -         |    -0.32 | JBa, phzy, Sonic, stanislaw, susp     |
|            9 |     3327 | 2025-02-15 | The MongolZ    | L   | 0.252      | -            | -                | -                | -         |    -0.06 | JBa, phzy, Sonic, stanislaw, susp     |
|            8 |     3351 | 2025-02-14 | MIBR           | W   | 0.246      | 1.000        | 0.185 (0.046)    | 0.313 (0.077)    | 1 (0.246) |     6.65 | JBa, phzy, Sonic, stanislaw, susp     |
|            7 |     3708 | 2025-01-31 | Liquid         | L   | 0.154      | -            | -                | -                | -         |    -0.65 | JBa, phzy, Sonic, stanislaw, susp     |
|            6 |     3711 | 2025-01-31 | FURIA          | L   | 0.153      | -            | -                | -                | -         |    -0.11 | JBa, phzy, Sonic, stanislaw, susp     |
|            5 |     3726 | 2025-01-29 | BIG            | W   | 0.139      | 0.143        | 0.175 (0.003)    | -                | 1 (0.139) |     3.51 | JBa, phzy, Sonic, stanislaw, susp     |
|            4 |     3966 | 2025-01-15 | Astralis       | L   | 0.045      | -            | -                | -                | -         |    -0.07 | JBa, phzy, Sonic, stanislaw, susp     |
|            3 |     3972 | 2025-01-12 | 9 Pandas       | W   | 0.026      | -            | -                | -                | -         |     0.28 | JBa, phzy, Sonic, stanislaw, susp     |
|            2 |     3975 | 2025-01-11 | SINNERS        | W   | 0.020      | -            | -                | -                | -         |     0.31 | JBa, phzy, Sonic, stanislaw, susp     |
|            1 |     3979 | 2025-01-10 | Insilio        | W   | 0.014      | -            | -                | -                | -         |     0.02 | JBa, phzy, Sonic, stanislaw, susp     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,872.97)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      0.774 | $25,000.00     | $19,341.57      |
| 2025-04-27 |      0.726 | $3,500.00      | $2,542.63       |
| 2025-02-23 |      0.308 | $18,750.00     | $5,768.77       |
| 2025-01-31 |      0.154 | $4,500.00      | $691.80         |
| 2025-01-12 |      0.026 | $20,000.00     | $528.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
