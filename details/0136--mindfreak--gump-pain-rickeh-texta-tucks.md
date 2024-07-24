### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Rickeh, Texta, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [136](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  763.2<br />
<br />
Final Rank Value (763.2) = Starting Rank Value (690.2) + Head To Head Adjustments (73.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.2
- 400 + ( ( 0.143 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 690.2


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
|           24 |       53 | 2024-07-23 | Arcade             | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.159 (0.053)    | 0 (0.000) |     9.76 | gump, pain, Rickeh, Texta, tucks    |
|           23 |       58 | 2024-07-23 | Arcade             | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.159 (0.053)    | 0 (0.000) |    10.54 | gump, pain, Rickeh, Texta, tucks    |
|           22 |      238 | 2024-07-18 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.94 | gump, pain, Sliimey, supar, tucks   |
|           21 |      240 | 2024-07-18 | MANTRA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.10 | gump, pain, Sliimey, supar, tucks   |
|           20 |      356 | 2024-07-16 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -9.27 | gump, pain, Sliimey, supar, tucks   |
|           19 |      359 | 2024-07-16 | Rooster            | L   | 1.000      | -            | -                | -                | -         |    -9.99 | gump, pain, Sliimey, supar, tucks   |
|           18 |      923 | 2024-06-08 | FlyQuest           | L   | 0.891      | -            | -                | -                | -         |    -1.65 | gump, pain, Sliimey, supar, tucks   |
|           17 |      980 | 2024-06-07 | Bad News Kangaroos | W   | 0.884      | 0.333        | 0.003 (0.001)    | 0.154 (0.045)    | 0 (0.000) |    12.40 | gump, pain, Sliimey, supar, tucks   |
|           16 |     1044 | 2024-06-06 | Vantage            | W   | 0.878      | 0.333        | 0.003 (0.001)    | 0.096 (0.028)    | 0 (0.000) |    10.53 | gump, pain, Sliimey, supar, tucks   |
|           15 |     1456 | 2024-05-22 | FlyQuest           | L   | 0.778      | -            | -                | -                | -         |    -1.05 | gump, pain, Sliimey, supar, tucks   |
|           14 |     1460 | 2024-05-22 | FlyQuest           | L   | 0.777      | -            | -                | -                | -         |    -1.06 | gump, pain, Sliimey, supar, tucks   |
|           13 |     1906 | 2024-05-08 | Arcade             | W   | 0.684      | 0.333        | 0.004 (0.001)    | 0.159 (0.036)    | 0 (0.000) |     8.42 | gump, pain, Sliimey, supar, tucks   |
|           12 |     1908 | 2024-05-08 | Arcade             | W   | 0.684      | 0.333        | 0.004 (0.001)    | 0.159 (0.036)    | 0 (0.000) |     8.93 | gump, pain, Sliimey, supar, tucks   |
|           11 |     2238 | 2024-04-22 | Vantage            | W   | 0.578      | 0.333        | 0.003 (0.001)    | 0.096 (0.018)    | 0 (0.000) |     8.15 | gump, pain, Sliimey, supar, tucks   |
|           10 |     2241 | 2024-04-22 | Vantage            | W   | 0.578      | 0.333        | 0.003 (0.001)    | 0.096 (0.018)    | 0 (0.000) |     8.57 | gump, pain, Sliimey, supar, tucks   |
|            9 |     2338 | 2024-04-19 | Bad News Kangaroos | L   | 0.558      | -            | -                | -                | -         |    -6.50 | gump, pain, Sliimey, supar, tucks   |
|            8 |     2342 | 2024-04-19 | FlyQuest           | L   | 0.557      | -            | -                | -                | -         |    -0.79 | gump, pain, Sliimey, supar, tucks   |
|            7 |     2394 | 2024-04-18 | DXA                | W   | 0.551      | 0.143        | 0.003 (0.000)    | 0.217 (0.017)    | -         |     7.75 | gump, pain, Sliimey, supar, tucks   |
|            6 |     2424 | 2024-04-17 | KZG                | W   | 0.545      | 0.143        | 0.007 (0.001)    | 0.130 (0.010)    | -         |     8.36 | gump, pain, Sliimey, supar, tucks   |
|            5 |     3727 | 2024-02-20 | Vantage            | L   | 0.165      | -            | -                | -                | -         |    -2.83 | gump, Rickeh, Sliimey, supar, tucks |
|            4 |     3732 | 2024-02-20 | RKON               | W   | 0.164      | -            | -                | -                | -         |     1.34 | gump, Rickeh, Sliimey, supar, tucks |
|            3 |     3756 | 2024-02-19 | FlyQuest           | L   | 0.157      | -            | -                | -                | -         |    -0.22 | gump, Rickeh, Sliimey, supar, tucks |
|            2 |     3772 | 2024-02-18 | Vantage            | W   | 0.151      | -            | -                | -                | -         |     2.19 | gump, Rickeh, Sliimey, supar, tucks |
|            1 |     3776 | 2024-02-18 | The Art of War     | W   | 0.151      | -            | -                | -                | -         |     1.40 | gump, Rickeh, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,256.34)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
