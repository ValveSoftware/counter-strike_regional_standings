### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Rickeh, Texta, tucks<br />
Global Rank: [132](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
<br />
Final Rank Value:  764.6<br />
<br />
Final Rank Value (764.6) = Starting Rank Value (685.7) + Head To Head Adjustments (78.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.7
- 400 + ( ( 0.138 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 685.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       30 | 2024-07-31 | DXA                | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.228 (0.033)    | 0 (0.000) |    10.73 | gump, pain, Rickeh, Texta, tucks    |
|           25 |       75 | 2024-07-30 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.48 | gump, pain, Rickeh, Texta, tucks    |
|           24 |      295 | 2024-07-23 | Arcade             | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.139 (0.046)    | 0 (0.000) |    10.09 | gump, pain, Rickeh, Texta, tucks    |
|           23 |      300 | 2024-07-23 | Arcade             | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.139 (0.046)    | 0 (0.000) |    10.91 | gump, pain, Rickeh, Texta, tucks    |
|           22 |      480 | 2024-07-18 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.21 | gump, pain, Sliimey, supar, tucks   |
|           21 |      482 | 2024-07-18 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.39 | gump, pain, Sliimey, supar, tucks   |
|           20 |      598 | 2024-07-16 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -9.41 | gump, pain, Sliimey, supar, tucks   |
|           19 |      601 | 2024-07-16 | Rooster            | L   | 1.000      | -            | -                | -                | -         |   -10.15 | gump, pain, Sliimey, supar, tucks   |
|           18 |     1165 | 2024-06-08 | FlyQuest           | L   | 0.843      | -            | -                | -                | -         |    -1.89 | gump, pain, Sliimey, supar, tucks   |
|           17 |     1222 | 2024-06-07 | Bad News Kangaroos | W   | 0.837      | 0.333        | 0.003 (0.001)    | 0.143 (0.040)    | 0 (0.000) |    12.02 | gump, pain, Sliimey, supar, tucks   |
|           16 |     1286 | 2024-06-06 | Vantage            | W   | 0.831      | 0.333        | 0.002 (0.001)    | -                | 0 (0.000) |     6.74 | gump, pain, Sliimey, supar, tucks   |
|           15 |     1698 | 2024-05-22 | FlyQuest           | L   | 0.730      | -            | -                | -                | -         |    -1.25 | gump, pain, Sliimey, supar, tucks   |
|           14 |     1702 | 2024-05-22 | FlyQuest           | L   | 0.730      | -            | -                | -                | -         |    -1.26 | gump, pain, Sliimey, supar, tucks   |
|           13 |     2148 | 2024-05-08 | Arcade             | W   | 0.637      | 0.333        | 0.003 (0.001)    | 0.139 (0.029)    | 0 (0.000) |     7.93 | gump, pain, Sliimey, supar, tucks   |
|           12 |     2150 | 2024-05-08 | Arcade             | W   | 0.637      | 0.333        | 0.003 (0.001)    | 0.139 (0.029)    | 0 (0.000) |     8.38 | gump, pain, Sliimey, supar, tucks   |
|           11 |     2480 | 2024-04-22 | Vantage            | W   | 0.531      | 0.333        | 0.002 (0.000)    | 0.076 (0.013)    | -         |     7.52 | gump, pain, Sliimey, supar, tucks   |
|           10 |     2483 | 2024-04-22 | Vantage            | W   | 0.530      | 0.333        | 0.002 (0.000)    | 0.076 (0.013)    | -         |     7.87 | gump, pain, Sliimey, supar, tucks   |
|            9 |     2580 | 2024-04-19 | Bad News Kangaroos | L   | 0.511      | -            | -                | -                | -         |    -6.17 | gump, pain, Sliimey, supar, tucks   |
|            8 |     2584 | 2024-04-19 | FlyQuest           | L   | 0.510      | -            | -                | -                | -         |    -0.94 | gump, pain, Sliimey, supar, tucks   |
|            7 |     2636 | 2024-04-18 | DXA                | W   | 0.504      | 0.143        | -                | 0.228 (0.016)    | -         |     7.17 | gump, pain, Sliimey, supar, tucks   |
|            6 |     2666 | 2024-04-17 | KZG                | W   | 0.497      | 0.143        | 0.006 (0.000)    | 0.113 (0.008)    | -         |     7.74 | gump, pain, Sliimey, supar, tucks   |
|            5 |     3969 | 2024-02-20 | Vantage            | L   | 0.117      | -            | -                | -                | -         |    -2.01 | gump, Rickeh, Sliimey, supar, tucks |
|            4 |     3974 | 2024-02-20 | RKON               | W   | 0.117      | -            | -                | -                | -         |     0.97 | gump, Rickeh, Sliimey, supar, tucks |
|            3 |     3998 | 2024-02-19 | FlyQuest           | L   | 0.110      | -            | -                | -                | -         |    -0.20 | gump, Rickeh, Sliimey, supar, tucks |
|            2 |     4014 | 2024-02-18 | Vantage            | W   | 0.104      | -            | -                | -                | -         |     1.51 | gump, Rickeh, Sliimey, supar, tucks |
|            1 |     4018 | 2024-02-18 | gfg123321          | W   | 0.103      | -            | -                | -                | -         |     0.55 | gump, Rickeh, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,190.14)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
