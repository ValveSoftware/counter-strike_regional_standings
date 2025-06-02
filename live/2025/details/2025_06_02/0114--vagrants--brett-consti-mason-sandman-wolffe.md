### Roster Details<br />
Team Name: Vagrants<br />
Roster: brett, consti, mason, Sandman, Wolffe<br />
Global Rank: [114](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  750.4<br />
<br />
Final Rank Value (750.4) = Starting Rank Value (781.4) + Head To Head Adjustments (-31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.143[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.4
- 400 + ( ( 0.208 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 781.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |        0 | 2025-06-01 | Akimbo             | W   | 1.000      | 0.303        | 0.007 (0.002)    | -                | 0 (0.000) |    11.37 | brett, consti, mason, Sandman, Wolffe |
|           46 |      445 | 2025-05-07 | Legacy             | L   | 1.000      | -            | -                | -                | -         |    -7.41 | brett, consti, mason, Sandman, Seb    |
|           45 |      474 | 2025-05-06 | Moneyball          | L   | 1.000      | -            | -                | -                | -         |    -8.33 | brett, consti, mason, Sandman, Seb    |
|           44 |      711 | 2025-04-26 | Ninjas in Pyjamas  | L   | 0.961      | -            | -                | -                | -         |    -2.40 | brett, consti, mason, Sandman, Seb    |
|           43 |      970 | 2025-04-13 | LOBOARMY           | L   | 0.874      | -            | -                | -                | -         |   -17.26 | brett, consti, mason, Sandman, Seb    |
|           42 |     1021 | 2025-04-10 | Bad News Capybaras | L   | 0.854      | -            | -                | -                | -         |   -17.17 | brett, consti, mason, Sandman, Seb    |
|           41 |     1032 | 2025-04-09 | Akimbo             | W   | 0.847      | 0.477        | 0.007 (0.003)    | 0.162 (0.065)    | 0 (0.000) |     8.91 | brett, consti, mason, Sandman, Seb    |
|           40 |     1038 | 2025-04-09 | Akimbo             | W   | 0.847      | 0.477        | 0.007 (0.003)    | -                | 0 (0.000) |     9.53 | brett, consti, mason, Sandman, Seb    |
|           39 |     1084 | 2025-04-08 | Fisher College     | L   | 0.840      | -            | -                | -                | -         |   -14.18 | brett, consti, mason, Sandman, Seb    |
|           38 |     1246 | 2025-04-02 | InControl          | W   | 0.800      | -            | -                | -                | 0 (0.000) |     4.74 | brett, consti, mason, Sandman, Seb    |
|           37 |     1253 | 2025-04-02 | InControl          | W   | 0.800      | -            | -                | -                | 0 (0.000) |     4.95 | brett, consti, mason, Sandman, Seb    |
|           36 |     1312 | 2025-04-01 | Moneyball          | L   | 0.794      | -            | -                | -                | -         |    -8.62 | brett, consti, mason, Sandman, Seb    |
|           35 |     1322 | 2025-04-01 | Moneyball          | L   | 0.793      | -            | -                | -                | -         |    -9.20 | brett, consti, mason, Sandman, Seb    |
|           34 |     1406 | 2025-03-29 | Mythic             | L   | 0.774      | -            | -                | -                | -         |   -19.83 | brett, consti, mason, Sandman, Seb    |
|           33 |     1416 | 2025-03-29 | Aether             | W   | 0.773      | -            | -                | -                | 0 (0.000) |     2.21 | brett, consti, mason, Sandman, Seb    |
|           32 |     1474 | 2025-03-28 | M80                | L   | 0.767      | -            | -                | -                | -         |    -6.68 | brett, consti, mason, Sandman, Seb    |
|           31 |     1546 | 2025-03-27 | Mythic             | W   | 0.760      | -            | -                | -                | 0 (0.000) |     3.71 | brett, consti, mason, Sandman, Seb    |
|           30 |     1609 | 2025-03-26 | Bad News Capybaras | W   | 0.754      | 0.477        | -                | 0.275 (0.099)    | 0 (0.000) |     7.94 | brett, consti, mason, Sandman, Seb    |
|           29 |     1615 | 2025-03-26 | Bad News Capybaras | W   | 0.754      | 0.477        | -                | 0.275 (0.099)    | 0 (0.000) |     8.43 | brett, consti, mason, Sandman, Seb    |
|           28 |     1655 | 2025-03-25 | LFO 4              | L   | 0.747      | -            | -                | -                | -         |    -8.84 | brett, consti, mason, Sandman, Seb    |
|           27 |     1660 | 2025-03-25 | LFO 4              | W   | 0.747      | 0.477        | 0.010 (0.003)    | 0.493 (0.176)    | 0 (0.000) |    15.08 | brett, consti, mason, Sandman, Seb    |
|           26 |     1851 | 2025-03-18 | SUPER EVIL GANG    | L   | 0.701      | -            | -                | -                | -         |   -15.78 | brett, Cyrix, mason, Sandman, Seb     |
|           25 |     1857 | 2025-03-18 | SUPER EVIL GANG    | W   | 0.700      | 0.477        | -                | 0.362 (0.121)    | -         |     6.22 | brett, Cyrix, mason, Sandman, Seb     |
|           24 |     2144 | 2025-03-08 | Fisher College     | L   | 0.633      | -            | -                | -                | -         |   -12.20 | brett, Cyrix, mason, Sandman, Seb     |
|           23 |     2218 | 2025-03-07 | Wildcard           | L   | 0.626      | -            | -                | -                | -         |    -5.48 | brett, Cyrix, mason, Sandman, Seb     |
|           22 |     2278 | 2025-03-06 | Marsborne          | W   | 0.620      | 0.143        | 0.019 (0.002)    | -                | -         |    11.79 | brett, Cyrix, mason, Sandman, Seb     |
|           21 |     2322 | 2025-03-05 | Akimbo             | W   | 0.614      | -            | -                | -                | -         |     6.81 | brett, Cyrix, mason, Sandman, Seb     |
|           20 |     2493 | 2025-02-26 | Getting Info       | W   | 0.567      | 0.477        | 0.014 (0.004)    | 0.568 (0.154)    | -         |    12.65 | brett, Cyrix, mason, Sandman, Seb     |
|           19 |     2499 | 2025-02-26 | Getting Info       | L   | 0.567      | -            | -                | -                | -         |    -5.23 | brett, Cyrix, mason, Sandman, Seb     |
|           18 |     2548 | 2025-02-25 | Marsborne          | W   | 0.561      | 0.477        | 0.019 (0.005)    | 0.633 (0.169)    | -         |    10.48 | brett, Cyrix, mason, Sandman, Seb     |
|           17 |     2554 | 2025-02-25 | Marsborne          | L   | 0.560      | -            | -                | -                | -         |    -7.29 | brett, Cyrix, mason, Sandman, Seb     |
|           16 |     2720 | 2025-02-19 | Legacy             | W   | 0.519      | 0.477        | 0.120 (0.030)    | 0.873 (0.216)    | -         |    12.30 | brett, Cyrix, mason, Sandman, Seb     |
|           15 |     2721 | 2025-02-19 | Legacy             | W   | 0.519      | 0.477        | 0.120 (0.030)    | 0.873 (0.216)    | -         |    12.71 | brett, Cyrix, mason, Sandman, Seb     |
|           14 |     2745 | 2025-02-18 | Worms              | L   | 0.514      | -            | -                | -                | -         |   -11.10 | brett, Cyrix, mason, Sandman, Seb     |
|           13 |     2749 | 2025-02-18 | Worms              | W   | 0.514      | -            | -                | -                | -         |     5.12 | brett, Cyrix, mason, Sandman, Seb     |
|           12 |     2957 | 2025-02-10 | Immigrants peek    | L   | 0.460      | -            | -                | -                | -         |   -10.65 | brett, Cyrix, mason, Sandman, Seb     |
|           11 |     3000 | 2025-02-09 | SUPER EVIL GANG    | W   | 0.452      | -            | -                | -                | -         |     5.38 | brett, Cyrix, mason, Sandman, Seb     |
|           10 |     3037 | 2025-02-08 | Moneyball          | L   | 0.446      | -            | -                | -                | -         |    -5.39 | brett, Cyrix, mason, Sandman, Seb     |
|            9 |     3046 | 2025-02-08 | Immigrants peek    | W   | 0.446      | -            | -                | -                | -         |     3.51 | brett, Cyrix, mason, Sandman, Seb     |
|            8 |     3193 | 2025-02-03 | BLUEJAYS           | L   | 0.414      | -            | -                | -                | -         |    -2.48 | brett, Cyrix, mason, Sandman, Seb     |
|            7 |     3194 | 2025-02-03 | BLUEJAYS           | L   | 0.414      | -            | -                | -                | -         |    -2.53 | brett, Cyrix, mason, Sandman, Seb     |
|            6 |     3258 | 2025-01-28 | NRG                | L   | 0.374      | -            | -                | -                | -         |    -2.28 | brett, Cyrix, mason, Sandman, Seb     |
|            5 |     3262 | 2025-01-28 | NRG                | W   | 0.374      | 0.477        | 0.095 (0.017)    | 0.628 (0.112)    | -         |     9.65 | brett, Cyrix, mason, Sandman, Seb     |
|            4 |     3297 | 2025-01-27 | Party Astronauts   | L   | 0.367      | -            | -                | -                | -         |    -7.02 | brett, Cyrix, mason, Sandman, Seb     |
|            3 |     3302 | 2025-01-27 | Party Astronauts   | W   | 0.367      | -            | -                | -                | -         |     4.63 | brett, Cyrix, mason, Sandman, Seb     |
|            2 |     3378 | 2025-01-23 | Chicken Coop       | L   | 0.341      | -            | -                | -                | -         |    -6.28 | brett, Cyrix, mason, Sandman, Seb     |
|            1 |     3383 | 2025-01-23 | Chicken Coop       | W   | 0.340      | -            | -                | -                | -         |     4.53 | brett, Cyrix, mason, Sandman, Seb     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,000.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-01 |      1.000 | $4,000.00      | $4,000.00       |
| 2025-05-11 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
