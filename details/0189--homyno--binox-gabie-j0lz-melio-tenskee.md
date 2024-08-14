### Roster Details<br />
Team Name: Homyno<br />
Roster: BiNoX, Gabie, J0LZ, Melio, TENSKEE<br />
Global Rank: [189](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
<br />
Final Rank Value:  620.5<br />
<br />
Final Rank Value (620.5) = Starting Rank Value (683.2) + Head To Head Adjustments (-62.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.2
- 400 + ( ( 0.144 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 683.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      102 | 2024-08-11 | InControl      | L   | 1.000      | -            | -                | -                | -         |   -19.60 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           19 |      127 | 2024-08-10 | Vibe           | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.038 (0.014)    | 0 (0.000) |     6.54 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           18 |      265 | 2024-08-06 | DETONATE       | L   | 1.000      | -            | -                | -                | -         |   -19.70 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           17 |      322 | 2024-08-04 | FLUFFY AIMERS  | L   | 1.000      | -            | -                | -                | -         |   -13.29 | BiNoX, J0LZ, Melio, Sup3rant, TENSKEE |
|           16 |      623 | 2024-07-27 | Revenge Nation | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.131 (0.049)    | 0 (0.000) |    17.52 | BiNoX, Gabie, J0LZ, Melio, TENSKEE    |
|           15 |     1346 | 2024-06-15 | E-Xolos LAZER  | L   | 0.802      | -            | -                | -                | -         |    -8.57 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           14 |     1381 | 2024-06-14 | Akimbo         | L   | 0.795      | -            | -                | -                | -         |    -9.25 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           13 |     1424 | 2024-06-13 | DETONATE       | W   | 0.788      | 0.143        | 0.000 (0.000)    | 0.145 (0.016)    | 0 (0.000) |     8.07 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           12 |     1455 | 2024-06-12 | E-Xolos LAZER  | L   | 0.782      | -            | -                | -                | -         |    -8.79 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           11 |     1457 | 2024-06-12 | DETONATE       | W   | 0.781      | 0.143        | 0.000 (0.000)    | 0.145 (0.016)    | 0 (0.000) |     7.77 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|           10 |     1478 | 2024-06-11 | Final Form     | L   | 0.774      | -            | -                | -                | -         |   -13.57 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            9 |     1507 | 2024-06-10 | E-Xolos LAZER  | L   | 0.766      | -            | -                | -                | -         |    -9.61 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            8 |     1595 | 2024-06-08 | LAG            | L   | 0.755      | -            | -                | -                | -         |    -8.04 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            7 |     1650 | 2024-06-07 | E-Xolos LAZER  | L   | 0.748      | -            | -                | -                | -         |   -10.44 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            6 |     1717 | 2024-06-06 | Limitless      | W   | 0.741      | 0.371        | 0.001 (0.000)    | 0.142 (0.039)    | 0 (0.000) |     8.68 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            5 |     1832 | 2024-06-04 | Wildcard       | L   | 0.728      | -            | -                | -                | -         |    -4.56 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            4 |     1842 | 2024-06-04 | TSM Shimmer    | W   | 0.726      | 0.371        | 0.019 (0.005)    | 0.176 (0.047)    | 0 (0.000) |    11.64 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            3 |     3711 | 2024-03-23 | Revenge Nation | L   | 0.242      | -            | -                | -                | -         |    -3.65 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            2 |     3738 | 2024-03-21 | Final Form     | W   | 0.229      | 0.359        | 0.002 (0.000)    | 0.059 (0.005)    | 0 (0.000) |     3.13 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |
|            1 |     3787 | 2024-03-19 | Akimbo         | W   | 0.215      | 0.359        | 0.002 (0.000)    | 0.065 (0.005)    | 0 (0.000) |     3.01 | Gabie, J0LZ, Melio, TENSKEE, YuZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,999.39)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.768 | $1,250.00      | $960.52         |
| 2024-03-23 |      0.242 | $4,300.00      | $1,038.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
