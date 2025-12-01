### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [83](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  1016.6<br />
<br />
Final Rank Value (1016.6) = Starting Rank Value (983.4) + Head To Head Adjustments (33.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.349[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 983.4
- 400 + ( ( 0.306 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 983.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |     1223 | 2025-10-19 | SkinRave          | L   | 0.916      | -            | -                | -                | -         |   -12.99 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           44 |     1239 | 2025-10-18 | Marsborne         | W   | 0.909      | 0.363        | 0.036 (0.012)    | 0.783 (0.258)    | 0 (0.000) |    17.29 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           43 |     1290 | 2025-10-16 | Voca              | W   | 0.896      | 0.363        | 0.030 (0.010)    | 0.520 (0.169)    | 0 (0.000) |     9.83 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           42 |     1328 | 2025-10-15 | regain            | W   | 0.889      | 0.363        | -                | 0.364 (0.117)    | 0 (0.000) |     6.19 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           41 |     1366 | 2025-10-14 | Marsborne         | L   | 0.883      | -            | -                | -                | -         |    -9.64 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           40 |     1539 | 2025-10-08 | Phoenix           | W   | 0.842      | -            | -                | -                | 0 (0.000) |     5.18 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           39 |     1653 | 2025-10-06 | Mythic            | W   | 0.829      | -            | -                | -                | 0 (0.000) |     3.38 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           38 |     1662 | 2025-10-06 | Zomblers          | L   | 0.828      | -            | -                | -                | -         |   -22.00 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           37 |     1777 | 2025-10-04 | OG                | L   | 0.815      | -            | -                | -                | -         |    -3.38 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           36 |     1792 | 2025-10-04 | CPH Wolves        | W   | 0.813      | 0.333        | -                | 0.772 (0.209)    | 1 (0.813) |    10.08 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           35 |     2111 | 2025-09-26 | Betclic           | L   | 0.761      | -            | -                | -                | -         |   -13.54 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           34 |     2131 | 2025-09-26 | Phantom           | L   | 0.759      | -            | -                | -                | -         |   -18.11 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           33 |     2141 | 2025-09-26 | MOUZ NXT          | W   | 0.758      | -            | -                | -                | 1 (0.758) |     6.40 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           32 |     2235 | 2025-09-22 | Marsborne         | W   | 0.736      | 0.363        | 0.036 (0.010)    | 0.783 (0.209)    | -         |    14.34 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           31 |     2253 | 2025-09-21 | Voca              | W   | 0.730      | 0.363        | 0.030 (0.008)    | 0.520 (0.138)    | -         |     6.74 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           30 |     2311 | 2025-09-19 | SkinRave          | W   | 0.716      | 0.363        | 0.048 (0.012)    | 0.531 (0.138)    | -         |    11.99 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           29 |     2345 | 2025-09-18 | Aether            | W   | 0.709      | -            | -                | -                | -         |     3.23 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           28 |     2377 | 2025-09-17 | Voca              | L   | 0.703      | -            | -                | -                | -         |   -15.53 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           27 |     2466 | 2025-09-14 | Marsborne         | L   | 0.683      | -            | -                | -                | -         |    -8.42 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           26 |     2473 | 2025-09-14 | BOSS              | W   | 0.681      | -            | -                | -                | -         |     4.93 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           25 |     2518 | 2025-09-13 | barry pickers     | W   | 0.675      | -            | -                | -                | -         |     0.64 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           24 |     2607 | 2025-09-11 | Akimbo            | W   | 0.662      | -            | -                | -                | -         |     2.68 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           23 |     2711 | 2025-09-09 | Nocturnal         | W   | 0.649      | -            | -                | -                | -         |     2.47 | JBa, Peeping, phzy, Sonic, stanislaw  |
|           22 |     2806 | 2025-09-07 | ODDIK             | W   | 0.635      | 0.333        | 0.026 (0.005)    | -                | 1 (0.635) |    13.74 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           21 |     2811 | 2025-09-07 | Ninjas in Pyjamas | L   | 0.634      | -            | -                | -                | -         |    -2.57 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           20 |     2826 | 2025-09-06 | Fluxo             | W   | 0.629      | 0.333        | 0.040 (0.008)    | 0.622 (0.130)    | 1 (0.629) |    16.83 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           19 |     2841 | 2025-09-06 | powerFinesse      | W   | 0.627      | -            | -                | -                | 1 (0.627) |     0.71 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           18 |     2943 | 2025-08-30 | Voca              | L   | 0.582      | -            | -                | -                | -         |   -12.72 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           17 |     3021 | 2025-08-28 | regain            | W   | 0.568      | -            | -                | -                | -         |     3.45 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           16 |     3148 | 2025-08-21 | Voca              | W   | 0.522      | 0.333        | 0.030 (0.005)    | -                | -         |     4.86 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           15 |     3205 | 2025-08-19 | BOSS              | W   | 0.509      | -            | -                | -                | -         |     3.72 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           14 |     3270 | 2025-08-16 | Voca              | L   | 0.489      | -            | -                | -                | -         |   -11.38 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           13 |     3315 | 2025-08-15 | NRG               | L   | 0.482      | -            | -                | -                | -         |    -2.81 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           12 |     3366 | 2025-08-14 | M80               | W   | 0.475      | 0.333        | 0.069 (0.011)    | 0.663 (0.105)    | -         |    13.48 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           11 |     3412 | 2025-08-13 | TSG               | W   | 0.469      | -            | -                | -                | -         |     1.10 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           10 |     3465 | 2025-08-12 | Phoenix           | W   | 0.462      | -            | -                | -                | -         |     3.02 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            9 |     3709 | 2025-08-01 | M80               | L   | 0.389      | -            | -                | -                | -         |    -1.23 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            8 |     3721 | 2025-08-01 | Marsborne         | L   | 0.387      | -            | -                | -                | -         |    -3.80 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            7 |     3735 | 2025-07-31 | NRG               | W   | 0.383      | 0.616        | 0.039 (0.009)    | 0.620 (0.146)    | -         |    10.10 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            6 |     3745 | 2025-07-30 | LAG               | W   | 0.375      | -            | -                | -                | -         |     0.47 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            5 |     3797 | 2025-07-27 | SkinRave          | L   | 0.355      | -            | -                | -                | -         |    -6.18 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            4 |     3833 | 2025-07-26 | MIGHT             | W   | 0.349      | -            | -                | -                | -         |     0.62 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|            3 |     4638 | 2025-06-06 | Legacy            | L   | 0.014      | -            | -                | -                | -         |    -0.00 | JBa, phzy, Sonic, stanislaw, susp     |
|            2 |     4647 | 2025-06-05 | BetBoom           | L   | 0.008      | -            | -                | -                | -         |    -0.01 | JBa, phzy, Sonic, stanislaw, susp     |
|            1 |     4662 | 2025-06-04 | B8                | L   | 0.001      | -            | -                | -                | -         |    -0.00 | JBa, phzy, Sonic, stanislaw, susp     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,782.23)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.916 | $4,000.00      | $3,664.48       |
| 2025-10-08 |      0.842 | $250.00        | $210.50         |
| 2025-09-22 |      0.736 | $8,000.00      | $5,887.41       |
| 2025-09-14 |      0.683 | $1,000.00      | $682.62         |
| 2025-09-07 |      0.636 | $1,300.00      | $826.60         |
| 2025-09-02 |      0.603 | $1,000.00      | $602.76         |
| 2025-08-15 |      0.482 | $2,000.00      | $964.35         |
| 2025-08-01 |      0.389 | $5,000.00      | $1,943.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
