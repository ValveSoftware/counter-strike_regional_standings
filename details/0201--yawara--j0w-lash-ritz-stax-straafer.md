### Roster Details<br />
Team Name: Yawara<br />
Roster: j0w, lash, ritz, stAx, Straafer<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [201](../standings_global.md)<br />
Regional Rank: [54]( ../standings_americas.md)<br />
Final Rank Value:  476.0<br />
<br />
Final Rank Value (476.0) = Starting Rank Value (513.5) + Head To Head Adjustments (-37.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.5
- 400 + ( ( 0.054 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 513.5


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
|           10 |      789 | 2024-05-31 | 9z Academy | L   | 0.926      | -            | -                | -                | -         |   -18.25 | j0w, lash, ritz, stAx, Straafer |
|            9 |      826 | 2024-05-29 | Vikings KR | L   | 0.915      | -            | -                | -                | -         |    -4.88 | j0w, lash, perez, ritz, stAx    |
|            8 |      853 | 2024-05-28 | W7M        | L   | 0.908      | -            | -                | -                | -         |    -5.67 | j0w, lash, perez, ritz, stAx    |
|            7 |     1197 | 2024-05-16 | Case       | L   | 0.826      | -            | -                | -                | -         |    -3.06 | j0w, lash, perez, ritz, stAx    |
|            6 |     1326 | 2024-05-13 | Galorys    | L   | 0.807      | -            | -                | -                | -         |    -2.65 | j0w, lash, perez, ritz, stAx    |
|            5 |     1450 | 2024-05-08 | Intense    | L   | 0.773      | -            | -                | -                | -         |   -10.64 | j0w, lash, perez, ritz, stAx    |
|            4 |     1479 | 2024-05-06 | Solid      | L   | 0.761      | -            | -                | -                | -         |    -2.72 | j0w, lash, perez, ritz, stAx    |
|            3 |     2739 | 2024-03-13 | Sharks     | L   | 0.402      | -            | -                | -                | -         |    -0.85 | j0w, lash, leleo, perez, stAx   |
|            2 |     2755 | 2024-03-13 | Case       | W   | 0.400      | 0.143        | 0.033 (0.002)    | 0.582 (0.033)    | 0 (0.000) |    11.23 | j0w, lash, leleo, perez, stAx   |
|            1 |     3419 | 2024-02-14 | Imperial   | L   | 0.215      | -            | -                | -                | -         |    -0.03 | j0w, lash, leleo, perez, stAx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
