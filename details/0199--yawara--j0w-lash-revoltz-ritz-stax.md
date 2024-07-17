### Roster Details<br />
Team Name: Yawara<br />
Roster: j0w, lash, revoltz, ritz, stAx<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [199](../standings_global.md)<br />
Regional Rank: [55]( ../standings_americas.md)<br />
Final Rank Value:  477.7<br />
<br />
Final Rank Value (477.7) = Starting Rank Value (514.7) + Head To Head Adjustments (-37.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.7
- 400 + ( ( 0.053 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 514.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |        4 | 2024-07-17 | KRÜ        | L   | 1.000      | -            | -                | -                | -         |    -2.83 | j0w, lash, revoltz, ritz, stAx  |
|           11 |      107 | 2024-07-15 | inSanitY   | L   | 1.000      | -            | -                | -                | -         |    -1.01 | j0w, lash, revoltz, ritz, stAx  |
|           10 |      953 | 2024-05-31 | 9z Academy | L   | 0.887      | -            | -                | -                | -         |   -17.64 | j0w, lash, ritz, stAx, Straafer |
|            9 |      990 | 2024-05-29 | Vikings KR | L   | 0.876      | -            | -                | -                | -         |    -4.16 | j0w, lash, perez, ritz, stAx    |
|            8 |     1017 | 2024-05-28 | W7M        | L   | 0.868      | -            | -                | -                | -         |    -4.70 | j0w, lash, perez, ritz, stAx    |
|            7 |     1361 | 2024-05-16 | Case       | L   | 0.787      | -            | -                | -                | -         |    -2.34 | j0w, lash, perez, ritz, stAx    |
|            6 |     1490 | 2024-05-13 | Galorys    | L   | 0.767      | -            | -                | -                | -         |    -2.25 | j0w, lash, perez, ritz, stAx    |
|            5 |     1614 | 2024-05-08 | Intense    | L   | 0.733      | -            | -                | -                | -         |    -9.49 | j0w, lash, perez, ritz, stAx    |
|            4 |     1643 | 2024-05-06 | Solid      | L   | 0.722      | -            | -                | -                | -         |    -2.29 | j0w, lash, perez, ritz, stAx    |
|            3 |     2903 | 2024-03-13 | Sharks     | L   | 0.362      | -            | -                | -                | -         |    -0.73 | j0w, lash, leleo, perez, stAx   |
|            2 |     2919 | 2024-03-13 | Case       | W   | 0.361      | 0.143        | 0.034 (0.002)    | 0.697 (0.036)    | 0 (0.000) |    10.45 | j0w, lash, leleo, perez, stAx   |
|            1 |     3583 | 2024-02-14 | Imperial   | L   | 0.175      | -            | -                | -                | -         |    -0.02 | j0w, lash, leleo, perez, stAx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
