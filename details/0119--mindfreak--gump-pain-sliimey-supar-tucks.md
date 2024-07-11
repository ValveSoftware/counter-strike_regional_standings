### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [119](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  814.6<br />
<br />
Final Rank Value (814.6) = Starting Rank Value (722.2) + Head To Head Adjustments (92.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.2
- 400 + ( ( 0.153 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 722.2


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
|           30 |      471 | 2024-06-08 | FlyQuest           | L   | 0.978      | -            | -                | -                | -         |    -1.51 | gump, pain, Sliimey, supar, tucks    |
|           29 |      528 | 2024-06-07 | Bad News Kangaroos | W   | 0.971      | 0.333        | 0.029 (0.009)    | 0.196 (0.063)    | 0 (0.000) |    17.79 | gump, pain, Sliimey, supar, tucks    |
|           28 |      592 | 2024-06-06 | Vantage            | W   | 0.965      | 0.333        | 0.003 (0.001)    | 0.127 (0.041)    | 0 (0.000) |    10.11 | gump, pain, Sliimey, supar, tucks    |
|           27 |     1004 | 2024-05-22 | FlyQuest           | L   | 0.864      | -            | -                | -                | -         |    -0.93 | gump, pain, Sliimey, supar, tucks    |
|           26 |     1008 | 2024-05-22 | FlyQuest           | L   | 0.864      | -            | -                | -                | -         |    -0.94 | gump, pain, Sliimey, supar, tucks    |
|           25 |     1454 | 2024-05-08 | Arcade             | W   | 0.771      | 0.333        | 0.005 (0.001)    | 0.123 (0.032)    | 0 (0.000) |     8.00 | gump, pain, Sliimey, supar, tucks    |
|           24 |     1456 | 2024-05-08 | Arcade             | W   | 0.771      | 0.333        | 0.005 (0.001)    | 0.123 (0.032)    | 0 (0.000) |     8.50 | gump, pain, Sliimey, supar, tucks    |
|           23 |     1786 | 2024-04-22 | Vantage            | W   | 0.665      | 0.333        | -                | 0.127 (0.028)    | 0 (0.000) |     8.30 | gump, pain, Sliimey, supar, tucks    |
|           22 |     1789 | 2024-04-22 | Vantage            | W   | 0.665      | 0.333        | -                | 0.127 (0.028)    | 0 (0.000) |     8.79 | gump, pain, Sliimey, supar, tucks    |
|           21 |     1886 | 2024-04-19 | Bad News Kangaroos | L   | 0.645      | -            | -                | -                | -         |    -7.64 | gump, pain, Sliimey, supar, tucks    |
|           20 |     1890 | 2024-04-19 | FlyQuest           | L   | 0.644      | -            | -                | -                | -         |    -0.74 | gump, pain, Sliimey, supar, tucks    |
|           19 |     1942 | 2024-04-18 | DXA                | W   | 0.638      | 0.143        | -                | 0.156 (0.014)    | 0 (0.000) |     7.45 | gump, pain, Sliimey, supar, tucks    |
|           18 |     1972 | 2024-04-17 | KZG                | W   | 0.631      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |     8.05 | gump, pain, Sliimey, supar, tucks    |
|           17 |     2140 | 2024-04-10 | DXA                | W   | 0.585      | 0.333        | 0.004 (0.001)    | 0.156 (0.030)    | 0 (0.000) |     7.31 | Forleks, gump, Sliimey, supar, tucks |
|           16 |     2147 | 2024-04-10 | DXA                | W   | 0.584      | 0.333        | 0.004 (0.001)    | 0.156 (0.030)    | 0 (0.000) |     7.68 | Forleks, gump, Sliimey, supar, tucks |
|           15 |     2372 | 2024-04-03 | Canon Event        | W   | 0.538      | -            | -                | -                | -         |     3.54 | Forleks, gump, Sliimey, supar, tucks |
|           14 |     2376 | 2024-04-03 | Canon Event        | W   | 0.538      | -            | -                | -                | -         |     3.65 | Forleks, gump, Sliimey, supar, tucks |
|           13 |     2497 | 2024-03-27 | Bad News Kangaroos | W   | 0.491      | 0.333        | 0.029 (0.005)    | 0.196 (0.032)    | -         |    10.61 | Forleks, gump, Sliimey, supar, tucks |
|           12 |     2504 | 2024-03-27 | Bad News Kangaroos | L   | 0.491      | -            | -                | -                | -         |    -4.91 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     2944 | 2024-03-06 | Rooster            | L   | 0.352      | -            | -                | -                | -         |    -3.89 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     2951 | 2024-03-06 | Rooster            | L   | 0.351      | -            | -                | -                | -         |    -4.00 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     3246 | 2024-02-21 | KZG                | W   | 0.258      | 0.333        | 0.009 (0.001)    | -                | -         |     3.94 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     3253 | 2024-02-21 | KZG                | W   | 0.258      | 0.333        | 0.009 (0.001)    | -                | -         |     4.02 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     3275 | 2024-02-20 | Vantage            | L   | 0.251      | -            | -                | -                | -         |    -4.46 | gump, Rickeh, Sliimey, supar, tucks  |
|            6 |     3280 | 2024-02-20 | RKON               | W   | 0.251      | -            | -                | -                | -         |     1.86 | gump, Rickeh, Sliimey, supar, tucks  |
|            5 |     3304 | 2024-02-19 | FlyQuest           | L   | 0.244      | -            | -                | -                | -         |    -0.24 | gump, Rickeh, Sliimey, supar, tucks  |
|            4 |     3320 | 2024-02-18 | Vantage            | W   | 0.238      | -            | -                | -                | -         |     3.33 | gump, Rickeh, Sliimey, supar, tucks  |
|            3 |     3324 | 2024-02-18 | gfg123321          | W   | 0.237      | -            | -                | -                | -         |     1.07 | gump, Rickeh, Sliimey, supar, tucks  |
|            2 |     3447 | 2024-02-14 | KZG                | L   | 0.211      | -            | -                | -                | -         |    -3.29 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     3470 | 2024-02-13 | DEMESIS            | W   | 0.204      | -            | -                | -                | -         |     0.91 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,377.91)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
