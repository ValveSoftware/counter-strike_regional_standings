### Roster Details<br />
Team Name: Wildcard<br />
Roster: fr3nd, JBa, Peeping, Sonic, stanislaw<br />
Global Rank: [62](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_09_01.md)<br />
Regional Rank: [13]( ../../standings_americas_2025_09_01.md)<br />
<br />
Final Rank Value:  987.1<br />
<br />
Final Rank Value (987.1) = Starting Rank Value (962.0) + Head To Head Adjustments (25.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.293<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 962.0
- 400 + ( ( 0.293 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 962.0


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
|           38 |      270 | 2025-08-16 | Getting Info   | L   | 1.000      | -            | -                | -                | -         |   -23.95 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           37 |      306 | 2025-08-15 | NRG            | L   | 1.000      | -            | -                | -                | -         |    -9.88 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           36 |      347 | 2025-08-14 | M80            | W   | 1.000      | 0.333        | 0.125 (0.042)    | 0.822 (0.274)    | 0 (0.000) |    23.76 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           35 |      428 | 2025-08-12 | Chicken Coop   | W   | 1.000      | 0.333        | -                | 0.337 (0.112)    | 0 (0.000) |     7.28 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           34 |      656 | 2025-08-01 | M80            | L   | 0.996      | -            | -                | -                | -         |    -7.79 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           33 |      668 | 2025-08-01 | Marsborne      | L   | 0.994      | -            | -                | -                | -         |   -19.29 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           32 |      682 | 2025-07-31 | NRG            | W   | 0.990      | 0.384        | 0.073 (0.028)    | 0.735 (0.280)    | 0 (0.000) |    21.63 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           31 |      692 | 2025-07-30 | LAG            | W   | 0.982      | 0.384        | 0.015 (0.006)    | 0.542 (0.205)    | 0 (0.000) |     7.01 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           30 |      744 | 2025-07-27 | BLUEJAYS       | L   | 0.962      | -            | -                | -                | -         |   -15.35 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           29 |      780 | 2025-07-26 | MIGHT          | W   | 0.956      | -            | -                | -                | 0 (0.000) |     2.77 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           28 |      979 | 2025-07-16 | FURIA          | L   | 0.885      | -            | -                | -                | -         |    -0.63 | fr3nd, JBa, Peeping, Sonic, susp      |
|           27 |      997 | 2025-07-15 | GamerLegion    | L   | 0.879      | -            | -                | -                | -         |    -1.75 | fr3nd, JBa, Peeping, Sonic, susp      |
|           26 |     1585 | 2025-06-06 | Legacy         | L   | 0.621      | -            | -                | -                | -         |    -3.52 | JBa, phzy, Sonic, stanislaw, susp     |
|           25 |     1594 | 2025-06-05 | BetBoom        | L   | 0.615      | -            | -                | -                | -         |    -2.12 | JBa, phzy, Sonic, stanislaw, susp     |
|           24 |     1609 | 2025-06-04 | B8             | L   | 0.608      | -            | -                | -                | -         |    -2.87 | JBa, phzy, Sonic, stanislaw, susp     |
|           23 |     1623 | 2025-06-03 | Lynn Vision    | W   | 0.602      | 0.624        | 0.252 (0.095)    | 0.612 (0.230)    | 1 (0.602) |    18.02 | JBa, phzy, Sonic, stanislaw, susp     |
|           22 |     1629 | 2025-06-03 | Metizport      | W   | 0.601      | 0.624        | 0.017 (0.006)    | 0.489 (0.183)    | 1 (0.601) |     7.57 | JBa, phzy, Sonic, stanislaw, susp     |
|           21 |     1906 | 2025-05-15 | Legacy         | L   | 0.476      | -            | -                | -                | -         |    -2.59 | JBa, phzy, Sonic, stanislaw, susp     |
|           20 |     1929 | 2025-05-14 | anything else  | W   | 0.469      | -            | -                | -                | 0 (0.000) |     1.79 | JBa, phzy, Sonic, stanislaw, susp     |
|           19 |     2268 | 2025-05-02 | Spirit         | L   | 0.387      | -            | -                | -                | -         |    -0.04 | JBa, phzy, Sonic, stanislaw, susp     |
|           18 |     2303 | 2025-05-01 | paiN           | W   | 0.379      | 0.687        | 0.233 (0.060)    | 0.330 (0.086)    | 1 (0.379) |    11.22 | JBa, phzy, Sonic, stanislaw, susp     |
|           17 |     2316 | 2025-04-30 | Vitality       | L   | 0.373      | -            | -                | -                | -         |    -0.04 | JBa, phzy, Sonic, stanislaw, susp     |
|           16 |     2430 | 2025-04-26 | HEROIC         | L   | 0.345      | -            | -                | -                | -         |    -0.38 | JBa, phzy, Sonic, stanislaw, susp     |
|           15 |     2446 | 2025-04-25 | 500            | W   | 0.339      | 0.548        | 0.011 (0.002)    | 0.444 (0.083)    | 0 (0.000) |     3.51 | JBa, phzy, Sonic, stanislaw, susp     |
|           14 |     2460 | 2025-04-24 | BetBoom        | L   | 0.333      | -            | -                | -                | -         |    -0.78 | JBa, phzy, Sonic, stanislaw, susp     |
|           13 |     2594 | 2025-04-16 | NRG            | W   | 0.283      | 0.525        | 0.073 (0.011)    | 0.735 (0.109)    | -         |     6.55 | JBa, phzy, Sonic, stanislaw, susp     |
|           12 |     2621 | 2025-04-15 | Marsborne      | W   | 0.275      | 0.525        | 0.010 (0.001)    | 0.608 (0.088)    | -         |     3.25 | JBa, phzy, Sonic, stanislaw, susp     |
|           11 |     3048 | 2025-03-31 | M80            | L   | 0.176      | -            | -                | -                | -         |    -1.27 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           10 |     3061 | 2025-03-30 | MIGHT          | W   | 0.170      | -            | -                | -                | -         |     0.78 | JBa, Sonic, stanislaw, Stewie2K, susp |
|            9 |     3107 | 2025-03-29 | MIGHT          | W   | 0.162      | -            | -                | -                | -         |     0.74 | JBa, Sonic, stanislaw, Stewie2K, susp |
|            8 |     3165 | 2025-03-28 | Chicken Coop   | W   | 0.156      | -            | -                | -                | -         |     0.70 | JBa, Sonic, stanislaw, Stewie2K, susp |
|            7 |     3240 | 2025-03-27 | Daaku          | W   | 0.149      | -            | -                | -                | -         |     0.34 | JBa, Sonic, stanislaw, Stewie2K, susp |
|            6 |     3725 | 2025-03-10 | Passion UA     | L   | 0.036      | -            | -                | -                | -         |    -0.21 | JBa, phzy, Sonic, stanislaw, susp     |
|            5 |     3766 | 2025-03-09 | BLUEJAYS       | W   | 0.029      | 0.769        | 0.040 (0.001)    | -                | -         |     0.52 | JBa, phzy, Sonic, stanislaw, susp     |
|            4 |     3831 | 2025-03-08 | Fisher College | W   | 0.022      | -            | -                | -                | -         |     0.05 | JBa, phzy, Sonic, stanislaw, susp     |
|            3 |     3911 | 2025-03-07 | Vagrants       | W   | 0.015      | -            | -                | -                | -         |     0.06 | JBa, phzy, Sonic, stanislaw, susp     |
|            2 |     3981 | 2025-03-06 | MCS            | W   | 0.009      | -            | -                | -                | -         |     0.01 | JBa, phzy, Sonic, stanislaw, susp     |
|            1 |     4037 | 2025-03-05 | Davai Napadai  | W   | 0.001      | -            | -                | -                | -         |     0.00 | JBa, phzy, Sonic, stanislaw, susp     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,805.95)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-08-01 |      0.996 | $5,000.00      | $4,978.78       |
| 2025-07-20 |      0.914 | $5,000.00      | $4,568.10       |
| 2025-05-04 |      0.401 | $25,000.00     | $10,021.28      |
| 2025-04-27 |      0.354 | $3,500.00      | $1,237.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
