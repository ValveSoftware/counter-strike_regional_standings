### Roster Details<br />
Team Name: Limitless<br />
Roster: Cyrix, DJF, Sandman, Seb, Tender<br />
Global Rank: [143](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_11_25.md)<br />
Regional Rank: [33]( ../../standings_americas_2024_11_25.md)<br />
<br />
Final Rank Value:  749.3<br />
<br />
Final Rank Value (749.3) = Starting Rank Value (801.4) + Head To Head Adjustments (-52.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 801.4
- 400 + ( ( 0.201 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 801.4


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
|           36 |      959 | 2024-10-09 | timbermen        | L   | 0.890      | -            | -                | -                | -         |    -9.77 | Cyrix, DJF, Sandman, Seb, Tender |
|           35 |      965 | 2024-10-09 | timbermen        | W   | 0.890      | 0.477        | 0.016 (0.007)    | 0.368 (0.156)    | 0 (0.000) |    18.70 | Cyrix, DJF, Sandman, Seb, Tender |
|           34 |      994 | 2024-10-08 | Mythic           | W   | 0.884      | 0.477        | 0.001 (0.000)    | 0.166 (0.070)    | 0 (0.000) |    11.13 | Cyrix, DJF, Sandman, Seb, Tender |
|           33 |     1000 | 2024-10-08 | Mythic           | W   | 0.883      | 0.477        | 0.001 (0.000)    | 0.166 (0.070)    | 0 (0.000) |    12.01 | Cyrix, DJF, Sandman, Seb, Tender |
|           32 |     1157 | 2024-10-03 | Legacy           | L   | 0.850      | -            | -                | -                | -         |    -2.02 | Cyrix, DJF, Sandman, Seb, Tender |
|           31 |     1163 | 2024-10-03 | Legacy           | L   | 0.850      | -            | -                | -                | -         |    -2.06 | Cyrix, DJF, Sandman, Seb, Tender |
|           30 |     1234 | 2024-10-01 | Take Flyte       | W   | 0.837      | 0.477        | 0.003 (0.001)    | 0.193 (0.077)    | 0 (0.000) |    13.47 | Cyrix, DJF, Sandman, Seb, Tender |
|           29 |     1239 | 2024-10-01 | Take Flyte       | L   | 0.837      | -            | -                | -                | -         |   -13.04 | Cyrix, DJF, Sandman, Seb, Tender |
|           28 |     1464 | 2024-09-25 | BOSS             | L   | 0.797      | -            | -                | -                | -         |    -7.37 | Andrew, Cyrix, DJF, Sandman, Seb |
|           27 |     1468 | 2024-09-25 | BOSS             | W   | 0.797      | 0.477        | 0.031 (0.012)    | 0.353 (0.134)    | 0 (0.000) |    18.20 | Andrew, Cyrix, DJF, Sandman, Seb |
|           26 |     1598 | 2024-09-22 | jahsdnmasjdm     | L   | 0.776      | -            | -                | -                | -         |   -18.01 | Andrew, Cyrix, DJF, Sandman, Seb |
|           25 |     1674 | 2024-09-19 | Revenge Nation   | L   | 0.756      | -            | -                | -                | -         |   -13.49 | Andrew, Cyrix, DJF, Sandman, Seb |
|           24 |     1792 | 2024-09-15 | Aether           | W   | 0.730      | 0.371        | 0.000 (0.000)    | 0.085 (0.023)    | 0 (0.000) |     4.31 | Andrew, Cyrix, DJF, Sandman, Seb |
|           23 |     1998 | 2024-09-08 | Nouns            | L   | 0.682      | -            | -                | -                | -         |    -3.37 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           22 |     2014 | 2024-09-07 | LAG              | W   | 0.677      | 0.333        | 0.004 (0.001)    | 0.198 (0.045)    | 1 (0.677) |     9.73 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           21 |     2031 | 2024-09-07 | Kraken           | W   | 0.675      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.675) |     2.90 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           20 |     2120 | 2024-09-04 | Revenge Nation   | W   | 0.657      | 0.477        | 0.004 (0.001)    | 0.209 (0.065)    | 0 (0.000) |    10.16 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           19 |     2127 | 2024-09-04 | Revenge Nation   | L   | 0.657      | -            | -                | -                | -         |   -10.75 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           18 |     2433 | 2024-08-26 | Akimbo           | L   | 0.597      | -            | -                | -                | -         |    -9.38 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           17 |     2448 | 2024-08-26 | timbermen        | L   | 0.595      | -            | -                | -                | -         |    -5.00 | Cyrix, DJF, Sandman, Seb, Wolffe |
|           16 |     2723 | 2024-08-19 | Priority         | L   | 0.549      | -            | -                | -                | -         |   -13.98 | Aureo, DJF, Sandman, Seb, Wolffe |
|           15 |     2857 | 2024-08-14 | undefined        | L   | 0.517      | -            | -                | -                | -         |    -9.08 | DJF, Seb, Tender, wiz, Wolffe    |
|           14 |     2872 | 2024-08-13 | FLUFFY AIMERS    | W   | 0.510      | 0.477        | 0.015 (0.004)    | 0.447 (0.109)    | 0 (0.000) |     8.41 | DJF, Seb, Tender, wiz, Wolffe    |
|           13 |     2875 | 2024-08-13 | FLUFFY AIMERS    | L   | 0.510      | -            | -                | -                | -         |    -7.83 | DJF, Seb, Tender, wiz, Wolffe    |
|           12 |     3323 | 2024-07-31 | M80              | L   | 0.424      | -            | -                | -                | -         |    -0.44 | DJF, Seb, Tender, wiz, Wolffe    |
|           11 |     3329 | 2024-07-31 | M80              | L   | 0.423      | -            | -                | -                | -         |    -0.44 | DJF, Seb, Tender, wiz, Wolffe    |
|           10 |     3570 | 2024-07-24 | LAG              | L   | 0.377      | -            | -                | -                | -         |    -6.17 | DJF, Seb, Tender, wiz, Wolffe    |
|            9 |     3574 | 2024-07-24 | LAG              | L   | 0.377      | -            | -                | -                | -         |    -6.37 | DJF, Seb, Tender, wiz, Wolffe    |
|            8 |     3602 | 2024-07-23 | Nouns            | L   | 0.370      | -            | -                | -                | -         |    -2.51 | DJF, Seb, Tender, wiz, Wolffe    |
|            7 |     3604 | 2024-07-23 | Nouns            | L   | 0.370      | -            | -                | -                | -         |    -2.56 | DJF, Seb, Tender, wiz, Wolffe    |
|            6 |     3836 | 2024-07-17 | Wildcard         | L   | 0.330      | -            | -                | -                | -         |    -0.98 | DJF, Seb, Tender, wiz, Wolffe    |
|            5 |     3839 | 2024-07-17 | Wildcard         | L   | 0.330      | -            | -                | -                | -         |    -0.99 | DJF, Seb, Tender, wiz, Wolffe    |
|            4 |     3895 | 2024-07-16 | Party Astronauts | L   | 0.323      | -            | -                | -                | -         |    -4.20 | DJF, Seb, Tender, wiz, Wolffe    |
|            3 |     3899 | 2024-07-16 | Party Astronauts | L   | 0.323      | -            | -                | -                | -         |    -4.32 | DJF, Seb, Tender, wiz, Wolffe    |
|            2 |     3946 | 2024-07-15 | NRG              | L   | 0.317      | -            | -                | -                | -         |    -3.48 | DJF, Seb, Tender, wiz, Wolffe    |
|            1 |     3949 | 2024-07-15 | NRG              | L   | 0.317      | -            | -                | -                | -         |    -3.57 | DJF, Seb, Tender, wiz, Wolffe    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,839.82)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.963 | $1,200.00      | $1,155.99       |
| 2024-09-08 |      0.684 | $1,000.00      | $683.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
