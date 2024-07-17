### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  781.5<br />
<br />
Final Rank Value (781.5) = Starting Rank Value (716.0) + Head To Head Adjustments (65.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.0
- 400 + ( ( 0.147 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 716.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       68 | 2024-07-16 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -9.67 | gump, pain, Sliimey, supar, tucks    |
|           31 |       71 | 2024-07-16 | Rooster            | L   | 1.000      | -            | -                | -                | -         |   -10.45 | gump, pain, Sliimey, supar, tucks    |
|           30 |      635 | 2024-06-08 | FlyQuest           | L   | 0.938      | -            | -                | -                | -         |    -1.44 | gump, pain, Sliimey, supar, tucks    |
|           29 |      692 | 2024-06-07 | Bad News Kangaroos | W   | 0.931      | 0.333        | 0.004 (0.001)    | 0.107 (0.033)    | 0 (0.000) |    11.88 | gump, pain, Sliimey, supar, tucks    |
|           28 |      756 | 2024-06-06 | Vantage            | W   | 0.925      | 0.333        | 0.003 (0.001)    | 0.113 (0.035)    | 0 (0.000) |    10.11 | gump, pain, Sliimey, supar, tucks    |
|           27 |     1168 | 2024-05-22 | FlyQuest           | L   | 0.825      | -            | -                | -                | -         |    -0.92 | gump, pain, Sliimey, supar, tucks    |
|           26 |     1172 | 2024-05-22 | FlyQuest           | L   | 0.825      | -            | -                | -                | -         |    -0.92 | gump, pain, Sliimey, supar, tucks    |
|           25 |     1618 | 2024-05-08 | Arcade             | W   | 0.732      | 0.333        | 0.004 (0.001)    | 0.110 (0.027)    | 0 (0.000) |     7.90 | gump, pain, Sliimey, supar, tucks    |
|           24 |     1620 | 2024-05-08 | Arcade             | W   | 0.731      | 0.333        | 0.004 (0.001)    | 0.110 (0.027)    | 0 (0.000) |     8.38 | gump, pain, Sliimey, supar, tucks    |
|           23 |     1950 | 2024-04-22 | Vantage            | W   | 0.625      | 0.333        | -                | 0.113 (0.023)    | 0 (0.000) |     8.09 | gump, pain, Sliimey, supar, tucks    |
|           22 |     1953 | 2024-04-22 | Vantage            | W   | 0.625      | 0.333        | -                | 0.113 (0.023)    | 0 (0.000) |     8.53 | gump, pain, Sliimey, supar, tucks    |
|           21 |     2050 | 2024-04-19 | Bad News Kangaroos | L   | 0.605      | -            | -                | -                | -         |    -7.23 | gump, pain, Sliimey, supar, tucks    |
|           20 |     2054 | 2024-04-19 | FlyQuest           | L   | 0.604      | -            | -                | -                | -         |    -0.72 | gump, pain, Sliimey, supar, tucks    |
|           19 |     2106 | 2024-04-18 | DXA                | W   | 0.598      | 0.143        | -                | 0.187 (0.016)    | 0 (0.000) |     7.39 | gump, pain, Sliimey, supar, tucks    |
|           18 |     2136 | 2024-04-17 | KZG                | W   | 0.592      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |     7.90 | gump, pain, Sliimey, supar, tucks    |
|           17 |     2304 | 2024-04-10 | DXA                | W   | 0.545      | 0.333        | 0.004 (0.001)    | 0.187 (0.034)    | 0 (0.000) |     7.19 | Forleks, gump, Sliimey, supar, tucks |
|           16 |     2311 | 2024-04-10 | DXA                | W   | 0.545      | 0.333        | 0.004 (0.001)    | 0.187 (0.034)    | 0 (0.000) |     7.54 | Forleks, gump, Sliimey, supar, tucks |
|           15 |     2536 | 2024-04-03 | Canon Event        | W   | 0.498      | -            | -                | -                | -         |     3.45 | Forleks, gump, Sliimey, supar, tucks |
|           14 |     2540 | 2024-04-03 | Canon Event        | W   | 0.498      | -            | -                | -                | -         |     3.56 | Forleks, gump, Sliimey, supar, tucks |
|           13 |     2661 | 2024-03-27 | Bad News Kangaroos | W   | 0.452      | 0.333        | 0.028 (0.004)    | 0.134 (0.020)    | -         |     9.68 | Forleks, gump, Sliimey, supar, tucks |
|           12 |     2668 | 2024-03-27 | Bad News Kangaroos | L   | 0.452      | -            | -                | -                | -         |    -4.60 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     3108 | 2024-03-06 | Rooster            | L   | 0.312      | -            | -                | -                | -         |    -3.34 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     3115 | 2024-03-06 | Rooster            | L   | 0.312      | -            | -                | -                | -         |    -3.43 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     3410 | 2024-02-21 | KZG                | W   | 0.219      | 0.333        | 0.009 (0.001)    | -                | -         |     3.44 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     3417 | 2024-02-21 | KZG                | W   | 0.218      | 0.333        | 0.009 (0.001)    | -                | -         |     3.50 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     3439 | 2024-02-20 | Vantage            | L   | 0.212      | -            | -                | -                | -         |    -3.65 | gump, Rickeh, Sliimey, supar, tucks  |
|            6 |     3444 | 2024-02-20 | RKON               | W   | 0.211      | -            | -                | -                | -         |     1.62 | gump, Rickeh, Sliimey, supar, tucks  |
|            5 |     3468 | 2024-02-19 | FlyQuest           | L   | 0.204      | -            | -                | -                | -         |    -0.21 | gump, Rickeh, Sliimey, supar, tucks  |
|            4 |     3484 | 2024-02-18 | Vantage            | W   | 0.198      | -            | -                | -                | -         |     2.87 | gump, Rickeh, Sliimey, supar, tucks  |
|            3 |     3488 | 2024-02-18 | gfg123321          | W   | 0.198      | -            | -                | -                | -         |     0.91 | gump, Rickeh, Sliimey, supar, tucks  |
|            2 |     3611 | 2024-02-14 | KZG                | L   | 0.171      | -            | -                | -                | -         |    -2.60 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     3634 | 2024-02-13 | DEMESIS            | W   | 0.165      | -            | -                | -                | -         |     0.76 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,322.46)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
