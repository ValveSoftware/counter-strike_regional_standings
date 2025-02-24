### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [83](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_24.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_02_24.md)<br />
<br />
Final Rank Value:  812.9<br />
<br />
Final Rank Value (812.9) = Starting Rank Value (793.3) + Head To Head Adjustments (19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.154[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.3
- 400 + ( ( 0.207 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 793.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      284 | 2025-02-10 | MIGHT              | L   | 1.000      | -            | -                | -                | -         |   -19.57 | ben1337, FaNg, ogwizard, viz, Walco        |
|           37 |      330 | 2025-02-09 | Chicken Coop       | W   | 1.000      | 0.143        | 0.006 (0.001)    | -                | 0 (0.000) |     7.66 | ben1337, FaNg, ogwizard, viz, Walco        |
|           36 |      354 | 2025-02-08 | Akimbo             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.39 | ben1337, FaNg, ogwizard, viz, Walco        |
|           35 |      362 | 2025-02-08 | Chill Guys         | W   | 1.000      | 0.143        | -                | 0.181 (0.026)    | 0 (0.000) |     8.86 | ben1337, FaNg, ogwizard, viz, Walco        |
|           34 |      377 | 2025-02-08 | MIGHT              | W   | 1.000      | 0.143        | -                | 0.293 (0.042)    | 0 (0.000) |    11.80 | ben1337, FaNg, ogwizard, viz, Walco        |
|           33 |      790 | 2024-12-15 | NRG                | L   | 0.726      | -            | -                | -                | -         |    -5.21 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           32 |      811 | 2024-12-14 | FLUFFY AIMERS      | W   | 0.721      | 0.303        | 0.005 (0.001)    | 0.243 (0.053)    | 0 (0.000) |    10.85 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           31 |      927 | 2024-12-07 | FLUFFY AIMERS      | L   | 0.675      | -            | -                | -                | -         |   -11.08 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           30 |      933 | 2024-12-07 | Anti-Eco Club      | W   | 0.674      | -            | -                | -                | 1 (0.674) |     2.52 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           29 |      937 | 2024-12-07 | Nouns              | L   | 0.673      | -            | -                | -                | -         |    -9.26 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           28 |      968 | 2024-12-06 | Take Flyte Kings   | W   | 0.668      | -            | -                | -                | 1 (0.668) |     1.95 | ben1337, FaNg, Infinite, ogwizard, viz     |
|           27 |     1227 | 2024-11-23 | timbermen          | L   | 0.581      | -            | -                | -                | -         |   -11.53 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           26 |     2003 | 2024-10-18 | NRG                | L   | 0.341      | -            | -                | -                | -         |    -3.05 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           25 |     2032 | 2024-10-17 | Nouns              | W   | 0.335      | 0.477        | 0.006 (0.001)    | 0.153 (0.024)    | 0 (0.000) |     4.41 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           24 |     2062 | 2024-10-16 | Familia Maquininha | W   | 0.328      | 0.477        | 0.003 (0.000)    | -                | 0 (0.000) |     3.23 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           23 |     2091 | 2024-10-15 | NRG                | L   | 0.321      | -            | -                | -                | -         |    -2.88 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           22 |     2197 | 2024-10-09 | Wildcard           | W   | 0.279      | 0.477        | 0.165 (0.022)    | 0.579 (0.077)    | 0 (0.000) |     7.97 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           21 |     2198 | 2024-10-09 | Wildcard           | W   | 0.279      | 0.477        | 0.165 (0.022)    | 0.579 (0.077)    | -         |     8.03 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           20 |     2218 | 2024-10-08 | Chill Guys         | W   | 0.274      | 0.477        | -                | 0.181 (0.024)    | -         |     2.41 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           19 |     2223 | 2024-10-08 | Chill Guys         | W   | 0.274      | -            | -                | -                | -         |     2.46 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           18 |     2327 | 2024-10-05 | BOSS               | L   | 0.253      | -            | -                | -                | -         |    -2.99 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           17 |     2395 | 2024-10-03 | timbermen          | W   | 0.241      | 0.477        | 0.011 (0.001)    | 0.232 (0.027)    | -         |     3.05 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           16 |     2398 | 2024-10-03 | timbermen          | L   | 0.241      | -            | -                | -                | -         |    -4.62 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           15 |     2402 | 2024-10-03 | Nouns              | W   | 0.241      | 0.371        | 0.006 (0.001)    | -                | -         |     3.17 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           14 |     2477 | 2024-10-01 | M80                | L   | 0.228      | -            | -                | -                | -         |    -2.40 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           13 |     2482 | 2024-10-01 | M80                | W   | 0.228      | 0.477        | 0.040 (0.004)    | 0.496 (0.054)    | -         |     4.85 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           12 |     2551 | 2024-09-29 | Undone             | W   | 0.215      | -            | -                | -                | -         |     3.04 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           11 |     2615 | 2024-09-27 | Marca Registrada   | L   | 0.201      | -            | -                | -                | -         |    -5.37 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|           10 |     2619 | 2024-09-27 | Aether             | W   | 0.200      | -            | -                | -                | -         |     0.92 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            9 |     2712 | 2024-09-25 | Familia Maquininha | W   | 0.188      | -            | -                | -                | -         |     1.97 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            8 |     2717 | 2024-09-25 | Familia Maquininha | W   | 0.188      | -            | -                | -                | -         |     2.00 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            7 |     2770 | 2024-09-24 | BOSS               | L   | 0.181      | -            | -                | -                | -         |    -2.10 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            6 |     2774 | 2024-09-24 | BOSS               | W   | 0.181      | 0.477        | 0.014 (0.001)    | 0.428 (0.037)    | -         |     3.65 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            5 |     2883 | 2024-09-21 | NRG                | L   | 0.160      | -            | -                | -                | -         |    -1.16 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            4 |     2965 | 2024-09-18 | Legacy             | L   | 0.141      | -            | -                | -                | -         |    -1.86 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            3 |     2968 | 2024-09-18 | Legacy             | L   | 0.141      | -            | -                | -                | -         |    -1.88 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            2 |     3003 | 2024-09-17 | Mythic             | W   | 0.135      | -            | -                | -                | -         |     0.66 | ben1337, FaNg, Infinite, ogwizard, Peeping |
|            1 |     3006 | 2024-09-17 | Mythic             | W   | 0.134      | -            | -                | -                | -         |     0.66 | ben1337, FaNg, Infinite, ogwizard, Peeping |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,862.01)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.354 | $7,000.00      | $2,479.75       |
| 2024-10-05 |      0.255 | $1,500.00      | $382.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
