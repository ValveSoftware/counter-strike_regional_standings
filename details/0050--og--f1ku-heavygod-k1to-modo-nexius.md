### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, HeavyGod, k1to, MoDo, Nexius<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [50](../standings_global.md)<br />
Regional Rank: [37]( ../standings_europe.md)<br />
Final Rank Value:  1057.0<br />
<br />
Final Rank Value (1057.0) = Starting Rank Value (1047.7) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.565[<sup>1</sup>](#table2)
- Bounty Collected: 0.455[<sup>2</sup>](#table1)
- Opponent Network: 0.108[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1047.7
- 400 + ( ( 0.320 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1047.7


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
|           23 |     1271 | 2024-05-30 | Chinggis Warriors | L   | 0.832      | -            | -                | -                | -         |   -23.17 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           22 |     1299 | 2024-05-29 | ATOX              | L   | 0.824      | -            | -                | -                | -         |   -19.32 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           21 |     1558 | 2024-05-19 | paiN              | L   | 0.758      | -            | -                | -                | -         |    -3.17 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           20 |     1566 | 2024-05-18 | Liquid            | L   | 0.754      | -            | -                | -                | -         |    -2.71 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           19 |     2030 | 2024-05-01 | Insilio           | L   | 0.640      | -            | -                | -                | -         |   -14.37 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           18 |     2059 | 2024-04-30 | Sashi             | L   | 0.633      | -            | -                | -                | -         |    -8.13 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           17 |     2279 | 2024-04-20 | MIBR              | L   | 0.566      | -            | -                | -                | -         |    -1.89 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           16 |     2297 | 2024-04-19 | 9z                | W   | 0.562      | 0.589        | 0.511 (0.169)    | 0.671 (0.222)    | 1 (0.562) |    16.65 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           15 |     2307 | 2024-04-19 | Monte             | W   | 0.561      | 0.589        | 0.083 (0.027)    | 0.210 (0.069)    | 1 (0.561) |     7.58 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           14 |     2352 | 2024-04-18 | MIBR              | L   | 0.554      | -            | -                | -                | -         |    -1.91 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           13 |     2481 | 2024-04-14 | Aurora            | L   | 0.526      | -            | -                | -                | -         |    -1.12 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           12 |     2490 | 2024-04-13 | BetBoom           | W   | 0.520      | 0.684        | 0.333 (0.118)    | 0.642 (0.228)    | 0 (0.000) |    14.58 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           11 |     2499 | 2024-04-13 | BIG               | W   | 0.519      | 0.684        | 0.173 (0.061)    | 0.347 (0.123)    | 0 (0.000) |    12.34 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|           10 |     2511 | 2024-04-12 | Ninjas in Pyjamas | W   | 0.512      | 0.684        | 0.287 (0.101)    | 0.537 (0.188)    | 0 (0.000) |    15.60 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            9 |     2582 | 2024-04-10 | ENCE              | W   | 0.499      | 0.684        | 0.171 (0.058)    | 0.380 (0.130)    | 0 (0.000) |    13.56 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            8 |     2662 | 2024-04-08 | Aurora            | L   | 0.487      | -            | -                | -                | -         |    -0.75 | F1KU, HeavyGod, k1to, MoDo, Nexius   |
|            7 |     3283 | 2024-03-10 | SAW               | L   | 0.293      | -            | -                | -                | -         |    -2.79 | F1KU, k1to, Nexius, regali, s0und    |
|            6 |     3309 | 2024-03-09 | HEROIC            | W   | 0.286      | 0.535        | 0.272 (0.042)    | 0.404 (0.062)    | 0 (0.000) |     8.64 | F1KU, HeavyGod, k1to, Nexius, regali |
|            5 |     3348 | 2024-03-07 | Complexity        | W   | 0.274      | 0.535        | 0.405 (0.059)    | 0.378 (0.055)    | 0 (0.000) |     8.41 | F1KU, HeavyGod, k1to, Nexius, regali |
|            4 |     3692 | 2024-02-21 | GamerLegion       | L   | 0.172      | -            | -                | -                | -         |    -4.07 | F1KU, HeavyGod, k1to, Nexius, regali |
|            3 |     3725 | 2024-02-20 | Gaimin Gladiators | L   | 0.165      | -            | -                | -                | -         |    -2.71 | F1KU, HeavyGod, k1to, Nexius, regali |
|            2 |     3743 | 2024-02-19 | ex-Preasy         | W   | 0.160      | 0.143        | 0.020 (0.000)    | 0.163 (0.004)    | 1 (0.160) |     1.11 | F1KU, HeavyGod, k1to, Nexius, regali |
|            1 |     3750 | 2024-02-19 | Apeks             | L   | 0.158      | -            | -                | -                | -         |    -3.09 | F1KU, HeavyGod, k1to, Nexius, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,857.94)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-02 |      0.647 | $1,000.00      | $646.62         |
| 2024-04-20 |      0.568 | $10,000.00     | $5,679.65       |
| 2024-04-14 |      0.526 | $70,000.00     | $36,854.71      |
| 2024-03-10 |      0.294 | $12,500.00     | $3,676.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
