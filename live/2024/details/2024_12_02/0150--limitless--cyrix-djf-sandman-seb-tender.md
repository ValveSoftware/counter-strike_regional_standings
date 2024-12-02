### Roster Details<br />
Team Name: Limitless<br />
Roster: Cyrix, DJF, Sandman, Seb, Tender<br />
Global Rank: [150](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [36]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  745.6<br />
<br />
Final Rank Value (745.6) = Starting Rank Value (792.6) + Head To Head Adjustments (-47.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.6
- 400 + ( ( 0.196 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 792.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1092 | 2024-10-09 | timbermen        | L   | 0.843      | -            | -                | -                | -         |    -9.46 | Cyrix, DJF, Sandman, Seb, Tender |
|           35 |     1098 | 2024-10-09 | timbermen        | W   | 0.843      | 0.477        | 0.016 (0.006)    | 0.355 (0.143)    | 0 (0.000) |    17.50 | Cyrix, DJF, Sandman, Seb, Tender |
|           34 |     1127 | 2024-10-08 | Mythic           | W   | 0.836      | 0.477        | 0.000 (0.000)    | 0.157 (0.063)    | 0 (0.000) |    10.38 | Cyrix, DJF, Sandman, Seb, Tender |
|           33 |     1133 | 2024-10-08 | Mythic           | W   | 0.836      | 0.477        | 0.000 (0.000)    | 0.157 (0.063)    | 0 (0.000) |    11.14 | Cyrix, DJF, Sandman, Seb, Tender |
|           32 |     1290 | 2024-10-03 | Legacy           | L   | 0.803      | -            | -                | -                | -         |    -2.00 | Cyrix, DJF, Sandman, Seb, Tender |
|           31 |     1296 | 2024-10-03 | Legacy           | L   | 0.803      | -            | -                | -                | -         |    -2.04 | Cyrix, DJF, Sandman, Seb, Tender |
|           30 |     1367 | 2024-10-01 | Take Flyte       | W   | 0.790      | 0.477        | 0.003 (0.001)    | 0.185 (0.070)    | 0 (0.000) |    12.60 | Cyrix, DJF, Sandman, Seb, Tender |
|           29 |     1372 | 2024-10-01 | Take Flyte       | L   | 0.789      | -            | -                | -                | -         |   -12.45 | Cyrix, DJF, Sandman, Seb, Tender |
|           28 |     1597 | 2024-09-25 | BOSS             | L   | 0.749      | -            | -                | -                | -         |    -7.03 | Andrew, Cyrix, DJF, Sandman, Seb |
|           27 |     1601 | 2024-09-25 | BOSS             | W   | 0.749      | 0.477        | 0.031 (0.011)    | 0.350 (0.125)    | 0 (0.000) |    17.02 | Andrew, Cyrix, DJF, Sandman, Seb |
|           26 |     1731 | 2024-09-22 | jahsdnmasjdm     | L   | 0.729      | -            | -                | -                | -         |   -16.97 | Andrew, Cyrix, DJF, Sandman, Seb |
|           25 |     1807 | 2024-09-19 | Revenge Nation   | L   | 0.709      | -            | -                | -                | -         |   -12.64 | Andrew, Cyrix, DJF, Sandman, Seb |
|           24 |     1925 | 2024-09-15 | Aether           | W   | 0.682      | 0.371        | 0.000 (0.000)    | 0.084 (0.021)    | 0 (0.000) |     4.10 | Andrew, Cyrix, DJF, Sandman, Seb |
|           23 |     2131 | 2024-09-08 | Nouns            | L   | 0.635      | -            | -                | -                | -         |    -3.27 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           22 |     2147 | 2024-09-07 | LAG              | W   | 0.630      | 0.333        | 0.004 (0.001)    | 0.191 (0.040)    | 1 (0.630) |     9.00 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           21 |     2164 | 2024-09-07 | Kraken           | W   | 0.627      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.627) |     2.71 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           20 |     2253 | 2024-09-04 | Revenge Nation   | W   | 0.610      | 0.477        | 0.004 (0.001)    | 0.205 (0.060)    | 0 (0.000) |     9.38 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           19 |     2260 | 2024-09-04 | Revenge Nation   | L   | 0.609      | -            | -                | -                | -         |   -10.04 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           18 |     2566 | 2024-08-26 | Akimbo           | L   | 0.550      | -            | -                | -                | -         |    -8.77 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           17 |     2581 | 2024-08-26 | timbermen        | L   | 0.548      | -            | -                | -                | -         |    -4.88 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           16 |     2856 | 2024-08-19 | Priority         | L   | 0.502      | -            | -                | -                | -         |   -12.76 | Aureo, DJF, Sandman, Seb, Wolffe |
|           15 |     2990 | 2024-08-14 | undefined        | L   | 0.470      | -            | -                | -                | -         |    -8.27 | DJF, Seb, Tender, wiz, Wolffe    |
|           14 |     3005 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.463      | 0.477        | 0.015 (0.003)    | 0.435 (0.096)    | 0 (0.000) |     7.65 | DJF, Seb, Tender, wiz, Wolffe    |
|           13 |     3008 | 2024-08-13 | FLUFFY AIMERS    | L   | 0.463      | -            | -                | -                | -         |    -7.08 | DJF, Seb, Tender, wiz, Wolffe    |
|           12 |     3456 | 2024-07-31 | M80              | L   | 0.376      | -            | -                | -                | -         |    -0.42 | DJF, Seb, Tender, wiz, Wolffe    |
|           11 |     3462 | 2024-07-31 | M80              | L   | 0.376      | -            | -                | -                | -         |    -0.42 | DJF, Seb, Tender, wiz, Wolffe    |
|           10 |     3703 | 2024-07-24 | LAG              | L   | 0.330      | -            | -                | -                | -         |    -5.46 | DJF, Seb, Tender, wiz, Wolffe    |
|            9 |     3707 | 2024-07-24 | LAG              | L   | 0.329      | -            | -                | -                | -         |    -5.62 | DJF, Seb, Tender, wiz, Wolffe    |
|            8 |     3735 | 2024-07-23 | Nouns            | L   | 0.323      | -            | -                | -                | -         |    -2.26 | DJF, Seb, Tender, wiz, Wolffe    |
|            7 |     3737 | 2024-07-23 | Nouns            | L   | 0.323      | -            | -                | -                | -         |    -2.31 | DJF, Seb, Tender, wiz, Wolffe    |
|            6 |     3969 | 2024-07-17 | Wildcard         | L   | 0.283      | -            | -                | -                | -         |    -0.47 | DJF, Seb, Tender, wiz, Wolffe    |
|            5 |     3972 | 2024-07-17 | Wildcard         | L   | 0.282      | -            | -                | -                | -         |    -0.47 | DJF, Seb, Tender, wiz, Wolffe    |
|            4 |     4028 | 2024-07-16 | Party Astronauts | L   | 0.276      | -            | -                | -                | -         |    -3.67 | DJF, Seb, Tender, wiz, Wolffe    |
|            3 |     4032 | 2024-07-16 | Party Astronauts | L   | 0.276      | -            | -                | -                | -         |    -3.75 | DJF, Seb, Tender, wiz, Wolffe    |
|            2 |     4079 | 2024-07-15 | NRG              | L   | 0.270      | -            | -                | -                | -         |    -2.94 | DJF, Seb, Tender, wiz, Wolffe    |
|            1 |     4082 | 2024-07-15 | NRG              | L   | 0.269      | -            | -                | -                | -         |    -3.01 | DJF, Seb, Tender, wiz, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,735.55)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.916 | $1,200.00      | $1,099.11       |
| 2024-09-08 |      0.636 | $1,000.00      | $636.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
