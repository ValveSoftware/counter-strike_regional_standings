### Roster Details<br />
Team Name: Limitless<br />
Roster: DJF, Seb, Tender, wiz, Wolffe<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  779.3<br />
<br />
Final Rank Value (779.3) = Starting Rank Value (798.4) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.4
- 400 + ( ( 0.186 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 798.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |       24 | 2024-07-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -5.76 | DJF, Seb, Tender, wiz, Wolffe |
|           19 |       28 | 2024-07-16 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -6.08 | DJF, Seb, Tender, wiz, Wolffe |
|           18 |       75 | 2024-07-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.23 | DJF, Seb, Tender, wiz, Wolffe |
|           17 |       78 | 2024-07-15 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.70 | DJF, Seb, Tender, wiz, Wolffe |
|           16 |      419 | 2024-06-13 | E-Xolos LAZER    | L   | 0.974      | -            | -                | -                | -         |   -14.93 | Lake, micro, Seb, Tender, wiz |
|           15 |      774 | 2024-06-05 | LAG              | L   | 0.922      | -            | -                | -                | -         |   -11.34 | Lake, micro, Seb, Tender, wiz |
|           14 |      817 | 2024-06-04 | LAG              | L   | 0.916      | -            | -                | -                | -         |   -12.20 | Lake, micro, Seb, Tender, wiz |
|           13 |     1128 | 2024-05-22 | MIGHT            | W   | 0.829      | 0.477        | 0.000 (0.000)    | 0.082 (0.032)    | 0 (0.000) |     4.16 | Lake, micro, Seb, Tender, wiz |
|           12 |     1135 | 2024-05-22 | MIGHT            | W   | 0.829      | 0.477        | 0.000 (0.000)    | 0.082 (0.032)    | 0 (0.000) |     4.33 | Lake, micro, Seb, Tender, wiz |
|           11 |     1181 | 2024-05-21 | Legacy           | L   | 0.822      | -            | -                | -                | -         |    -4.63 | Lake, micro, Seb, Tender, wiz |
|           10 |     1185 | 2024-05-21 | Wildcard         | L   | 0.822      | -            | -                | -                | -         |    -7.38 | Lake, micro, Seb, Tender, wiz |
|            9 |     1191 | 2024-05-21 | Wildcard         | L   | 0.821      | -            | -                | -                | -         |    -7.84 | Lake, micro, Seb, Tender, wiz |
|            8 |     1215 | 2024-05-20 | BOSS             | W   | 0.816      | 0.477        | 0.022 (0.008)    | 0.345 (0.134)    | 0 (0.000) |    12.45 | Lake, micro, Seb, Tender, wiz |
|            7 |     1219 | 2024-05-20 | BOSS             | L   | 0.816      | -            | -                | -                | -         |   -13.46 | Lake, micro, Seb, Tender, wiz |
|            6 |     1341 | 2024-05-16 | Take Flyte       | W   | 0.789      | 0.477        | 0.003 (0.001)    | 0.245 (0.092)    | 0 (0.000) |     8.22 | Lake, micro, Seb, Tender, wiz |
|            5 |     1342 | 2024-05-16 | Take Flyte       | W   | 0.789      | 0.477        | 0.003 (0.001)    | 0.245 (0.092)    | 0 (0.000) |     8.76 | Lake, micro, Seb, Tender, wiz |
|            4 |     1379 | 2024-05-15 | Nouns            | W   | 0.783      | 0.477        | 0.087 (0.033)    | 0.566 (0.211)    | 0 (0.000) |    17.14 | Lake, micro, Seb, Tender, wiz |
|            3 |     1384 | 2024-05-15 | Nouns            | W   | 0.783      | 0.477        | 0.087 (0.033)    | 0.566 (0.211)    | 0 (0.000) |    18.13 | Lake, micro, Seb, Tender, wiz |
|            2 |     1435 | 2024-05-14 | LAG              | L   | 0.776      | -            | -                | -                | -         |    -9.29 | Lake, micro, Seb, Tender, wiz |
|            1 |     1442 | 2024-05-14 | LAG              | W   | 0.776      | 0.477        | 0.020 (0.008)    | 0.417 (0.154)    | 0 (0.000) |    15.53 | Lake, micro, Seb, Tender, wiz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,899.03)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
