### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [187](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [42]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  735.8<br />
<br />
Final Rank Value (735.8) = Starting Rank Value (707.7) + Head To Head Adjustments (28.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.7
- 400 + ( ( 0.163 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 707.7


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
|           27 |     3563 | 2025-10-19 | Rave              | L   | 0.310      | -            | -                | -                | -         |    -3.26 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           26 |     3579 | 2025-10-18 | Marsborne         | W   | 0.302      | 0.363        | 0.050 (0.006)    | 0.556 (0.061)    | 0 (0.000) |     8.79 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           25 |     3630 | 2025-10-16 | Voca              | W   | 0.290      | 0.363        | 0.016 (0.002)    | 0.162 (0.017)    | 0 (0.000) |     4.73 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           24 |     3668 | 2025-10-15 | regain            | W   | 0.283      | 0.363        | 0.007 (0.001)    | 0.318 (0.033)    | 0 (0.000) |     4.25 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           23 |     3706 | 2025-10-14 | Marsborne         | L   | 0.276      | -            | -                | -                | -         |    -0.61 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           22 |     3879 | 2025-10-08 | ex-Chicken Coop   | W   | 0.236      | -            | -                | -                | 0 (0.000) |     1.76 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           21 |     3993 | 2025-10-06 | Mythic            | W   | 0.223      | 0.363        | -                | 0.112 (0.009)    | 0 (0.000) |     2.97 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           20 |     4002 | 2025-10-06 | Zomblers          | L   | 0.222      | -            | -                | -                | -         |    -3.54 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           19 |     4117 | 2025-10-04 | OG                | L   | 0.208      | -            | -                | -                | -         |    -1.51 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           18 |     4132 | 2025-10-04 | CPH Wolves        | W   | 0.206      | 0.333        | -                | 0.335 (0.023)    | 1 (0.206) |     3.60 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           17 |     4451 | 2025-09-26 | Betclic           | L   | 0.154      | -            | -                | -                | -         |    -2.90 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           16 |     4471 | 2025-09-26 | Phantom           | L   | 0.153      | -            | -                | -                | -         |    -2.73 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           15 |     4481 | 2025-09-26 | MOUZ NXT          | W   | 0.152      | 0.354        | 0.034 (0.002)    | 1.000 (0.054)    | 1 (0.152) |     4.62 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           14 |     4575 | 2025-09-22 | Marsborne         | W   | 0.129      | 0.363        | 0.050 (0.002)    | 0.556 (0.026)    | -         |     3.81 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           13 |     4593 | 2025-09-21 | Voca              | W   | 0.123      | 0.363        | 0.016 (0.001)    | 0.162 (0.007)    | -         |     1.99 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           12 |     4651 | 2025-09-19 | Rave              | W   | 0.109      | 0.363        | 0.042 (0.002)    | 0.376 (0.015)    | -         |     2.36 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           11 |     4685 | 2025-09-18 | Aether            | W   | 0.102      | -            | -                | -                | -         |     1.18 | F1KU, JBa, Peeping, phzy, stanislaw  |
|           10 |     4717 | 2025-09-17 | Voca              | L   | 0.096      | -            | -                | -                | -         |    -1.47 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            9 |     4806 | 2025-09-14 | Marsborne         | L   | 0.076      | -            | -                | -                | -         |    -0.16 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            8 |     4813 | 2025-09-14 | BOSS              | W   | 0.074      | 0.303        | 0.017 (0.000)    | 0.457 (0.010)    | -         |     1.47 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            7 |     4858 | 2025-09-13 | barry pickers     | W   | 0.068      | -            | -                | -                | -         |     0.32 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            6 |     4947 | 2025-09-11 | Akimbo            | W   | 0.056      | -            | -                | -                | -         |     0.39 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            5 |     5051 | 2025-09-09 | Nocturnal         | W   | 0.042      | -            | -                | -                | -         |     0.49 | JBa, Peeping, phzy, Sonic, stanislaw |
|            4 |     5146 | 2025-09-07 | ODDIK             | W   | 0.028      | 0.333        | 0.051 (0.000)    | -                | 1 (0.028) |     0.81 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            3 |     5151 | 2025-09-07 | Ninjas in Pyjamas | L   | 0.027      | -            | -                | -                | -         |    -0.03 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            2 |     5166 | 2025-09-06 | Fluxo             | W   | 0.022      | 0.333        | 0.033 (0.000)    | -                | 1 (0.022) |     0.66 | F1KU, JBa, Peeping, phzy, stanislaw  |
|            1 |     5181 | 2025-09-06 | powerFinesse      | W   | 0.021      | -            | -                | -                | 1 (0.021) |     0.10 | F1KU, JBa, Peeping, phzy, stanislaw  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,446.84)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.310 | $4,000.00      | $1,238.42       |
| 2025-10-08 |      0.235 | $250.00        | $58.87          |
| 2025-09-22 |      0.129 | $8,000.00      | $1,035.30       |
| 2025-09-14 |      0.076 | $1,000.00      | $76.11          |
| 2025-09-07 |      0.029 | $1,300.00      | $38.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
