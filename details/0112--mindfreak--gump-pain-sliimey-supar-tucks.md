### Roster Details<br />
Team Name: Mindfreak<br />
Roster: gump, pain, Sliimey, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [112](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  825.2<br />
<br />
Final Rank Value (825.2) = Starting Rank Value (718.8) + Head To Head Adjustments (106.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.8
- 400 + ( ( 0.157 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 718.8


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
|           30 |      335 | 2024-06-08 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -1.32 | gump, pain, Sliimey, supar, tucks    |
|           29 |      392 | 2024-06-07 | Bad News Kangaroos | W   | 1.000      | 0.333        | 0.031 (0.010)    | 0.225 (0.075)    | 0 (0.000) |    18.57 | gump, pain, Sliimey, supar, tucks    |
|           28 |      456 | 2024-06-06 | Vantage            | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.166 (0.055)    | 0 (0.000) |     9.78 | gump, pain, Sliimey, supar, tucks    |
|           27 |      870 | 2024-05-22 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -0.89 | gump, pain, Sliimey, supar, tucks    |
|           26 |      874 | 2024-05-22 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |    -0.90 | gump, pain, Sliimey, supar, tucks    |
|           25 |     1320 | 2024-05-08 | Arcade             | W   | 0.927      | 0.333        | 0.005 (0.002)    | 0.157 (0.048)    | 0 (0.000) |     9.00 | gump, pain, Sliimey, supar, tucks    |
|           24 |     1322 | 2024-05-08 | Arcade             | W   | 0.927      | 0.333        | 0.005 (0.002)    | 0.157 (0.048)    | 0 (0.000) |     9.66 | gump, pain, Sliimey, supar, tucks    |
|           23 |     1652 | 2024-04-22 | Vantage            | W   | 0.821      | 0.333        | -                | 0.166 (0.045)    | 0 (0.000) |     9.75 | gump, pain, Sliimey, supar, tucks    |
|           22 |     1655 | 2024-04-22 | Vantage            | W   | 0.820      | 0.333        | -                | 0.166 (0.045)    | 0 (0.000) |    10.45 | gump, pain, Sliimey, supar, tucks    |
|           21 |     1752 | 2024-04-19 | Bad News Kangaroos | L   | 0.801      | -            | -                | -                | -         |    -9.16 | gump, pain, Sliimey, supar, tucks    |
|           20 |     1756 | 2024-04-19 | FlyQuest           | L   | 0.799      | -            | -                | -                | -         |    -0.75 | gump, pain, Sliimey, supar, tucks    |
|           19 |     1808 | 2024-04-18 | DXA                | W   | 0.793      | 0.143        | -                | 0.179 (0.020)    | 0 (0.000) |     8.55 | gump, pain, Sliimey, supar, tucks    |
|           18 |     1838 | 2024-04-17 | KZG                | W   | 0.787      | 0.143        | 0.009 (0.001)    | -                | 0 (0.000) |     9.20 | gump, pain, Sliimey, supar, tucks    |
|           17 |     2006 | 2024-04-10 | DXA                | W   | 0.740      | 0.333        | 0.004 (0.001)    | 0.179 (0.044)    | 0 (0.000) |     8.64 | Forleks, gump, Sliimey, supar, tucks |
|           16 |     2013 | 2024-04-10 | DXA                | W   | 0.740      | 0.333        | 0.004 (0.001)    | 0.179 (0.044)    | 0 (0.000) |     9.20 | Forleks, gump, Sliimey, supar, tucks |
|           15 |     2238 | 2024-04-03 | Canon Event        | W   | 0.694      | -            | -                | -                | -         |     4.20 | Forleks, gump, Sliimey, supar, tucks |
|           14 |     2242 | 2024-04-03 | Canon Event        | W   | 0.693      | -            | -                | -                | -         |     4.37 | Forleks, gump, Sliimey, supar, tucks |
|           13 |     2364 | 2024-03-27 | Bad News Kangaroos | W   | 0.647      | 0.333        | 0.031 (0.007)    | 0.225 (0.049)    | -         |    14.45 | Forleks, gump, Sliimey, supar, tucks |
|           12 |     2371 | 2024-03-27 | Bad News Kangaroos | L   | 0.647      | -            | -                | -                | -         |    -5.90 | Forleks, gump, Sliimey, supar, tucks |
|           11 |     2811 | 2024-03-06 | Rooster            | L   | 0.507      | -            | -                | -                | -         |    -5.54 | Forleks, gump, Sliimey, supar, tucks |
|           10 |     2818 | 2024-03-06 | Rooster            | L   | 0.507      | -            | -                | -                | -         |    -5.77 | Forleks, gump, Sliimey, supar, tucks |
|            9 |     3113 | 2024-02-21 | KZG                | W   | 0.414      | 0.333        | 0.009 (0.001)    | -                | -         |     6.11 | Forleks, gump, Sliimey, supar, tucks |
|            8 |     3120 | 2024-02-21 | KZG                | W   | 0.414      | 0.333        | 0.009 (0.001)    | -                | -         |     6.34 | Forleks, gump, Sliimey, supar, tucks |
|            7 |     3142 | 2024-02-20 | Vantage            | L   | 0.407      | -            | -                | -                | -         |    -7.38 | gump, Rickeh, Sliimey, supar, tucks  |
|            6 |     3147 | 2024-02-20 | RKON               | W   | 0.407      | -            | -                | -                | -         |     3.01 | gump, Rickeh, Sliimey, supar, tucks  |
|            5 |     3171 | 2024-02-19 | FlyQuest           | L   | 0.400      | -            | -                | -                | -         |    -0.31 | gump, Rickeh, Sliimey, supar, tucks  |
|            4 |     3187 | 2024-02-18 | Vantage            | W   | 0.394      | -            | -                | -                | -         |     5.37 | gump, Rickeh, Sliimey, supar, tucks  |
|            3 |     3191 | 2024-02-18 | gfg123321          | W   | 0.393      | -            | -                | -                | -         |     1.81 | gump, Rickeh, Sliimey, supar, tucks  |
|            2 |     3314 | 2024-02-14 | KZG                | L   | 0.366      | -            | -                | -                | -         |    -5.72 | deStiny, gump, Sliimey, supar, tucks |
|            1 |     3337 | 2024-02-13 | DEMESIS            | W   | 0.360      | -            | -                | -                | -         |     1.63 | deStiny, gump, Sliimey, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,400.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
