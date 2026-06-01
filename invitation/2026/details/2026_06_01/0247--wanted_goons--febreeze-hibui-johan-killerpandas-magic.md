### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, hibui, Johan, killerPandas, Magic<br />
Global Rank: [247](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [59]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  660.0<br />
<br />
Final Rank Value (660.0) = Starting Rank Value (646.1) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.259[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.1
- 400 + ( ( 0.129 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 646.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       30 | 2026-05-30 | LAG          | L   | 1.000      | -            | -                | -                | -         |    -4.52 | febreeze, hibui, Johan, killerPandas, Magic   |
|           19 |       34 | 2026-05-30 | NineFly      | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.49 | febreeze, hibui, Johan, killerPandas, Magic   |
|           18 |       40 | 2026-05-30 | Reign Above  | L   | 1.000      | -            | -                | -                | -         |   -14.39 | febreeze, hibui, Johan, killerPandas, Magic   |
|           17 |     1101 | 2026-04-28 | regain       | L   | 0.976      | -            | -                | -                | -         |    -9.10 | febreeze, hibui, Johan, killerPandas, Magic   |
|           16 |     1138 | 2026-04-27 | EMPIRE       | W   | 0.970      | 0.363        | 0.002 (0.001)    | 0.213 (0.075)    | 0 (0.000) |    17.84 | febreeze, hibui, Johan, killerPandas, Magic   |
|           15 |     1189 | 2026-04-26 | Wildcard     | L   | 0.962      | -            | -                | -                | -         |    -0.45 | febreeze, hibui, Johan, killerPandas, Magic   |
|           14 |     2451 | 2026-03-28 | BOSS         | L   | 0.769      | -            | -                | -                | -         |    -5.20 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           13 |     2472 | 2026-03-28 | EMPIRE       | W   | 0.768      | 0.354        | 0.002 (0.001)    | 0.213 (0.058)    | 1 (0.768) |    16.07 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           12 |     2492 | 2026-03-28 | Zealous      | W   | 0.767      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.767) |     4.70 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           11 |     2502 | 2026-03-28 | EMPIRE       | L   | 0.766      | -            | -                | -                | -         |    -7.78 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           10 |     2729 | 2026-03-23 | F5           | L   | 0.737      | -            | -                | -                | -         |    -5.60 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            9 |     2808 | 2026-03-22 | Zomblers     | W   | 0.730      | 0.363        | 0.012 (0.003)    | 0.436 (0.115)    | 0 (0.000) |    14.77 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            8 |     2849 | 2026-03-21 | FlyQuest RED | W   | 0.723      | 0.363        | 0.000 (0.000)    | 0.034 (0.009)    | 0 (0.000) |     9.24 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            7 |     2911 | 2026-03-20 | LAG          | L   | 0.717      | -            | -                | -                | -         |    -1.22 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            6 |     3103 | 2026-03-16 | EMPIRE       | L   | 0.690      | -            | -                | -                | -         |    -7.38 | Jbreezy, JDubs, Johan, killerPandas, Magic    |
|            5 |     3147 | 2026-03-15 | Desi Boyz    | W   | 0.683      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.33 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            4 |     3489 | 2026-03-08 | LAG          | L   | 0.636      | -            | -                | -                | -         |    -1.15 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            3 |     6029 | 2025-12-10 | Outfit 49    | L   | 0.050      | -            | -                | -                | -         |    -1.24 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            2 |     6058 | 2025-12-08 | Outfit 49    | L   | 0.036      | -            | -                | -                | -         |    -0.60 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            1 |     6147 | 2025-12-04 | Aether       | W   | 0.010      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.07 | febreeze, Jbreezy, Johan, killerPandas, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
