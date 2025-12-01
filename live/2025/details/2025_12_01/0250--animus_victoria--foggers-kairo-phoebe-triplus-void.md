### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, kairo, phoebe, TRIPLUS, void<br />
Global Rank: [250](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [36]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  531.4<br />
<br />
Final Rank Value (531.4) = Starting Rank Value (523.6) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.6
- 400 + ( ( 0.065 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 523.6


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
|           20 |      259 | 2025-11-20 | LITE              | L   | 1.000      | -            | -                | -                | -         |   -12.75 | foggers, kairo, phoebe, TRIPLUS, void |
|           19 |      279 | 2025-11-18 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |   -10.57 | foggers, kairo, phoebe, TRIPLUS, void |
|           18 |      302 | 2025-11-16 | Time Waves        | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.038 (0.012)    | 0 (0.000) |    13.22 | foggers, kairo, phoebe, TRIPLUS, void |
|           17 |     1057 | 2025-10-25 | Mindfreak         | L   | 0.952      | -            | -                | -                | -         |    -6.26 | foggers, gump, kairo, phoebe, void    |
|           16 |     1127 | 2025-10-24 | Underground       | W   | 0.945      | 0.278        | 0.001 (0.000)    | 0.162 (0.042)    | 0 (0.000) |    21.90 | foggers, gump, kairo, phoebe, void    |
|           15 |     1172 | 2025-10-23 | SemperFi          | L   | 0.938      | -            | -                | -                | -         |    -3.70 | foggers, gump, kairo, phoebe, void    |
|           14 |     1638 | 2025-10-07 | FURY              | L   | 0.832      | -            | -                | -                | -         |   -14.25 | foggers, kairo, Kobe, phoebe, TRIPLUS |
|           13 |     1704 | 2025-10-06 | Mindfreak         | L   | 0.825      | -            | -                | -                | -         |    -4.97 | foggers, kairo, phoebe, TRIPLUS, void |
|           12 |     1767 | 2025-10-05 | Rooster           | W   | 0.818      | 0.278        | 0.011 (0.003)    | 0.231 (0.053)    | 0 (0.000) |    19.50 | foggers, kairo, phoebe, TRIPLUS, void |
|           11 |     2103 | 2025-09-27 | Aura              | L   | 0.764      | -            | -                | -                | -         |   -16.39 | foggers, kairo, phoebe, TRIPLUS, void |
|           10 |     2105 | 2025-09-26 | Mindfreak         | L   | 0.763      | -            | -                | -                | -         |    -4.14 | foggers, kairo, phoebe, TRIPLUS, void |
|            9 |     2803 | 2025-09-08 | KZG               | L   | 0.637      | -            | -                | -                | -         |    -8.28 | foggers, gump, Kobe, TRIPLUS, void    |
|            8 |     2822 | 2025-09-07 | SemperFi          | L   | 0.632      | -            | -                | -                | -         |    -4.62 | foggers, gump, Kobe, TRIPLUS, void    |
|            7 |     2902 | 2025-09-03 | KZG               | W   | 0.605      | 0.314        | 0.000 (0.000)    | 0.140 (0.027)    | 0 (0.000) |    11.15 | foggers, gump, Kobe, TRIPLUS, void    |
|            6 |     2920 | 2025-09-01 | Mindfreak         | W   | 0.591      | 0.314        | 0.005 (0.001)    | 0.471 (0.087)    | 0 (0.000) |    16.17 | foggers, gump, Kobe, TRIPLUS, void    |
|            5 |     4030 | 2025-07-16 | Ground Zero       | L   | 0.278      | -            | -                | -                | -         |    -2.43 | foggers, gump, Kobe, TRIPLUS, void    |
|            4 |     4075 | 2025-07-14 | Mindfreak         | W   | 0.264      | 0.314        | 0.005 (0.000)    | 0.471 (0.039)    | 0 (0.000) |     7.41 | foggers, gump, Kobe, TRIPLUS, void    |
|            3 |     4110 | 2025-07-12 | Rooster           | L   | 0.252      | -            | -                | -                | -         |    -2.12 | foggers, gump, Kobe, TRIPLUS, void    |
|            2 |     4207 | 2025-07-09 | Mindfreak         | W   | 0.231      | 0.314        | 0.005 (0.000)    | 0.471 (0.034)    | 0 (0.000) |     6.58 | foggers, gump, Kobe, TRIPLUS, void    |
|            1 |     4230 | 2025-07-07 | LE-LUX            | W   | 0.218      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.29 | foggers, gump, Kobe, TRIPLUS, void    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
